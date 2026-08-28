export const CANONICAL_BASE = 'https://www.calegalsource.com';

// 17 Practice Area bidirectional mappings
export const practiceAreaSlugMap: Record<string, { en: string; es: string }> = {
  'personal-injury': { en: 'personal-injury', es: 'lesiones-personales' },
  'employment': { en: 'employment', es: 'derecho-laboral' },
  'ada-disability': { en: 'ada-disability', es: 'ada-discapacidad' },
  'bankruptcy': { en: 'bankruptcy', es: 'bancarrota' },
  'consumer-protection': { en: 'consumer-protection', es: 'proteccion-al-consumidor' },
  'contract-disputes': { en: 'contract-disputes', es: 'disputas-contractuales' },
  'criminal-defense': { en: 'criminal-defense', es: 'defensa-penal' },
  'family-law': { en: 'family-law', es: 'derecho-familiar' },
  'immigration': { en: 'immigration', es: 'inmigracion' },
  'landlord-tenant': { en: 'landlord-tenant', es: 'arrendador-inquilino' },
  'medical-malpractice': { en: 'medical-malpractice', es: 'negligencia-medica' },
  'real-estate': { en: 'real-estate', es: 'bienes-raices' },
  'social-security': { en: 'social-security', es: 'seguro-social' },
  'wills-trusts': { en: 'wills-trusts', es: 'testamentos-fideicomisos' },
  'workers-comp': { en: 'workers-comp', es: 'compensacion-laboral' },
  'bed-bug-claims': { en: 'bed-bug-claims', es: 'reclamaciones-chinches' },
  'other': { en: 'other', es: 'otros-asuntos-legales' },
};

// Legal resources bidirectional mappings
export const legalGuideSlugMap: Record<string, { en: string; es: string }> = {
  'california-overtime-laws-guide': { en: 'california-overtime-laws-guide', es: 'leyes-de-horas-extras-en-california' },
  'california-tenant-rights-mold-repairs-guide': { en: 'california-tenant-rights-mold-repairs-guide', es: 'derechos-de-inquilinos-y-moho-en-california' },
  'california-car-accident-step-by-step-guide': { en: 'california-car-accident-step-by-step-guide', es: 'guia-accidentes-de-auto-en-california' },
};

// Core static pages bidirectional mappings
export const staticRoutesMap: Record<string, { en: string; es: string }> = {
  'home': { en: '/', es: '/es' },
  'practice-areas': { en: '/practice-areas', es: '/es/areas-de-practica' },
  'california': { en: '/california', es: '/es/california' },
  'legal-resources': { en: '/legal-resources', es: '/es/recursos' },
  'how-it-works': { en: '/how-it-works', es: '/es/como-funciona' },
  'about': { en: '/about', es: '/es/quienes-somos' },
  'contact': { en: '/contact', es: '/es/contacto' },
  'for-attorneys': { en: '/for-attorneys', es: '/es/para-abogados' },
  'attorneys': { en: '/attorneys', es: '/es/abogados' },
  'intake': { en: '/intake', es: '/es/evaluacion-gratuita' },
  'privacy-policy': { en: '/privacy-policy', es: '/es/politica-de-privacidad' },
  'terms-of-use': { en: '/terms-of-use', es: '/es/terminos-de-uso' },
  'disclaimer': { en: '/disclaimer', es: '/es/aviso-legal' },
  'accessibility': { en: '/accessibility', es: '/es/accesibilidad' },
};

// Helper to convert any English county slug (e.g. 'los-angeles-county') to Spanish ('condado-de-los-angeles') and vice versa
export function getCountySlugPair(slug: string): { en: string; es: string } {
  // If it starts with 'condado-de-'
  if (slug.startsWith('condado-de-')) {
    const base = slug.replace('condado-de-', '');
    return {
      en: `${base}-county`,
      es: slug,
    };
  }
  // If it ends with '-county'
  if (slug.endsWith('-county')) {
    const base = slug.replace('-county', '');
    return {
      en: slug,
      es: `condado-de-${base}`,
    };
  }
  return { en: `${slug}-county`, es: `condado-de-${slug}` };
}

