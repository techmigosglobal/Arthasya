import {models,getModel,media} from './data.js';
import {exportProducts} from './export-data.js';

export const exportPaths = [
  '/export',
  ...exportProducts.map(p => `/export/${p.id}`)
];

export const landingPaths = [
  '/arth.pravah/about-arthasya',
  '/arth.pravah/aero-electric-scooter-hyderabad',
  '/arth.pravah/aero-electric-scooter',
  '/arth.pravah/apex-electric-scooter-hyderabad',
  '/arth.pravah/apex-electric-scooter',
  '/arth.pravah/electric-scooter-dealers-hyderabad',
  '/arth.pravah/electric-scooter-dealers-telangana',
  '/arth.pravah/electric-scooter-dealership',
  '/arth.pravah/electric-scooter-features',
  '/arth.pravah/electric-scooter-models',
  '/arth.pravah/electric-scooters-bhel-hyderabad',
  '/arth.pravah/electric-scooters-hyderabad',
  '/arth.pravah/electric-vehicle-showroom-hyderabad',
  '/arth.pravah/electric-vehicle-showroom-ramachandrapuram'
];

export const publicPaths = [
  '/',
  '/arth.export',
  ...exportPaths,
  '/arth.pravah',
  ...landingPaths,
  '/arth.urja',
  '/arth.gati',
  '/about',
  '/contact',
  '/models',
  ...models.map(m => `/models/${m.id}`),
  '/compare',
  '/running-costs',
  '/ownership'
];

export const utilityPaths = ['/support', '/showrooms', '/test-ride', '/privacy', '/terms', '/admin'];
export const allPaths = [...publicPaths, ...utilityPaths];

export function siteSettings({origin = 'https://example.com', indexable = false} = {}) {
  const url = new URL(origin);
  if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password || url.pathname !== '/' || url.search || url.hash) {
    throw new Error('SITE_ORIGIN must be an HTTP(S) origin without a path, credentials, query or fragment.');
  }
  if (indexable && (url.protocol !== 'https:' || /(^|\.)(example\.(com|org|net)|localhost|invalid|test)$/.test(url.hostname) || url.hostname === '127.0.0.1' || url.hostname === '[::1]')) {
    throw new Error('Indexing requires a real HTTPS production SITE_ORIGIN.');
  }
  return {origin: url.origin, indexable};
}

