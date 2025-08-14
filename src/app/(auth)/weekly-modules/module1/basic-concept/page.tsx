"use client";

import Headbar from '../../../../Headbar';
import Image from 'next/image';
import ModulesSidebar from "../../ModulesSidebar";
import Link from 'next/link';

export default function BasicConcept() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-yellow-300 to-yellow-100 flex flex-col">
      <Headbar />
      <div className="flex flex-row w-full h-[calc(100vh-100px)] min-h-0 max-w-[100vw]">
        {/* Sidebar */}
        <ModulesSidebar progress={20} />
        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-start bg-[#fdfaf5] h-full overflow-y-auto p-0">
          <div className="flex flex-col items-center w-full px-10 pt-10 flex-1 max-w-4xl mx-auto">
            {/* Module Title */}
            <div className="w-full text-2xl font-bold text-gray-900 mb-2">Module 1. Creative Hopelessness</div>
            <div className="w-full text-xl font-semibold text-gray-700 mb-6">Basic concepts of ACT</div>
            
            {/* Audio Clip Card */}
            <div className="bg-white rounded-xl shadow flex items-center gap-4 px-6 py-4 mb-6 w-full max-w-md">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[var(--weact-purple)]">
                <svg width="36" height="36" fill="white" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="white" opacity="0.2"/><polygon points="10,8 16,12 10,16" fill="white"/></svg>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-900">Audio Clip: Basic Concepts of ACT</span>
                <span className="text-gray-500 text-sm">1:52 Minutes</span>
              </div>
            </div>
            
            {/* Transcript and Image Side by Side */}
            <div className="flex flex-row items-start gap-8 w-full max-w-3xl mt-2">
              <div className="flex-1">
                <div className="font-bold text-lg text-gray-900 mb-2">Transcript</div>
                <div className="mb-6 text-gray-800 text-lg font-normal">
                  Imagine holding your hands in front of your face, covering your eyes. While your hands are there, it&apos;s difficult to see what&apos;s around you, and it&apos;s hard to do other things effectively.
                </div>
                <div className="mb-6 text-gray-800 text-lg font-normal">
                  This is similar to how we often respond to difficult thoughts and emotions. We try to push them away, avoid them, or control them, but this struggle often makes it harder to live the life we want.
                </div>
                <div className="mb-6 text-gray-800 text-lg font-normal">
                  ACT teaches us to respond more effectively to our thoughts and emotions, so we can invest our time and energy into doing what is truly meaningful to us. Instead of fighting with our internal experiences, we learn to make room for them while taking action toward our values.
                </div>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/weekly-modules/thumbnails/module4.png" alt="Bird in Cage" width={260} height={260} className="rounded-xl mb-2" />
                <div className="text-xs text-gray-500 text-center max-w-[220px]">Image source: Unsplash</div>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex justify-between w-full max-w-3xl mt-8 mb-8">
              <Link href="/weekly-modules/module1/quick-check" className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-400 transition-colors">
                BACK
              </Link>
              <Link href="/weekly-modules/module1/basic-concept-quick-check" className="px-6 py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition-colors">
                Quick Check
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

