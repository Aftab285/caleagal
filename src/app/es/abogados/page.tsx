import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { sampleAttorneysData } from '@/data/attorneys';
import { getMultilingualMetadata } from '@/lib/i18nRoutes';
import { ShieldCheck, MapPin, Languages, Briefcase, GraduationCap, ArrowRight, UserCheck } from 'lucide-react';

export const metadata: Metadata = getMultilingualMetadata({
  locale: 'es',
  enPath: '/attorneys',
  esPath: '/es/abogados',
  title: 'Directorio de Abogados en California | CALegalSource',
  description: 'Conozca a los abogados verificados de nuestra red en California por área de práctica, condado y preferencia de idioma.',
});

export default function SpanishAttorneyDirectoryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Header />

      <main className="flex-grow">
        <div className="bg-[#0f233a] text-white py-14 lg:py-18 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#85db61] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Red Legal Verificada de California</span>
            </div>
            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Directorio de Abogados en California
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed">
              Explore los abogados participantes en nuestra red de referencia en California. Cada profesional cuenta con licencia activa ante el State Bar de California y cobertura en su condado.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleAttorneysData.map((attorney) => (
              <div
                key={attorney.id}
                className="bg-white rounded-2xl p-6 border border-[#cbd5e1] shadow-xs hover:shadow-md hover:border-[#3d7826] transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h2 className="font-playfair text-xl font-bold text-[#0f233a] group-hover:text-[#3d7826] transition-colors">
                        {attorney.name}
                      </h2>
                      <p className="text-xs font-semibold text-gray-600 mt-0.5">{attorney.title}</p>
                      <p className="text-[11px] text-gray-400">{attorney.firm}</p>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#edf7e8] text-[#3d7826] text-[10px] font-bold shrink-0">
                      <UserCheck className="w-3 h-3" />
                      Verificado
                    </span>
                  </div>

                  <div className="space-y-2 text-xs text-gray-600 pt-2 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-3.5 h-3.5 text-[#3d7826] shrink-0" />
                      <span className="font-medium text-gray-800">{attorney.practiceAreas.join(', ')}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#3d7826] shrink-0" />
                      <span>{attorney.countiesServed.join(', ')}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Languages className="w-3.5 h-3.5 text-[#3d7826] shrink-0" />
                      <span>{attorney.languages.join(', ')}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-3.5 h-3.5 text-[#3d7826] shrink-0" />
                      <span>{attorney.barNumber} ({attorney.experienceYears} años de experiencia)</span>
                    </div>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-gray-100 flex items-center justify-between">
                  <Link
                    href={`/es/abogados/${attorney.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3d7826] hover:underline"
                  >
                    <span>Ver Perfil</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href={`/es/evaluacion-gratuita?attorney=${encodeURIComponent(attorney.slug)}`}
                    className="text-xs font-semibold text-gray-500 hover:text-[#0f233a]"
                  >
                    Solicitar Caso →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
