"use client";

import Headbar from "../../../../Headbar";
import ModulesSidebar from "../../ModulesSidebar";
import Link from "next/link";

export default function StruggleSwitch() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-yellow-300 to-yellow-100 flex flex-col">
      <Headbar />
      <div className="flex flex-row w-full h-[calc(100vh-100px)] min-h-0 max-w-[100vw]">
        {/* Sidebar */}
        <ModulesSidebar progress={20} />
        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-start bg-[#fdfaf5] h-full overflow-y-auto p-0">
          <div className="flex flex-col items-center w-full px-6 sm:px-10 pt-10 flex-1 max-w-4xl mx-auto">
            {/* Titles */}
            <div className="w-full text-2xl font-bold text-gray-900 mb-2">Module 2. Willingness &amp; Defusion</div>
            <div className="w-full text-xl font-semibold text-gray-700 mb-6">The Struggle Switch</div>

            {/* Intro text */}
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 w-full mb-6">
              <p className="text-gray-800 text-lg">
                First, to better understand the idea of willingness—choosing to make room for feelings rather than trying to control or avoid them—please watch this short video about the Struggle Switch.
              </p>
            </div>

            {/* Video Card */}
            <div className="bg-white rounded-xl shadow-lg w-full overflow-hidden mb-6">
              <div className="w-full aspect-video bg-gray-200">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/-X2TtbiWk9Y"
                  title="The Struggle Switch - Dr. Russ Harris"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="px-6 py-4 border-t border-gray-100">
                <div className="font-bold text-gray-900">Video Clip: The Struggle Switch</div>
                <div className="text-gray-500 text-sm">~3 minutes</div>
              </div>
            </div>

            {/* Transcript */}
            <div className="w-full max-w-3xl">
              <div className="font-bold text-lg text-gray-900 mb-2">Transcript</div>
              <div className="space-y-4 text-gray-800 text-lg">
                <p>
                  Many of us have a kind of &quot;struggle switch&quot; in the mind: when it flips on, we start battling our inner experiences—anxious thoughts, sadness, frustration. The more we fight those feelings, the bigger and messier the struggle becomes.
                </p>
                <p>
                  Willingness offers another option. Rather than trying to push feelings down or get rid of them, we notice and make room for them. Paradoxically, that gentle stance frees up energy to do what matters, instead of being caught in a tug-of-war with our private experiences.
                </p>
                <p>
                  As you watch, notice what shows up in your body and mind. See if you can practice acknowledging those sensations and thoughts, and then gently bring your attention back to the video.
                </p>
              </div>
              <div className="text-sm text-gray-500 mt-4">
                Source: Dr. Russ Harris – Acceptance and Commitment Therapy. Video link: https://youtu.be/-X2TtbiWk9Y
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between w-full max-w-3xl mt-8 mb-8">
              <Link href="/weekly-modules/module2/willingness" className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-400 transition-colors">
                BACK
              </Link>
              <Link href="/weekly-modules/module2/quick-check" className="px-6 py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition-colors">
                Quick Check
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
