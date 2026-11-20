import { config } from '@/config';
import type { Lang } from '@/i18n/translations';

export interface OrderSubmission {
  fullName: string;
  phone: string;
  lang: Lang;
  product: string;
  priceDzd: number;
  createdAt: string;
}

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    ttq?: {
      track?: (event: string, payload?: Record<string, unknown>) => void;
    };
  }
}

/**
 * Sends every submitted order to the Vercel `/api/orders` serverless function,
 * which forwards it in real time to your Google Sheet (avoiding browser CORS issues).
 * Optionally also posts to `config.orderWebhookUrl` if set.
 */
export async function sendOrderToWebhook(orderData: OrderSubmission): Promise<void> {
  const endpoints = ['/api/orders'];
  if (config.orderWebhookUrl) {
    endpoints.push(config.orderWebhookUrl);
  }

  await Promise.allSettled(
    endpoints.map(async (url) => {
      try {
        await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(orderData),
          keepalive: true,
        });
      } catch (err) {
        console.error(`Order webhook error (${url}):`, err);
      }
    })
  );
}

/**
 * Safely fires Meta Pixel (`fbq`) and TikTok Pixel (`ttq`) lead events if installed.
 */
export function trackOrderLead(orderData: OrderSubmission): void {
  try {
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'Lead', {
        content_name: orderData.product,
        value: orderData.priceDzd,
        currency: 'DZD',
      });
    }
  } catch {
    /* ignore pixel errors */
  }

  try {
    if (window.ttq && typeof window.ttq.track === 'function') {
      window.ttq.track('SubmitForm', {
        content_name: orderData.product,
        value: orderData.priceDzd,
        currency: 'DZD',
      });
    }
  } catch {
    /* ignore pixel errors */
  }
}
