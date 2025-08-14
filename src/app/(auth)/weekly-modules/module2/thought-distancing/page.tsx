"use client";

import Headbar from "../../../../Headbar";
import ModulesSidebar from "../../ModulesSidebar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ThoughtDistancing() {
  const [thought, setThought] = useState("");

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
            <div className="w-full text-xl font-semibold text-gray-700 mb-6">Thought distancing exercise</div>

            {/* Audio Clip Card */}
            <div className="bg-white rounded-xl shadow flex items-center gap-4 px-6 py-4 mb-6 w-full max-w-md">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[var(--weact-purple)]">
                <svg width="36" height="36" fill="white" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="white" opacity="0.2"/><polygon points="10,8 16,12 10,16" fill="white"/></svg>
              </div>
              <div className="flex flex-col w-full">
                <span className="font-bold text-gray-900">Audio Clip: Thought distancing exercise</span>
                <span className="text-gray-500 text-sm">2:12 Minutes</span>
                {/* Optional audio file at public/audio/module2/thought-distancing.mp3 */}
                <audio controls className="mt-2 w-full">
                  <source src="/audio/module2/thought-distancing.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>

            {/* Transcript and Image Side by Side */}
            <div className="flex flex-row items-start gap-8 w-full max-w-3xl mt-2">
              <div className="flex-1">
                <div className="font-bold text-lg text-gray-900 mb-2">Transcript</div>
                <div className="mb-4 text-gray-800 text-lg font-normal">
                  To better understand the idea of defusion, or unhooking from our thoughts, let&apos;s try a simple exercise sometimes called Thought Distancing.
                </div>
                <div className="mb-4 text-gray-800 text-lg font-normal">
                  First, please select a reoccurring thought that tends to bother you or cause you stress, such as: &quot;I&apos;m not doing enough&quot;, &quot;Things will only get worse&quot;, or &quot;I don&apos;t deserve to take a break&quot;.
                </div>
                <div className="mb-4 text-gray-800 text-lg font-normal">
                  A helpful phrasing that tends to unhook is:
                </div>
                <div className="mb-6">
                  <input
                    aria-label="Type your thought here"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="Type here"
                    value={thought}
                    onChange={(e) => setThought(e.target.value)}
                  />
                </div>
                <div className="mb-4 text-gray-800 text-lg font-normal">
                  Once you have chosen a thought you&apos;d like to work with, speak this thought out loud. Now, read it again, but add a short prefix before it. For instance, rather than &quot;{thought || 'I failed'}&quot;, say: &quot;I&apos;m having the thought that {thought || 'I failed'}&quot;.
                </div>
                <div className="mb-4 text-gray-800 text-lg font-normal">
                  You can also try a variant that builds just a bit more space: &quot;My mind is having the thought that...&quot; So, for example: &quot;My mind is having the thought that {thought || 'I failed'}&quot;.
                </div>
                <div className="mb-4 text-gray-800 text-lg font-normal">
                  Another option some people prefer: &quot;Notice I&apos;m noticing I&apos;m having the thought that...&quot; So for example: &quot;Notice I&apos;m noticing I&apos;m having the thought that {thought || 'I failed'}&quot;.
                </div>
                <div className="mb-4 text-gray-800 text-lg font-normal">
                  Repeat the original thought and your preferred prefix 2–3 times, slowly. As you do, notice any difference in the experience of just saying the thought vs. placing a little distance between you and the thought.
                </div>
                <div className="text-sm text-gray-500 mt-2">
                  Adapted from ACT materials (e.g., Russ Harris). Practical source: Harris, R. (2008). ACT made simple. (p. 109). New Harbinger Publications.
                </div>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/weekly-modules/thumbnails/module2.png" alt="Thought distancing illustration" width={260} height={260} className="rounded-xl mb-2" />
                <div className="text-xs text-gray-500 text-center max-w-[240px]">Illustrative image</div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between w-full max-w-3xl mt-8 mb-8">
              <Link href="/weekly-modules/module2/quick-check" className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-400 transition-colors">
                BACK
              </Link>
              <Link href="/weekly-modules/module2/thought-distancing-quick-check" className="px-6 py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition-colors">
                Quick Check
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
