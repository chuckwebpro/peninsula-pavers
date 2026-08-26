/** Per-service structured-data definitions. Source of truth: schemafiles/03–09. */

export interface ServiceSchemaData {
  name: string;
  serviceType: string;
  description: string;
  subServices: string[];
}

export const serviceSchema: Record<string, ServiceSchemaData> = {
  'outdoor-living-spaces': {
    name: 'Outdoor Living Space Design and Construction',
    serviceType: 'Outdoor living space construction',
    description:
      'Custom outdoor living spaces built with brick pavers, natural stone, and hardscaping for Traverse City properties, including seating areas, outdoor kitchens, and fireplaces built to survive Michigan freeze and thaw cycles.',
    subServices: [
      'Outdoor kitchen construction',
      'Outdoor fireplace and fire pit installation',
      'Paver seating areas and patios',
      'Integrated hardscape lighting',
    ],
  },
  patios: {
    name: 'Custom Paver Patio Installation',
    serviceType: 'Patio installation',
    description:
      'Custom patios built with pavers, natural stone, and brick in Traverse City, designed and engineered to handle Michigan freeze and thaw cycles and stay level for decades.',
    subServices: [
      'Paver patio installation',
      'Natural stone patio installation',
      'Patio extension and replacement',
      'Patio drainage and grading',
    ],
  },
  driveways: {
    name: 'Paver Driveway Installation',
    serviceType: 'Driveway paving',
    description:
      'Paver driveway design and installation for Traverse City homes, engineered with compacted base layers to resist frost heave and hold up to Michigan freeze and thaw cycles.',
    subServices: [
      'Paver driveway installation',
      'Existing driveway removal and replacement',
      'Driveway aprons and borders',
      'Driveway grading and drainage',
    ],
  },
  'retaining-walls': {
    name: 'Retaining Wall Design and Construction',
    serviceType: 'Retaining wall construction',
    description:
      'Engineered retaining walls for Traverse City slopes and waterfront property, built with natural stone and segmental block to resist frost heave and manage erosion over decades.',
    subServices: [
      'Natural stone retaining walls',
      'Segmental block retaining walls',
      'Shoreline and slope erosion control',
      'Garden and terrace walls',
    ],
  },
  walkways: {
    name: 'Custom Walkway Installation',
    serviceType: 'Walkway installation',
    description:
      'Custom paver and natural stone walkways for Traverse City homes and businesses, built with proper excavation depth and compacted base to resist frost heave and stay level through Michigan winters.',
    subServices: [
      'Residential paver walkways',
      'Commercial and accessible walkways',
      'Natural stone garden paths',
      'Entry and front walk replacement',
    ],
  },
  waterscapes: {
    name: 'Waterscape and Water Feature Construction',
    serviceType: 'Water feature construction',
    description:
      'Custom ponds, waterfalls, and fountains designed and built for Traverse City yards, including pump and filtration systems sized for reliable four-season performance.',
    subServices: [
      'Pond design and construction',
      'Waterfall and stream installation',
      'Bubbling boulder and fountain installation',
      'Pump, filtration, and winterization setup',
    ],
  },
  landscaping: {
    name: 'Landscape Design and Installation',
    serviceType: 'Landscape design and installation',
    description:
      'Full property landscape design and installation in Traverse City where hardscape and planting work together, phased over time and built for the Michigan growing season.',
    subServices: [
      'Full property landscape design',
      'Planting design and installation',
      'Grading and drainage',
      'Phased multi-season landscape builds',
    ],
  },
};

/** Ordered catalog for the services hub OfferCatalog node. */
export const catalogOrder: Array<{ slug: string; name: string }> = [
  { slug: 'outdoor-living-spaces', name: serviceSchema['outdoor-living-spaces'].name },
  { slug: 'patios',                name: serviceSchema.patios.name },
  { slug: 'driveways',             name: serviceSchema.driveways.name },
  { slug: 'retaining-walls',       name: serviceSchema['retaining-walls'].name },
  { slug: 'walkways',              name: serviceSchema.walkways.name },
  { slug: 'waterscapes',           name: serviceSchema.waterscapes.name },
  { slug: 'landscaping',           name: serviceSchema.landscaping.name },
];
