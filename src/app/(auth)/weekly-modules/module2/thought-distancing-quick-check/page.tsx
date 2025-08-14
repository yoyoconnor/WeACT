"use client";

import Headbar from "../../../../Headbar";
import ModulesSidebar from "../../ModulesSidebar";
import Link from "next/link";
import { useState } from "react";

export default function ThoughtDistancingQuickCheck() {
  const [showModal, setShowModal] = useState(false);
  const [selectedResponse, setSelectedResponse] = useState<string | null>(null);

  const handleResponse = (response: string) => {
    setSelectedResponse(response);
    setShowModal(true);
  };

  const getFeedback = (response: string) => {
    switch (response) {
      case "YES":
        return {
          title: "Great!",
          body:
            "Noticing the difference is a key part of defusion. By choosing to nonreactively label your thoughts, you’re getting less hooked.",
        };
      case "NOT SURE":
        return {
          title: "That&apos;s okay.",
          body:
            "It can take time to notice the subtle changes. Keep practicing, and simply watch if your thoughts feel a bit farther away from dictating your actions.",
        };
      case "NO":
        return {
          title: "It&apos;s normal to be unsure at first.",
          body:
            "This move is a practice. You may need many reps to be able to keep the space for noticing. Keep gently labeling and letting thoughts be.",
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
                  {/* Sun icon */}
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="#f59e0b"><circle cx="12" cy="12" r="4"/><g stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="1" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="23"/><line x1="1" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="23" y2="12"/><line x1="4.2" y1="4.2" x2="6.3" y2="6.3"/><line x1="17.7" y1="17.7" x2="19.8" y2="19.8"/><line x1="4.2" y1="19.8" x2="6.3" y2="17.7"/><line x1="17.7" y1="6.3" x2="19.8" y2="4.2"/></g></svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Quick Check</h3>
                  <p className="text-lg text-gray-700">I can notice the difference when I say &quot;I&apos;m having the thought that...&quot; and feel a little less fused with the thought.</p>
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
              <Link href="/weekly-modules/module2/thought-distancing" className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-400 transition-colors">BACK</Link>
              <div className="w-32"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-4 text-center">
            <div className="flex flex-col items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-yellow-300 flex items-center justify-center mb-4 shadow-inner">
                {/* Sun icon */}
                <svg width="36" height="36" viewBox="0 0 24 24" fill="#f59e0b" aria-hidden="true"><circle cx="12" cy="12" r="4"/><g stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="1" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="23"/><line x1="1" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="23" y2="12"/><line x1="4.2" y1="4.2" x2="6.3" y2="6.3"/><line x1="17.7" y1="17.7" x2="19.8" y2="19.8"/><line x1="4.2" y1="19.8" x2="6.3" y2="17.7"/><line x1="17.7" y1="6.3" x2="19.8" y2="4.2"/></g></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{getFeedback(selectedResponse!).title}</h3>
              <p className="text-lg text-gray-700">{getFeedback(selectedResponse!).body}</p>
            </div>
            <div className="flex justify-between gap-4">
              <button onClick={() => setShowModal(false)} className="flex-1 py-3 bg-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-400 transition-colors">BACK</button>
              <Link href="/weekly-modules/module2/not-causes" className="flex-1 py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition-colors text-center">Continue</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
