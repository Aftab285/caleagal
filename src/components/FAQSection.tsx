'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { homepageFAQs } from '@/data/faqData';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

export default function FAQSection() {
  const { language } = useLanguage();
  const t = translations[language].faqs;

  const [openId, setOpenId] = useState<string | null>('how-it-works');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-16 bg-white border-b border-[#e2e8f0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
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

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {homepageFAQs.map((faq) => {
            const isOpen = openId === faq.id;
            const questionText = language === 'es' ? faq.questionEs : faq.question;
            const answerText = language === 'es' ? faq.answerEs : faq.answer;

            return (
              <div
                key={faq.id}
                className={`border rounded-2xl overflow-hidden transition-all duration-200 shadow-2xs ${
                  isOpen ? 'border-[#3d7826] ring-1 ring-[#3d7826]/20 bg-white' : 'border-[#cbd5e1] bg-[#f8fafc] hover:border-gray-400'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 transition-colors cursor-pointer"
                >
                  <span className="font-playfair text-base sm:text-lg font-bold text-[#0f233a]">
                    {questionText}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                    isOpen ? 'rotate-180 bg-[#3d7826] text-white shadow-xs' : 'bg-white border border-[#cbd5e1] text-gray-500'
                  }`}>
                    <ChevronDown className="w-4 h-4 stroke-[2]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-700 leading-relaxed border-t border-gray-100 bg-white animate-in fade-in duration-150">
                    <p>{answerText}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
