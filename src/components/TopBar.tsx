'use client';

import React from 'react';
import { Globe, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

export default function TopBar() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language].topBar;

  return (
    <div className="bg-[#0b1d33] text-gray-200 text-xs py-2 px-4 sm:px-8 border-b border-[#162e4d]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="text-gray-300 font-normal tracking-wide text-center sm:text-left flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-[#52a632]" />
          <span>{t.tagline}</span>
        </div>

        <div className="flex items-center space-x-3 text-xs font-medium">
          {/* Language Switcher */}
          <div className="flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded-full border border-white/15">
            <Globe className="w-3 h-3 text-[#52a632]" />
            <button
              onClick={() => setLanguage('en')}
              className={`px-1.5 py-0.5 rounded text-[11px] font-semibold transition-all cursor-pointer ${
                language === 'en'
                  ? 'bg-[#52a632] text-white shadow-2xs'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              English
            </button>
            <span className="text-gray-500 text-[10px]">/</span>
            <button
              onClick={() => setLanguage('es')}
              className={`px-1.5 py-0.5 rounded text-[11px] font-semibold transition-all cursor-pointer ${
                language === 'es'
                  ? 'bg-[#52a632] text-white shadow-2xs'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Español
            </button>
          </div>

          <span className="text-gray-500">|</span>

          {/* Connected CTA link instead of phone */}
          <Link 
            href="/intake" 
            className="flex items-center gap-1.5 text-[#52a632] hover:text-[#67c443] font-semibold transition-colors"
          >
            <span>{language === 'es' ? 'Evaluación Gratuita' : 'Free Case Review'}</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
