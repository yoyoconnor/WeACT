"use client";

import Headbar from "../../../../Headbar";
import ModulesSidebar from "../../ModulesSidebar";
import Image from "next/image";
import Link from "next/link";

export default function WillingnessAsAlternative() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-yellow-300 to-yellow-100 flex flex-col">
      <Headbar />
      <div className="flex flex-row w-full h-[calc(100vh-100px)] min-h-0 max-w-[100vw]">
        {/* Sidebar */}
        <ModulesSidebar progress={20} />
        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-start bg-[#fdfaf5] h-full overflow-y-auto p-0">
          <div className="flex flex-col items-center w-full px-10 pt-10 flex-1 max-w-4xl mx-auto">
            {/* Titles */}
            <div className="w-full text-2xl font-bold text-gray-900 mb-2">Module 2. Willingness &amp; Defusion</div>
            <div className="w-full text-xl font-semibold text-gray-700 mb-6">Willingness as an alternative to control</div>

            {/* Audio Clip Card */}
            <div className="bg-white rounded-xl shadow flex items-center gap-4 px-6 py-4 mb-6 w-full max-w-md">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[var(--weact-purple)]">
                <svg width="36" height="36" fill="white" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="white" opacity="0.2"/><polygon points="10,8 16,12 10,16" fill="white"/></svg>
              </div>
              <div className="flex flex-col w-full">
                <span className="font-bold text-gray-900">Audio Clip: Willingness as an alternative to control</span>
                <span className="text-gray-500 text-sm">0:53 Minutes</span>
                {/* Optional audio file at public/audio/module2/willingness-as-alternative.mp3 */}
                <audio controls className="mt-2 w-full">
                  <source src="/audio/module2/willingness-as-alternative.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>

            {/* Transcript and Image Side by Side */}
            <div className="flex flex-row items-start gap-8 w-full max-w-3xl mt-2">
              <div className="flex-1">
                <div className="font-bold text-lg text-gray-900 mb-2">Transcript</div>
                <div className="mb-6 text-gray-800 text-lg font-normal">
                  So, if struggling against thoughts and feelings and trying to control them is not working, what is a possible alternative?
                </div>
                <div className="mb-6 text-gray-800 text-lg font-normal">
                  Think back to module one, where we used our hands to represent thoughts and feelings.
                </div>
                <div className="mb-6 text-gray-800 text-lg font-normal">
                  We often get caught up in our thoughts, believing every thought we have, even if the thought is untrue or unhelpful. This is like when our hands are up close to our face. With feelings, we often want to push them away because they don’t feel good. This is like when we strained to keep our hands as far away from our bodies as possible. The alternative to both is to rest our hands comfortably in our laps.
                </div>
                <div className="mb-6 text-gray-800 text-lg font-normal">
                  This posture represents two concepts called willingness and defusion. We defuse, or unhook, from our thoughts by noticing them instead of buying into them; and we allow ourselves to feel our feelings, being willing to experience them rather than push them away.
                </div>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/weekly-modules/thumbnails/module2.png" alt="Willingness image placeholder" width={260} height={260} className="rounded-xl mb-2" />
                <div className="text-xs text-gray-500 text-center max-w-[240px]">Image source: https://www.presentmomentrecovery.com/blog/practicing-willingness/</div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between w-full max-w-3xl mt-8 mb-8">
              <Link href="/weekly-modules/module2" className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-400 transition-colors">
                BACK
              </Link>
              <Link href="/weekly-modules/module2/struggle-switch" className="px-6 py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition-colors">
                Continue
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