// Convert any path to its English and Spanish equivalents
export function getEquivalentRoutes(currentPath: string): { enPath: string; esPath: string } {
  const clean = currentPath.replace(/\/$/, '') || '/';

  // 1. Home
  if (clean === '/' || clean === '/es') {
    return { enPath: '/', esPath: '/es' };
  }

  // 2. Static routes lookup
  for (const key in staticRoutesMap) {
    const pair = staticRoutesMap[key];
    if (clean === pair.en || clean === pair.es) {
      return { enPath: pair.en, esPath: pair.es };
    }
  }

  // 3. Practice areas
  if (clean.startsWith('/practice-areas/')) {
    const slugEn = clean.replace('/practice-areas/', '');
    const entry = practiceAreaSlugMap[slugEn];
    const slugEs = entry ? entry.es : slugEn;
    return {
      enPath: `/practice-areas/${slugEn}`,
      esPath: `/es/areas-de-practica/${slugEs}`,
    };
  }
  if (clean.startsWith('/es/areas-de-practica/')) {
    const slugEs = clean.replace('/es/areas-de-practica/', '');
    let slugEn = slugEs;
    for (const k in practiceAreaSlugMap) {
      if (practiceAreaSlugMap[k].es === slugEs) {
        slugEn = practiceAreaSlugMap[k].en;
        break;
      }
    }
    return {
      enPath: `/practice-areas/${slugEn}`,
      esPath: `/es/areas-de-practica/${slugEs}`,
    };
  }

  // 4. County pages
  if (clean.startsWith('/california/')) {
    const slugEn = clean.replace('/california/', '');
    const pair = getCountySlugPair(slugEn);
    return {
      enPath: `/california/${pair.en}`,
      esPath: `/es/california/${pair.es}`,
    };
  }
  if (clean.startsWith('/es/california/')) {
    const slugEs = clean.replace('/es/california/', '');
    const pair = getCountySlugPair(slugEs);
    return {
      enPath: `/california/${pair.en}`,
      esPath: `/es/california/${pair.es}`,
    };
  }

  // 5. Legal resources
  if (clean.startsWith('/legal-resources/')) {
    const slugEn = clean.replace('/legal-resources/', '');
    const entry = legalGuideSlugMap[slugEn];
    const slugEs = entry ? entry.es : slugEn;
    return {
      enPath: `/legal-resources/${slugEn}`,
      esPath: `/es/recursos/${slugEs}`,
    };
  }
  if (clean.startsWith('/es/recursos/')) {
    const slugEs = clean.replace('/es/recursos/', '');
    let slugEn = slugEs;
    for (const k in legalGuideSlugMap) {
      if (legalGuideSlugMap[k].es === slugEs) {
        slugEn = legalGuideSlugMap[k].en;
        break;
      }
    }
    return {
      enPath: `/legal-resources/${slugEn}`,
      esPath: `/es/recursos/${slugEs}`,
    };
  }

  // 6. Attorneys detail
  if (clean.startsWith('/attorneys/')) {
    const slug = clean.replace('/attorneys/', '');
    return {
      enPath: `/attorneys/${slug}`,
      esPath: `/es/abogados/${slug}`,
    };
  }
  if (clean.startsWith('/es/abogados/')) {
    const slug = clean.replace('/es/abogados/', '');
    return {
      enPath: `/attorneys/${slug}`,
      esPath: `/es/abogados/${slug}`,
    };
  }

  // Fallback
  if (clean.startsWith('/es/')) {
    return { enPath: '/', esPath: clean };
  }
  return { enPath: clean, esPath: `/es${clean}` };
}

// Generate SEO Metadata with Self-Referencing Canonical and Exact Hreflang Tags
export function getMultilingualMetadata({
  locale,
  enPath,
  esPath,
  title,
  description,
  ogImage = '/icon-512.png',
}: {
  locale: 'en' | 'es';
  enPath: string;
  esPath: string;
  title: string;
  description: string;
  ogImage?: string;
}) {
  const canonicalUrl = `${CANONICAL_BASE}${locale === 'es' ? esPath : enPath}`;
  const enUrl = `${CANONICAL_BASE}${enPath}`;
  const esUrl = `${CANONICAL_BASE}${esPath}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en-US': enUrl,
        'es-US': esUrl,
        'en': enUrl,
        'es': esUrl,
        'x-default': enUrl,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'CA Legal Source',
      locale: locale === 'es' ? 'es_US' : 'en_US',
      type: 'website',
      images: [
        {
          url: ogImage,
          width: 512,
          height: 512,
          alt: 'CA Legal Source',
        },
      ],
    },
  };
}
