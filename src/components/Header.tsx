'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Phone, ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [practiceOpen, setPracticeOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language].header;

  return (
    <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-md border-b border-gray-200 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-1.5 sm:py-2 flex items-center justify-between">
        
        {/* Brand Logo: Prominently sized on both mobile and desktop */}
        <Link href="/" className="flex items-center group py-0.5">
          <div className="relative flex items-center">
            <Image
              src="/logo.png"
              alt="CA Legal Source"
              width={640}
              height={426}
              priority
              className="w-[165px] sm:w-[210px] md:w-[250px] lg:w-[290px] h-auto max-h-14 sm:max-h-18 md:max-h-22 lg:max-h-24 object-contain brightness-0 filter contrast-200 group-hover:opacity-90 transition-all duration-200"
            />
          </div>
        </Link>

        {/* Desktop Navigation with Inter Medium */}
        <nav className="hidden lg:flex items-center space-x-7 text-[15px] font-medium text-[#1e293b]">
          {/* Practice Areas Dropdown */}
          <div 
            className="relative group py-2 cursor-pointer"
            onMouseEnter={() => setPracticeOpen(true)}
            onMouseLeave={() => setPracticeOpen(false)}
          >
            <Link href="/practice-areas" className="flex items-center gap-1 font-medium hover:text-[#3d7826] transition-colors cursor-pointer">
              <span>{t.practiceAreas}</span>
              <ChevronDown className="w-3.5 h-3.5 text-gray-500 group-hover:text-[#3d7826] transition-transform group-hover:rotate-180 duration-200" />
            </Link>

            {practiceOpen && (
              <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-3 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <div className="px-4 py-1.5 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  {t.popularAreas}
                </div>
                <Link href="/practice-areas/personal-injury" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#3d7826]">
                  {language === 'es' ? 'Lesiones Personales' : 'Personal Injury'}
                </Link>
                <Link href="/practice-areas/employment" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#3d7826]">
                  {language === 'es' ? 'Derecho Laboral' : 'Employment Law'}
                </Link>
                <Link href="/practice-areas/personal-injury" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#3d7826]">
                  {language === 'es' ? 'Accidentes de Auto' : 'Car Accidents'}
                </Link>
                <Link href="/practice-areas/family-law" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#3d7826]">
                  {language === 'es' ? 'Derecho Familiar' : 'Family Law'}
                </Link>
                <Link href="/practice-areas/landlord-tenant" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#3d7826]">
                  {language === 'es' ? 'Inquilinos y Propietarios' : 'Landlord-Tenant'}
                </Link>
                <div className="border-t border-gray-100 my-1"></div>
                <Link href="/practice-areas" className="block px-4 py-2 text-xs font-bold text-[#3d7826] hover:underline">
                  {t.viewAllPracticeAreas}
                </Link>
              </div>
            )}
          </div>

          <Link href="/how-it-works" className="font-medium hover:text-[#3d7826] transition-colors">
            {t.howItWorks}
          </Link>

          <Link href="/attorneys" className="font-medium hover:text-[#3d7826] transition-colors">
            {t.findALawyer}
          </Link>

          {/* Resources Dropdown */}
          <div 
            className="relative group py-2 cursor-pointer"
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}
          >
            <Link href="/legal-resources" className="flex items-center gap-1 font-medium hover:text-[#3d7826] transition-colors cursor-pointer">
              <span>{t.resources}</span>
              <ChevronDown className="w-3.5 h-3.5 text-gray-500 group-hover:text-[#3d7826] transition-transform group-hover:rotate-180 duration-200" />
            </Link>

            {resourcesOpen && (
              <div className="absolute top-full left-0 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-3 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <Link href="/legal-resources" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#3d7826]">
                  {t.legalGuides}
                </Link>
                <Link href="/#faqs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#3d7826]">
                  {t.faqs}
                </Link>
                <Link href="/california" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#3d7826]">
                  {t.countyDirectory}
                </Link>
              </div>
            )}
          </div>

          <Link href="/about" className="font-medium hover:text-[#3d7826] transition-colors">
            {t.aboutUs}
          </Link>

          <Link href="/contact" className="font-medium hover:text-[#3d7826] transition-colors">
            {t.contact}
          </Link>
        </nav>

        {/* Right Action: Phone Pill Button */}
        <div className="hidden sm:flex items-center">
          <a
            href="tel:7603720007"
            className="flex items-center gap-2 px-5 py-2 rounded-full border border-gray-300 hover:border-[#3d7826] bg-white text-[#0f233a] hover:text-[#3d7826] transition-all duration-200 shadow-xs font-semibold text-sm group"
          >
            <Phone className="w-4 h-4 text-[#3d7826] group-hover:scale-110 transition-transform" />
            <span>(760) 372-0007</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-1.5 text-gray-700 hover:text-[#0f233a]"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-6 py-4 shadow-lg space-y-3">
          <Link
            href="/practice-areas"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-gray-800 hover:text-[#3d7826]"
          >
            {t.practiceAreas}
          </Link>
          <Link
            href="/how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-gray-800 hover:text-[#3d7826]"
          >
            {t.howItWorks}
          </Link>
          <Link
            href="/attorneys"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-gray-800 hover:text-[#3d7826]"
          >
            {t.findALawyer}
          </Link>
          <Link
            href="/legal-resources"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-gray-800 hover:text-[#3d7826]"
          >
            {t.resources}
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-gray-800 hover:text-[#3d7826]"
          >
            {t.aboutUs}
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-gray-800 hover:text-[#3d7826]"
          >
            {t.contact}
          </Link>
          <div className="pt-2">
            <a
              href="tel:7603720007"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full border border-[#3d7826] text-[#3d7826] font-semibold text-sm"
            >
              <Phone className="w-4 h-4 text-[#3d7826]" />
              <span>(760) 372-0007</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
