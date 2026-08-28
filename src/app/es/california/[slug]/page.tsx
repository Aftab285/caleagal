import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import { californiaCountiesData } from '@/data/counties';
import { getCountySlugPair, getMultilingualMetadata } from '@/lib/i18nRoutes';
import { MapPin, ArrowRight, ShieldCheck, CheckCircle2, Phone, Scale, Users, Building } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return californiaCountiesData.map((c) => ({
    slug: getCountySlugPair(c.slug).es,
  }));
}

function getCountyBySpanishSlug(slug: string) {
  const pair = getCountySlugPair(slug);
  return californiaCountiesData.find((c) => c.slug === pair.en);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const county = getCountyBySpanishSlug(slug);

  if (!county) {
    return { title: 'Condado No Encontrado | CALegalSource' };
  }

  const slugPair = getCountySlugPair(county.slug);
  const spanishName = county.name.replace('County', 'Condado de').replace('Condado de Los Angeles', 'Condado de Los Ángeles');

  return getMultilingualMetadata({
    locale: 'es',
    enPath: `/california/${slugPair.en}`,
    esPath: `/es/california/${slugPair.es}`,
    title: `Abogados en ${spanishName} | Evaluación Gratuita | CALegalSource`,
    description: `¿Necesita un abogado en el ${spanishName}? Conéctese con abogados calificados en ${county.seat} y ciudades principales. Evaluación gratuita de su caso.`,
  });
}

export default async function SpanishCountyDetailPage({ params }: Props) {
  const { slug } = await params;
  const county = getCountyBySpanishSlug(slug);

  if (!county) {
    notFound();
  }

  const slugPair = getCountySlugPair(county.slug);
  const spanishName = county.name.replace('County', 'Condado de').replace('Condado de Los Angeles', 'Condado de Los Ángeles');

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <div className="bg-[#0f233a] text-white py-14 lg:py-18 relative overflow-hidden border-b border-[#162e4d]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-4">
            <div className="flex items-center gap-2 text-xs text-gray-300">
              <Link href="/es" className="hover:text-white transition-colors">Inicio</Link>
              <span>/</span>
              <Link href="/es/california" className="hover:text-white transition-colors">Condados</Link>
              <span>/</span>
              <span className="text-[#85db61] font-semibold">{spanishName}</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#85db61] text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>Región: {county.region}</span>
            </div>

            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Abogados en el {spanishName}
            </h1>

            <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed">
              Conexión con abogados calificados en el {spanishName}. Evaluaciones gratuitas para asuntos calificados en {county.majorCities.slice(0, 4).join(', ')} y comunidades circundantes.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href={`/es/evaluacion-gratuita?county=${encodeURIComponent(county.name)}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#3d7826] hover:bg-[#32641e] text-white font-bold text-sm transition-all shadow-md"
              >
                <span>Solicitar Evaluación en {spanishName}</span>
                <ArrowRight className="w-4 h-4 text-[#85db61]" />
              </Link>
              <Link
                href="/es/como-funciona"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm transition-all"
              >
                <span>Cómo Funciona</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8 space-y-8">
              
              <section className="space-y-4">
                <h2 className="font-playfair text-2xl font-bold text-[#0f233a]">
                  Servicios Legales en el {spanishName}
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Las disputas legales, demandas por lesiones personales, reclamos de derecho laboral y asuntos familiares dentro del {spanishName} se tramitan ante la Corte Superior de California del {spanishName}. Conectamos a los residentes con abogados calificados que conocen los tribunales locales, jueces y procedimientos judiciales específicos de esta jurisdicción.
                </p>
              </section>

              <section className="space-y-4 p-6 rounded-2xl bg-[#f8fafc] border border-gray-200">
                <h3 className="font-playfair text-xl font-bold text-[#0f233a]">
                  Ciudades Principales y Comunidades Atendidas
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs sm:text-sm text-gray-700">
                  {county.majorCities.map((city) => (
                    <div key={city} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#3d7826]" />
                      <span>{city}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="font-playfair text-xl font-bold text-[#0f233a]">
                  Áreas Legales Más Solicitadas en {spanishName}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <Link href="/es/areas-de-practica/derecho-laboral" className="p-4 rounded-xl border border-gray-200 hover:border-[#3d7826] hover:shadow-xs transition-all flex items-center justify-between group">
                    <span className="font-semibold text-gray-800 group-hover:text-[#3d7826]">Derecho Laboral y Salarios</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#3d7826]" />
                  </Link>
                  <Link href="/es/areas-de-practica/lesiones-personales" className="p-4 rounded-xl border border-gray-200 hover:border-[#3d7826] hover:shadow-xs transition-all flex items-center justify-between group">
                    <span className="font-semibold text-gray-800 group-hover:text-[#3d7826]">Lesiones Personales y Accidentes</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#3d7826]" />
                  </Link>
                  <Link href="/es/areas-de-practica/arrendador-inquilino" className="p-4 rounded-xl border border-gray-200 hover:border-[#3d7826] hover:shadow-xs transition-all flex items-center justify-between group">
                    <span className="font-semibold text-gray-800 group-hover:text-[#3d7826]">Derechos de Inquilinos y Desalojos</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#3d7826]" />
                  </Link>
                  <Link href="/es/areas-de-practica/derecho-familiar" className="p-4 rounded-xl border border-gray-200 hover:border-[#3d7826] hover:shadow-xs transition-all flex items-center justify-between group">
                    <span className="font-semibold text-gray-800 group-hover:text-[#3d7826]">Derecho Familiar y Custodia</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#3d7826]" />
                  </Link>
                </div>
              </section>

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-lg space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#edf7e8] text-[#3d7826] text-[11px] font-bold uppercase">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Conexión Gratuita</span>
                </div>
                <h3 className="font-playfair text-xl font-bold text-[#0f233a]">
                  ¿Necesita un Abogado en {spanishName}?
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Envíe su caso de manera confidencial para conectarse con un abogado calificado en su jurisdicción local.
                </p>
                <Link
                  href={`/es/evaluacion-gratuita?county=${encodeURIComponent(county.name)}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#3d7826] hover:bg-[#32641e] text-white font-bold text-sm shadow-md transition-all"
                >
                  <span>Solicitar Evaluación Gratuita</span>
                  <ArrowRight className="w-4 h-4 text-[#85db61]" />
                </Link>
              </div>

              <div className="p-6 rounded-2xl bg-[#f8fafc] border border-gray-200 space-y-3 text-xs text-gray-600">
                <h4 className="font-bold text-sm text-[#0f233a]">Datos del Condado</h4>
                <p><strong>Sede Judicial:</strong> {county.seat}</p>
                <p><strong>Población:</strong> {county.population}</p>
                <p><strong>Jurisdicción:</strong> Corte Superior de California</p>
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
