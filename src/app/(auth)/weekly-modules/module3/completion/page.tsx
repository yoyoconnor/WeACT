"use client";

import Headbar from "../../../../Headbar";
import ModulesSidebar from "../../ModulesSidebar";
import Link from "next/link";

export default function Module3Completion() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-yellow-300 to-yellow-100 flex flex-col">
      <Headbar />
      <div className="flex flex-row w-full h-[calc(100vh-100px)] min-h-0 max-w-[100vw]">
        {/* Sidebar */}
        <ModulesSidebar progress={60} />
        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center bg-[#fdfaf5] h-full overflow-y-auto p-0">
          <div className="flex flex-col items-center w-full px-10 flex-1 max-w-4xl mx-auto">
            {/* Completion Card */}
            <div className="bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-2xl shadow-2xl p-8 w-full max-w-3xl text-center border border-yellow-200">
              {/* Header Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center">
                  <svg width="34" height="34" fill="white" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-8">Module Three Completed!</h2>

              {/* Progress and Illustration */}
              <div className="flex items-center justify-center gap-12 mb-10 flex-wrap">
                {/* Thermometer */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-48 bg-white relative overflow-hidden border-x-8 border-t-8 border-white rounded-t-full rounded-b-none z-10">
                    <div className="absolute bottom-0 left-0 w-full h-full bg-purple-200" />
                    <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ height: '60%' }}>
                      <div className="w-full h-full bg-purple-600" />
                    </div>
                  </div>
                  <div className="relative z-0" style={{ marginTop: '-1.5rem', top: '14px' }}>
                    <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-xl border-8 border-white bg-purple-600">
                      <span className="text-white text-2xl font-bold relative z-10">60%</span>
                    </div>
                  </div>
                </div>

                {/* Celebration Illustration */}
                <div className="flex flex-col items-center">
                  <div className="w-40 h-40 bg-yellow-100 rounded-xl border border-yellow-200 flex items-center justify-center">
                    <svg width="120" height="120" viewBox="0 0 24 24">
                      <defs>
                        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" style={{ stopColor: '#f59e0b', stopOpacity: 1 }} />
                          <stop offset="100%" style={{ stopColor: '#ef4444', stopOpacity: 1 }} />
                        </linearGradient>
                      </defs>
                      <circle cx="12" cy="12" r="7" fill="url(#grad2)" />
                      <path d="M8 13c1 1 2 1 4 1s3 0 4-1" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                      <circle cx="9" cy="10" r="1" fill="white" />
                      <circle cx="15" cy="10" r="1" fill="white" />
                      <path d="M3 18l2-2m14 2l-2-2M4 8l1 1m15-1l-1 1" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-center gap-6 flex-wrap">
                <Link href="/weekly-modules/dashboard" className="px-6 py-3 bg-amber-300 text-gray-900 rounded-lg font-semibold hover:bg-amber-400 transition-colors">
                  Back to Dashboard
                </Link>
                <Link href="/weekly-modules/module4" className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Continue to Module 4
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
