"use client";

import Headbar from "../../../Headbar";
import ModulesSidebar from "../ModulesSidebar";
import Image from "next/image";
import Link from "next/link";

export default function Module3Part1() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-yellow-300 to-yellow-100 flex flex-col">
      <Headbar />
      <div className="flex flex-row w-full h-[calc(100vh-100px)] min-h-0 max-w-[100vw]">
        {/* Sidebar */}
        <ModulesSidebar progress={40} />
        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-start bg-[#fdfaf5] h-full overflow-y-auto p-0">
          <div className="flex flex-col items-center w-full px-10 pt-10 flex-1 max-w-4xl mx-auto">
            {/* Titles */}
            <div className="w-full text-2xl font-bold text-gray-900 mb-2">Module 3. Acceptance</div>
            <div className="w-full text-xl font-semibold text-gray-700 mb-6">Case Scenario Exercise &ndash; Part 1</div>

            {/* Audio Clip Card */}
            <div className="bg-white rounded-xl shadow flex items-center gap-4 px-6 py-4 mb-6 w-full max-w-md">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[var(--weact-purple)]">
                <svg width="36" height="36" fill="white" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="white" opacity="0.2"/><polygon points="10,8 16,12 10,16" fill="white"/></svg>
              </div>
              <div className="flex flex-col w-full">
                <span className="font-bold text-gray-900">Audio Clip: Case Scenario Exercise &ndash; Part 1</span>
                <span className="text-gray-500 text-sm">0:52 Minutes</span>
                {/* Optional audio file at public/audio/module3/case-scenario-part1.mp3 */}
                <audio controls className="mt-2 w-full">
                  <source src="/audio/module3/case-scenario-part1.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>

            {/* Transcript and Image Side by Side */}
            <div className="flex flex-row items-start gap-8 w-full max-w-3xl mt-2">
              <div className="flex-1">
                <div className="font-bold text-lg text-gray-900 mb-2">Transcript</div>
                <div className="mb-6 text-gray-800 text-lg font-normal">
                  In this exercise, you will consider a caregiving situation that tends to trigger difficult thoughts and feelings. As you imagine the scene, notice what shows up inside without trying to change it. See if you can gently make room for the experience.
                </div>
                <div className="mb-6 text-gray-800 text-lg font-normal">
                  Acceptance here does not mean liking or approving of discomfort. It means allowing the thoughts, emotions, and sensations to be present, as they are, while you orient toward what matters in this moment.
                </div>
                <div className="mb-6 text-gray-800 text-lg font-normal">
                  As you listen, practice labeling your inner experience: &ldquo;I am noticing a tightness in my chest,&rdquo; or &ldquo;I am noticing the thought that I cannot handle this.&rdquo; Let the experience come and go like waves, and keep your attention broad enough to include what you care about.
                </div>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/weekly-modules/thumbnails/module3.png" alt="Acceptance exercise illustration" width={260} height={260} className="rounded-xl mb-2" />
                <div className="text-xs text-gray-500 text-center max-w-[240px]">Module image</div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between w-full max-w-3xl mt-8 mb-8">
              <Link href="/weekly-modules/module2/completion" className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-400 transition-colors">
                BACK
              </Link>
              <Link href="/weekly-modules/module3/quick-check" className="px-6 py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition-colors">
                Continue
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
