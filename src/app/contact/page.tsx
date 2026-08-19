'use client';

import React, { useState } from 'react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, Building2, CheckCircle2, AlertCircle, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: 'General Inquiry',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error('Failed to send message. Please try again or call our office.');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        topic: 'General Inquiry',
        message: '',
      });
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Header />

      <main className="flex-grow">
        {/* Page Hero */}
        <div className="bg-[#0f233a] text-white py-14 lg:py-18">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Contact Us & Support
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              Have questions regarding our service, attorney panel participation, or administrative inquiries? Reach out to our California team.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Details & Operator Info */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="font-playfair text-2xl font-bold text-[#0f233a] mb-2">
                  Get in Touch
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We are available Monday through Friday to answer administrative inquiries and assist with platform questions.
                </p>
              </div>

              {/* DPA Attorneys at Law Location Card */}
              <div className="bg-[#f8fafc] p-6 rounded-2xl border border-gray-200 space-y-4 shadow-xs">
                <div className="flex items-center gap-2 text-[#0f233a] font-bold text-base">
                  <Building2 className="w-5 h-5 text-[#3d7826]" />
                  <span>Operated By: DPA Attorneys at Law</span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-gray-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#3d7826] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 block font-semibold">San Diego Office</strong>
                      <p className="text-gray-600">8880 Rio San Diego Dr.</p>
                      <p className="text-gray-600">Suite 800</p>
                      <p className="text-gray-600">San Diego, CA 92108</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2 border-t border-gray-200">
                    <Phone className="w-4 h-4 text-[#3d7826] shrink-0" />
                    <a href="tel:7603720007" className="font-semibold text-[#0f233a] hover:text-[#3d7826]">
                      (760) 372-0007
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#3d7826] shrink-0" />
                    <a href="mailto:questions@dpalaw.com" className="font-medium text-[#0f233a] hover:text-[#3d7826]">
                      questions@dpalaw.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#edf7e8] border border-[#cde8c5] text-xs text-gray-700 leading-relaxed">
                <strong>Need Immediate Legal Help?</strong> If you are seeking to be connected with an attorney for a new legal matter, please use our{' '}
                <a href="/#hero-intake" className="text-[#3d7826] font-bold hover:underline">
                  Free Case Evaluation Form
                </a>{' '}
                to get started right away.
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                <h3 className="font-playfair text-xl font-bold text-[#0f233a] mb-6">
                  Send Us a Message
                </h3>

                {status === 'success' ? (
                  <div className="text-center py-8 space-y-3 bg-[#edf7e8] rounded-xl border border-[#cde8c5] p-6">
                    <CheckCircle2 className="w-10 h-10 text-[#3d7826] mx-auto" />
                    <h4 className="font-playfair text-lg font-bold text-[#0f233a]">
                      Message Received
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed max-w-md mx-auto">
                      Thank you for contacting us. Your message has been sent directly to our administration team (questions@dpalaw.com). We will get back to you shortly.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="text-xs text-[#3d7826] font-bold hover:underline pt-2 cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {status === 'error' && (
                      <div className="p-3 bg-red-50 text-red-700 rounded-lg text-xs flex items-center gap-2 border border-red-200">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-800 mb-1">
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Jane Doe"
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d7826]/30 focus:border-[#3d7826]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-800 mb-1">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="jane@example.com"
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d7826]/30 focus:border-[#3d7826]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-800 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(555) 000-0000"
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d7826]/30 focus:border-[#3d7826]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-800 mb-1">
                          Topic
                        </label>
                        <select
                          value={formData.topic}
                          onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d7826]/30 focus:border-[#3d7826]"
                        >
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Attorney Panel Application">Attorney Panel Application</option>
                          <option value="Feedback / Complaint">Feedback / Complaint</option>
                          <option value="Billing / Fee Questions">Billing / Fee Questions</option>
                          <option value="Privacy / CCPA Request">Privacy / CCPA Request</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-800 mb-1">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="How can we help you?"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d7826]/30 focus:border-[#3d7826] resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full bg-[#3d7826] hover:bg-[#32641e] text-white font-semibold py-3 px-6 rounded-lg text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs disabled:opacity-50"
                    >
                      {status === 'loading' ? (
                        <span>Sending message...</span>
                      ) : (
                        <>
                          <span>Submit Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
