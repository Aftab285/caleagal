'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  ShieldCheck, 
  Users, 
  Lock, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Check,
  AlertCircle,
  Loader2
} from 'lucide-react';
import { all17PracticeAreas } from '@/data/practiceAreas';
import { californiaCounties } from '@/data/counties';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

export default function HeroSection() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  // Step State (1 to 4)
  const [step, setStep] = useState(1);

  // Form State
  const [formData, setFormData] = useState({
    practiceArea: '',
    description: '',
    county: '',
    incidentDate: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    preferredLanguage: language === 'es' ? 'Spanish' : 'English',
    consent: false
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleNext = async () => {
    const newErrors: { [key: string]: string } = {};

    if (step === 1) {
      if (!formData.practiceArea) {
        newErrors.practiceArea = language === 'es' ? 'Por favor seleccione un asunto legal.' : 'Please select a legal issue.';
      }
      if (!formData.description.trim()) {
        newErrors.description = language === 'es' ? 'Por favor describa lo que sucedió.' : 'Please describe what happened.';
      }
      if (!formData.county) {
        newErrors.county = language === 'es' ? 'Por favor seleccione su condado de California.' : 'Please select your California county.';
      }
    } else if (step === 3) {
      if (!formData.firstName.trim()) newErrors.firstName = language === 'es' ? 'El nombre es obligatorio.' : 'First name is required.';
      if (!formData.lastName.trim()) newErrors.lastName = language === 'es' ? 'El apellido es obligatorio.' : 'Last name is required.';
      if (!formData.phone.trim()) newErrors.phone = language === 'es' ? 'El número de teléfono es obligatorio.' : 'Valid phone number is required.';
      if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = language === 'es' ? 'El correo electrónico es obligatorio.' : 'Valid email is required.';
      if (!formData.consent) newErrors.consent = language === 'es' ? 'Debe aceptar los términos de privacidad.' : 'Please agree to the privacy policy.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    if (step < 4) {
      setStep(step + 1);
    } else {
      setIsSubmitting(true);
      setSubmitError('');

      try {
        const res = await fetch('/api/intake', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!res.ok) {
          throw new Error('Failed to submit intake.');
        }

        setSubmitted(true);
      } catch (err: any) {
        console.error('Submission error:', err);
        try {
          await fetch('https://formsubmit.co/ajax/aftabnew77@gmail.com', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Origin': 'https://calegalsource.com',
              'Referer': 'https://calegalsource.com/',
            },
            body: JSON.stringify({
              _subject: `New CA Legal Intake: ${formData.practiceArea} (${formData.county}) - ${formData.firstName} ${formData.lastName}`,
              'Client Name': `${formData.firstName} ${formData.lastName}`,
              'Phone': formData.phone,
              'Email': formData.email,
              'Legal Category': formData.practiceArea,
              'County': formData.county,
              'Incident Date': formData.incidentDate || 'Not specified',
              'Case Details': formData.description,
              'Preferred Language': formData.preferredLanguage,
              'Operated By': 'DPA Attorneys at Law (San Diego Office)'
            })
          });
          setSubmitted(true);
        } catch (fallbackErr) {
          setSubmitError(language === 'es' ? 'Hubo un problema al enviar. Por favor llame al (760) 372-0007.' : 'There was an issue submitting. Please call (760) 372-0007.');
        }
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
      setErrors({});
    }
  };

  return (
    <section id="hero-intake" className="relative overflow-hidden pt-4 pb-10 sm:pt-6 sm:pb-12 lg:pt-10 lg:pb-16 border-b border-gray-200 min-h-[580px] flex items-center bg-[#f8fafc]">
      {/* Background Image: Vivid California Bay Bridge & Skyline */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-california-bridge.jpg"
          alt="California Bay Bridge and Skyline"
          fill
          priority
          className="object-cover object-[85%_center] lg:object-center"
        />
        {/* Mobile & Desktop Adaptive Contrast Overlays */}
        {/* On mobile: smooth high-contrast white overlay so text is 100% sharp and readable over the palm tree backdrop */}
        <div className="absolute inset-0 bg-white/85 sm:bg-white/70 lg:bg-transparent lg:bg-gradient-to-r lg:from-white/92 lg:via-white/50 lg:to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/90 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* LEFT COLUMN: Hero Copy & Trust Badges */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#cde8c5] text-[#3d7826] text-[11px] font-bold tracking-wider uppercase shadow-xs">
              {t.badge}
            </div>

            {/* Main Headline with Playfair Display */}
            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-[52px] font-bold text-[#0f233a] leading-[1.14] sm:leading-[1.12] tracking-tight drop-shadow-xs">
              {t.headlinePart1} <br />
              <span className="text-[#0f233a]">{t.headlinePart2}</span>
            </h1>

            {/* Subheading with Inter */}
            <p className="text-gray-800 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-medium drop-shadow-xs">
              {t.subheading}
            </p>

            {/* Benefit Checkmark Box */}
            <div className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl bg-white/95 backdrop-blur-md border border-gray-300 shadow-md max-w-xl">
              <div className="w-6 h-6 rounded-full bg-[#3d7826] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                <Check className="w-4 h-4 text-white stroke-[3]" />
              </div>
              <div className="text-sm">
                <p className="font-semibold text-[#0f233a]">
                  {t.freeEval}
                </p>
                <p className="text-gray-600 font-normal text-xs sm:text-sm">
                  {t.noUpfront}
                </p>
              </div>
            </div>

            {/* 4 Trust Badges in Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5 pt-2 sm:pt-3.5 border-t border-gray-400/40">
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-xs p-2 rounded-lg border border-gray-200 shadow-2xs">
                <div className="w-7 h-7 rounded-full bg-[#edf7e8] flex items-center justify-center shrink-0 text-[#3d7826]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-bold text-[#0f233a] leading-tight">
                  {t.badge1}
                </span>
              </div>

              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-xs p-2 rounded-lg border border-gray-200 shadow-2xs">
                <div className="w-7 h-7 rounded-full bg-[#edf7e8] flex items-center justify-center shrink-0 text-[#3d7826]">
                  <Users className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-bold text-[#0f233a] leading-tight">
                  {t.badge2}
                </span>
              </div>

              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-xs p-2 rounded-lg border border-gray-200 shadow-2xs">
                <div className="w-7 h-7 rounded-full bg-[#edf7e8] flex items-center justify-center shrink-0 text-[#3d7826]">
                  <Lock className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-bold text-[#0f233a] leading-tight">
                  {t.badge3}
                </span>
              </div>

              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-xs p-2 rounded-lg border border-gray-200 shadow-2xs">
                <div className="w-7 h-7 rounded-full bg-[#edf7e8] flex items-center justify-center shrink-0 text-[#3d7826]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-bold text-[#0f233a] leading-tight">
                  {t.badge4}
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Intake Card */}
          <div className="lg:col-span-5">
            <div className="bg-white/98 backdrop-blur-md rounded-2xl shadow-[0_16px_50px_rgba(15,35,58,0.22)] border border-gray-300 p-5 sm:p-6 relative">
              
              {/* Card Header */}
              <div className="text-center pb-4 border-b border-gray-100">
                <h2 className="font-playfair text-[20px] sm:text-[22px] lg:text-2xl font-bold text-[#0f233a]">
                  {t.intakeTitle}
                </h2>
                <p className="text-xs sm:text-sm font-semibold text-[#3d7826] mt-0.5">
                  {t.intakeSubtitle}
                </p>

                {/* 4-Step Stepper */}
                <div className="flex items-center justify-center gap-2 mt-4">
                  {[1, 2, 3, 4].map((stepNumber, idx) => (
                    <React.Fragment key={stepNumber}>
                      <div
                        className={`w-6.5 h-6.5 rounded-full flex items-center justify-center text-[11px] font-bold transition-all duration-200 ${
                          step >= stepNumber
                            ? 'bg-[#3d7826] text-white shadow-xs'
                            : 'bg-gray-100 text-gray-400 border border-gray-200'
                        }`}
                      >
                        {step > stepNumber ? <Check className="w-3 h-3" /> : stepNumber}
                      </div>
                      {idx < 3 && (
                        <div
                          className={`h-[2px] w-6 sm:w-8 rounded-full transition-all duration-200 ${
                            step > stepNumber ? 'bg-[#3d7826]' : 'bg-gray-200'
                          }`}
                        />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Form Body */}
              <div className="mt-4 space-y-3.5">
                {submitError && (
                  <div className="p-3 bg-red-50 text-red-700 rounded-lg text-xs flex items-center gap-2 border border-red-200">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{submitError}</span>
                  </div>
                )}

                {submitted ? (
                  <div className="text-center py-6 space-y-3">
                    <div className="w-12 h-12 bg-[#edf7e8] text-[#3d7826] rounded-full flex items-center justify-center mx-auto shadow-sm">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="font-playfair text-xl font-bold text-[#0f233a]">
                      {t.thankYouTitle}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {t.thankYouDesc}
                    </p>
                    <div className="p-3 bg-gray-50 rounded-xl text-xs text-gray-500 text-left space-y-1">
                      <p><strong>{t.step4.category}</strong> {formData.practiceArea || 'General Legal'}</p>
                      <p><strong>{t.step4.county}</strong> {formData.county || 'California'}</p>
                      <p><strong>Status:</strong> {language === 'es' ? 'Enviado a revisión' : 'Sent for Review'}</p>
                    </div>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setStep(1);
                      }}
                      className="text-xs text-[#3d7826] font-semibold hover:underline cursor-pointer"
                    >
                      {t.submitAnother}
                    </button>
                  </div>
                ) : (
                  <>
                    {/* STEP 1: Practice Area, Description, County */}
                    {step === 1 && (
                      <div className="space-y-3">
                        <div>
                          <label className="block text-xs font-semibold text-gray-800 mb-1">
                            {t.step1.issueLabel} <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <select
                              value={formData.practiceArea}
                              onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                              className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#3d7826]/30 focus:border-[#3d7826] transition-colors appearance-none"
                            >
                              <option value="">{t.step1.selectIssue}</option>
                              {all17PracticeAreas.map((area) => (
                                <option key={area} value={area}>
                                  {area}
                                </option>
                              ))}
                            </select>
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-xs">
                              ▼
                            </div>
                          </div>
                          {errors.practiceArea && (
                            <p className="text-red-500 text-[10.5px] mt-1 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" /> {errors.practiceArea}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-gray-800 mb-1">
                            {t.step1.descLabel} <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            rows={3}
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            placeholder={t.step1.descPlaceholder}
                            className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3d7826]/30 focus:border-[#3d7826] transition-colors resize-none"
                          />
                          {errors.description && (
                            <p className="text-red-500 text-[10.5px] mt-1 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" /> {errors.description}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-gray-800 mb-1">
                            {t.step1.countyLabel} <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <select
                              value={formData.county}
                              onChange={(e) => setFormData({ ...formData, county: e.target.value })}
                              className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#3d7826]/30 focus:border-[#3d7826] transition-colors appearance-none"
                            >
                              <option value="">{t.step1.selectCounty}</option>
                              {californiaCounties.map((county) => (
                                <option key={county} value={county}>
                                  {county}
                                </option>
                              ))}
                            </select>
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-xs">
                              ▼
                            </div>
                          </div>
                          {errors.county && (
                            <p className="text-red-500 text-[10.5px] mt-1 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" /> {errors.county}
                            </p>
                          )}
                        </div>
                      </div>
                    )}

                    {/* STEP 2: Incident Details */}
                    {step === 2 && (
                      <div className="space-y-3 animate-in fade-in duration-200">
                        <div>
                          <label className="block text-xs font-semibold text-gray-800 mb-1">
                            {t.step2.dateLabel}
                          </label>
                          <input
                            type="date"
                            value={formData.incidentDate}
                            onChange={(e) => setFormData({ ...formData, incidentDate: e.target.value })}
                            className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#3d7826]/30 focus:border-[#3d7826]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-gray-800 mb-1">
                            {t.step2.langLabel}
                          </label>
                          <div className="grid grid-cols-2 gap-2.5">
                            {['English', 'Spanish'].map((lang) => (
                              <button
                                key={lang}
                                type="button"
                                onClick={() => setFormData({ ...formData, preferredLanguage: lang })}
                                className={`py-2 px-3 text-xs font-semibold rounded-lg border text-center transition-all cursor-pointer ${
                                  formData.preferredLanguage === lang
                                    ? 'border-[#3d7826] bg-[#edf7e8] text-[#3d7826]'
                                    : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                                }`}
                              >
                                {lang === 'Spanish' ? (language === 'es' ? 'Español' : 'Spanish') : (language === 'es' ? 'Inglés' : 'English')}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="p-3 bg-[#f8fafc] rounded-lg border border-gray-200 text-xs text-gray-600">
                          {t.step2.jurisdictionNote}
                        </div>
                      </div>
                    )}

                    {/* STEP 3: Contact Info */}
                    {step === 3 && (
                      <div className="space-y-3 animate-in fade-in duration-200">
                        <div className="grid grid-cols-2 gap-2.5">
                          <div>
                            <label className="block text-xs font-semibold text-gray-800 mb-1">
                              {t.step3.firstName} <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              placeholder="John"
                              value={formData.firstName}
                              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                              className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d7826]/30 focus:border-[#3d7826]"
                            />
                            {errors.firstName && <p className="text-red-500 text-[10px] mt-0.5">{errors.firstName}</p>}
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-gray-800 mb-1">
                              {t.step3.lastName} <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              placeholder="Doe"
                              value={formData.lastName}
                              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                              className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d7826]/30 focus:border-[#3d7826]"
                            />
                            {errors.lastName && <p className="text-red-500 text-[10px] mt-0.5">{errors.lastName}</p>}
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-gray-800 mb-1">
                            {t.step3.phone} <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            placeholder="(760) 372-0007"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d7826]/30 focus:border-[#3d7826]"
                          />
                          {errors.phone && <p className="text-red-500 text-[10px] mt-0.5">{errors.phone}</p>}
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-gray-800 mb-1">
                            {t.step3.email} <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            placeholder="user@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d7826]/30 focus:border-[#3d7826]"
                          />
                          {errors.email && <p className="text-red-500 text-[10px] mt-0.5">{errors.email}</p>}
                        </div>

                        <div className="pt-1">
                          <label className="flex items-start gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={formData.consent}
                              onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                              className="mt-0.5 rounded text-[#3d7826] focus:ring-[#3d7826]"
                            />
                            <span className="text-[11px] text-gray-600 leading-tight">
                              {t.step3.consent}
                            </span>
                          </label>
                          {errors.consent && <p className="text-red-500 text-[10px] mt-0.5">{errors.consent}</p>}
                        </div>
                      </div>
                    )}

                    {/* STEP 4: Review and Submit */}
                    {step === 4 && (
                      <div className="space-y-3 animate-in fade-in duration-200">
                        <div className="p-3 bg-gray-50 rounded-xl border border-gray-200 text-xs space-y-1.5">
                          <div className="flex justify-between">
                            <span className="text-gray-500">{t.step4.category}</span>
                            <span className="font-semibold text-gray-900">{formData.practiceArea}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">{t.step4.county}</span>
                            <span className="font-semibold text-gray-900">{formData.county}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">{t.step4.name}</span>
                            <span className="font-semibold text-gray-900">{formData.firstName} {formData.lastName}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">{t.step4.phone}</span>
                            <span className="font-semibold text-gray-900">{formData.phone}</span>
                          </div>
                        </div>

                        <p className="text-[11px] text-gray-500 text-center">
                          {t.step4.reviewTitle}
                        </p>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="pt-2 flex items-center gap-2">
                      {step > 1 && (
                        <button
                          type="button"
                          disabled={isSubmitting}
                          onClick={handleBack}
                          className="px-3.5 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-semibold text-xs sm:text-sm transition-colors cursor-pointer disabled:opacity-50"
                        >
                          <ArrowLeft className="w-4 h-4" />
                        </button>
                      )}

                      <button
                        type="button"
                        disabled={isSubmitting}
                        onClick={handleNext}
                        className="flex-1 bg-[#3d7826] hover:bg-[#32641e] text-white font-semibold py-3 px-5 rounded-lg text-sm sm:text-base flex items-center justify-center gap-2 shadow-sm transition-all duration-150 active:scale-[0.99] cursor-pointer disabled:opacity-75"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>{language === 'es' ? 'Enviando...' : 'Submitting...'}</span>
                          </>
                        ) : (
                          <>
                            <span>{step === 4 ? t.submit : t.continue}</span>
                            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                          </>
                        )}
                      </button>
                    </div>

                    {/* Confidential Security Footnote */}
                    <div className="flex items-center gap-1.5 text-gray-500 text-[11px] pt-1">
                      <div className="w-4 h-4 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                        <Lock className="w-2.5 h-2.5 text-[#0f233a]" />
                      </div>
                      <p className="leading-tight text-gray-600 text-[11px] font-medium">
                        {t.secureNote}
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