const landingSEO = {
  '/arth.pravah/about-arthasya': {
    title: 'About ARTHASYA | ARTH.Pravah Electric Mobility',
    description: 'Learn about ARTHASYA and ARTH.Pravah, an electric mobility venture delivering engineered electric scooters across Hyderabad and Telangana.'
  },
  '/arth.pravah/aero-electric-scooter-hyderabad': {
    title: 'Aero Electric Scooter Hyderabad | ARTH.Pravah',
    description: 'Looking for the Aero electric scooter in Hyderabad? Explore ARTH.Pravah Aero specifications, battery options and catalogue features. Contact us for a quotation.'
  },
  '/arth.pravah/aero-electric-scooter': {
    title: 'Aero Electric Scooter | ARTH.Pravah by ARTHASYA',
    description: 'Discover the ARTH.Pravah Aero electric scooter. Explore catalogue specifications, battery options, charging details and equipment.'
  },
  '/arth.pravah/apex-electric-scooter-hyderabad': {
    title: 'Apex Electric Scooter Hyderabad | ARTH.Pravah',
    description: 'Discover the Apex electric scooter in Hyderabad from ARTH.Pravah. Explore specifications, battery choices, dimensions and request a quote.'
  },
  '/arth.pravah/apex-electric-scooter': {
    title: 'Apex Electric Scooter | ARTH.Pravah by ARTHASYA',
    description: 'Explore the ARTH.Pravah Apex electric scooter. Discover catalogue specifications, dimensions, battery configurations and features.'
  },
  '/arth.pravah/electric-scooter-dealers-hyderabad': {
    title: 'Electric Scooter Dealers in Hyderabad | ARTH.Pravah',
    description: 'Searching for electric scooter dealers in Hyderabad? Explore ARTH.Pravah models, catalogue specifications and contact our dealership team.'
  },
  '/arth.pravah/electric-scooter-dealers-telangana': {
    title: 'Electric Scooter Dealers Telangana | ARTH.Pravah',
    description: 'Explore ARTH.Pravah electric scooters in Telangana. Discover our 6-model collection, battery options, specifications and dealership opportunities.'
  },
  '/arth.pravah/electric-scooter-dealership': {
    title: 'Electric Scooter Dealership Enquiries | ARTH.Pravah',
    description: 'Interested in the electric scooter business? Contact ARTH.Pravah for dealership enquiries in Hyderabad and across Telangana.'
  },
  '/arth.pravah/electric-scooter-features': {
    title: 'Electric Scooter Features | ARTH.Pravah',
    description: 'Explore electric scooter features from ARTH.Pravah, including LED lighting, digital displays, disc brakes, USB charging and reverse mode.'
  },
  '/arth.pravah/electric-scooter-models': {
    title: 'Electric Scooter Models | Explore ARTH.Pravah Collection',
    description: 'Explore six ARTH.Pravah electric scooter models: Aero, Apex, Nova, Teja, Vayu and Vega. Review catalogue specifications and battery options.'
  },
  '/arth.pravah/electric-scooters-bhel-hyderabad': {
    title: 'Electric Scooters Near BHEL Hyderabad | ARTH.Pravah',
    description: 'Looking for electric scooters near BHEL Hyderabad? Explore ARTH.Pravah models at Ramachandrapuram, Beeramguda. Review specifications and pricing.'
  },
  '/arth.pravah/electric-scooters-hyderabad': {
    title: 'Electric Scooters in Hyderabad | ARTH.Pravah',
    description: 'Explore electric scooters in Hyderabad with ARTH.Pravah. Discover our 6 models, catalogue specifications, battery options and visit our showroom.'
  },
  '/arth.pravah/electric-vehicle-showroom-hyderabad': {
    title: 'Electric Vehicle Showroom Hyderabad | ARTH.Pravah',
    description: 'Visit the ARTH.Pravah electric vehicle showroom in Hyderabad. Explore electric scooters, review specifications and schedule a test ride.'
  },
  '/arth.pravah/electric-vehicle-showroom-ramachandrapuram': {
    title: 'Electric Vehicle Showroom Ramachandrapuram | ARTH.Pravah',
    description: 'Explore ARTH.Pravah electric scooters in Ramachandrapuram, Hyderabad. Review catalogue models, battery configurations and request a quote.'
  }
};

