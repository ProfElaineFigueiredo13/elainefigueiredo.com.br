/**
 * Digital Analytics and SMA (Social Media Advertising) Tracking Layer
 * Dispatches conversion and interaction events to:
 * - Google Tag Manager (window.dataLayer)
 * - Google Analytics 4 / Google Ads (window.gtag)
 * - Meta Pixel / Facebook Ads (window.fbq)
 * - LinkedIn Insight Tag (window.lintrk)
 * - TikTok Pixel (window.ttq)
 */

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    lintrk?: (...args: unknown[]) => void;
    ttq?: {
      track?: (eventName: string, params?: Record<string, unknown>) => void;
    };
  }
}

export interface AnalyticsEventParams {
  category?: string;
  label?: string;
  value?: number;
  currency?: string;
  content_name?: string;
  content_category?: string;
  content_id?: string;
  [key: string]: unknown;
}

/**
 * Universal Event Dispatcher for SMA and Web Analytics
 */
export function trackEvent(eventName: string, params: AnalyticsEventParams = {}): void {
  if (typeof window === 'undefined') return;

  const timestamp = new Date().toISOString();
  const pagePath = window.location.pathname + window.location.search;

  const eventPayload = {
    event: eventName,
    timestamp,
    page_path: pagePath,
    ...params,
  };

  // 1. Google Tag Manager / GA4 DataLayer
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(eventPayload);
  } catch (e) {
    console.debug('[SMA DataLayer Error]:', e);
  }

  // 2. Google Analytics 4 & Google Ads directly via gtag
  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, {
        page_location: window.location.href,
        page_path: pagePath,
        ...params,
      });
    }
  } catch (e) {
    console.debug('[SMA Gtag Error]:', e);
  }

  // 3. Meta Pixel (Facebook & Instagram Ads)
  try {
    if (typeof window.fbq === 'function') {
      switch (eventName) {
        case 'page_view':
          window.fbq('track', 'PageView');
          break;

        case 'lead_submit':
        case 'contact_form_submit':
        case 'lecture_proposal_submit':
          window.fbq('track', 'Lead', {
            content_name: params.content_name || params.subject || 'Lead Geral',
            content_category: params.category || 'Consultoria e Palestras',
            value: params.value,
            currency: params.currency || 'BRL',
          });
          break;

        case 'course_enroll_submit':
          window.fbq('track', 'CompleteRegistration', {
            content_name: params.course_title || 'Curso Academy',
            content_category: 'Cursos e Treinamentos IA',
            status: 'inscricao_solicitada',
          });
          break;

        case 'course_enroll_click':
          window.fbq('track', 'InitiateCheckout', {
            content_name: params.course_title || params.content_name,
            content_category: 'Cursos IA',
          });
          break;

        case 'whatsapp_click':
          window.fbq('trackCustom', 'WhatsAppContact', {
            channel: 'WhatsApp',
            source: params.source || 'Botão Flutuante',
          });
          window.fbq('track', 'Contact');
          break;

        case 'social_share':
          window.fbq('trackCustom', 'SocialShare', {
            network: params.network,
            content: params.content_name,
          });
          break;

        case 'view_content':
          window.fbq('track', 'ViewContent', {
            content_name: params.content_name,
            content_type: params.content_type,
            content_id: params.content_id,
          });
          break;

        default:
          window.fbq('trackCustom', eventName, params);
          break;
      }
    }
  } catch (e) {
    console.debug('[SMA Meta Pixel Error]:', e);
  }

  // 4. LinkedIn Insight Tag
  try {
    if (typeof window.lintrk === 'function') {
      window.lintrk('track', { conversion_id: eventName });
    }
  } catch (e) {
    console.debug('[SMA LinkedIn Error]:', e);
  }

  // 5. TikTok Pixel
  try {
    if (window.ttq && typeof window.ttq.track === 'function') {
      if (eventName === 'lead_submit' || eventName === 'contact_form_submit') {
        window.ttq.track('SubmitForm', params);
      } else if (eventName === 'whatsapp_click') {
        window.ttq.track('Contact', params);
      } else if (eventName === 'view_content') {
        window.ttq.track('ViewContent', params);
      }
    }
  } catch (e) {
    console.debug('[SMA TikTok Error]:', e);
  }

  // 6. Non-blocking development logger
  if (process.env.NODE_ENV !== 'production') {
    console.debug(`[SMA Event Dispatched]: ${eventName}`, params);
  }
}

/**
 * Dedicated helper for tracking Social Media Shares (SMO & SMA)
 */
export function trackSocialShare(network: string, contentTitle = 'Plataforma Oficial Elaine Figueiredo'): void {
  trackEvent('social_share', {
    network,
    content_name: contentTitle,
    url: typeof window !== 'undefined' ? window.location.href : '',
  });
}

/**
 * Dedicated helper for tracking Lead Submissions
 */
export function trackLeadSubmission(
  leadType: 'contact' | 'course_enrollment' | 'lecture_proposal' | 'whatsapp',
  details: Record<string, unknown> = {}
): void {
  trackEvent('lead_submit', {
    lead_type: leadType,
    ...details,
  });
}

/**
 * Dedicated helper for tracking Content Views (Courses, Keynotes, Blog)
 */
export function trackContentView(
  contentType: 'course' | 'lecture' | 'article' | 'project' | 'resume',
  contentId: string,
  contentTitle: string
): void {
  trackEvent('view_content', {
    content_type: contentType,
    content_id: contentId,
    content_name: contentTitle,
  });
}
