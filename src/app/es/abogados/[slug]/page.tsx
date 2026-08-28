import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { sampleAttorneysData } from '@/data/attorneys';
import { getMultilingualMetadata } from '@/lib/i18nRoutes';
import { ShieldCheck, MapPin, Languages, Briefcase, GraduationCap, CheckCircle2, ArrowRight, UserCheck } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return sampleAttorneysData.map((a) => ({
    slug: a.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const attorney = sampleAttorneysData.find((a) => a.slug === slug);

  if (!attorney) {
    return { title: 'Abogado No Encontrado | CALegalSource' };
  }

  return getMultilingualMetadata({
    locale: 'es',
    enPath: `/attorneys/${slug}`,
    esPath: `/es/abogados/${slug}`,
    title: `${attorney.name} | Abogado en California | CALegalSource`,
    description: `Perfil profesional de ${attorney.name} (${attorney.practiceAreas.join(', ')}) en ${attorney.countiesServed.join(', ')}. Conéctese para una evaluación confidencial de su caso.`,
  });
}

export default async function SpanishAttorneyDetailPage({ params }: Props) {
  const { slug } = await params;
  const attorney = sampleAttorneysData.find((a) => a.slug === slug);

  if (!attorney) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Header />

      <main className="flex-grow">
        <div className="bg-[#0f233a] text-white py-14 lg:py-18 relative overflow-hidden border-b border-[#162e4d]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-4">
            <div className="flex items-center gap-2 text-xs text-gray-300">
              <Link href="/es" className="hover:text-white transition-colors">Inicio</Link>
              <span>/</span>
              <Link href="/es/abogados" className="hover:text-white transition-colors">Abogados</Link>
              <span>/</span>
              <span className="text-[#85db61] font-semibold">{attorney.name}</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 text-[#85db61] text-xs font-bold uppercase">
                <UserCheck className="w-3.5 h-3.5" />
                State Bar # {attorney.barNumber}
              </span>
            </div>

            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              {attorney.name}
            </h1>

            <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed">
              {attorney.title} • {attorney.firm}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8 space-y-8">
              
              <section className="space-y-4">
                <h2 className="font-playfair text-2xl font-bold text-[#0f233a]">
                  Perfil Profesional y Biografía
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {attorney.bio}
                </p>
              </section>

              <section className="space-y-4 p-6 rounded-2xl bg-[#f8fafc] border border-gray-200">
                <h3 className="font-playfair text-xl font-bold text-[#0f233a]">
                  Áreas de Práctica y Especialidades
                </h3>
                <div className="flex flex-wrap gap-2 pt-1">
                  {attorney.practiceAreas.map((pa) => (
                    <span key={pa} className="px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-xs font-medium text-gray-800">
                      {pa}
                    </span>
                  ))}
                </div>
              </section>

              <section className="space-y-4 p-6 rounded-2xl bg-[#f8fafc] border border-gray-200">
                <h3 className="font-playfair text-xl font-bold text-[#0f233a]">
                  Condados Atendidos en California
                </h3>
                <div className="flex flex-wrap gap-2 pt-1">
                  {attorney.countiesServed.map((county) => (
                    <span key={county} className="px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-xs font-medium text-gray-800">
                      {county}
                    </span>
                  ))}
                </div>
              </section>

            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-xl space-y-4">
                <h3 className="font-playfair text-xl font-bold text-[#0f233a]">
                  Solicitar Evaluación con {attorney.name}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Envíe los detalles de su caso para ser evaluado y conectado con este abogado o un profesional calificado en su jurisdicción.
                </p>
                <Link
                  href={`/es/evaluacion-gratuita?attorney=${encodeURIComponent(attorney.slug)}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#3d7826] hover:bg-[#32641e] text-white font-bold text-sm shadow-md transition-all"
                >
                  <span>Iniciar Evaluación Gratuita</span>
                  <ArrowRight className="w-4 h-4 text-[#85db61]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
