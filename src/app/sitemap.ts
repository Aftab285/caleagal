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
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/intake`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.95 },
    { url: `${baseUrl}/attorneys`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/practice-areas`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/how-it-works`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/california`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/legal-resources`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.85 },
    { url: `${baseUrl}/for-attorneys`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
    { url: `${baseUrl}/terms-of-use`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
    { url: `${baseUrl}/disclaimer`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
    { url: `${baseUrl}/accessibility`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
  ];

  // 2. Spanish Core Static Pages
  const spanishStaticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/es`, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/es/evaluacion-gratuita`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.95 },
    { url: `${baseUrl}/es/abogados`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/es/areas-de-practica`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/es/como-funciona`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/es/california`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/es/recursos`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.85 },
    { url: `${baseUrl}/es/para-abogados`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/es/quienes-somos`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/es/contacto`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/es/politica-de-privacidad`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
    { url: `${baseUrl}/es/terminos-de-uso`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
    { url: `${baseUrl}/es/aviso-legal`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
    { url: `${baseUrl}/es/accesibilidad`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
  ];

  // 3. English & Spanish 17 Practice Area Pages
  const englishPracticeAreaUrls: MetadataRoute.Sitemap = all17PracticeAreasData.map((area) => ({
    url: `${baseUrl}/practice-areas/${area.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  const spanishPracticeAreaUrls: MetadataRoute.Sitemap = all17PracticeAreasData.map((area) => {
    const esSlug = practiceAreaSlugMap[area.slug]?.es || area.slug;
    return {
      url: `${baseUrl}/es/areas-de-practica/${esSlug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    };
  });

  // 4. English & Spanish 58 County Pages
  const englishCountyUrls: MetadataRoute.Sitemap = californiaCountiesData.map((county) => ({
    url: `${baseUrl}/california/${county.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  const spanishCountyUrls: MetadataRoute.Sitemap = californiaCountiesData.map((county) => {
    const pair = getCountySlugPair(county.slug);
    return {
      url: `${baseUrl}/es/california/${pair.es}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.75,
    };
  });

  // 5. English & Spanish Legal Resources
  const englishGuideUrls: MetadataRoute.Sitemap = legalGuidesData.map((guide) => ({
    url: `${baseUrl}/legal-resources/${guide.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const spanishGuideUrls: MetadataRoute.Sitemap = legalGuidesData.map((guide) => {
    const esSlug = legalGuideSlugMap[guide.slug]?.es || guide.slug;
    return {
      url: `${baseUrl}/es/recursos/${esSlug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    };
  });

  // 6. English & Spanish Attorney Pages
  const englishAttorneyUrls: MetadataRoute.Sitemap = sampleAttorneysData.map((attorney) => ({
    url: `${baseUrl}/attorneys/${attorney.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  const spanishAttorneyUrls: MetadataRoute.Sitemap = sampleAttorneysData.map((attorney) => ({
    url: `${baseUrl}/es/abogados/${attorney.slug}`,
    lastModified: new Date(),
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