const parentSEO = {
  '/arth.export': {
    title: 'Arthasya Export | Red chillies and turmeric exports',
    description: 'Explore Arthasya Export, the group’s red chilli and turmeric export business.',
    image: '/assets/arthasya/slide-export.png',
    imageAlt: 'Red chillies representing Arthasya Export'
  },
  '/export': {
    title: 'Global Agro Commodity Exports | Arthasya Export',
    description: 'Explore Arthasya Export portal for premium turmeric fingers, turmeric powder, and dry red chillies.',
    image: '/assets/arthasya/slide-export.png',
    imageAlt: 'Arthasya Export - Premium Spices & Agro Commodities'
  },
  '/export/turmeric-fingers': {
    title: 'Turmeric Fingers Export — Salem, Nizamabad & Rajapore | Arthasya',
    description: 'High-curcumin (2.5% - 5.5%) whole turmeric fingers. Sun-dried, machine-polished, phytosanitary certified for worldwide container shipment.',
    image: '/assets/export/products/turmeric-fingers.png',
    imageAlt: 'Export-grade whole turmeric fingers'
  },
  '/export/turmeric-powder': {
    title: 'Pure Ground Turmeric Powder Export | Arthasya',
    description: 'Ultra-fine 80–100 mesh pure turmeric powder. Steam sterilized, zero artificial color, rigorous pesticide and aflatoxin testing.',
    image: '/assets/export/products/turmeric-powder.png',
    imageAlt: 'Export-quality pure ground turmeric powder'
  },
  '/export/dry-red-chillies': {
    title: 'Whole Dry Red Chillies Export — Teja, Sannam & Byadgi | Arthasya',
    description: 'Farm-direct whole dry red chillies with stem or stemless. High heat SHU ratings and deep natural red ASTA color.',
    image: '/assets/export/products/dry-red-chillies.png',
    imageAlt: 'Export-grade whole dry red chillies'
  },
  '/export/red-chilli-powder': {
    title: 'Pure Red Chilli Powder Export — Custom Mesh & Heat | Arthasya',
    description: 'Finely ground red chilli powder from selected sun-dried chillies. 100% pure, Sudan dye-free, customized SHU heat levels.',
    image: '/assets/export/products/red-chilli-powder.png',
    imageAlt: 'Export-grade pure red chilli powder'
  },
  '/export/custom-sourcing': {
    title: 'Custom Agro Sourcing & Private Label Packaging | Arthasya',
    description: 'Bespoke agricultural commodity procurement, private labeling, custom packaging, and multi-port export logistics.',
    image: '/assets/export/products/custom-sourcing.png',
    imageAlt: 'Custom agro commodity sourcing and export solutions'
  },
  '/arth.urja': {
    title: 'Arthasya Urja | EV charging stations',
    description: 'Explore arth.urja, Arthasya’s charging-station business for everyday electric mobility.',
    image: '/assets/arthasya/slide-urja.png',
    imageAlt: 'Electric scooter beside a charging point representing Arthasya Urja'
  },
  '/arth.gati': {
    title: 'Arthasya Gati | Electric-bike fleet services',
    description: 'Explore arth.gati, Arthasya’s electric-bike fleet service business for affordable everyday mobility.',
    image: '/assets/arthasya/slide-gati.png',
    imageAlt: 'Electric-bike fleet representing Arthasya Gati'
  },
  '/about': {
    title: 'About Arthasya | Value with purpose',
    description: 'Learn how Arthasya connects exports, energy, electric mobility and fleet services under one purpose-led direction.',
    image: '/assets/arthasya/slide-pravah.png',
    imageAlt: 'Electric scooter representing Arthasya mobility'
  },
  '/contact': {
    title: 'Contact Arthasya | Start with a question',
    description: 'Choose an enquiry path for Arthasya Export, arth.pravah, arth.urja or arth.gati and start a focused conversation.',
    image: '/assets/arthasya/slide-pravah.png',
    imageAlt: 'Electric scooter representing Arthasya mobility'
  }
};

