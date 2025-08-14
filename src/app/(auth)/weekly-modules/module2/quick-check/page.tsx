"use client";

import Headbar from "../../../../Headbar";
import ModulesSidebar from "../../ModulesSidebar";
import Link from "next/link";
import { useState } from "react";

export default function Module2QuickCheck() {
  const [showModal, setShowModal] = useState(false);
  const [selectedResponse, setSelectedResponse] = useState<string | null>(null);

  const handleResponse = (response: string) => {
    setSelectedResponse(response);
    setShowModal(true);
  };

  const getFeedbackMessage = (response: string) => {
    switch (response) {
      case "YES":
        return {
          title: "Fantastic!",
          body:
            "By being willing to let go of control and allow yourself to experience your thoughts and feelings, you open up a more flexible and effective way of responding. Let’s continue exploring how willingness can lead to more peace and less struggle.",
        };
      case "NOT SURE":
        return {
          title: "That&apos;s okay.",
          body:
            "It can be hard to let go of control, especially when we’ve been trying for so long. Take your time, and when you feel ready, willingness might offer a new path forward that’s less exhausting.",
        };
      case "NO":
        return {
          title: "It&apos;s normal to feel unsure",
          body:
            "It’s normal to feel unsure. Willingness is a big shift from trying to control. As we go further, you might find it easier to explore this new approach at your own pace. Keep an open mind, and see how things unfold.",
        };
      default:
        return { title: "", body: "" };
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-yellow-300 to-yellow-100 flex flex-col">
      <Headbar />
      <div className="flex flex-row w-full h-[calc(100vh-100px)] min-h-0 max-w-[100vw]">
        {/* Sidebar */}
        <ModulesSidebar progress={20} />
        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-start bg-[#fdfaf5] h-full overflow-y-auto p-0">
          <div className="flex flex-col items-center w-full px-10 pt-10 flex-1 max-w-3xl mx-auto">
            {/* Titles */}
            <div className="w-full text-2xl font-bold text-gray-900 mb-2">Module 2. Willingness &amp; Defusion</div>
            <div className="w-full text-xl font-semibold text-gray-700 mb-6">Quick Check</div>

            {/* Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 w-full">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center">
                  <svg width="40" height="40" fill="green" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Quick Check</h3>
                  <p className="text-lg text-gray-700">I’m willing to try one willingness or defusion exercise this week.</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <button onClick={() => handleResponse("YES")} className="w-full py-4 bg-yellow-400 text-gray-900 rounded-lg font-semibold hover:bg-yellow-500 transition-colors text-lg">YES</button>
                <button onClick={() => handleResponse("NOT SURE")} className="w-full py-4 bg-yellow-400 text-gray-900 rounded-lg font-semibold hover:bg-yellow-500 transition-colors text-lg">NOT SURE</button>
                <button onClick={() => handleResponse("NO")} className="w-full py-4 bg-yellow-400 text-gray-900 rounded-lg font-semibold hover:bg-yellow-500 transition-colors text-lg">NO</button>
              </div>
            </div>

            {/* Nav */}
            <div className="flex justify-between w-full mt-8 mb-8">
              <Link href="/weekly-modules/module2/willingness" className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-400 transition-colors">BACK</Link>
              <div className="w-32"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-4">
            <div className="flex flex-col items-center text-center mb-6">
              {/* Sun icon */}
              <div className="w-16 h-16 rounded-full bg-yellow-300 flex items-center justify-center mb-4 shadow-inner">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="#f59e0b" aria-hidden="true">
                  <circle cx="12" cy="12" r="4" />
                  <g stroke="#f59e0b" strokeWidth="2" strokeLinecap="round">
                    <line x1="12" y1="1" x2="12" y2="4" />
                    <line x1="12" y1="20" x2="12" y2="23" />
                    <line x1="1" y1="12" x2="4" y2="12" />
                    <line x1="20" y1="12" x2="23" y2="12" />
                    <line x1="4.2" y1="4.2" x2="6.3" y2="6.3" />
                    <line x1="17.7" y1="17.7" x2="19.8" y2="19.8" />
                    <line x1="4.2" y1="19.8" x2="6.3" y2="17.7" />
                    <line x1="17.7" y1="6.3" x2="19.8" y2="4.2" />
                  </g>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{getFeedbackMessage(selectedResponse!).title}</h3>
              <p className="text-lg text-gray-700">{getFeedbackMessage(selectedResponse!).body}</p>
            </div>

            <div className="flex justify-between gap-4">
              <button onClick={() => setShowModal(false)} className="flex-1 py-3 bg-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-400 transition-colors">BACK</button>
              <Link href="/weekly-modules/module2/thought-distancing" className="flex-1 py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition-colors text-center">Continue</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
