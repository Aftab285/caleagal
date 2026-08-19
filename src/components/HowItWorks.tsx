'use client';

import React from 'react';
import { MessageSquare, Users, Scale, Handshake, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

export default function HowItWorks() {
  const { language } = useLanguage();
  const t = translations[language].howItWorks;

  const steps = [
    {
      number: '01',
      title: t.step1,
      description: t.step1Desc,
      icon: MessageSquare,
    },
    {
      number: '02',
      title: t.step2,
      description: t.step2Desc,
      icon: Users,
    },
    {
      number: '03',
      title: t.step3,
      description: t.step3Desc,
      icon: Scale,
    },
    {
      number: '04',
      title: t.step4,
      description: t.step4Desc,
      icon: Handshake,
    },
  ];

  return (
    <section id="how-it-works" className="py-16 bg-white border-b border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Heading with Centered Green Accent Bar */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#edf7e8] border border-[#cde8c5] text-[#3d7826] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
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

        {/* Inner Card Container for Step Rail */}
        <div className="bg-[#f8fafc] rounded-3xl p-8 sm:p-10 border border-[#cbd5e1] shadow-xs max-w-5xl mx-auto">
          {/* 4 Steps in 1 Single Horizontal Line */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-3">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <React.Fragment key={step.number}>
                  {/* Step Item */}
                  <div className="flex-1 flex flex-col items-center text-center group min-w-[150px] max-w-[200px]">
                    {/* Circular Icon with high-contrast green ring */}
                    <div className="w-20 h-20 rounded-full border-2 border-[#3d7826]/30 bg-white group-hover:border-[#3d7826] group-hover:shadow-md transition-all duration-200 flex items-center justify-center text-[#3d7826] mb-4 shadow-xs relative">
                      <div className="w-14 h-14 rounded-full bg-[#edf7e8] flex items-center justify-center">
                        <Icon className="w-7 h-7 text-[#3d7826] stroke-[1.75] group-hover:scale-110 transition-transform duration-200" />
                      </div>
                      <span className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-[#0f233a] text-white text-[10px] font-bold flex items-center justify-center shadow-xs">
                        {step.number}
                      </span>
                    </div>

                    {/* Step Title with Playfair */}
                    <h3 className="font-playfair text-base sm:text-lg font-bold text-[#0f233a] mb-1">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>

                  {/* Connecting Arrow between steps */}
                  {idx < steps.length - 1 && (
                    <div className="hidden md:flex items-center justify-center text-[#3d7826] shrink-0 mb-8 px-1">
                      <div className="w-8 h-8 rounded-full bg-white border border-[#cbd5e1] flex items-center justify-center shadow-2xs">
                        <ArrowRight className="w-4 h-4 text-[#3d7826] stroke-[2]" />
                      </div>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
