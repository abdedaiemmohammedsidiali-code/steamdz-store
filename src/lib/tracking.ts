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
 * Optional webhook hook ready for n8n, Google Sheets Apps Script, or Supabase Edge Functions.
 * Set `config.orderWebhookUrl` in `src/config.ts` to activate.
 */
export async function sendOrderToWebhook(orderData: OrderSubmission): Promise<void> {
  if (!config.orderWebhookUrl) return;
  try {
    await fetch(config.orderWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData),
      keepalive: true,
    });
  } catch (err) {
    console.error('Order webhook error:', err);
  }
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
