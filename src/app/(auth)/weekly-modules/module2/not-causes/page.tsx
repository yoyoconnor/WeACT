"use client";

import Headbar from "../../../../Headbar";
import ModulesSidebar from "../../ModulesSidebar";
import Image from "next/image";
import Link from "next/link";

export default function NotCauses() {
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
            <div className="w-full text-xl font-semibold text-gray-700 mb-6">Thoughts and feelings are not causes of behaviors</div>

            {/* Audio Clip Card */}
            <div className="bg-white rounded-xl shadow flex items-center gap-4 px-6 py-4 mb-6 w-full max-w-md">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[var(--weact-purple)]">
                <svg width="36" height="36" fill="white" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="white" opacity="0.2"/><polygon points="10,8 16,12 10,16" fill="white"/></svg>
              </div>
              <div className="flex flex-col w-full">
                <span className="font-bold text-gray-900">Audio Clip: Thoughts and feelings are not causes of behaviors</span>
                <span className="text-gray-500 text-sm">1:48 Minutes</span>
                {/* Optional audio file at public/audio/module2/not-causes.mp3 */}
                <audio controls className="mt-2 w-full">
                  <source src="/audio/module2/not-causes.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>

            {/* Transcript and Image Side by Side */}
            <div className="flex flex-row items-start gap-8 w-full max-w-3xl mt-2">
              <div className="flex-1">
                <div className="font-bold text-lg text-gray-900 mb-2">Transcript</div>
                <div className="space-y-4 text-gray-800 text-lg font-normal">
                  <p>
                    Once we begin to allow the effects of distressing thoughts with willingness and engage some distance through defusion, we will notice that our behavior has more flexibility.
                  </p>
                  <p>
                    This is because when we start to think of our thoughts and feelings as causing our actions, it&apos;s like we hand over the steering wheel. A little bit of willingness and defusion lets us take it back.
                  </p>
                  <p>
                    Take this example: you might hear someone say, &quot;I was angry, so I yelled at my spouse.&quot; Or, &quot;Seeing that my mind was telling me that being criticized is painful, I got defensive.&quot;
                  </p>
                  <p>
                    Certainly, feelings can be intense and can lead to habits of action. But think about other times this hasn&apos;t been the case. &quot;I was angry, and I chose to step outside and breathe.&quot; The difference is in how we relate to what shows up inside: with willingness and defusion, we can act in line with our values.
                  </p>
                  <p>
                    Here&apos;s a values-oriented reframe: &quot;I didn&apos;t avoid calling my family member because anxiety &apos;made me&apos;—I chose to notice anxiety, and still chose to make that call because connection matters to me.&quot;
                  </p>
                  <p>
                    This is another example of how thoughts and feelings can influence, but don&apos;t control, unless we fuse with them. We can allow them to be here and still choose helpful, values-based actions, even though it may take some practice and time to notice this shift.
                  </p>
                </div>
                <div className="text-sm text-gray-500 mt-2">Image Source: Adobe Stock</div>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/weekly-modules/thumbnails/module2.png" alt="Not causes of behaviors image" width={260} height={260} className="rounded-xl mb-2" />
                <div className="text-xs text-gray-500 text-center max-w-[240px]">Image Source: Adobe Stock</div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between w-full max-w-3xl mt-8 mb-8">
              <Link href="/weekly-modules/module2/thought-distancing-quick-check" className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-400 transition-colors">
                BACK
              </Link>
              <Link href="/weekly-modules/module2/not-causes-quick-check" className="px-6 py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition-colors">
                Quick Check
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
