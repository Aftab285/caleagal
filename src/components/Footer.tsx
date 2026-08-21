'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin, Shield, Building2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language].footer;

  return (
    <footer className="bg-[#0b1d33] text-gray-300 text-xs border-t border-[#162e4d]">
      {/* Top Footer Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          
          {/* Column 1: Brand, Operator & Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block group py-1">
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

            <div className="pt-1 space-y-2 text-xs text-gray-400">
              <a href="tel:7603720007" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#52a632]" />
                <span className="text-gray-200 font-medium">(760) 372-0007</span>
              </a>
              <a href="mailto:questions@dpalaw.com" className="flex items-center gap-2 hover:text-white transition-colors">
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
            <h4 className="font-playfair font-bold text-sm text-white tracking-wide">
              {t.findHelp}
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><Link href="/practice-areas/employment" className="hover:text-white transition-colors">{language === 'es' ? 'Derecho Laboral' : 'Employment Law'}</Link></li>
              <li><Link href="/practice-areas/personal-injury" className="hover:text-white transition-colors">{language === 'es' ? 'Lesiones Personales' : 'Personal Injury'}</Link></li>
              <li><Link href="/practice-areas/landlord-tenant" className="hover:text-white transition-colors">{language === 'es' ? 'Inquilinos y Propietarios' : 'Landlord-Tenant Rights'}</Link></li>
              <li><Link href="/practice-areas/ada-disability" className="hover:text-white transition-colors">{language === 'es' ? 'Discapacidad y ADA' : 'ADA & Disability Law'}</Link></li>
              <li><Link href="/practice-areas/consumer-protection" className="hover:text-white transition-colors">{language === 'es' ? 'Protección al Consumidor' : 'Consumer Protection'}</Link></li>
              <li><Link href="/practice-areas/family-law" className="hover:text-white transition-colors">{language === 'es' ? 'Derecho Familiar' : 'Family Law & Custody'}</Link></li>
              <li><Link href="/practice-areas/immigration" className="hover:text-white transition-colors">{language === 'es' ? 'Inmigración en California' : 'California Immigration'}</Link></li>
              <li><Link href="/practice-areas" className="text-[#52a632] hover:underline font-semibold">{t.viewAll17}</Link></li>
            </ul>
          </div>

          {/* Column 3: Resources & California Counties */}
          <div className="space-y-3">
            <h4 className="font-playfair font-bold text-sm text-white tracking-wide">
              {t.caResources}
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><Link href="/legal-resources" className="hover:text-white transition-colors">{t.legalGuides}</Link></li>
              <li><Link href="/california" className="hover:text-white transition-colors">{t.countyDirectories}</Link></li>
              <li><Link href="/california/los-angeles-county" className="hover:text-white transition-colors">Los Angeles County</Link></li>
              <li><Link href="/california/san-diego-county" className="hover:text-white transition-colors">San Diego County</Link></li>
              <li><Link href="/california/orange-county" className="hover:text-white transition-colors">Orange County</Link></li>
              <li><Link href="/california/san-francisco-county" className="hover:text-white transition-colors">San Francisco County</Link></li>
              <li><Link href="/#faqs" className="hover:text-white transition-colors">{language === 'es' ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}</Link></li>
            </ul>
          </div>

          {/* Column 4: Platform & Directory */}
          <div className="space-y-3">
            <h4 className="font-playfair font-bold text-sm text-white tracking-wide">
              {t.platformDir}
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><Link href="/intake" className="text-[#52a632] font-semibold hover:underline">{t.startIntake}</Link></li>
              <li><Link href="/attorneys" className="hover:text-white transition-colors">{t.attorneyDir}</Link></li>
              <li><Link href="/how-it-works" className="hover:text-white transition-colors">{language === 'es' ? 'Cómo Funciona' : 'How It Works'}</Link></li>
              <li><Link href="/for-attorneys" className="hover:text-white transition-colors">{t.forAttorneys}</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">{language === 'es' ? 'Quiénes Somos' : 'About Us'}</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">{language === 'es' ? 'Contacto y Ayuda' : 'Contact & Complaints'}</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">{t.privacyPolicy}</Link></li>
              <li><Link href="/terms-of-use" className="hover:text-white transition-colors">{t.termsOfUse}</Link></li>
              <li><Link href="/disclaimer" className="hover:text-white transition-colors">{t.legalDisclaimer}</Link></li>
              <li><Link href="/accessibility" className="hover:text-white transition-colors">{t.accessibility}</Link></li>
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
              <Link href="/privacy-policy" className="hover:underline">{language === 'es' ? 'Privacidad' : 'Privacy'}</Link>
              <span>•</span>
              <Link href="/terms-of-use" className="hover:underline">{language === 'es' ? 'Términos' : 'Terms'}</Link>
              <span>•</span>
              <Link href="/disclaimer" className="hover:underline">{language === 'es' ? 'Aviso Legal' : 'Disclaimer'}</Link>
              <span>•</span>
              <Link href="/accessibility" className="hover:underline">{language === 'es' ? 'Accesibilidad' : 'Accessibility'}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
