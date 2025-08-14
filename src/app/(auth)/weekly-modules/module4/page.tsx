"use client";

import Headbar from "../../../Headbar";
import ModulesSidebar from "../ModulesSidebar";
import Image from "next/image";
import Link from "next/link";

export default function Module4() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-yellow-300 to-yellow-100 flex flex-col">
      <Headbar />
      <div className="flex flex-row w-full h-[calc(100vh-100px)] min-h-0 max-w-[100vw]">
        {/* Sidebar */}
        <ModulesSidebar progress={62} />
        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-start bg-[#fdfaf5] h-full overflow-y-auto p-0">
          <div className="flex flex-col items-center w-full px-10 pt-10 flex-1 max-w-4xl mx-auto">
            {/* Titles */}
            <div className="w-full text-2xl font-bold text-gray-900 mb-2">Module 4. The Observer Self &amp; Present Moment Awareness</div>
            <div className="w-full text-xl font-semibold text-gray-700 mb-6">The Observer Self</div>

            {/* Audio Clip Card */}
            <div className="bg-white rounded-xl shadow flex items-center gap-4 px-6 py-4 mb-6 w-full max-w-md">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[var(--weact-purple)]">
                <svg width="36" height="36" fill="white" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="white" opacity="0.2"/><polygon points="10,8 16,12 10,16" fill="white"/></svg>
              </div>
              <div className="flex flex-col w-full">
                <span className="font-bold text-gray-900">Audio Clip: The Observer Self exercise</span>
                <span className="text-gray-500 text-sm">0:56 Minutes</span>
                {/* Optional audio file at public/audio/module4/observer-self-exercise.mp3 */}
                <audio controls className="mt-2 w-full">
                  <source src="/audio/module4/observer-self-exercise.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>

            {/* Transcript and Image Side by Side */}
            <div className="flex flex-row items-start gap-8 w-full max-w-3xl mt-2">
              <div className="flex-1">
                <div className="font-bold text-lg text-gray-900 mb-2">Transcript</div>
                <div className="mb-6 text-gray-800 text-lg font-normal">
                  In this exercise, you will practice noticing your thoughts and feelings from the perspective of an observer. Rather than being caught up in them, you will watch them come and go like passing events.
                </div>
                <div className="mb-6 text-gray-800 text-lg font-normal">
                  See if you can hold your inner experience lightly: &quot;I am noticing the thought that...&quot; or &quot;I am noticing a feeling of...&quot; The goal is not to change what shows up, but to relate to it differently.
                </div>
                <Image src="/weekly-modules/thumbnails/small-image.png" alt="Small illustration" width={100} height={100} className="rounded-xl mb-2" />
              </div>
              <div className="flex flex-col items-center">
                <Image src="/weekly-modules/thumbnails/module4.png" alt="Observer self illustration" width={260} height={260} className="rounded-xl mb-2" />
                <div className="text-xs text-gray-500 text-center max-w-[240px]">Module image</div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between w-full max-w-3xl mt-8 mb-8">
              <Link href="/weekly-modules/module3/completion" className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-400 transition-colors">
                BACK
              </Link>
              <Link href="/weekly-modules/module4/mindful-breathing" className="px-6 py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition-colors">
                NEXT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
