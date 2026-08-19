'use client';

import React from 'react';
import { ShieldCheck, Scale, Globe, Clock, UserCheck, Lock } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

export default function WhyCALegalSource() {
  const { language } = useLanguage();
  const t = translations[language].whyUs;

  const features = [
    {
      icon: ShieldCheck,
      title: t.p1Title,
      description: t.p1Desc
    },
    {
      icon: UserCheck,
      title: t.p2Title,
      description: t.p2Desc
    },
    {
      icon: Scale,
      title: t.p3Title,
      description: t.p3Desc
    },
    {
      icon: Globe,
      title: t.p4Title,
      description: t.p4Desc
    },
    {
      icon: Clock,
      title: t.p5Title,
      description: t.p5Desc
    },
    {
      icon: Lock,
      title: t.p6Title,
      description: t.p6Desc
    }
  ];

  return (
    <section className="py-16 bg-[#f1f5f9] border-y border-[#cbd5e1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-[#cbd5e1] text-[#3d7826] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            {t.badge}
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#0f233a] tracking-tight">
            {t.title}
          </h2>
          <div className="h-[3px] w-12 bg-[#3d7826] rounded-full mx-auto mt-2.5 mb-3"></div>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* 6 Grid Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#cbd5e1] shadow-xs hover:shadow-md hover:border-[#3d7826] transition-all duration-200 flex flex-col relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#3d7826] transition-colors" />

                <div className="w-12 h-12 rounded-xl bg-[#edf7e8] border border-[#d5edd0] text-[#3d7826] flex items-center justify-center mb-4 shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6 stroke-[1.75]" />
                </div>

                <h3 className="font-playfair text-base sm:text-lg font-bold text-[#0f233a] mb-2">
                  {feature.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
