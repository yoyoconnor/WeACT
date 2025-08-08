"use client";

import Headbar from '../../../../Headbar';
import Image from 'next/image';
import ModulesSidebar from "../../ModulesSidebar";
import Link from 'next/link';

export default function OrientationII() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-yellow-300 to-yellow-100 flex flex-col">
      <Headbar />
      <div className="flex flex-row w-full h-full" style={{ minHeight: '100vh', maxWidth: '100vw' }}>
        {/* Sidebar */}
        <ModulesSidebar progress={0} />
        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-start bg-[#fdfaf5] min-h-screen p-0">
          <div className="flex flex-col items-center w-full px-10 pt-10 flex-1 max-w-4xl mx-auto">
            {/* Module Title */}
            <div className="w-full text-2xl font-bold text-gray-900 mb-2">Module 1. Creative Hopelessness</div>
            <div className="w-full text-xl font-semibold text-gray-700 mb-6">Orientation II</div>
            
            {/* Audio Clip Card */}
            <div className="bg-white rounded-xl shadow flex items-center gap-4 px-6 py-4 mb-6 w-full max-w-md">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[var(--weact-purple)]">
                <svg width="36" height="36" fill="white" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="white" opacity="0.2"/><polygon points="10,8 16,12 10,16" fill="white"/></svg>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-900">Audio Clip: Orientation II</span>
                <span className="text-gray-500 text-sm">1:12 Minutes</span>
              </div>
            </div>
            
            {/* Transcript and Image Side by Side */}
            <div className="flex flex-row items-start gap-8 w-full max-w-3xl mt-2">
              <div className="flex-1">
                <div className="font-bold text-lg text-gray-900 mb-2">Transcript</div>
                <div className="mb-6 text-gray-800 text-lg font-normal">
                  This program is designed to enhance psychological flexibility for family caregivers of persons living with dementia.
                </div>
                <div className="mb-6 text-gray-800 text-lg font-normal">
                  As a caregiver, you may experience unwanted thoughts and emotions like frustration, anger, and sadness. Often, we try to avoid these difficult feelings, but this avoidance can actually lead to more distress.
                </div>
                <div className="mb-6 text-gray-800 text-lg font-normal">
                  You might also experience self-criticism or grieve over lost abilities. This program will guide you to develop more effective strategies for responding to caregiving situations and finding balance in your life.
                </div>
              </div>
              <div className="flex flex-col items-center">
                <img src="/weekly-modules/thumbnails/module2.png" alt="Balanced Stones" width={260} height={260} className="rounded-xl mb-2" />
                <div className="text-xs text-gray-500 text-center max-w-[220px]">Image source: Unsplash</div>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex justify-between w-full max-w-3xl mt-8 mb-8">
              <Link href="/weekly-modules/module1" className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-400 transition-colors">
                BACK
              </Link>
              <Link href="/weekly-modules/module1/orientation-iii" className="px-6 py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition-colors">
                NEXT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

