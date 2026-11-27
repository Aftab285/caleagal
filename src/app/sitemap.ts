import { MetadataRoute } from 'next';
import { all17PracticeAreasData } from '@/data/practiceAreas';
import { californiaCountiesData } from '@/data/counties';
import { legalGuidesData } from '@/data/legalGuides';
import { sampleAttorneysData } from '@/data/attorneys';
import { practiceAreaSlugMap, legalGuideSlugMap, getCountySlugPair } from '@/lib/i18nRoutes';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.calegalsource.com';

  // 1. English Core Static Pages
  const englishStaticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/intake`, changeFrequency: 'daily', priority: 0.95 },
    { url: `${baseUrl}/attorneys`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/practice-areas`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/how-it-works`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/california`, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/legal-resources`, changeFrequency: 'daily', priority: 0.85 },
    { url: `${baseUrl}/for-attorneys`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/about`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/contact`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/privacy-policy`, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${baseUrl}/terms-of-use`, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${baseUrl}/disclaimer`, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${baseUrl}/accessibility`, changeFrequency: 'monthly', priority: 0.4 },
  ];

  // 2. Spanish Core Static Pages
  const spanishStaticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/es`, changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/es/evaluacion-gratuita`, changeFrequency: 'daily', priority: 0.95 },
    { url: `${baseUrl}/es/abogados`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/es/areas-de-practica`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/es/como-funciona`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/es/california`, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/es/recursos`, changeFrequency: 'daily', priority: 0.85 },
    { url: `${baseUrl}/es/para-abogados`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/es/quienes-somos`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/es/contacto`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/es/politica-de-privacidad`, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${baseUrl}/es/terminos-de-uso`, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${baseUrl}/es/aviso-legal`, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${baseUrl}/es/accesibilidad`, changeFrequency: 'monthly', priority: 0.4 },
  ];

  // 3. English & Spanish 17 Practice Area Pages
  const englishPracticeAreaUrls: MetadataRoute.Sitemap = all17PracticeAreasData.map((area) => ({
    url: `${baseUrl}/practice-areas/${area.slug}`,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  const spanishPracticeAreaUrls: MetadataRoute.Sitemap = all17PracticeAreasData.map((area) => {
    const esSlug = practiceAreaSlugMap[area.slug]?.es || area.slug;
    return {
      url: `${baseUrl}/es/areas-de-practica/${esSlug}`,
        changeFrequency: 'weekly',
      priority: 0.85,
    };
  });

  // 4. English & Spanish 58 County Pages
  const englishCountyUrls: MetadataRoute.Sitemap = californiaCountiesData.map((county) => ({
    url: `${baseUrl}/california/${county.slug}`,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  const spanishCountyUrls: MetadataRoute.Sitemap = californiaCountiesData.map((county) => {
    const pair = getCountySlugPair(county.slug);
    return {
      url: `${baseUrl}/es/california/${pair.es}`,
        changeFrequency: 'monthly',
      priority: 0.75,
    };
  });

  // 5. English & Spanish Legal Resources
  const englishGuideUrls: MetadataRoute.Sitemap = legalGuidesData.map((guide) => ({
    url: `${baseUrl}/legal-resources/${guide.slug}`,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const spanishGuideUrls: MetadataRoute.Sitemap = legalGuidesData.map((guide) => {
    const esSlug = legalGuideSlugMap[guide.slug]?.es || guide.slug;
    return {
      url: `${baseUrl}/es/recursos/${esSlug}`,
        changeFrequency: 'weekly',
      priority: 0.8,
    };
  });

  // 6. English & Spanish Attorney Pages
  const englishAttorneyUrls: MetadataRoute.Sitemap = sampleAttorneysData.map((attorney) => ({
    url: `${baseUrl}/attorneys/${attorney.slug}`,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  const spanishAttorneyUrls: MetadataRoute.Sitemap = sampleAttorneysData.map((attorney) => ({
    url: `${baseUrl}/es/abogados/${attorney.slug}`,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  return [
    ...englishStaticPages,
    ...spanishStaticPages,
    ...englishPracticeAreaUrls,
    ...spanishPracticeAreaUrls,
    ...englishCountyUrls,
    ...spanishCountyUrls,
    ...englishGuideUrls,
    ...spanishGuideUrls,
    ...englishAttorneyUrls,
    ...spanishAttorneyUrls,
  ];
}
