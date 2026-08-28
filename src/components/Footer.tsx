'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, MapPin, Shield, Building2, ArrowRight, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language].footer;
  const isEs = language === 'es';

  // Dynamic routes based on locale
  const homeHref = isEs ? '/es' : '/';
  const intakeHref = isEs ? '/es/evaluacion-gratuita' : '/intake';
  const practiceAreasHref = isEs ? '/es/areas-de-practica' : '/practice-areas';
  const employmentHref = isEs ? '/es/areas-de-practica/derecho-laboral' : '/practice-areas/employment';
  const personalInjuryHref = isEs ? '/es/areas-de-practica/lesiones-personales' : '/practice-areas/personal-injury';
  const tenantHref = isEs ? '/es/areas-de-practica/arrendador-inquilino' : '/practice-areas/landlord-tenant';
  const adaHref = isEs ? '/es/areas-de-practica/ada-discapacidad' : '/practice-areas/ada-disability';
  const consumerHref = isEs ? '/es/areas-de-practica/proteccion-al-consumidor' : '/practice-areas/consumer-protection';
  const familyHref = isEs ? '/es/areas-de-practica/derecho-familiar' : '/practice-areas/family-law';
  const immigrationHref = isEs ? '/es/areas-de-practica/inmigracion' : '/practice-areas/immigration';
  const resourcesHref = isEs ? '/es/recursos' : '/legal-resources';
  const californiaHref = isEs ? '/es/california' : '/california';
  const laCountyHref = isEs ? '/es/california/condado-de-los-angeles' : '/california/los-angeles-county';
  const sdCountyHref = isEs ? '/es/california/condado-de-san-diego' : '/california/san-diego-county';
  const ocCountyHref = isEs ? '/es/california/condado-de-orange' : '/california/orange-county';
  const sfCountyHref = isEs ? '/es/california/condado-de-san-francisco' : '/california/san-francisco-county';
  const faqsHref = isEs ? '/es#faqs' : '/#faqs';
  const attorneysHref = isEs ? '/es/abogados' : '/attorneys';
  const howItWorksHref = isEs ? '/es/como-funciona' : '/how-it-works';
  const forAttorneysHref = isEs ? '/es/para-abogados' : '/for-attorneys';
  const aboutHref = isEs ? '/es/quienes-somos' : '/about';
  const contactHref = isEs ? '/es/contacto' : '/contact';
  const privacyHref = isEs ? '/es/politica-de-privacidad' : '/privacy-policy';
  const termsHref = isEs ? '/es/terminos-de-uso' : '/terms-of-use';
  const disclaimerHref = isEs ? '/es/aviso-legal' : '/disclaimer';
  const accessibilityHref = isEs ? '/es/accesibilidad' : '/accessibility';

  return (
    <footer className="bg-[#0b1d33] text-gray-300 text-xs border-t border-[#162e4d]">
      {/* Top Footer Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          
          {/* Column 1: Brand, Operator & Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href={homeHref} aria-label="CA Legal Source Home" className="inline-block group py-1">
              <Image
                src="/logo.png"
                alt="CA Legal Source"
                width={360}
                height={110}
                className="h-16 sm:h-20 md:h-24 w-auto object-contain opacity-95 group-hover:opacity-100 transition-opacity"
              />
            </Link>

            <p className="text-gray-400 text-xs leading-relaxed max-w-sm">
              {t.desc}
            </p>

            {/* Operator Box: DPA Attorneys at Law */}
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-2 max-w-sm text-xs">
              <div className="flex items-center gap-1.5 text-white font-bold">
                <Building2 className="w-4 h-4 text-[#52a632]" />
                <span>{t.operatedBy}</span>
              </div>
              <div className="text-gray-400 leading-relaxed text-[11.5px] pl-5.5 space-y-0.5">
                <p className="text-gray-300 font-medium">{t.sanDiegoOffice}</p>
                <p>8880 Rio San Diego Dr., Suite 800</p>
                <p>San Diego, CA 92108</p>
              </div>
            </div>

            <div className="pt-1 space-y-2.5 text-xs text-gray-400">
              <Link href={intakeHref} className="flex items-center gap-2 text-[#85db61] hover:text-[#a2ea83] font-semibold transition-colors">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{isEs ? 'Iniciar Evaluación Gratuita en Línea' : 'Start Free Case Evaluation Online'}</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
              <a href="mailto:questions@dpalaw.com" aria-label="Email DPA Attorneys at Law" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-3.5 h-3.5 text-[#52a632]" />
                <span>questions@dpalaw.com</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#52a632]" />
                <span>{t.servingAll}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Legal Practice Areas */}
          <div className="space-y-3">
            <p className="font-playfair font-bold text-sm text-white tracking-wide">
              {t.findHelp}
            </p>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><Link href={employmentHref} className="hover:text-white transition-colors">{isEs ? 'Derecho Laboral' : 'Employment Law'}</Link></li>
              <li><Link href={personalInjuryHref} className="hover:text-white transition-colors">{isEs ? 'Lesiones Personales' : 'Personal Injury'}</Link></li>
              <li><Link href={tenantHref} className="hover:text-white transition-colors">{isEs ? 'Inquilinos y Propietarios' : 'Landlord-Tenant Rights'}</Link></li>
              <li><Link href={adaHref} className="hover:text-white transition-colors">{isEs ? 'Discapacidad y ADA' : 'ADA & Disability Law'}</Link></li>
              <li><Link href={consumerHref} className="hover:text-white transition-colors">{isEs ? 'Protección al Consumidor' : 'Consumer Protection'}</Link></li>
              <li><Link href={familyHref} className="hover:text-white transition-colors">{isEs ? 'Derecho Familiar' : 'Family Law & Custody'}</Link></li>
              <li><Link href={immigrationHref} className="hover:text-white transition-colors">{isEs ? 'Inmigración en California' : 'California Immigration'}</Link></li>
              <li><Link href={practiceAreasHref} aria-label="View all 17 practice areas" className="text-[#52a632] hover:underline font-semibold">{t.viewAll17}</Link></li>
            </ul>
          </div>

          {/* Column 3: Resources & California Counties */}
          <div className="space-y-3">
            <p className="font-playfair font-bold text-sm text-white tracking-wide">
              {t.caResources}
            </p>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><Link href={resourcesHref} className="hover:text-white transition-colors">{t.legalGuides}</Link></li>
              <li><Link href={californiaHref} className="hover:text-white transition-colors">{t.countyDirectories}</Link></li>
              <li><Link href={laCountyHref} className="hover:text-white transition-colors">{isEs ? 'Condado de Los Ángeles' : 'Los Angeles County'}</Link></li>
              <li><Link href={sdCountyHref} className="hover:text-white transition-colors">{isEs ? 'Condado de San Diego' : 'San Diego County'}</Link></li>
              <li><Link href={ocCountyHref} className="hover:text-white transition-colors">{isEs ? 'Condado de Orange' : 'Orange County'}</Link></li>
              <li><Link href={sfCountyHref} className="hover:text-white transition-colors">{isEs ? 'Condado de San Francisco' : 'San Francisco County'}</Link></li>
              <li><Link href={faqsHref} className="hover:text-white transition-colors">{isEs ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}</Link></li>
            </ul>
          </div>

          {/* Column 4: Platform & Directory */}
          <div className="space-y-3">
            <p className="font-playfair font-bold text-sm text-white tracking-wide">
              {t.platformDir}
            </p>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><Link href={intakeHref} aria-label="Start case intake" className="text-[#52a632] font-semibold hover:underline">{t.startIntake}</Link></li>
              <li><Link href={attorneysHref} className="hover:text-white transition-colors">{t.attorneyDir}</Link></li>
              <li><Link href={howItWorksHref} className="hover:text-white transition-colors">{isEs ? 'Cómo Funciona' : 'How It Works'}</Link></li>
              <li><Link href={forAttorneysHref} className="hover:text-white transition-colors">{t.forAttorneys}</Link></li>
              <li><Link href={aboutHref} className="hover:text-white transition-colors">{isEs ? 'Quiénes Somos' : 'About Us'}</Link></li>
              <li><Link href={contactHref} className="hover:text-white transition-colors">{isEs ? 'Contacto y Ayuda' : 'Contact & Complaints'}</Link></li>
              <li><Link href={privacyHref} className="hover:text-white transition-colors">{t.privacyPolicy}</Link></li>
              <li><Link href={termsHref} className="hover:text-white transition-colors">{t.termsOfUse}</Link></li>
              <li><Link href={disclaimerHref} className="hover:text-white transition-colors">{t.legalDisclaimer}</Link></li>
              <li><Link href={accessibilityHref} className="hover:text-white transition-colors">{t.accessibility}</Link></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Mandatory Statutory Compliance Disclaimer & Credits */}
      <div className="bg-[#071322] py-8 border-t border-[#12263f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4 text-center">
          <div className="flex items-center justify-center gap-2 text-gray-400 text-xs font-semibold">
            <Shield className="w-4 h-4 text-[#52a632]" />
            <span>{t.noticeTitle}</span>
          </div>

          <p className="text-[11px] text-gray-400 leading-relaxed max-w-4xl mx-auto">
            {t.operatorNotice}
          </p>

          <p className="text-[11px] text-gray-500 leading-relaxed max-w-4xl mx-auto">
            {t.referralNotice}
          </p>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-gray-400 text-[11px] border-t border-[#12263f]">
            <p>© {new Date().getFullYear()} CA Legal Source • {t.operatedBy}. {t.rightsReserved}</p>
            
            {/* Clickable Designer / Developer Credit Link */}
            <div className="text-gray-400 text-[11px]">
              Designed and Developed by{' '}
              <a
                href="https://www.aiwebsiteservice.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#85db61] hover:text-[#a2ea83] font-semibold hover:underline transition-colors"
              >
                AIWEBSITESERVICE
              </a>
            </div>

            <div className="flex items-center gap-4 text-gray-400">
              <Link href={privacyHref} aria-label="Legal Privacy Policy notice" className="hover:underline">{isEs ? 'Privacidad' : 'Privacy'}</Link>
              <span>•</span>
              <Link href={termsHref} aria-label="Platform Terms of Use" className="hover:underline">{isEs ? 'Términos' : 'Terms'}</Link>
              <span>•</span>
              <Link href={disclaimerHref} aria-label="Statutory Attorney Disclaimer" className="hover:underline">{isEs ? 'Aviso Legal' : 'Disclaimer'}</Link>
              <span>•</span>
              <Link href={accessibilityHref} aria-label="Digital Accessibility Statement" className="hover:underline">{isEs ? 'Accesibilidad' : 'Accessibility'}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
