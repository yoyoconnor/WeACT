"use client";

import Headbar from "../../../Headbar";
import Image from "next/image";
import ModulesSidebar from "../ModulesSidebar";
import Link from "next/link";

export default function Module2() {
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
            <div className="w-full text-2xl font-bold text-gray-900 mb-2">Module 2. Willingness &amp; Defusion</div>
            <div className="w-full text-xl font-semibold text-gray-700 mb-6">Introduction</div>

            {/* Content Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-3xl">
              <div className="flex items-start gap-8">
                <div className="flex-1">
                  <div className="mb-6 text-gray-800 text-lg font-normal">
                    Last week, we explored how trying to control uncomfortable thoughts and feelings can be ineffective and sometimes creates extra struggle. Think of a tug-of-war with a monster: the harder we pull against our inner experiences, the stronger the fight can feel.
                  </div>
                  <div className="mb-6 text-gray-800 text-lg font-normal">
                    In this module, we will begin practicing willingness and defusion—skills that help us notice thoughts and feelings without getting hooked by them, and make room for them while moving toward what matters.
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <Image src="/weekly-modules/thumbnails/module2.png" alt="Tug-of-war illustration" width={260} height={260} className="rounded-xl mb-2" />
                  <div className="text-xs text-gray-500 text-center max-w-[240px]">Module image</div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between w-full max-w-3xl mt-8 mb-8">
              <Link href="/weekly-modules/dashboard" className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-400 transition-colors">
                BACK
              </Link>
              <Link href="/weekly-modules/module2/willingness" className="px-6 py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition-colors">
                NEXT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
