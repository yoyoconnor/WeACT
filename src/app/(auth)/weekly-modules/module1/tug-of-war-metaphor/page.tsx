"use client";

import Headbar from '../../../../Headbar';
// Removed unused Image import
import ModulesSidebar from "../../ModulesSidebar";
import Link from 'next/link';

export default function TugOfWarMetaphor() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-yellow-300 to-yellow-100 flex flex-col">
      <Headbar />
      <div className="flex flex-row w-full h-[calc(100vh-100px)] min-h-0 max-w-[100vw]">
        {/* Sidebar */}
        <ModulesSidebar progress={10} />
        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-start bg-[#fdfaf5] h-full overflow-y-auto p-0">
          <div className="flex flex-col items-center w-full px-10 pt-10 flex-1 max-w-4xl mx-auto">
            {/* Module Title */}
            <div className="w-full text-2xl font-bold text-gray-900 mb-2">Module 1. Creative Hopelessness</div>
            <div className="w-full text-xl font-semibold text-gray-700 mb-6">Tug-of-war Metaphor</div>
            
            {/* Audio Clip Card */}
            <div className="bg-white rounded-xl shadow flex items-center gap-4 px-6 py-4 mb-6 w-full max-w-md">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[var(--weact-purple)]">
                <svg width="36" height="36" fill="white" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="white" opacity="0.2"/><polygon points="10,8 16,12 10,16" fill="white"/></svg>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-900">Audio Clip: Tug-of-war</span>
                <span className="text-gray-500 text-sm">1:52 Minutes</span>
              </div>
            </div>
            
            {/* Transcript and Image Side by Side */}
            <div className="flex flex-row items-start gap-8 w-full max-w-3xl mt-2">
              <div className="flex-1">
                <div className="font-bold text-lg text-gray-900 mb-2">Transcript</div>
                <div className="mb-6 text-gray-800 text-lg font-normal">
                  Imagine you&apos;re in a tug-of-war with a monster. The monster represents your difficult thoughts, anxiety, stress, or any other challenging emotions you experience.
                </div>
                <div className="mb-6 text-gray-800 text-lg font-normal">
                  You&apos;re pulling as hard as you can on your end of the rope, trying to win this battle. But the harder you pull, the harder the monster pulls back. The struggle is exhausting and consumes all your energy and focus.
                </div>
                <div className="mb-6 text-gray-800 text-lg font-normal">
                  You&apos;re so focused on winning this tug-of-war that you don&apos;t notice there&apos;s a pit of quicksand between you and the monster. The more you struggle, the deeper you sink.
                </div>
                <div className="mb-6 text-gray-800 text-lg font-normal">
                  But here&apos;s the thing: you can drop the rope. When you do, the monster disappears. You&apos;re no longer stuck in this exhausting struggle, and you can focus on what truly matters to you.
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-64 h-64 bg-gray-200 rounded-lg flex items-center justify-center mb-2">
                  <svg width="120" height="120" fill="gray" viewBox="0 0 24 24">
                    {/* Simple tug-of-war illustration */}
                    <circle cx="8" cy="12" r="2" fill="black"/>
                    <rect x="6" y="10" width="4" height="4" fill="blue"/>
                    <line x1="12" y1="12" x2="16" y2="12" stroke="brown" strokeWidth="2"/>
                    <circle cx="16" cy="12" r="3" fill="red"/>
                    <rect x="14" y="9" width="4" height="6" fill="red"/>
                  </svg>
                </div>
                <div className="text-xs text-gray-500 text-center max-w-[220px]">Tug-of-war Metaphor</div>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex justify-between w-full max-w-3xl mt-8 mb-8">
              <Link href="/weekly-modules/module1/man-in-the-hole-quick-check" className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-400 transition-colors">
                BACK
              </Link>
              <Link href="/weekly-modules/module1/tug-of-war-quick-check" className="px-6 py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition-colors">
                Quick Check
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
