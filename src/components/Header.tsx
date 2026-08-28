'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [practiceOpen, setPracticeOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language].header;
  const isEs = language === 'es';

  // Dynamic routes based on locale
  const homeHref = isEs ? '/es' : '/';
  const practiceAreasHref = isEs ? '/es/areas-de-practica' : '/practice-areas';
  const injuryHref = isEs ? '/es/areas-de-practica/lesiones-personales' : '/practice-areas/personal-injury';
  const employmentHref = isEs ? '/es/areas-de-practica/derecho-laboral' : '/practice-areas/employment';
  const carAccidentHref = isEs ? '/es/recursos/guia-accidentes-de-auto-en-california' : '/legal-resources/california-car-accident-step-by-step-guide';
  const familyHref = isEs ? '/es/areas-de-practica/derecho-familiar' : '/practice-areas/family-law';
  const tenantHref = isEs ? '/es/areas-de-practica/arrendador-inquilino' : '/practice-areas/landlord-tenant';
  const howItWorksHref = isEs ? '/es/como-funciona' : '/how-it-works';
  const attorneysHref = isEs ? '/es/abogados' : '/attorneys';
  const resourcesHref = isEs ? '/es/recursos' : '/legal-resources';
  const faqsHref = isEs ? '/es#faqs' : '/#faqs';
  const californiaHref = isEs ? '/es/california' : '/california';
  const aboutHref = isEs ? '/es/quienes-somos' : '/about';
  const contactHref = isEs ? '/es/contacto' : '/contact';

  return (
    <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-md border-b border-gray-200 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-1.5 sm:py-2 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href={homeHref} aria-label="CA Legal Source Homepage" className="flex items-center group py-0.5">
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

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-7 text-[15px] font-medium text-[#1e293b]">
          {/* Practice Areas Dropdown */}
          <div 
            className="relative group py-2 cursor-pointer"
            onMouseEnter={() => setPracticeOpen(true)}
            onMouseLeave={() => setPracticeOpen(false)}
          >
            <Link href={practiceAreasHref} className="flex items-center gap-1 font-medium hover:text-[#3d7826] transition-colors cursor-pointer">
              <span>{t.practiceAreas}</span>
              <ChevronDown className="w-3.5 h-3.5 text-gray-500 group-hover:text-[#3d7826] transition-transform group-hover:rotate-180 duration-200" />
            </Link>

            {practiceOpen && (
              <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-3 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <div className="px-4 py-1.5 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  {t.popularAreas}
                </div>
                <Link href={injuryHref} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#3d7826]">
                  {isEs ? 'Lesiones Personales' : 'Personal Injury'}
                </Link>
                <Link href={employmentHref} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#3d7826]">
                  {isEs ? 'Derecho Laboral' : 'Employment Law'}
                </Link>
                <Link href={carAccidentHref} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#3d7826]">
                  {isEs ? 'Guía de Accidentes de Auto' : 'Car Accident Guide'}
                </Link>
                <Link href={familyHref} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#3d7826]">
                  {isEs ? 'Derecho Familiar' : 'Family Law'}
                </Link>
                <Link href={tenantHref} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#3d7826]">
                  {isEs ? 'Inquilinos y Propietarios' : 'Landlord-Tenant'}
                </Link>
                <div className="border-t border-gray-100 my-1"></div>
                <Link href={practiceAreasHref} className="block px-4 py-2 text-xs font-bold text-[#3d7826] hover:underline">
                  {t.viewAllPracticeAreas}
                </Link>
              </div>
            )}
          </div>

          <Link href={howItWorksHref} className="font-medium hover:text-[#3d7826] transition-colors">
            {t.howItWorks}
          </Link>

          <Link href={attorneysHref} className="font-medium hover:text-[#3d7826] transition-colors">
            {t.findALawyer}
          </Link>

          {/* Resources Dropdown */}
          <div 
            className="relative group py-2 cursor-pointer"
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}
          >
            <Link href={resourcesHref} className="flex items-center gap-1 font-medium hover:text-[#3d7826] transition-colors cursor-pointer">
              <span>{t.resources}</span>
              <ChevronDown className="w-3.5 h-3.5 text-gray-500 group-hover:text-[#3d7826] transition-transform group-hover:rotate-180 duration-200" />
            </Link>

            {resourcesOpen && (
              <div className="absolute top-full left-0 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-3 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <Link href={resourcesHref} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#3d7826]">
                  {t.legalGuides}
                </Link>
                <Link href={faqsHref} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#3d7826]">
                  {t.faqs}
                </Link>
                <Link href={californiaHref} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#3d7826]">
                  {t.countyDirectory}
                </Link>
              </div>
            )}
          </div>

          <Link href={aboutHref} className="font-medium hover:text-[#3d7826] transition-colors">
            {t.aboutUs}
          </Link>

          <Link href={contactHref} className="font-medium hover:text-[#3d7826] transition-colors">
            {t.contact}
          </Link>
        </nav>

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
            href={practiceAreasHref}
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-gray-800 hover:text-[#3d7826]"
          >
            {t.practiceAreas}
          </Link>
          <Link
            href={howItWorksHref}
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-gray-800 hover:text-[#3d7826]"
          >
            {t.howItWorks}
          </Link>
          <Link
            href={attorneysHref}
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-gray-800 hover:text-[#3d7826]"
          >
            {t.findALawyer}
          </Link>
          <Link
            href={resourcesHref}
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-gray-800 hover:text-[#3d7826]"
          >
            {t.resources}
          </Link>
          <Link
            href={aboutHref}
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-gray-800 hover:text-[#3d7826]"
          >
            {t.aboutUs}
          </Link>
          <Link
            href={contactHref}
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-gray-800 hover:text-[#3d7826]"
          >
            {t.contact}
          </Link>
        </div>
      )}
    </header>
  );
}
