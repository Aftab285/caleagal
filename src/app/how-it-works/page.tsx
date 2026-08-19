import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, MessageSquare, Users, Scale, Handshake, ShieldCheck, CheckCircle2, Lock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How It Works — Transparent Legal Matching Process | CA Legal Source',
  description: 'Understand the step-by-step process of how CA Legal Source evaluates legal inquiries and connects California residents with pre-screened attorneys.',
  alternates: {
    canonical: 'https://calegalsource.com/how-it-works',
  },
};

export default function HowItWorksPage() {
  const steps = [
    {
      num: '01',
      title: 'Step 1: Tell Us About Your Situation',
      desc: 'Complete our secure online intake questionnaire. You provide key facts about your legal issue, the California county where the incident occurred, and any upcoming court or filing deadlines. This initial submission is 100% free and confidential.',
      details: ['No cost to submit an inquiry', 'Covering all 58 California counties', 'Encrypted and private under CCPA standards'],
      icon: MessageSquare
    },
    {
      num: '02',
      title: 'Step 2: We Review & Classify Your Case',
      desc: 'Our intake system analyzes your matter to identify the appropriate area of California law (e.g. wage disputes, tenant rights, injury, ADA compliance) and determines which participating attorneys possess the requisite qualifications and geographic panel eligibility.',
      details: ['Evaluated against 17 primary legal categories', 'Jurisdictional matching based on county courts', 'Objective, fair rotation allocation model'],
      icon: Users
    },
    {
      num: '03',
      title: 'Step 3: Connect With a California Attorney',
      desc: 'Where appropriate, we introduce you to a qualified California attorney handling matters like yours. The attorney or their legal team will reach out to discuss your legal options and assess representation suitability.',
      details: ['State Bar of California verification', 'Verified active professional liability standing', 'Bilingual English and Spanish support'],
      icon: Scale
    },
    {
      num: '04',
      title: 'Step 4: You Decide Next Steps',
      desc: 'You maintain complete control. You decide whether to retain the attorney. If you choose to move forward, you enter into a direct agreement with the attorney. If you decide not to proceed, you owe nothing for using CA Legal Source.',
      details: ['No obligation to hire the attorney', 'Transparent fee discussion prior to retention', 'Clear, independent representation terms'],
      icon: Handshake
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Header />

      <main className="flex-grow">
        {/* Page Hero */}
        <div className="bg-[#0f233a] text-white py-14 lg:py-18 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#85db61] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Transparent 4-Step Process</span>
            </div>
            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              How CA Legal Source Works
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed">
              We make navigating the California legal landscape straightforward, reassuring, and accessible. Learn how our intake and attorney connection process functions from start to finish.
            </p>
          </div>
        </div>

        {/* Detailed Steps */}
        <section className="py-16 bg-[#f8fafc]">
          <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8">
            {steps.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-2xs space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#edf7e8] text-[#3d7826] flex items-center justify-center font-bold text-lg shrink-0">
                      <Icon className="w-6 h-6 stroke-[1.75]" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#3d7826] uppercase tracking-wider">
                        {s.num}
                      </span>
                      <h2 className="font-playfair text-xl sm:text-2xl font-bold text-[#0f233a]">
                        {s.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {s.desc}
                  </p>

                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-2 border-t border-gray-100">
                    {s.details.map((d, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-gray-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#3d7826] shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-12 bg-white border-t border-gray-100 text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-8 space-y-4">
            <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-[#0f233a]">
              Ready to Get Started?
            </h3>
            <p className="text-sm text-gray-600">
              Submit your situation today for free case review and evaluation.
            </p>
            <div className="pt-2">
              <Link
                href="/#hero-intake"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-[#3d7826] hover:bg-[#32641e] text-white font-semibold text-sm transition-all"
              >
                <span>Start Free Case Review</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
