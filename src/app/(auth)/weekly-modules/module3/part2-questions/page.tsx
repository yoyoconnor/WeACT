"use client";

import Headbar from "../../../../Headbar";
import ModulesSidebar from "../../ModulesSidebar";
import Link from "next/link";
import { useState } from "react";

export default function Module3Part2Questions() {
  const [showModal, setShowModal] = useState(false);
  const [answers, setAnswers] = useState({
    action: "",
    reflection: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAnswers((prev) => ({ ...prev, [name]: value }));
  };

  const canContinue = answers.action.trim().length > 0 && answers.reflection.trim().length > 0;

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-yellow-300 to-yellow-100 flex flex-col">
      <Headbar />
      <div className="flex flex-row w-full h-[calc(100vh-100px)] min-h-0 max-w-[100vw]">
        {/* Sidebar */}
        <ModulesSidebar progress={48} />
        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-start bg-[#fdfaf5] h-full overflow-y-auto p-0">
          <div className="flex flex-col items-center w-full px-10 pt-10 flex-1 max-w-3xl mx-auto">
            {/* Titles */}
            <div className="w-full text-2xl font-bold text-gray-900 mb-2">Module 3. Acceptance</div>
            <div className="w-full text-xl font-semibold text-gray-700 mb-6">Case Scenario Exercise &ndash; Part 2 Questions</div>

            <div className="bg-white rounded-xl shadow-lg p-8 w-full">
              <div className="mb-6">
                <label htmlFor="action" className="block font-semibold text-gray-800 mb-2">What is one small action you could take that aligns with your values in this scenario?</label>
                <textarea id="action" name="action" className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 min-h-[120px]" value={answers.action} onChange={handleChange} placeholder="e.g., Speak gently, take one steady breath, ask for help, or focus on what matters most." />
              </div>
              <div className="mb-6">
                <label htmlFor="reflection" className="block font-semibold text-gray-800 mb-2">How did acceptance help you relate differently to what showed up inside?</label>
                <textarea id="reflection" name="reflection" className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 min-h-[120px]" value={answers.reflection} onChange={handleChange} placeholder="e.g., I made space for the feelings and said, I am noticing..., which helped me stay present and act on my values." />
              </div>
              <div className="flex justify-between">
                <Link href="/weekly-modules/module3/part2" className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-400 transition-colors">BACK</Link>
                <button disabled={!canContinue} onClick={() => setShowModal(true)} className={`px-6 py-3 rounded-lg font-semibold transition-colors ${canContinue ? "bg-yellow-500 text-white hover:bg-yellow-600" : "bg-gray-200 text-gray-400"}`}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-4 text-center">
            <div className="w-16 h-16 rounded-full bg-yellow-300 flex items-center justify-center mb-4 shadow-inner mx-auto">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="#f59e0b" aria-hidden="true">
                <circle cx="12" cy="12" r="4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Great reflection</h3>
            <p className="text-lg text-gray-700 mb-6">You practiced making space for difficult experiences and staying connected to what matters. Let&apos;s wrap up this module.</p>
            <div className="flex gap-4">
              <button onClick={() => setShowModal(false)} className="flex-1 py-3 bg-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-400 transition-colors">Back</button>
              <Link href="/weekly-modules/module3/completion" className="flex-1 py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition-colors text-center">Continue</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
