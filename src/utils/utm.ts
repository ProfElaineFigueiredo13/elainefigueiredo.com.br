/**
 * Utility for UTM Parameter Capture and SMA (Social Media Advertising) Attribution
 * Captures campaign parameters from Meta Ads, LinkedIn Ads, Google Ads, TikTok Ads, YouTube Ads, etc.
 * Supports automatic attribution across forms, email submissions, and WhatsApp messages.
 */

export interface UtmData {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
  fbclid?: string;
  li_fat_id?: string;
  ttclid?: string;
  msclkid?: string;
  referrer?: string;
  timestamp?: number;
}

const STORAGE_KEY = 'ef_utm_attribution_v2';

/**
 * Capture UTM and ad click IDs from the current URL and persist across session.
 * Also detects social media referrers (LinkedIn, Instagram, YouTube, Twitter/X) automatically.
 */
export function captureUtmParameters(): UtmData {
  if (typeof window === 'undefined') return {};

  try {
    const urlParams = new URLSearchParams(window.location.search);
    const captured: UtmData = {};

    type UtmParamKey =
      | 'utm_source'
      | 'utm_medium'
      | 'utm_campaign'
      | 'utm_term'
      | 'utm_content'
      | 'gclid'
      | 'fbclid'
      | 'li_fat_id'
      | 'ttclid'
      | 'msclkid';

    const keys: UtmParamKey[] = [
      'utm_source',
      'utm_medium',
      'utm_campaign',
      'utm_term',
      'utm_content',
      'gclid',
      'fbclid',
      'li_fat_id',
      'ttclid',
      'msclkid',
    ];

    let foundAny = false;
    for (const key of keys) {
      const val = urlParams.get(key);
      if (val) {
        captured[key] = val;
        foundAny = true;
      }
    }

    // Auto-detect organic social referrer if no explicit utm_source is set
    if (!captured.utm_source && document.referrer) {
      const ref = document.referrer.toLowerCase();
      if (ref.includes('linkedin.com')) {
        captured.utm_source = 'linkedin';
        captured.utm_medium = 'social_referral';
        foundAny = true;
      } else if (ref.includes('instagram.com')) {
        captured.utm_source = 'instagram';
        captured.utm_medium = 'social_referral';
        foundAny = true;
      } else if (ref.includes('youtube.com')) {
        captured.utm_source = 'youtube';
        captured.utm_medium = 'video_referral';
        foundAny = true;
      } else if (ref.includes('t.co') || ref.includes('twitter.com') || ref.includes('x.com')) {
        captured.utm_source = 'x_twitter';
        captured.utm_medium = 'social_referral';
        foundAny = true;
      } else if (ref.includes('facebook.com')) {
        captured.utm_source = 'facebook';
        captured.utm_medium = 'social_referral';
        foundAny = true;
      }
      if (foundAny) {
        captured.referrer = document.referrer;
      }
    }

    if (foundAny) {
      captured.timestamp = Date.now();
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(captured));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(captured));
      return captured;
    }

    // If not in URL, read from persistent storage
    const saved = sessionStorage.getItem(STORAGE_KEY) || localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved) as UtmData;
    }
  } catch (err) {
    console.debug('Error capturing UTM params:', err);
  }

  return {};
}

/**
 * Returns formatted attribution string to append to contact forms, emails or WhatsApp messages
 */
export function getAttributionString(context?: string): string {
  const data = captureUtmParameters();
  const parts: string[] = [];

  if (data.utm_source) parts.push(`Origem: ${data.utm_source}`);
  if (data.utm_campaign) parts.push(`Campanha: ${data.utm_campaign}`);
  if (data.utm_medium) parts.push(`Mídia: ${data.utm_medium}`);
  if (data.utm_content) parts.push(`Anúncio: ${data.utm_content}`);
  if (data.gclid) parts.push('Google Ads');
  if (data.fbclid) parts.push('Meta Ads');
  if (data.li_fat_id) parts.push('LinkedIn Ads');
  if (data.ttclid) parts.push('TikTok Ads');
  if (data.msclkid) parts.push('Bing Ads');
  if (context) parts.push(`Seção: ${context}`);

  return parts.length > 0 ? ` [${parts.join(' | ')}]` : '';
}

/**
 * Builds an attributed WhatsApp link incorporating custom message and campaign tracking
 */
export function buildAttributedWhatsAppUrl(
  basePhone = '5511982181313',
  message = 'Olá Elaine Figueiredo! Acessei a sua plataforma oficial e gostaria de conversar sobre palestras, treinamentos e consultoria estratégica em Inteligência Artificial.',
  context?: string
): string {
  const attribution = getAttributionString(context);
  const fullMessage = attribution ? `${message}\n\n${attribution}` : message;
  return `https://api.whatsapp.com/send?phone=${basePhone}&text=${encodeURIComponent(fullMessage)}`;
}

/**
 * Generates an attributed Social Sharing URL (SMO) with campaign tags
 */
export function generateSocialShareUrl(
  channel: 'whatsapp' | 'linkedin' | 'twitter' | 'facebook' | 'telegram' | 'email' | 'copy',
  url = typeof window !== 'undefined' ? window.location.href : 'https://elainefigueiredo.com.br',
  title = 'Elaine Figueiredo: Inteligência Artificial e Inovação que Transformam',
  customText?: string
): string {
  // Strip existing utm tags and add specific share utm
  const cleanUrl = url.split('?')[0];
  const trackedUrl = `${cleanUrl}?utm_source=${channel}&utm_medium=social_share&utm_campaign=platform_share`;

  const shareText = customText || `${title}\n\nConheça a plataforma de Elaine Figueiredo: palestras magnas, consultoria estratégica e cursos em Inteligência Artificial e Arquitetura de Software:`;

  switch (channel) {
    case 'whatsapp':
      return `https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareText}\n${trackedUrl}`)}`;

    case 'linkedin':
      return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(trackedUrl)}`;

    case 'twitter':
      return `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(trackedUrl)}&hashtags=InteligenciaArtificial,IA,ElaineFigueiredo`;

    case 'facebook':
      return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(trackedUrl)}`;

    case 'telegram':
      return `https://t.me/share/url?url=${encodeURIComponent(trackedUrl)}&text=${encodeURIComponent(shareText)}`;

    case 'email':
      return `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${shareText}\n\n${trackedUrl}`)}`;

    case 'copy':
    default:
      return trackedUrl;
  }
}
