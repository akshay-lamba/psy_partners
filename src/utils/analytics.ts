/**
 * Analytics and Google Tag Manager (GTM) tracking utilities.
 * Ensures consistent virtual pageview and interaction tracking across all SPA routes.
 */

declare global {
  interface Window {
    dataLayer?: Array<Record<string, any>>;
    __GTM_ID__?: string;
  }
}

export function getOrCreateDataLayer(): Array<Record<string, any>> {
  if (typeof window === 'undefined') return [];
  window.dataLayer = window.dataLayer || [];
  return window.dataLayer;
}

/**
 * Tracks a virtual page view for Single Page Application navigation
 */
export function trackPageView(pagePath: string, pageTitle?: string): void {
  if (typeof window === 'undefined') return;
  const dataLayer = getOrCreateDataLayer();
  const currentTitle = pageTitle || document.title;
  const currentUrl = window.location.href;

  dataLayer.push({
    event: 'page_view',
    page_path: pagePath,
    page_title: currentTitle,
    page_location: currentUrl,
    timestamp: new Date().toISOString()
  });
}

/**
 * Tracks a custom event in GTM
 */
export function trackEvent(eventName: string, params: Record<string, any> = {}): void {
  if (typeof window === 'undefined') return;
  const dataLayer = getOrCreateDataLayer();
  dataLayer.push({
    event: eventName,
    ...params,
    timestamp: new Date().toISOString()
  });
}

/**
 * Tracks document / PDF download interactions
 */
export function trackDownload(documentTitle: string, documentUrl: string, category = 'Transition Signal POV'): void {
  trackEvent('file_download', {
    file_name: documentTitle,
    file_url: documentUrl,
    file_extension: 'pdf',
    download_category: category
  });
}

/**
 * Tracks external link navigation (e.g. Socials, Email, Partner links)
 */
export function trackOutboundClick(linkName: string, linkUrl: string): void {
  trackEvent('outbound_click', {
    link_name: linkName,
    link_url: linkUrl
  });
}
