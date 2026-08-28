'use client';

import React, { useState } from 'react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Scale, 
  Users, 
  FileCheck, 
  ArrowRight,
  AlertCircle,
  Loader2,
  Building2,
  Mail,
  Phone
} from 'lucide-react';
import { all17PracticeAreas } from '@/data/practiceAreas';
import { californiaCounties } from '@/data/counties';

export default function ForAttorneysPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    barNumber: '',
    firmName: '',
    email: '',
    phone: '',
    primaryCounty: '',
    practiceAreas: '',
    notes: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [validationErrors, setValidationErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    
    // Client Validation
    const errors: { [key: string]: string } = {};
    if (!formData.fullName.trim()) errors.fullName = 'Full Name is required.';
    if (!formData.barNumber.trim()) errors.barNumber = 'California State Bar # is required.';
    if (!formData.email.trim() || !formData.email.includes('@')) errors.email = 'Valid email is required.';
    if (!formData.phone.trim()) errors.phone = 'Phone number is required.';
    if (!formData.primaryCounty) errors.primaryCounty = 'Please select a primary county.';
    if (!formData.practiceAreas) errors.practiceAreas = 'Please select your primary practice focus.';

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    setValidationErrors({});
    setStatus('loading');

    try {
      const res = await fetch('/api/attorney-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit panel application. Please try again.');
      }

      setStatus('success');
      setFormData({
        fullName: '',
        barNumber: '',
        firmName: '',
        email: '',
        phone: '',
        primaryCounty: '',
        practiceAreas: '',
        notes: '',
      });
    } catch (err: any) {
      console.error('Attorney panel submission error:', err);
      setStatus('error');
      setErrorMessage(err.message || 'An error occurred while submitting your application. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Header />

      <main className="flex-grow">
        {/* Hero Header */}
        <div className="bg-[#0f233a] text-white py-14 lg:py-18 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#85db61] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Attorney Panel Information</span>
            </div>
            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Connect With People Looking for Legal Help in California
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed">
              CA Legal Source connects qualified California attorneys with individuals seeking assistance in their specific practice areas and geographic counties.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-8 py-16 space-y-12">
          {/* Panel Standards */}
          <section className="space-y-4">
            <h2 className="font-playfair text-2xl font-bold text-[#0f233a]">
              How Attorney Participation Works
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Our platform matches prospective clients with attorneys based on objective criteria such as practice specialty, county jurisdiction, language capabilities, and fair panel rotation principles. We do not operate an auction model where the highest bidder receives leads.
            </p>
          </section>

          {/* Verification Criteria */}
          <section className="p-6 bg-[#f8fafc] rounded-2xl border border-gray-200 space-y-4">
            <h3 className="font-playfair text-xl font-bold text-[#0f233a]">
              Attorney Panel Eligibility Standards
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-gray-700">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#3d7826] shrink-0 mt-0.5" />
                <span>Active California State Bar license in good standing with no active disciplinary suspensions.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#3d7826] shrink-0 mt-0.5" />
                <span>Demonstrated experience and focus in the specific practice areas requested.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#3d7826] shrink-0 mt-0.5" />
                <span>Current professional errors & omissions (malpractice) liability insurance where applicable.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#3d7826] shrink-0 mt-0.5" />
                <span>Commitment to prompt, professional communication with referred clients within 24 hours.</span>
              </div>
            </div>
          </section>

          {/* Interactive Panel Inquiry Form */}
          <section className="p-8 bg-white rounded-2xl border border-gray-200 shadow-sm space-y-6">
            <div>
              <h3 className="font-playfair text-2xl font-bold text-[#0f233a]">
                Request Attorney Panel Information
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                California-licensed attorneys interested in joining our referral network may submit their professional information for compliance review.
              </p>
            </div>

            {status === 'success' ? (
              <div className="text-center py-10 space-y-4 bg-[#edf7e8] rounded-xl border border-[#cde8c5] p-6">
                <CheckCircle2 className="w-12 h-12 text-[#3d7826] mx-auto" />
                <h4 className="font-playfair text-xl font-bold text-[#0f233a]">
                  Application Received Successfully
                </h4>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed max-w-md mx-auto">
                  Thank you for submitting your credentials. Our panel administration team (questions@dpalaw.com) will review your State Bar standing and practice profile, and follow up with onboarding materials shortly.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-xs text-[#3d7826] font-bold hover:underline pt-2 cursor-pointer"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {status === 'error' && (
                  <div className="p-3.5 bg-red-50 text-red-700 rounded-lg text-xs flex items-center gap-2 border border-red-200">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Jane Doe, Esq."
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d7826]/30 focus:border-[#3d7826]"
                    />
                    {validationErrors.fullName && <p className="text-red-500 text-[11px] mt-1">{validationErrors.fullName}</p>}
                  </div>

                  {/* CA Bar Number */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      California State Bar # <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 294812"
                      value={formData.barNumber}
                      onChange={(e) => setFormData({ ...formData, barNumber: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d7826]/30 focus:border-[#3d7826]"
                    />
                    {validationErrors.barNumber && <p className="text-red-500 text-[11px] mt-1">{validationErrors.barNumber}</p>}
                  </div>

                  {/* Law Firm Name */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Law Firm / Practice Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Law Offices of Jane Doe"
                      value={formData.firmName}
                      onChange={(e) => setFormData({ ...formData, firmName: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d7826]/30 focus:border-[#3d7826]"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="attorney@lawfirm.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d7826]/30 focus:border-[#3d7826]"
                    />
                    {validationErrors.email && <p className="text-red-500 text-[11px] mt-1">{validationErrors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Direct Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="(760) 555-0123"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d7826]/30 focus:border-[#3d7826]"
                    />
                    {validationErrors.phone && <p className="text-red-500 text-[11px] mt-1">{validationErrors.phone}</p>}
                  </div>

                  {/* Primary County */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Primary California County <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.primaryCounty}
                      onChange={(e) => setFormData({ ...formData, primaryCounty: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d7826]/30 focus:border-[#3d7826]"
                    >
                      <option value="">Select County...</option>
                      {californiaCounties.map((county) => (
                        <option key={county} value={county}>
                          {county}
                        </option>
                      ))}
                    </select>
                    {validationErrors.primaryCounty && <p className="text-red-500 text-[11px] mt-1">{validationErrors.primaryCounty}</p>}
                  </div>
                </div>

                {/* Practice Areas */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Primary Practice Focus Areas <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.practiceAreas}
                    onChange={(e) => setFormData({ ...formData, practiceAreas: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d7826]/30 focus:border-[#3d7826]"
                  >
                    <option value="">Select Practice Focus Area...</option>
                    {all17PracticeAreas.map((area) => (
                      <option key={area} value={area}>
                        {area}
                      </option>
                    ))}
                  </select>
                  {validationErrors.practiceAreas && <p className="text-red-500 text-[11px] mt-1">{validationErrors.practiceAreas}</p>}
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Additional Notes / Languages / Jurisdictions (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide any additional details regarding your firm, languages spoken (e.g. Spanish bilingual), or specific courtroom jurisdictions..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d7826]/30 focus:border-[#3d7826] resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full sm:w-auto px-8 py-3 rounded-lg bg-[#3d7826] hover:bg-[#32641e] text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm disabled:opacity-75"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting Application...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Panel Application</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
