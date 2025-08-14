"use client";

import Headbar from '../../../../Headbar';
// Removed unused Image import
import ModulesSidebar from "../../ModulesSidebar";
import Link from 'next/link';

export default function Module1Completion() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-yellow-300 to-yellow-100 flex flex-col">
      <Headbar />
      <div className="flex flex-row w-full h-[calc(100vh-100px)] min-h-0 max-w-[100vw]">
        {/* Sidebar */}
        <ModulesSidebar progress={100} />
        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center bg-[#fdfaf5] h-full overflow-y-auto p-0">
          <div className="flex flex-col items-center w-full px-10 flex-1 max-w-4xl mx-auto">
            {/* Completion Modal */}
            <div className="bg-orange-200 rounded-2xl shadow-2xl p-8 w-full max-w-2xl text-center">
              {/* Star Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center">
                  <svg width="32" height="32" fill="white" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
              </div>
              
              {/* Completion Title */}
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Module One Completed!</h2>
              
              {/* Progress and Illustration */}
              <div className="flex items-center justify-between mb-8">
                {/* Progress Thermometer */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-48 bg-white relative overflow-hidden border-x-8 border-t-8 border-white rounded-t-full rounded-b-none z-10">
                    <div className="absolute bottom-0 left-0 w-full h-full bg-purple-300" />
                    <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ height: '30%' }}>
                      <div className="w-full h-full bg-purple-600" />
                    </div>
                  </div>
                  <div className="relative z-0" style={{ marginTop: '-1.5rem', top: '14px' }}>
                    <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-xl border-8 border-white bg-purple-600">
                      <span className="text-white text-2xl font-bold relative z-10">30%</span>
                    </div>
                  </div>
                </div>
                
                {/* Celebration Illustration */}
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 bg-blue-400 rounded-full flex items-center justify-center mb-4">
                    <svg width="80" height="80" fill="white" viewBox="0 0 24 24">
                      {/* Simple person jumping illustration */}
                      <circle cx="12" cy="8" r="3" fill="white"/>
                      <rect x="10" y="11" width="4" height="8" fill="white"/>
                      <rect x="8" y="19" width="2" height="4" fill="white"/>
                      <rect x="14" y="19" width="2" height="4" fill="white"/>
                      <rect x="9" y="15" width="2" height="3" fill="white"/>
                      <rect x="13" y="15" width="2" height="3" fill="white"/>
                    </svg>
                  </div>
                  <div className="text-sm text-gray-600">Celebration!</div>
                </div>
              </div>
              
              {/* Navigation Buttons */}
              <div className="flex justify-between gap-4">
                <Link 
                  href="/weekly-modules/dashboard"
                  className="flex-1 py-3 bg-amber-300 text-gray-900 rounded-lg font-semibold hover:bg-amber-400 transition-colors"
                >
                  Back to Dashboard
                </Link>
                <Link 
                  href="/weekly-modules/module2"
                  className="flex-1 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                >
                  Continue to Module 2
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

