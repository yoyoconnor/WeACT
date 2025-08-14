"use client";

import Headbar from "../../../../Headbar";
import ModulesSidebar from "../../ModulesSidebar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Module4MindfulBreathing() {
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
          title: "Great!",
          body:
            "Practicing present-moment awareness with your breath can help you stay grounded and more flexible in responding to challenging thoughts or feelings. Keep practicing, and remember that each time you notice and return to your breath, you\'re strengthening this skill.",
        };
      case "NOT SURE":
        return {
          title: "That\'s okay!",
          body:
            "Everyone moves at their own pace with these practices. You can revisit this exercise whenever it feels right for you, or even explore other ways to stay connected to the present moment.",
        };
      case "NO":
        return {
          title: "It\'s understandable to feel unsure",
          body:
            "You might try practicing in small amounts to see how it feels. Even short moments of awareness can make a meaningful difference over time.",
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
        <ModulesSidebar progress={66} />
        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-start bg-[#fdfaf5] h-full overflow-y-auto p-0">
          <div className="flex flex-col items-center w-full px-10 pt-10 flex-1 max-w-4xl mx-auto">
            {/* Titles */}
            <div className="w-full text-2xl font-bold text-gray-900 mb-2">Module 4. The Observer Self &amp; Present Moment Awareness</div>
            <div className="w-full text-xl font-semibold text-gray-700 mb-6">Mindful Breathing Exercise</div>

            {/* Image */}
            <div className="w-full max-w-3xl mb-4">
              <Image src="/landscape.png" alt="Mindful breathing illustration" width={960} height={540} className="rounded-xl w-full h-auto object-cover" />
              <div className="text-xs text-gray-500 text-center mt-1">Image Source: Adobe Stock</div>
            </div>

            {/* Audio Card */}
            <div className="bg-white rounded-xl shadow flex items-center gap-4 px-6 py-4 mb-6 w-full max-w-3xl">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[var(--weact-purple)]">
                <svg width="36" height="36" fill="white" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="white" opacity="0.2"/><polygon points="10,8 16,12 10,16" fill="white"/></svg>
              </div>
              <div className="flex flex-col w-full">
                <span className="font-bold text-gray-900">Audio Clip: Mindful Breathing Exercise</span>
                <span className="text-gray-500 text-sm">7:05 Minutes</span>
                {/* Optional audio file at public/audio/module4/mindful-breathing.mp3 */}
                <audio controls className="mt-2 w-full">
                  <source src="/audio/module4/mindful-breathing.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>

            {/* Nav + Quick Check trigger */}
            <div className="flex justify-between w-full max-w-3xl mt-2 mb-8">
              <Link href="/weekly-modules/module4" className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-400 transition-colors">BACK</Link>
              <button onClick={() => handleResponse("OPEN")} className="px-6 py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition-colors">Quick Check</button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-4">
            <div className="flex flex-col items-center text-center mb-6">
              <div className="w-16 h-16 rounded-full bg-yellow-300 flex items-center justify-center mb-4 shadow-inner">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="#f59e0b" aria-hidden="true">
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quick Check</h3>
              <p className="text-lg text-gray-700">I am willing to practice staying present with my breath and noticing my thoughts.</p>
            </div>

            <div className="flex flex-col gap-3 mb-6">
              <button onClick={() => handleResponse("YES")} className="w-full py-3 bg-yellow-400 text-gray-900 rounded-lg font-semibold hover:bg-yellow-500 transition-colors text-lg">YES</button>
              <button onClick={() => handleResponse("NOT SURE")} className="w-full py-3 bg-yellow-400 text-gray-900 rounded-lg font-semibold hover:bg-yellow-500 transition-colors text-lg">NOT SURE</button>
              <button onClick={() => handleResponse("NO")} className="w-full py-3 bg-yellow-400 text-gray-900 rounded-lg font-semibold hover:bg-yellow-500 transition-colors text-lg">NO</button>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 text-left">
              <h4 className="font-semibold text-gray-900 mb-2">{getFeedbackMessage(selectedResponse || "").title}</h4>
              <p className="text-gray-700">{getFeedbackMessage(selectedResponse || "").body}</p>
            </div>

            <div className="flex justify-between gap-4 mt-6">
              <button onClick={() => setShowModal(false)} className="flex-1 py-3 bg-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-400 transition-colors">BACK</button>
              <Link href="/weekly-modules/module4/optional-observer-self" className="flex-1 py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition-colors text-center">Continue</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
