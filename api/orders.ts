import process from 'node:process';

function formatWhatsAppLink(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  if (!digits) return '';
  const normalized = digits.startsWith('0') ? `213${digits.slice(1)}` : digits;
  return `https://wa.me/${normalized}`;
}

export async function POST(request: Request): Promise<Response> {
  const sheetWebhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!sheetWebhookUrl) {
    console.error('Missing GOOGLE_SHEET_WEBHOOK_URL');
    return Response.json(
      { ok: false, error: 'Google Sheet webhook not configured' },
      { status: 500 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return Response.json({ error: 'Invalid JSON payload' }, { status: 400 });
  }

  const fullName = String(body.fullName ?? '').trim();
  const phone = String(body.phone ?? '').trim();
  const product = String(body.product ?? 'Steam Offline +300 Games').trim();
  const priceDzd = Number(body.priceDzd ?? 2300);
  const lang = String(body.lang ?? 'ar').trim().toUpperCase();

  if (!fullName || !phone) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const dateStr = new Date().toLocaleString('en-GB', {
    timeZone: 'Africa/Algiers',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });

  try {
    const res = await fetch(sheetWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        date: dateStr,
        full_name: fullName,
        phone,
        product,
        price_dzd: priceDzd,
        lang,
        payment_status: 'Pending',
        whatsapp_link: formatWhatsAppLink(phone),
      }),
    });

    if (!res.ok) {
      console.error('Google Sheet webhook failed:', res.status, await res.text());
      return Response.json({ error: 'Failed to forward order' }, { status: 502 });
    }

    return Response.json({ ok: true }, { status: 201 });
  } catch (err) {
    console.error('Google Sheet webhook error:', err);
    return Response.json({ error: 'Webhook request error' }, { status: 500 });
  }
}
