'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin, Search, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { californiaCountiesData } from '@/data/counties';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

export default function CaliforniaCoverage() {
  const { language } = useLanguage();
  const t = translations[language].coverage;

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');

  const regions = [
    'All',
    'Southern California',
    'Bay Area',
    'Central Valley',
    'Central Coast',
    'Northern California',
    'Sierra / Northern Mountains'
  ];

  const filteredCounties = californiaCountiesData.filter(county => {
    const matchesSearch = county.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      county.majorCities.some(city => city.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesRegion = selectedRegion === 'All' || county.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  return (
    <section id="california-coverage" className="py-20 relative overflow-hidden border-b border-[#cbd5e1] bg-[#f8fafc]">
      {/* Background Image: Vivid California Pacific Coastline Landscape */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/california-coverage-bg.jpg"
          alt="California Scenic Coastline Landscape"
          fill
          className="object-cover object-center opacity-85"
        />
        {/* Soft, light gradient overlay */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[1.5px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/95 border border-[#cde8c5] text-[#3d7826] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            {t.badge}
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#0f233a] tracking-tight drop-shadow-xs">
            {t.title}
          </h2>
          <div className="h-[3px] w-12 bg-[#3d7826] rounded-full mx-auto mt-2.5 mb-3"></div>
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed font-medium drop-shadow-xs">
            {t.subtitle}
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white/95 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-[#cbd5e1] mb-8 max-w-4xl mx-auto shadow-md">
          <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-1/2">
              <Search className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-[#f8fafc] border border-[#cbd5e1] rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3d7826]/30 focus:border-[#3d7826] transition-colors shadow-2xs"
              />
            </div>

            {/* Region Selector */}
            <div className="flex gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
              {regions.slice(0, 4).map(region => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    selectedRegion === region
                      ? 'bg-[#3d7826] text-white shadow-xs'
                      : 'bg-white border border-[#cbd5e1] text-gray-700 hover:border-gray-400'
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Counties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredCounties.slice(0, 16).map((county) => (
            <Link
              key={county.slug}
              href={`/california/${county.slug}`}
              className="p-4 rounded-xl border border-[#cbd5e1] bg-white/95 backdrop-blur-xs hover:bg-white hover:border-[#3d7826] hover:shadow-lg transition-all duration-200 group flex items-start justify-between"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#3d7826]" />
                  <h3 className="font-bold text-sm text-[#0f233a] group-hover:text-[#3d7826] transition-colors">
                    {county.name}
                  </h3>
                </div>
                <p className="text-[11px] text-gray-500">
                  {county.region} • Seat: {county.seat}
                </p>
                <p className="text-[11px] text-gray-400 truncate max-w-[190px]">
                  {county.majorCities.slice(0, 3).join(', ')}
                </p>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#3d7826] group-hover:translate-x-0.5 transition-all mt-1" />
            </Link>
          ))}
        </div>

        {/* Bottom Explorer Link */}
        <div className="mt-10 text-center">
          <Link
            href="/california"
            className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-lg bg-white/95 backdrop-blur-xs border border-[#cbd5e1] text-xs sm:text-sm font-bold text-[#3d7826] hover:bg-[#edf7e8] transition-colors shadow-xs"
          >
            <span>{t.exploreAll}</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
