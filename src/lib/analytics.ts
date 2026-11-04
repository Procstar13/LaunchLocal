export type OfferId =
  | 'ai_education_overview'
  | 'ai_fundamentals'
  | 'ai_website_workshop'
  | 'ai_working_session'
  | 'ai_operations_day'
  | 'business_process_audit'
  | 'implementation'
  | 'local_business_launch'
  | 'local_growth'
  | 'website_tune_up'
  | 'not_sure'

export type OfferAnalytics = {
  offerId: OfferId
  offerName: string
}

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...arguments_: unknown[]) => void
  }
}

const offersByFormLabel: Record<string, OfferAnalytics> = {
  'AI Fundamentals — $150': { offerId: 'ai_fundamentals', offerName: 'AI Fundamentals' },
  'Build & Manage Your Website With AI — $250': {
    offerId: 'ai_website_workshop',
    offerName: 'Build & Manage Your Website With AI',
  },
  'AI Working Session — $750': { offerId: 'ai_working_session', offerName: 'AI Working Session' },
  'AI Operations Day — $1,500': { offerId: 'ai_operations_day', offerName: 'AI Operations Day' },
  'Business Process Audit — $650': {
    offerId: 'business_process_audit',
    offerName: 'Business Process Audit',
  },
  'Build & Implementation — starting at $2,500': {
    offerId: 'implementation',
    offerName: 'Build & Implementation',
  },
  'Local Business Launch — $999': {
    offerId: 'local_business_launch',
    offerName: 'Local Business Launch',
  },
  'Local Growth — $249/month': { offerId: 'local_growth', offerName: 'Local Growth' },
  'Website Tune-Up — starting at $349': {
    offerId: 'website_tune_up',
    offerName: 'Website Tune-Up',
  },
  'Not sure yet': { offerId: 'not_sure', offerName: 'Not sure yet' },
}

const sendEvent = (eventName: string, parameters: Record<string, string>) => {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('event', eventName, parameters)
}

export const trackOfferClick = ({
  offerId,
  offerName,
  placement,
}: OfferAnalytics & { placement: string }) => {
  sendEvent('offer_cta_click', {
    offer_id: offerId,
    offer_name: offerName,
    placement,
  })
}

export const trackLeadGenerated = (offer: OfferAnalytics) => {
  sendEvent('generate_lead', {
    offer_id: offer.offerId,
    offer_name: offer.offerName,
    lead_source: 'website_contact_form',
  })
}

export const getOfferAnalytics = (formLabel: string): OfferAnalytics =>
  offersByFormLabel[formLabel] ?? {
    offerId: 'not_sure',
    offerName: formLabel || 'Not sure yet',
  }
