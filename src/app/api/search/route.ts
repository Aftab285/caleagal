import { NextResponse } from 'next/server';
import { all17PracticeAreasData } from '@/data/practiceAreas';
import { californiaCountiesData } from '@/data/counties';
import { legalGuidesData } from '@/data/legalGuides';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q')?.toLowerCase() || '';

  if (!query.trim()) {
    return NextResponse.json({ results: [] });
  }

  const practiceResults = all17PracticeAreasData
    .filter(
      p =>
        p.name.toLowerCase().includes(query) ||
        p.shortDesc.toLowerCase().includes(query) ||
        p.commonIssues.some(issue => issue.toLowerCase().includes(query))
    )
    .map(p => ({
      title: `${p.name} Legal Help`,
      category: 'Practice Area',
      url: `/practice-areas/${p.slug}`,
      description: p.shortDesc
    }));

  const countyResults = californiaCountiesData
    .filter(
      c =>
        c.name.toLowerCase().includes(query) ||
        c.majorCities.some(city => city.toLowerCase().includes(query))
    )
    .map(c => ({
      title: `${c.name} Legal Help`,
      category: 'County Directory',
      url: `/california/${c.slug}`,
      description: `Covering ${c.majorCities.slice(0, 3).join(', ')} in ${c.region}`
    }));

  const guideResults = legalGuidesData
    .filter(
      g =>
        g.title.toLowerCase().includes(query) ||
        g.summary.toLowerCase().includes(query)
    )
    .map(g => ({
      title: g.title,
      category: 'Legal Guide',
      url: `/legal-resources/${g.slug}`,
      description: g.summary
    }));

  const combined = [...practiceResults, ...countyResults, ...guideResults].slice(0, 10);

  return NextResponse.json({ results: combined });
}
