'use client';

import React from 'react';
import { FileText, Compass, MapPin, UserCheck, Shield } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

export default function TrustValueSection() {
  const { language } = useLanguage();
  const t = translations[language].trust;

  const steps = [
    {
      icon: FileText,
      step: '01',
      title: t.step1Title,
      desc: t.step1Desc,
    },
    {
      icon: Compass,
      step: '02',
      title: t.step2Title,
      desc: t.step2Desc,
    },
    {
      icon: MapPin,
      step: '03',
      title: t.step3Title,
      desc: t.step3Desc,
    },
    {
      icon: UserCheck,
      step: '04',
      title: t.step4Title,
      desc: t.step4Desc,
    }
  ];

  return (
    <section className="py-16 bg-[#f1f5f9] border-y border-[#e2e8f0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#edf7e8] border border-[#cde8c5] text-[#3d7826] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
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

        {/* 4 Elevated Value Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#cbd5e1] shadow-sm hover:shadow-md hover:border-[#3d7826] transition-all duration-200 flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#3d7826] transition-colors" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#edf7e8] border border-[#d5edd0] flex items-center justify-center text-[#3d7826] shadow-2xs group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <span className="text-xs font-bold text-gray-400 font-mono">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="font-playfair text-base sm:text-lg font-bold text-[#0f233a] mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance Notice Box */}
        <div className="mt-10 p-4 rounded-xl bg-white border border-[#cbd5e1] shadow-2xs flex items-center gap-3.5 max-w-3xl mx-auto text-xs text-[#1e293b]">
          <div className="w-8 h-8 rounded-full bg-[#edf7e8] text-[#3d7826] flex items-center justify-center shrink-0">
            <Shield className="w-4 h-4" />
          </div>
          <span className="leading-relaxed">
            <strong>{t.impartialTitle}</strong> {t.impartialDesc}
          </span>
        </div>

      </div>
    </section>
  );
}
