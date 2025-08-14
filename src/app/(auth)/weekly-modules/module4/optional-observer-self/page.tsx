"use client";

import Headbar from "../../../../Headbar";
import ModulesSidebar from "../../ModulesSidebar";
import Link from "next/link";

export default function OptionalObserverSelf() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-yellow-300 to-yellow-100 flex flex-col">
      <Headbar />
      <div className="flex flex-row w-full h-[calc(100vh-100px)] min-h-0 max-w-[100vw]">
        {/* Sidebar */}
        <ModulesSidebar progress={68} />
        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-start bg-[#fdfaf5] h-full overflow-y-auto p-0">
          <div className="flex flex-col items-center w-full px-10 pt-10 flex-1 max-w-3xl mx-auto">
            {/* Titles */}
            <div className="w-full text-2xl font-bold text-gray-900 mb-2">Module 4. The Observer Self &amp; Present Moment Awareness</div>
            <div className="w-full text-xl font-semibold text-gray-700 mb-6">Optional Practice &ndash; Observer Self Exercise</div>

            {/* Video Embed */}
            <div className="w-full bg-white rounded-xl shadow border p-4 mb-6">
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/0wTZ2kLj_2k?rel=0"
                  title="Observer Self Exercise"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="text-xs text-gray-500 mt-2">Source: Shelby Waisath, https://youtu.be/0wTZ2kLj_2k</div>
            </div>

            {/* Player UI bar placeholder */}
            <div className="w-full bg-white rounded-xl shadow p-4 mb-8 border">
              <div className="h-2 bg-purple-200 rounded-full mb-3">
                <div className="h-2 bg-purple-600 rounded-full" style={{ width: '35%' }} />
              </div>
              <div className="text-sm text-gray-600">6:13 Minutes</div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between w-full max-w-3xl mt-2 mb-8">
              <Link href="/weekly-modules/module4/mindful-breathing" className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-400 transition-colors">BACK</Link>
              <Link href="/weekly-modules/module4/optional-present-moment" className="px-6 py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition-colors">NEXT</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
