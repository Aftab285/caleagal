import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import { getMultilingualMetadata } from '@/lib/i18nRoutes';
import { ArrowRight, ShieldCheck, CheckCircle2, ClipboardList, Search, MessageSquare, Scale } from 'lucide-react';

export const metadata: Metadata = getMultilingualMetadata({
  locale: 'es',
  enPath: '/how-it-works',
  esPath: '/es/como-funciona',
  title: 'Cómo Funciona | Conexión Legal en California | CALegalSource',
  description: 'Conozca cómo CALegalSource le conecta con un abogado calificado en California en 4 sencillos pasos. Evaluación gratuita para asuntos calificados.',
});

export default function SpanishHowItWorksPage() {
  const steps = [
    {
      num: '01',
      title: 'Envíe su Consulta Legal',
      desc: 'Complete nuestro formulario confidencial indicando el tipo de asunto legal, su condado en California y una breve descripción de su situación.',
      icon: ClipboardList,
    },
    {
      num: '02',
      title: 'Evaluación Confidencial',
      desc: 'Revisamos los datos de su caso para verificar la jurisdicción de California aplicable y determinar el área de práctica correspondiente.',
      icon: Search,
    },
    {
      num: '03',
      title: 'Conexión con un Abogado Calificado',
      desc: 'Le ayudamos a conectarse con un abogado independiente o panelista de DPA Law que maneje su tipo de caso en su condado.',
      icon: MessageSquare,
    },
    {
      num: '04',
      title: 'Consulta Inicial Gratuita',
      desc: 'El abogado se comunicará con usted para revisar sus derechos, plazos legales y posibles opciones de representación legal.',
      icon: Scale,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Header />

      <main className="flex-grow">
        <div className="bg-[#0f233a] text-white py-14 lg:py-18 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#85db61] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Proceso Simple y Transparente</span>
            </div>
            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Cómo Funciona CALegalSource
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed">
              Le facilitamos el acceso a abogados calificados en California. Conozca nuestro proceso de 4 pasos para evaluar su caso y conectarlo con la ayuda legal que necesita.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.num} className="p-6 rounded-2xl bg-[#f8fafc] border border-gray-200 space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-playfair text-2xl font-bold text-[#3d7826]">{step.num}</span>
                      <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#3d7826]">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="font-playfair text-lg font-bold text-[#0f233a]">{step.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-8 lg:p-12 rounded-3xl bg-[#0f233a] text-white text-center space-y-6 max-w-4xl mx-auto shadow-2xl">
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold">
              ¿Listo para Comenzar su Evaluación Gratuita?
            </h2>
            <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
              Solo toma 2 minutos. Envíe los detalles de su caso hoy mismo y le ayudaremos a conectarse con un abogado calificado en su condado.
            </p>
            <div className="pt-2">
              <Link
                href="/es/evaluacion-gratuita"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#3d7826] hover:bg-[#32641e] text-white font-bold text-base shadow-xl transition-all"
              >
                <span>Solicitar una Evaluación Gratuita</span>
                <ArrowRight className="w-5 h-5 text-[#85db61]" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
