/**
 * Per-project configuration. This and `navigation.ts` are the two files that
 * must be filled in for every new site. Blank optional values ship nothing —
 * an empty analytics ID means that vendor's script is never emitted.
 */

export type SchemaBusinessType =
  | 'LocalBusiness'
  | 'ProfessionalService'
  | 'HomeAndConstructionBusiness'
  | 'Plumber'
  | 'Electrician'
  | 'RoofingContractor'
  | 'GeneralContractor'
  | 'Dentist'
  | 'Physician'
  | 'Attorney'
  | 'AccountingService'
  | 'InsuranceAgency'
  | 'RealEstateAgent';

export interface SiteConfig {
  /** Absolute origin, no trailing slash. Must match `site` in astro.config.mjs. */
  url: string;
  name: string;
  legalName?: string;
  tagline: string;
  description: string;
  locale: string;
  foundingYear?: number;
  slogan?: string;
  knowsAbout?: string[];
  logoUrl?: string;
  primaryImageUrl?: string;
  areaServed?: Array<{
    type: 'City' | 'AdministrativeArea';
    name: string;
    region?: string;
    country?: string;
  }>;
  team?: {
    len?: {
      name: string;
      title: string;
      photoUrl?: string;
      knowsAbout?: string[];
    };
  };

  business: {
    schemaType: SchemaBusinessType;
    phone: string;
    /** Digits only, E.164 — used for tel: links. */
    phoneHref: string;
    email: string;
    address: {
      street: string;
      locality: string;
      region: string;
      postalCode: string;
      country: string;
    };
    /** Omit entirely for service-area businesses with no walk-in location. */
    geo?: { latitude: number; longitude: number };
    /** schema.org openingHours strings, e.g. 'Mo-Fr 08:00-17:00'. */
    hours: string[];
    priceRange?: string;
  };

  social: {
    googleBusiness?: string;
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    x?: string;
    youtube?: string;
    tiktok?: string;
  };

  /** Absolute or site-relative path to the fallback Open Graph image. */
  defaultOgImage: string;

  /** Formspree form ID for the footer contact form. Blank disables the form. */
  formspreeId: string;

  /** Formspree form ID for the Free Estimate drawer. Blank disables that form. */
  estimateFormspreeId: string;

  /**
   * Google reCAPTCHA v3 site key (public). Blank skips the widget until Formspree
   * provides one. The matching secret is configured in the Formspree dashboard.
   */
  recaptchaSiteKey: string;

  analytics: {
    ga4: string;
    gtm: string;
    metaPixel: string;
    bingUet: string;
    clarity: string;
  };

  verification: {
    google: string;
    bing: string;
    meta: string;
  };

  /** 'none' is correct for US-only clients. Switch to 'banner' only when required. */
  consent: 'none' | 'banner';
}

export const site: SiteConfig = {
  url: 'https://peninsulapavers.com',
  name: 'Peninsula Pavers',
  legalName: 'Peninsula Pavers, Inc.',
  tagline: 'Crafted for Northern Michigan',
  description:
    'Full-service hardscaping and landscape company serving Northern Michigan since 1994. Residential and commercial paving brick, retaining walls, and outdoor living spaces.',
  locale: 'en-US',
  foundingYear: 1994,
  slogan:
    'No surprises. You will know precisely what we are going to do, step by step, before we do it.',
  knowsAbout: [
    'Paver patio installation',
    'Paver driveway installation',
    'Retaining wall design and construction',
    'Hardscape base preparation and drainage',
    'Frost heave prevention in cold climates',
    'Shoreline and slope erosion control',
    'Pond and waterfall construction',
    'Landscape design',
  ],
  logoUrl: '',
  primaryImageUrl: '',
  areaServed: [
    { type: 'City', name: 'Traverse City', region: 'MI', country: 'US' },
    { type: 'AdministrativeArea', name: 'Grand Traverse County, Michigan' },
    { type: 'AdministrativeArea', name: 'Leelanau County, Michigan' },
    { type: 'AdministrativeArea', name: 'Benzie County, Michigan' },
  ],
  team: {
    len: {
      name: 'Len Allgaier',
      title: 'Owner and Designer',
      photoUrl: '/images/Team.webp',
      knowsAbout: [
        'Hardscape design',
        'Paver installation',
        'Retaining wall engineering',
        'Cold climate base preparation and drainage',
        'Landscape design',
      ],
    },
  },

  business: {
    schemaType: 'HomeAndConstructionBusiness',
    phone: '(231) 421-8480',
    phoneHref: '+12314218480',
    email: 'peninsulapavers@gmail.com',
    address: {
      street: '6772 East Traverse Hwy',
      locality: 'Traverse City',
      region: 'MI',
      postalCode: '49684',
      country: 'US',
    },
    geo: { latitude: 44.7631, longitude: -85.6206 },
    hours: ['Mo-Fr 08:00-17:00'],
    priceRange: '$$$',
  },

  social: {
    googleBusiness: '',
    facebook: 'https://www.facebook.com/Peninsula.Pavers',
  },

  defaultOgImage: '/images/s1.webp',

  formspreeId: 'mvkorkbj',
  estimateFormspreeId: 'mnpqvpln',
  recaptchaSiteKey: '6LcUs6UtAAAAABxFzdaRm5-VNFL_PAHdd8dlb3VW',

  analytics: {
    ga4: '',
    gtm: '',
    metaPixel: '',
    bingUet: '',
    clarity: '',
  },

  verification: {
    google: 'QQ-snN_HfJJLU4XLcZvlfPpxepYLwe2QVZJfvGVyNAo',
    bing: '',
    meta: '',
  },

  consent: 'none',
};

export const formattedAddress = [
  site.business.address.street,
  `${site.business.address.locality}, ${site.business.address.region} ${site.business.address.postalCode}`,
].join(', ');

export const hearAboutOptions = [
  { value: 'google', label: 'Google' },
  { value: 'bing', label: 'Bing' },
  { value: 'social media', label: 'Social Media' },
  { value: 'word of mouth', label: 'Word of Mouth' },
  { value: 'other', label: 'Other' },
];

/** No configured ID means the analytics bundle is never mounted at all. */
export const hasAnalytics = Object.values(site.analytics).some(Boolean);
