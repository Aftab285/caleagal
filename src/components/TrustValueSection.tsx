'use client';

import React from 'react';
import { 
  FileText, 
  Search, 
  PhoneCall, 
  ShieldCheck,
  Shield
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

export default function TrustValueSection() {
  const { language } = useLanguage();
  const t = translations[language].trust;

  const items = [
    {
      step: '01',
      icon: FileText,
      title: t.step1Title,
      desc: t.step1Desc,
    },
    {
      step: '02',
      icon: Search,
      title: t.step2Title,
      desc: t.step2Desc,
    },
    {
      step: '03',
      icon: PhoneCall,
      title: t.step3Title,
      desc: t.step3Desc,
    },
    {
      step: '04',
      icon: ShieldCheck,
      title: t.step4Title,
      desc: t.step4Desc,
    },
  ];

  return (
    <section id="trust-understanding" className="py-16 bg-[#eef2f6] border-b border-[#cbd5e1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-[#cbd5e1] text-[#3d7826] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            {t.badge}
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#0f233a] tracking-tight">
            {t.title}
          </h2>
          <div className="h-[3px] w-12 bg-[#3d7826] rounded-full mx-auto mt-2.5 mb-3"></div>
          <p className="text-gray-600 text-sm sm:text-base font-normal">
            {t.subtitle}
          </p>
        </div>

        {/* 4 Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#cbd5e1] shadow-xs hover:shadow-lg hover:border-[#3d7826] transition-all duration-200 flex flex-col justify-between group relative overflow-hidden"
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

                  <p className="font-playfair text-base sm:text-lg font-bold text-[#0f233a] mb-2 leading-snug">
                    {item.title}
                  </p>

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
