'use client';

import React from 'react';
import { Globe, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';
import { getEquivalentRoutes } from '@/lib/i18nRoutes';

export default function TopBar() {
  const pathname = usePathname() || '/';
  const { language } = useLanguage();
  const t = translations[language].topBar;

  const { enPath, esPath } = getEquivalentRoutes(pathname);

  return (
    <div className="bg-[#0b1d33] text-gray-200 text-xs py-2 px-4 sm:px-8 border-b border-[#162e4d]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="text-gray-300 font-normal tracking-wide text-center sm:text-left flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-[#52a632]" />
          <span>{t.tagline}</span>
        </div>

        <div className="flex items-center space-x-3 text-xs font-medium">
          {/* True URL-based Language Switcher */}
          <div className="flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded-full border border-white/15">
            <Globe className="w-3 h-3 text-[#52a632]" />
            <Link
              href={enPath}
              aria-label="Switch website language to English"
              className={`px-1.5 py-0.5 rounded text-[11px] font-semibold transition-all ${
                language === 'en'
                  ? 'bg-[#52a632] text-white shadow-2xs'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              English
            </Link>
            <span className="text-gray-500 text-[10px]">/</span>
            <Link
              href={esPath}
              aria-label="Cambiar idioma del sitio a Español"
              className={`px-1.5 py-0.5 rounded text-[11px] font-semibold transition-all ${
                language === 'es'
                  ? 'bg-[#52a632] text-white shadow-2xs'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Español
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
