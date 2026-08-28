'use client';

import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function StickyMobileCTA() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/98 backdrop-blur-md border-t border-gray-200 p-2.5 shadow-2xl">
      <div className="max-w-md mx-auto">
        <Link
          href="/intake"
          className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#3d7826] hover:bg-[#32641e] text-white font-semibold text-sm shadow-md transition-colors"
        >
          <ShieldCheck className="w-4 h-4 text-[#85db61]" />
          <span>Get a Free Case Review</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
