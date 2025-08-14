"use client";

import Headbar from '../../../../Headbar';
// Removed unused Image import
import ModulesSidebar from "../../ModulesSidebar";
import Link from 'next/link';

export default function ManInHole() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-yellow-300 to-yellow-100 flex flex-col">
      <Headbar />
      <div className="flex flex-row w-full h-[calc(100vh-100px)] min-h-0 max-w-[100vw]">
        {/* Sidebar */}
        <ModulesSidebar progress={60} />
        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-start bg-[#fdfaf5] h-full overflow-y-auto p-0">
          <div className="flex flex-col items-center w-full px-10 pt-10 flex-1 max-w-4xl mx-auto">
            {/* Module Title */}
            <div className="w-full text-2xl font-bold text-gray-900 mb-2">Module 1. Creative Hopelessness</div>
            <div className="w-full text-xl font-semibold text-gray-700 mb-6">Man in the Hole Metaphor</div>
            
            {/* Main Content Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-3xl">
              <div className="flex items-start gap-8">
                <div className="flex-1">
                  <div className="mb-6 text-gray-800 text-lg font-normal">
                    Imagine you&apos;re in a hole. You didn&apos;t plan to be there, but there you are. You have a shovel, and you start digging to get out. But the more you dig, the deeper the hole gets.
                  </div>
                  <div className="mb-6 text-gray-800 text-lg font-normal">
                    This is what often happens when we try to control or eliminate our difficult thoughts and emotions. We think that if we just try harder, think more positively, or avoid certain situations, we&apos;ll feel better. But often, these strategies make things worse.
                  </div>
                  <div className="mb-6 text-gray-800 text-lg font-normal">
                    The &quot;struggle switch&quot; is what happens when we engage in this futile battle with our internal experiences. We get caught up in trying to control what we can&apos;t control, and this struggle becomes the problem.
                  </div>
                  <div className="mb-6 text-gray-800 text-lg font-normal">
                    &quot;Creative hopelessness&quot; is the recognition that our usual strategies for dealing with difficult thoughts and emotions aren&apos;t working. This can actually be a powerful first step toward change.
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-64 h-64 bg-gray-200 rounded-lg flex items-center justify-center mb-2">
                    <svg width="120" height="120" fill="gray" viewBox="0 0 24 24">
                      {/* Simple hole and person illustration */}
                      <rect x="8" y="16" width="8" height="8" fill="brown"/>
                      <circle cx="12" cy="12" r="2" fill="black"/>
                      <rect x="10" y="14" width="4" height="2" fill="brown"/>
                    </svg>
                  </div>
                  <div className="text-xs text-gray-500 text-center max-w-[220px]">Man in the Hole Metaphor</div>
                </div>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex justify-between w-full max-w-3xl mt-8 mb-8">
              <Link href="/weekly-modules/module1/coping-strategies" className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-400 transition-colors">
                BACK
              </Link>
              <Link href="/weekly-modules/module1/man-in-hole-quick-check" className="px-6 py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition-colors">
                QUICK CHECK
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