export function pageSEO(path, settings = siteSettings()) {
  if (path === '/') {
    return {
      title: 'Arthasya — Official Website | Agro Exports, Electric Mobility & Energy',
      description: 'Official website of Arthasya Group. Leading Indian enterprise operating across agricultural exports (turmeric & red chillies), electric mobility (ARTH.Pravah), charging infrastructure and fleet solutions.',
      canonical: settings.origin + '/',
      image: settings.origin + '/assets/arthasya/slide-pravah.png',
      imageAlt: 'Arthasya Group — Agro Exports and Electric Mobility',
      siteName: 'Arthasya',
      robots: settings.indexable ? 'index,follow' : 'noindex,nofollow',
      schema: [
        {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          '@id': settings.origin + '/#organization',
          name: 'Arthasya',
          legalName: 'Arthasya Group',
          alternateName: ['Arthasya', 'ARTHASYA', 'Arthasya Group', 'Arthasya Ventures'],
          url: settings.origin + '/',
          logo: settings.origin + '/assets/arthasya/logo-transparent.png',
          telephone: '+91 83475 96153',
          email: 'info@arthasya.biz',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Plot No. 9/A, Ramchandra Reddy Nagar, Ramachandrapuram (BHEL Township), Beeramguda',
            addressLocality: 'Hyderabad',
            addressRegion: 'Telangana',
            postalCode: '502032',
            addressCountry: 'IN'
          },
          contactPoint: [
            {
              '@type': 'ContactPoint',
              telephone: '+91 8309103531',
              contactType: 'sales',
              contactOption: 'TollFree',
              areaServed: 'Worldwide',
              availableLanguage: ['English', 'Hindi', 'Telugu']
            },
            {
              '@type': 'ContactPoint',
              telephone: '+91 83475 96153',
              contactType: 'customer service',
              areaServed: 'IN',
              availableLanguage: ['English', 'Hindi', 'Telugu']
            }
          ],
          department: [
            {'@type': 'Organization', name: 'Arthasya Export', url: settings.origin + '/arth.export'},
            {'@type': 'Organization', name: 'ARTH.Pravah', url: settings.origin + '/arth.pravah'},
            {'@type': 'Organization', name: 'ARTH.Urja', url: settings.origin + '/arth.urja'},
            {'@type': 'Organization', name: 'ARTH.Gati', url: settings.origin + '/arth.gati'}
          ]
        },
        {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          '@id': settings.origin + '/#website',
          name: 'Arthasya',
          alternateName: 'Arthasya Group',
          url: settings.origin + '/',
          publisher: {'@id': settings.origin + '/#organization'}
        }
      ]
    };
  }

  if (parentSEO[path]) {
    const meta = parentSEO[path];
    const isExportProduct = path.startsWith('/export/');
    const schema = [
      {'@context': 'https://schema.org', '@type': 'Organization', name: 'Arthasya', url: settings.origin + '/', logo: settings.origin + '/assets/arthasya/logo-transparent.png'},
      {'@context': 'https://schema.org', '@type': 'WebPage', name: meta.title, description: meta.description, url: settings.origin + path, isPartOf: {'@type': 'WebSite', name: 'Arthasya', url: settings.origin + '/'}},
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: 'Home', item: settings.origin + '/'},
          {'@type': 'ListItem', position: 2, name: meta.title.split('|')[0].trim(), item: settings.origin + path}
        ]
      }
    ];
    if (isExportProduct) {
      schema.push({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: meta.title,
        description: meta.description,
        image: [settings.origin + meta.image],
        url: settings.origin + path,
        brand: {'@type': 'Brand', name: 'Arthasya Export'}
      });
    }
    return {
      title: meta.title,
      description: meta.description,
      canonical: settings.origin + path,
      image: settings.origin + meta.image,
      imageAlt: meta.imageAlt,
      siteName: 'Arthasya',
      robots: settings.indexable ? 'index,follow' : 'noindex,nofollow',
      schema
    };
  }

  if (landingSEO[path]) {
    const meta = landingSEO[path];
    return {
      title: meta.title,
      description: meta.description,
      canonical: settings.origin + path,
      image: settings.origin + '/assets/arthasya/slide-pravah.png',
      imageAlt: meta.title,
      siteName: 'ARTHASYA – ARTH.Pravah',
      robots: settings.indexable ? 'index,follow' : 'noindex,nofollow',
      schema: [
        {'@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'ARTH.Pravah', telephone: '+91 83475 96153', url: settings.origin + '/arth.pravah', address: {'@type': 'PostalAddress', streetAddress: 'Plot No. 9/A, Ramchandra Reddy Nagar, Ramachandrapuram (BHEL Township), Beeramguda', addressLocality: 'Hyderabad', addressRegion: 'Telangana', postalCode: '502032', addressCountry: 'IN'}},
        {'@context': 'https://schema.org', '@type': 'WebPage', name: meta.title, description: meta.description, url: settings.origin + path, isPartOf: {'@type': 'WebSite', name: 'ARTH.Pravah', url: settings.origin + '/arth.pravah'}}
      ]
    };
  }

  const route = path;
  if (path === '/arth.pravah') path = '/';
  const model = models.find(m => path === `/models/${m.id}`);
  const titles = {
    '/': 'Electric scooters for a new everyday',
    '/models': 'Explore our six electric scooter models',
    '/compare': 'Compare electric scooter catalogue specifications',
    '/running-costs': 'Electric scooter running-cost calculator',
    '/ownership': 'Charging, ownership and support',
    '/about': 'Our story — An Arthasya Venture'
  };
  const descriptions = {
    '/': 'Meet Aero, Apex, Nova, Teja, Vayu and Vega. Explore electric scooter designs, catalogue details and battery options from ARTH.Pravah.',
    '/models': 'Explore all six ARTH.Pravah electric scooters. View model photography, catalogue specifications, battery options and comparison details.',
    '/compare': 'Compare two or three ARTH.Pravah models by tyres, dimensions, payload, braking equipment and catalogue battery options.',
    '/running-costs': 'Estimate monthly electricity and petrol running costs using your own distance, tariffs, mileage and EV consumption assumptions.',
    '/ownership': 'Explore electric scooter ownership questions, charging guidance, warranty qualifications and support availability.',
    '/about': 'Discover ARTH.Pravah, an Arthasya venture, and our six individual expressions of electric mobility.'
  };

  const known = allPaths.includes(route);
  const indexable = settings.indexable && publicPaths.includes(route);
  const title = (model ? `${model.name} electric scooter | Battery & specs` : titles[path] || (known ? path.slice(1).replaceAll('-', ' ') + ' information' : 'Page not found')) + ' | ARTH.Pravah';
  const description = model ? `Explore ${model.name}: ${model.specs.tyres} tyres, ${model.specs.payload} kg catalogue payload, battery configurations, charging details and equipment. Request current pricing.` : descriptions[path] || 'ARTH.Pravah website information and current service availability.';
  const canonical = settings.origin + (known ? route : '/404');
  const image = settings.origin + media(model?.id || 'aero');
  const imageAlt = model ? `ARTH.Pravah ${model.name} electric scooter` : 'ARTH.Pravah electric scooter collection';

  const schema = [
    {'@context': 'https://schema.org', '@type': 'Organization', name: 'ARTH.Pravah', url: settings.origin + '/arth.pravah'},
    {'@context': 'https://schema.org', '@type': 'WebPage', name: title, description, url: canonical, isPartOf: {'@type': 'WebSite', name: 'ARTH.Pravah', url: settings.origin + '/arth.pravah'}}
  ];

  if (model) {
    schema.push(
      {'@context': 'https://schema.org', '@type': 'Product', name: `ARTH.Pravah ${model.name}`, description, image: [image], url: canonical, brand: {'@type': 'Brand', name: 'ARTH.Pravah'}, additionalProperty: [{'@type': 'PropertyValue', name: 'Catalogue tyre size', value: model.specs.tyres}, {'@type': 'PropertyValue', name: 'Catalogue payload', value: model.specs.payload, unitText: 'kg'}]},
      {'@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [['Home', '/arth.pravah'], ['Models', '/models'], [model.name, path]].map(([name, p], i) => ({'@type': 'ListItem', position: i + 1, name, item: settings.origin + p}))}
    );
  }

  return {
    title,
    description,
    canonical,
    image,
    imageAlt,
    robots: indexable ? 'index,follow' : 'noindex,nofollow',
    schema: publicPaths.includes(route) ? schema : []
  };
}

export const escapeHTML = value => String(value).replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

export function seoHead(seo) {
  const imageAlt = seo.imageAlt || `${seo.siteName || 'ARTH.Pravah'} image`;
  return `<title>${escapeHTML(seo.title)}</title><meta name="description" content="${escapeHTML(seo.description)}"><meta name="robots" content="${seo.robots}"><link rel="canonical" href="${escapeHTML(seo.canonical)}"><meta property="og:type" content="website"><meta property="og:site_name" content="${escapeHTML(seo.siteName || 'ARTH.Pravah')}"><meta property="og:title" content="${escapeHTML(seo.title)}"><meta property="og:description" content="${escapeHTML(seo.description)}"><meta property="og:url" content="${escapeHTML(seo.canonical)}"><meta property="og:image" content="${escapeHTML(seo.image)}"><meta property="og:image:alt" content="${escapeHTML(imageAlt)}"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${escapeHTML(seo.title)}"><meta name="twitter:description" content="${escapeHTML(seo.description)}"><meta name="twitter:image" content="${escapeHTML(seo.image)}"><meta name="twitter:image:alt" content="${escapeHTML(imageAlt)}"><script type="application/ld+json" id="page-schema">${JSON.stringify(seo.schema).replaceAll('<', '\\u003c')}</script>`;
}

export function updateSEO(seo) {
  const origin = document.querySelector('meta[name="site-origin"]')?.content;
  const indexable = document.querySelector('meta[name="site-indexable"]')?.content === 'true';
  if (origin) seo = pageSEO(location.pathname.replace(/\/$/, '') || '/', siteSettings({origin, indexable}));
  document.querySelectorAll('title,meta[name="description"],meta[name="robots"],link[rel="canonical"],meta[property^="og:"],meta[name^="twitter:"],#page-schema').forEach(el => el.remove());
  document.head.insertAdjacentHTML('beforeend', seoHead(seo));
}
