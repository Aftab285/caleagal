'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Phone } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

export default function FinalCTA() {
  const { language } = useLanguage();
  const t = translations[language].finalCta;

  return (
    <section className="py-24 text-white relative overflow-hidden bg-[#071322]">
      {/* Background Image: Vivid California Downtown Skyline at Twilight */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/final-cta-bg.jpg"
          alt="California Cityscape at Twilight"
          fill
          className="object-cover object-center opacity-75"
        />
        {/* Soft, translucent rich navy overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071322]/90 via-[#0f233a]/65 to-[#071322]/85" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center relative z-10 space-y-6">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-[#85db61] text-xs font-bold uppercase tracking-wider shadow-md">
          <ShieldCheck className="w-4 h-4" />
          <span>{t.badge}</span>
        </div>

        <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight drop-shadow-md">
          {t.title}
        </h2>

        <p className="text-gray-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-sm">
          {t.subtitle}
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#hero-intake"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#3d7826] hover:bg-[#32641e] text-white font-semibold text-base transition-all duration-200 shadow-xl hover:scale-[1.02] cursor-pointer"
          >
            <span>{t.button}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href="tel:7603720007"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white font-semibold text-base transition-all duration-200 cursor-pointer shadow-lg"
          >
            <Phone className="w-4 h-4 text-[#85db61]" />
            <span>(760) 372-0007</span>
          </a>
        </div>

        <p className="text-xs text-gray-200 max-w-xl mx-auto pt-3 leading-relaxed drop-shadow-xs">
          {t.disclaimer}
        </p>

      </div>
    </section>
  );
}
