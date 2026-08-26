/**
 * One nav tree, rendered two ways. `Header` reads it for the simple desktop
 * nav today; `MegaMenu` and `MobileNav` read the same tree in Phase 4, so the
 * upgrade is additive rather than a rewrite.
 */

export interface NavLink {
  label: string;
  href: string;
  description?: string;
  /** astro-icon name, e.g. 'lucide:wrench'. */
  icon?: string;
}

export interface MegaColumn {
  heading?: string;
  links: NavLink[];
}

export interface MegaPanel {
  kind: 'mega';
  columns: MegaColumn[];
  featured?: {
    title: string;
    body: string;
    href: string;
    cta: string;
  };
}

export interface LinkListPanel {
  kind: 'links';
  links: NavLink[];
}

export interface NavItem {
  label: string;
  /** Present when the top-level item is itself a destination. */
  href?: string;
  panel?: MegaPanel | LinkListPanel;
}

export interface NavigationConfig {
  primary: NavItem[];
  /** Right-hand call to action in the header. */
  cta?: { label: string; href: string };
  footer: { heading: string; links: NavLink[] }[];
  legal: NavLink[];
}

export const navigation: NavigationConfig = {
  primary: [
    { label: 'Home', href: '/' },
    {
      label: 'Services',
      href: '/services/',
      panel: {
        kind: 'links',
        links: [
          { label: 'Custom Walkways',        href: '/services/walkways/' },
          { label: 'Paver Driveways',       href: '/services/driveways/' },
          { label: 'Landscaping',           href: '/services/landscaping/' },
          { label: 'Outdoor Living Spaces', href: '/services/outdoor-living-spaces/' },
          { label: 'Patios',         href: '/services/patios/' },
          { label: 'Retaining Walls',       href: '/services/retaining-walls/' },
          { label: 'Waterscapes',           href: '/services/waterscapes/' },
        ],
      },
    },
    { label: 'About',        href: '/about-us/' },
    { label: 'Testimonials', href: '/#testimonials' },
    { label: 'Contact',      href: '#contact' },
  ],

  cta: { label: 'Free Estimate', href: '#contact' },

  footer: [
    {
      heading: 'Services',
      links: [
        { label: 'Outdoor Living Spaces', href: '/services/outdoor-living-spaces/' },
        { label: 'Custom Patios',         href: '/services/patios/' },
        { label: 'Paver Driveways',       href: '/services/driveways/' },
        { label: 'Retaining Walls',       href: '/services/retaining-walls/' },
        { label: 'Stone Walkways',        href: '/services/walkways/' },
        { label: 'Waterscapes',           href: '/services/waterscapes/' },
        { label: 'Landscaping',           href: '/services/landscaping/' },
      ],
    },
    {
      heading: 'Company',
      links: [
        { label: 'Home',         href: '/' },
        { label: 'About',        href: '/about-us/' },
        { label: 'Testimonials', href: '/#testimonials' },
        { label: 'Contact',      href: '#contact' },
      ],
    },
  ],

  legal: [
    { label: 'Privacy Policy', href: '/privacy/' },
  ],
};
