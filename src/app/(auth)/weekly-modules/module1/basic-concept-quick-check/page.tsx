"use client";

import Headbar from '../../../../Headbar';
import Image from 'next/image';
import ModulesSidebar from "../../ModulesSidebar";
import Link from 'next/link';
import { useState } from 'react';

export default function BasicConceptQuickCheck() {
  const [showModal, setShowModal] = useState(false);
  const [selectedResponse, setSelectedResponse] = useState<string | null>(null);

  const handleResponse = (response: string) => {
    setSelectedResponse(response);
    setShowModal(true);
  };

  const getFeedbackMessage = (response: string) => {
    switch (response) {
      case 'YES':
        return "Wonderful! Recognizing the value of responding to your thoughts and emotions in new ways is a powerful step. Every small action you take can bring you closer to living a life that truly matters to you.";
      case 'NO':
        return "That's completely okay! It's important to honor where you are right now. Sometimes it takes time to feel ready.";
      case 'NOT SURE':
        return "Feeling uncertain is natural! It can be hard to know what's right until you start exploring. You don't have to have all the answers now—just consider experimenting with small steps and see where it leads.";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-yellow-300 to-yellow-100 flex flex-col">
      <Headbar />
      <div className="flex flex-row w-full h-full" style={{ minHeight: '100vh', maxWidth: '100vw' }}>
        {/* Sidebar */}
        <ModulesSidebar progress={20} />
        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-start bg-[#fdfaf5] min-h-screen p-0">
          <div className="flex flex-col items-center w-full px-10 pt-10 flex-1 max-w-4xl mx-auto">
            {/* Module Title */}
            <div className="w-full text-2xl font-bold text-gray-900 mb-2">Module 1. Creative Hopelessness</div>
            <div className="w-full text-xl font-semibold text-gray-700 mb-6">Quick Check</div>
            
            {/* Main Content Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-2xl">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center">
                  <svg width="40" height="40" fill="green" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Quick Check</h3>
                  <p className="text-lg text-gray-700">
                    I am willing to learn to respond more effectively to my difficult thoughts and emotions, so I can invest my time and energy into doing what is truly meaningful to me.
                  </p>
                </div>
              </div>
              
              {/* Response Buttons */}
              <div className="flex flex-col gap-4">
                <button 
                  onClick={() => handleResponse('YES')}
                  className="w-full py-4 bg-yellow-400 text-gray-900 rounded-lg font-semibold hover:bg-yellow-500 transition-colors text-lg"
                >
                  YES
                </button>
                <button 
                  onClick={() => handleResponse('NOT SURE')}
                  className="w-full py-4 bg-yellow-400 text-gray-900 rounded-lg font-semibold hover:bg-yellow-500 transition-colors text-lg"
                >
                  NOT SURE
                </button>
                <button 
                  onClick={() => handleResponse('NO')}
                  className="w-full py-4 bg-yellow-400 text-gray-900 rounded-lg font-semibold hover:bg-yellow-500 transition-colors text-lg"
                >
                  NO
                </button>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex justify-between w-full max-w-2xl mt-8 mb-8">
              <Link href="/weekly-modules/module1/basic-concept" className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-400 transition-colors">
                BACK
              </Link>
              <div className="w-32"></div> {/* Spacer */}
            </div>
          </div>
        </div>
      </div>

      {/* Feedback Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-4">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                <svg width="32" height="32" fill="green" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-lg text-gray-700">
                  {getFeedbackMessage(selectedResponse!)}
                </p>
              </div>
            </div>
            
            <div className="flex justify-between gap-4">
              <button 
                onClick={() => setShowModal(false)}
                className="flex-1 py-3 bg-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-400 transition-colors"
              >
                BACK
              </button>
              <Link 
                href="/weekly-modules/module1/coping-strategies"
                className="flex-1 py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition-colors text-center"
              >
                Continue
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

