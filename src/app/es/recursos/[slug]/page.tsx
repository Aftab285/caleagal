import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import { legalGuidesData } from '@/data/legalGuides';
import { legalGuideSlugMap, getMultilingualMetadata } from '@/lib/i18nRoutes';
import { Clock, ArrowRight, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

function getGuideBySpanishSlug(slug: string) {
  let matchedEnKey = '';
  for (const enKey in legalGuideSlugMap) {
    if (legalGuideSlugMap[enKey].es === slug) {
      matchedEnKey = enKey;
      break;
    }
  }
  if (!matchedEnKey) {
    matchedEnKey = slug;
  }
  return legalGuidesData.find((g) => g.slug === matchedEnKey);
}

export async function generateStaticParams() {
  return Object.values(legalGuideSlugMap).map((entry) => ({
    slug: entry.es,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySpanishSlug(slug);

  if (!guide) {
    return { title: 'Guía No Encontrada | CALegalSource' };
  }

  const enSlug = guide.slug;
  const esSlug = legalGuideSlugMap[enSlug]?.es || slug;

  return getMultilingualMetadata({
    locale: 'es',
    enPath: `/legal-resources/${enSlug}`,
    esPath: `/es/recursos/${esSlug}`,
    title: `${guide.titleEs} | Guías Legales de California`,
    description: guide.summaryEs,
  });
}

export default async function SpanishLegalGuideDetailPage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuideBySpanishSlug(slug);

  if (!guide) {
    notFound();
  }

  const title = guide.titleEs || guide.title;
  const summary = guide.summaryEs || guide.summary;
  const content = guide.contentEs || guide.content;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Header />

      <main className="flex-grow">
        <article className="max-w-4xl mx-auto px-4 sm:px-8 py-12 lg:py-16 space-y-8">
          
          <div className="space-y-4 border-b border-gray-200 pb-8">
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <Link href="/es" className="hover:text-[#3d7826]">Inicio</Link>
              <span>/</span>
              <Link href="/es/recursos" className="hover:text-[#3d7826]">Recursos</Link>
              <span>/</span>
              <span className="text-gray-600 truncate max-w-xs">{title}</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#edf7e8] text-[#3d7826] font-semibold text-xs">
              <FileText className="w-3.5 h-3.5" />
              <span>{guide.practiceArea}</span>
            </div>

            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f233a] leading-tight">
              {title}
            </h1>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              {summary}
            </p>

            <div className="flex items-center gap-4 text-xs text-gray-400 pt-2 flex-wrap">
              <span>Autor: Equipo de Investigación CALegalSource</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {guide.readTime}</span>
              <span>•</span>
              <span>Revisado: {guide.lastReviewed}</span>
            </div>
          </div>

          <div className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed space-y-6">
            <div className="whitespace-pre-line text-gray-700">
              {content}
            </div>
          </div>

          {guide.citations.length > 0 && (
            <div className="p-6 rounded-2xl bg-[#f8fafc] border border-gray-200 space-y-3">
              <h3 className="font-playfair text-lg font-bold text-[#0f233a]">
                Citas Estatutarias y Referencias Oficiales
              </h3>
              <ul className="space-y-2 text-xs text-gray-600">
                {guide.citations.map((c, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#3d7826] font-bold">•</span>
                    <div>
                      <strong className="text-gray-800">{c.codeRef}:</strong> {c.name}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="p-8 rounded-2xl bg-[#0f233a] text-white space-y-4 mt-12 shadow-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/10 text-[#85db61] text-xs font-bold uppercase">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Evaluación de Caso Gratuita</span>
            </div>
            <h3 className="font-playfair text-2xl font-bold">
              ¿Tiene Preguntas Sobre sus Derechos en California?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-xl">
              Si ha sufrido una violación a sus derechos laborales, problemas graves de habitabilidad o un accidente, envíe su consulta confidencial hoy mismo.
            </p>
            <Link
              href="/es/evaluacion-gratuita"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#3d7826] hover:bg-[#32641e] text-white font-bold text-sm transition-all"
            >
              <span>Solicitar Evaluación Gratuita</span>
              <ArrowRight className="w-4 h-4 text-[#85db61]" />
            </Link>
          </div>

        </article>
      </main>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
