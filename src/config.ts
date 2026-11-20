export const config = {
  storeName: 'SteamDZ',
  priceDzd: 2300,
  oldPriceDzd: 3500,
  whatsappNumber: '213699149448', // International format without '+'
  tutorialVideoDriveUrl: 'https://drive.google.com/file/d/YOUR_VIDEO_ID/view',
  // Optional webhook URL for n8n / Google Sheets / Supabase (leave empty until ready)
  orderWebhookUrl: '',
} as const;

/**
 * Converts a standard Google Drive share link into an embeddable preview iframe URL.
 * Supports:
 *   - https://drive.google.com/file/d/FILE_ID/view?...
 *   - https://drive.google.com/open?id=FILE_ID
 *   - https://drive.google.com/uc?id=FILE_ID
 * Returns null if the URL is still a placeholder or not a valid Drive file link.
 */
export function getDriveEmbedUrl(url: string): string | null {
  if (!url || url.includes('YOUR_VIDEO_ID')) return null;

  const fileMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (fileMatch?.[1]) {
    return `https://drive.google.com/file/d/${fileMatch[1]}/preview`;
  }

  const queryMatch = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (queryMatch?.[1]) {
    return `https://drive.google.com/file/d/${queryMatch[1]}/preview`;
  }

  return null;
}
