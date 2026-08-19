'use client';

import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function StickyMobileCTA() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/98 backdrop-blur-md border-t border-gray-200 p-3 shadow-2xl">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href="tel:7603720007"
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl border border-gray-300 bg-white text-[#0f233a] font-semibold text-xs transition-colors shadow-2xs"
        >
          <Phone className="w-4 h-4 text-[#3d7826]" />
          <span>Call (760) 372-0007</span>
        </a>

        <Link
          href="#hero-intake"
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-[#3d7826] text-white font-semibold text-xs shadow-md transition-colors"
        >
          <span>Get Legal Help</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
