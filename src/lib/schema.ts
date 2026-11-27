import { CANONICAL_BASE } from '@/lib/i18nRoutes';

// Organization details shown on the site (footer/contact). Keep in sync with the
// Google Business Profile. Add a "telephone" field once a public number exists.
export const organizationSchema = {
  '@type': 'LegalService',
  '@id': `${CANONICAL_BASE}/#organization`,
  name: 'CA Legal Source',
  url: `${CANONICAL_BASE}/`,
  logo: `${CANONICAL_BASE}/logo.png`,
  image: `${CANONICAL_BASE}/hero-california-bridge.jpg`,
  email: 'questions@dpalaw.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '8880 Rio San Diego Dr., Suite 800',
    addressLocality: 'San Diego',
    addressRegion: 'CA',
    postalCode: '92108',
    addressCountry: 'US',
  },
  areaServed: { '@type': 'State', name: 'California' },
  knowsLanguage: ['en', 'es'],
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${CANONICAL_BASE}${item.path}`,
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

export function graph(...nodes: object[]) {
  return { '@context': 'https://schema.org', '@graph': nodes };
}
