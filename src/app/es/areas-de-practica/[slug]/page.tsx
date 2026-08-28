import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import { all17PracticeAreasData } from '@/data/practiceAreas';
import { practiceAreaSlugMap, getMultilingualMetadata } from '@/lib/i18nRoutes';
import { 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  MapPin, 
  BookOpen, 
  HelpCircle, 
  FileText, 
  Scale, 
  Clock, 
  Award,
  ChevronDown
} from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

// Find practice area by Spanish slug
function getAreaBySpanishSlug(slug: string) {
  let matchedEnKey = '';
  for (const enKey in practiceAreaSlugMap) {
    if (practiceAreaSlugMap[enKey].es === slug) {
      matchedEnKey = enKey;
      break;
    }
  }
  if (!matchedEnKey) {
    matchedEnKey = slug;
  }
  return all17PracticeAreasData.find((a) => a.slug === matchedEnKey);
}

export async function generateStaticParams() {
  return Object.values(practiceAreaSlugMap).map((entry) => ({
    slug: entry.es,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getAreaBySpanishSlug(slug);

  if (!area) {
    return { title: 'Área de Práctica No Encontrada | CALegalSource' };
  }

  const enSlug = area.slug;
  const esSlug = practiceAreaSlugMap[enSlug]?.es || slug;

  return getMultilingualMetadata({
    locale: 'es',
    enPath: `/practice-areas/${enSlug}`,
    esPath: `/es/areas-de-practica/${esSlug}`,
    title: area.seoTitleEs || `${area.nameEs} en California | Evaluación Gratuita | CALegalSource`,
    description: area.metaDescEs || `¿Necesita ayuda con un caso de ${area.nameEs} en California? Conéctese con un abogado calificado para una evaluación confidencial y gratuita.`,
  });
}

export default async function SpanishPracticeAreaPage({ params }: Props) {
  const { slug } = await params;
  const area = getAreaBySpanishSlug(slug);

  if (!area) {
    notFound();
  }

  const title = area.nameEs || area.name;
  const eyebrow = area.eyebrowEs || area.eyebrow;
  const h1 = area.h1Es || `Abogados de ${title} en California`;
  const subhead = area.subheadEs || area.subhead;
  const primaryCta = area.primaryCtaEs || 'Solicitar una Evaluación Gratuita';
  const supportingText = area.supportingTextEs || area.supportingText;
  const commonIssues = area.commonIssuesEs || area.commonIssues;
  const californiaLaws = area.californiaLawsEs || area.californiaLaws;
  const whenToConsult = area.whenToConsultEs || area.whenToConsult;
  const faqs = area.faqs || [];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Header />

      <main className="flex-grow">
        
        {/* ========================================================================= */}
        {/* HERO SECTION ABOVE THE FOLD                                              */}
        {/* ========================================================================= */}
        <div className="bg-[#0f233a] text-white py-12 lg:py-16 relative overflow-hidden border-b border-[#162e4d]">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#85db61_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-5">
            {/* Breadcrumb Navigation */}
            <div className="flex items-center gap-2 text-xs text-gray-300">
              <Link href="/es" className="hover:text-white transition-colors">Inicio</Link>
              <span>/</span>
              <Link href="/es/areas-de-practica" className="hover:text-white transition-colors">Áreas de Práctica</Link>
              <span>/</span>
              <span className="text-[#85db61] font-semibold">{title}</span>
            </div>

            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 text-[#85db61] text-xs font-bold uppercase tracking-wider border border-white/15">
              <Scale className="w-3.5 h-3.5 text-[#85db61]" />
              <span>{eyebrow}</span>
            </div>

            {/* Primary H1 Headline */}
            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight max-w-4xl">
              {h1}
            </h1>

            {/* Customized Subhead */}
            <p className="text-gray-200 text-base sm:text-lg max-w-3xl leading-relaxed font-normal">
              {subhead}
            </p>

            {/* Supporting Text Box */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 max-w-3xl text-xs sm:text-sm text-gray-300 leading-relaxed">
              {supportingText}
            </div>

            {/* Prominent Single Primary Hero CTA */}
            <div className="pt-2 max-w-lg">
              <Link
                href={`/es/evaluacion-gratuita?area=${encodeURIComponent(area.slug)}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#3d7826] hover:bg-[#32641e] text-white font-bold text-base sm:text-lg transition-all duration-200 shadow-[0_10px_25px_rgba(61,120,38,0.4)] hover:shadow-[0_12px_30px_rgba(61,120,38,0.55)] hover:scale-[1.02] border border-[#52a632]/50 cursor-pointer"
              >
                <span>{primaryCta}</span>
                <ArrowRight className="w-5 h-5 text-[#85db61] shrink-0" />
              </Link>
            </div>

            {/* Small Trust Text Under CTA */}
            <p className="text-xs text-gray-300 pt-1 font-medium flex items-center gap-1.5 flex-wrap">
              <span>Evaluación gratuita para asuntos calificados</span>
              <span>•</span>
              <span>Consulta confidencial</span>
              <span>•</span>
              <span>Atendemos los 58 condados de California</span>
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* HERO TRUST ROW (4 PILLARS)                                               */}
        {/* ========================================================================= */}
        <div className="bg-[#0b1d33] border-b border-[#1a385c] py-4 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs sm:text-sm">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#85db61] shrink-0" />
                <span className="font-semibold text-gray-200">58 Condados de California</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#85db61] shrink-0" />
                <span className="font-semibold text-gray-200">Consulta 100% Confidencial</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Award className="w-4 h-4 text-[#85db61] shrink-0" />
                <span className="font-semibold text-gray-200">Abogados Calificados</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#85db61] shrink-0" />
                <span className="font-semibold text-gray-200">Evaluación Sin Costo</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MAIN BODY CONTENT & SIDEBAR GRID                                          */}
        {/* ========================================================================= */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14 lg:py-18">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            
            {/* Left Content Area (8 Cols) */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* 1. Legal Help Overview */}
              <section className="space-y-4">
                <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#0f233a]">
                  Ayuda Legal en California para {title}
                </h2>
                <div className="h-1 w-14 bg-[#3d7826] rounded-full" />
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed pt-2">
                  {area.overviewEs || area.overview}
                </p>
              </section>

              {/* 2. Common Issues Handled */}
              <section className="space-y-4 p-6 sm:p-8 rounded-2xl bg-[#f8fafc] border border-gray-200">
                <h2 className="font-playfair text-2xl font-bold text-[#0f233a]">
                  Problemas Frecuentes de {title} en los que Ayudamos
                </h2>
                <div className="h-1 w-12 bg-[#3d7826] rounded-full" />
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 text-xs sm:text-sm text-gray-700">
                  {commonIssues.map((issue, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 p-3 bg-white rounded-xl border border-gray-200 shadow-2xs">
                      <CheckCircle2 className="w-4 h-4 text-[#3d7826] shrink-0 mt-0.5" />
                      <span className="font-medium text-gray-800">{issue}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* 3. Statutory Citations & Legal Protections */}
              {californiaLaws.length > 0 && (
                <section className="space-y-4">
                  <h2 className="font-playfair text-2xl font-bold text-[#0f233a]">
                    Leyes Estatales Clave y Protecciones Legales en California
                  </h2>
                  <div className="h-1 w-12 bg-[#3d7826] rounded-full" />
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Las reclamaciones de {title} en California se rigen por códigos estatutarios y precedentes judiciales específicos:
                  </p>
                  <div className="space-y-2.5 pt-1">
                    {californiaLaws.map((law, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-200 text-xs sm:text-sm">
                        <FileText className="w-4 h-4 text-[#3d7826] shrink-0 mt-0.5" />
                        <span className="font-semibold text-gray-800">{law}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* 4. When to Consult an Attorney */}
              <section className="space-y-4">
                <h2 className="font-playfair text-2xl font-bold text-[#0f233a]">
                  ¿Cuándo Debería Consultar a un Abogado de {title} en California?
                </h2>
                <div className="h-1 w-12 bg-[#3d7826] rounded-full" />
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Muchas situaciones legales tienen plazos de prescripción estrictos (Statute of Limitations). Debería considerar consultar con un abogado si:
                </p>
                <div className="space-y-3 pt-1">
                  {whenToConsult.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-lg border-l-4 border-[#3d7826] bg-[#edf7e8]/60 text-xs sm:text-sm text-gray-800">
                      <span className="font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* 5. Mid-Page Call to Action Box */}
              <section className="p-8 rounded-2xl bg-gradient-to-br from-[#0f233a] to-[#162e4d] text-white space-y-4 shadow-xl border border-white/10">
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/10 text-[#85db61] text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Conexión Legal Rápida y Gratuita</span>
                </div>
                <h3 className="font-playfair text-2xl sm:text-3xl font-bold">
                  ¿Necesita Ayuda con un Asunto de {title}?
                </h3>
                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed max-w-2xl">
                  Envíe su consulta de manera confidencial. Revisamos los detalles de su caso y le ayudamos a conectarse con un abogado calificado en su condado de California.
                </p>
                <div className="pt-2">
                  <Link
                    href={`/es/evaluacion-gratuita?area=${encodeURIComponent(area.slug)}`}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#3d7826] hover:bg-[#32641e] text-white font-bold text-sm shadow-md transition-all"
                  >
                    <span>{primaryCta}</span>
                    <ArrowRight className="w-4 h-4 text-[#85db61]" />
                  </Link>
                </div>
              </section>

              {/* 6. Frequently Asked Questions */}
              {faqs.length > 0 && (
                <section className="space-y-4">
                  <h2 className="font-playfair text-2xl font-bold text-[#0f233a]">
                    Preguntas Frecuentes sobre {title} en California
                  </h2>
                  <div className="h-1 w-12 bg-[#3d7826] rounded-full" />
                  <div className="space-y-3 pt-2">
                    {faqs.map((faq, idx) => (
                      <div key={idx} className="p-5 rounded-xl bg-[#f8fafc] border border-gray-200 space-y-2">
                        <h4 className="font-bold text-sm sm:text-base text-[#0f233a] flex items-start gap-2">
                          <HelpCircle className="w-4 h-4 text-[#3d7826] shrink-0 mt-0.5" />
                          <span>{faq.questionEs || faq.question}</span>
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pl-6">
                          {faq.answerEs || faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* 7. Connect Across All 58 Counties */}
              <section className="space-y-4 pt-4 border-t border-gray-200">
                <h2 className="font-playfair text-xl font-bold text-[#0f233a]">
                  Conéctese con un Abogado de {title} en los 58 Condados
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  CALegalSource opera en todo el estado de California. Conectamos a personas y familias con profesionales legales calificados en todos los condados:
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <Link href="/es/california/condado-de-los-angeles" className="text-xs px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-[#edf7e8] hover:text-[#3d7826] transition-colors">
                    Condado de Los Ángeles
                  </Link>
                  <Link href="/es/california/condado-de-san-diego" className="text-xs px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-[#edf7e8] hover:text-[#3d7826] transition-colors">
                    Condado de San Diego
                  </Link>
                  <Link href="/es/california/condado-de-orange" className="text-xs px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-[#edf7e8] hover:text-[#3d7826] transition-colors">
                    Condado de Orange
                  </Link>
                  <Link href="/es/california/condado-de-san-francisco" className="text-xs px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-[#edf7e8] hover:text-[#3d7826] transition-colors">
                    Condado de San Francisco
                  </Link>
                  <Link href="/es/california" className="text-xs px-3 py-1.5 rounded-lg bg-[#edf7e8] text-[#3d7826] font-bold hover:underline">
                    Ver los 58 Condados →
                  </Link>
                </div>
              </section>

            </div>

            {/* Right Sticky Sidebar (4 Cols) */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                
                {/* Intake Conversion Card */}
                <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-xl space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#edf7e8] text-[#3d7826] text-[11px] font-bold uppercase tracking-wider">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Evaluación Gratuita</span>
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-[#0f233a]">
                    Comience su Evaluación de Caso
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Cuéntenos sobre su situación de {title} de manera 100% confidencial. Le ayudaremos a conectarse con un abogado calificado en California.
                  </p>

                  <Link
                    href={`/es/evaluacion-gratuita?area=${encodeURIComponent(area.slug)}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#3d7826] hover:bg-[#32641e] text-white font-bold text-sm shadow-md transition-all"
                  >
                    <span>{primaryCta}</span>
                    <ArrowRight className="w-4 h-4 text-[#85db61]" />
                  </Link>

                  <div className="pt-2 space-y-1.5 text-[11px] text-gray-500 border-t border-gray-100">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-[#3d7826]" />
                      <span>Sin compromiso ni cargos ocultos</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-[#3d7826]" />
                      <span>Privacidad protegida por DPA Law</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-[#3d7826]" />
                      <span>Atención en los 58 condados de California</span>
                    </div>
                  </div>
                </div>

                {/* Related Legal Resources */}
                <div className="p-6 rounded-2xl bg-[#f8fafc] border border-gray-200 space-y-3">
                  <h4 className="font-bold text-sm text-[#0f233a] flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#3d7826]" />
                    <span>Guías Legales Relacionadas</span>
                  </h4>
                  <ul className="space-y-2 text-xs">
                    <li>
                      <Link href="/es/recursos/guia-accidentes-de-auto-en-california" className="text-gray-700 hover:text-[#3d7826] hover:underline flex items-center gap-1.5">
                        <span>•</span>
                        <span>Guía de Accidentes de Auto en California</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/es/recursos/derechos-de-inquilinos-y-moho-en-california" className="text-gray-700 hover:text-[#3d7826] hover:underline flex items-center gap-1.5">
                        <span>•</span>
                        <span>Derechos de Inquilinos y Reparaciones</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/es/recursos/leyes-de-horas-extras-en-california" className="text-gray-700 hover:text-[#3d7826] hover:underline flex items-center gap-1.5">
                        <span>•</span>
                        <span>Leyes de Salarios y Horas Extras</span>
                      </Link>
                    </li>
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </div>

      </main>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
