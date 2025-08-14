"use client";

import Headbar from '../../../Headbar';
import Image from 'next/image';
import ModulesSidebar from "../ModulesSidebar";
import Link from 'next/link';

export default function Module1() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-yellow-300 to-yellow-100 flex flex-col">
      <Headbar />
      <div className="flex flex-row w-full h-[calc(100vh-100px)] min-h-0 max-w-[100vw]">
        {/* Sidebar */}
        <ModulesSidebar progress={0} />
        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-start bg-[#fdfaf5] h-full overflow-y-auto p-0">
          <div className="flex flex-col items-center w-full px-10 pt-10 flex-1 max-w-4xl mx-auto">
            {/* Module Title */}
            <div className="w-full text-2xl font-bold text-gray-900 mb-2">Module 1. Creative Hopelessness</div>
            <div className="w-full text-xl font-semibold text-gray-700 mb-6">Orientation I</div>
            
            {/* Audio Clip Card */}
            <div className="bg-white rounded-xl shadow flex items-center gap-4 px-6 py-4 mb-6 w-full max-w-md">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[var(--weact-purple)]">
                <svg width="36" height="36" fill="white" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="white" opacity="0.2"/><polygon points="10,8 16,12 10,16" fill="white"/></svg>
              </div>
              <div className="flex flex-col w-full">
                <span className="font-bold text-gray-900">Audio Clip: Orientation I</span>
                <span className="text-gray-500 text-sm">0:41 Minutes</span>
                {/* HTML5 audio player. Place file at public/audio/module1/orientation-i.mp3 */}
                <audio controls className="mt-2 w-full">
                  <source src="/audio/module1/orientation-i.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
            
            {/* Transcript and Image Side by Side */}
            <div className="flex flex-row items-start gap-8 w-full max-w-3xl mt-2">
              <div className="flex-1">
                <div className="font-bold text-lg text-gray-900 mb-2">Transcript</div>
                <div className="mb-6 text-gray-800 text-lg font-normal">
                  Welcome to this program based on acceptance and commitment training (pronounced as the word ACT for short).
                </div>
                <div className="mb-6 text-gray-800 text-lg font-normal">
                  This program (WeACT) is designed to help you better cope with the thoughts and emotions that arise in your day-to-day caregiving situations, while guiding you to act and live more in line with your values.
                </div>
                <div className="mb-6 text-gray-800 text-lg font-normal">
                  In the coming weeks, you will learn and practice exercises aimed at developing psychological flexibility, which is the primary goal of ACT. Psychological flexibility means being aware of, open to, and accepting of your thoughts and emotions—even difficult ones—while acting and living in line with your values.
                </div>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/weekly-modules/thumbnails/module1.png" alt="ACT Hexaflex" width={260} height={260} className="rounded-xl mb-2" />
                <div className="text-xs text-gray-500 text-center max-w-[220px]">Image source: https://www.healthandhealingtherapy.com/mental-health/approach/acceptance-commitment-therapy/</div>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex justify-between w-full max-w-3xl mt-8 mb-8">
              <button className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-400 transition-colors">
                BACK
              </button>
              <Link href="/weekly-modules/module1/orientation-ii" className="px-6 py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition-colors">
                NEXT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
