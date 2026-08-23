'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Briefcase, 
  Car, 
  Home, 
  Scale, 
  ShieldAlert, 
  Users, 
  FileText,
  ArrowRight 
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';
import { all17PracticeAreasData } from '@/data/practiceAreas';

export default function PracticeAreasSection() {
  const { language } = useLanguage();
  const t = translations[language].practiceAreas;

  // 7 Selected High-Demand Practice Areas for Homepage Feature
  const featuredSlugs = [
    'employment',
    'personal-injury',
    'landlord-tenant',
    'ada-disability',
    'consumer-protection',
    'family-law',
    'civil-rights',
  ];

  const iconMap: Record<string, React.ElementType> = {
    'employment': Briefcase,
    'personal-injury': Car,
    'landlord-tenant': Home,
    'ada-disability': Scale,
    'consumer-protection': ShieldAlert,
    'family-law': Users,
    'civil-rights': FileText,
  };

  const featuredAreas = featuredSlugs
    .map(slug => all17PracticeAreasData.find(a => a.slug === slug))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  return (
    <section id="practice-areas" className="py-16 bg-[#eef2f6] border-y border-[#cbd5e1]">
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

        {/* 7 Practice Area Cards Grid with Defined Contrast */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-3.5">
          {featuredAreas.map((area) => {
            const Icon = iconMap[area.slug] || Scale;
            const title = language === 'es' ? area.nameEs : area.name;
            const desc = language === 'es' ? area.shortDescEs : area.shortDesc;

            return (
              <div
                key={area.id}
                className="bg-white rounded-2xl p-4 sm:p-5 border border-[#cbd5e1] shadow-xs hover:shadow-lg hover:border-[#3d7826] transition-all duration-200 flex flex-col justify-between text-center group min-h-[225px] relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#3d7826] transition-colors" />

                <div>
                  {/* Icon Container with subtle green highlight */}
                  <div className="w-12 h-12 mx-auto mb-3.5 rounded-xl bg-[#edf7e8] border border-[#d5edd0] flex items-center justify-center text-[#3d7826] group-hover:scale-105 transition-transform shadow-2xs">
                    <Icon className="w-6 h-6 stroke-[1.75]" />
                  </div>

                  {/* Card Title styled with semantic paragraph tag for optimal SEO heading balance */}
                  <p className="font-bold text-[#0f233a] text-sm sm:text-[14.5px] mb-1.5 leading-snug">
                    {title}
                  </p>

                  {/* Card Description */}
                  <p className="text-[11.5px] text-gray-500 leading-relaxed line-clamp-3 mb-3">
                    {desc}
                  </p>
                </div>

                {/* Learn More Action with Unique Accessible Label */}
                <div className="pt-2.5 border-t border-gray-100">
                  <Link
                    href={`/practice-areas/${area.slug}`}
                    aria-label={`${t.learnMore} - California ${title}`}
                    className="inline-flex items-center justify-center gap-1 text-xs font-bold text-[#3d7826] hover:text-[#32641e] transition-colors"
                  >
                    <span>{t.learnMore}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-12 text-center">
          <Link
            href="/practice-areas"
            aria-label="View all 17 California practice areas"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-[#0f233a] hover:bg-[#162e4d] text-white font-semibold text-sm transition-all duration-200 shadow-sm"
          >
            <span>{t.viewAll}</span>
            <ArrowRight className="w-4 h-4 text-[#85db61]" />
          </Link>
        </div>

      </div>
    </section>
  );
}
