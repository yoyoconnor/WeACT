"use client";

import Headbar from '../../../../Headbar';
// Removed unused Image import
import ModulesSidebar from "../../ModulesSidebar";
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CopingStrategies() {
  const [currentStrategy, setCurrentStrategy] = useState('');
  const [isWorking, setIsWorking] = useState<string>('');
  const [isHelpful, setIsHelpful] = useState<string>('');
  const [allowsLife, setAllowsLife] = useState<string>('');
  const [goal, setGoal] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();

  const handleSubmit = () => {
    // Here you would typically save the data to your backend
    console.log('Coping strategies submitted:', {
      currentStrategy,
      isWorking,
      isHelpful,
      allowsLife,
      goal
    });
    setIsSubmitted(true);
    
    // Redirect after a short delay to show the submitted state
    setTimeout(() => {
      router.push('/weekly-modules/module1/man-in-the-hole-metaphor');
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-yellow-300 to-yellow-100 flex flex-col">
      <Headbar />
      <div className="flex flex-row w-full h-[calc(100vh-100px)] min-h-0 max-w-[100vw]">
        {/* Sidebar */}
        <ModulesSidebar progress={40} />
        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-start bg-[#fdfaf5] h-full overflow-y-auto p-0">
          <div className="flex flex-col items-center w-full px-4 pt-8 flex-1 max-w-2xl mx-auto">
            {/* Module Title */}
            <div className="w-full text-2xl font-bold text-gray-900 mb-2">Module 1. Creative Hopelessness</div>
            <div className="w-full text-xl font-semibold text-gray-700 mb-6">My Coping Strategies</div>
            
            {/* Main Content Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-3xl">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-20 h-20 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg width="40" height="40" fill="white" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">My coping strategies</h3>
                  
                  {/* Form Fields */}
                  <div className="space-y-6">
                    <div>
                      <label className="block text-lg font-medium text-gray-700 mb-2">
                        What is your current coping strategy?
                      </label>
                      <textarea
                        value={currentStrategy}
                        onChange={(e) => setCurrentStrategy(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        rows={3}
                        placeholder="Describe your current coping strategy..."
                      />
                    </div>
                    
                    <div>
                      <label className="block text-lg font-medium text-gray-700 mb-2">
                        Is your strategy working for you?
                      </label>
                      <div className="flex gap-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="isWorking"
                            value="Yes"
                            checked={isWorking === 'Yes'}
                            onChange={(e) => setIsWorking(e.target.value)}
                            className="mr-2"
                          />
                          <span className="text-lg">Yes</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="isWorking"
                            value="No"
                            checked={isWorking === 'No'}
                            onChange={(e) => setIsWorking(e.target.value)}
                            className="mr-2"
                          />
                          <span className="text-lg">No</span>
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-lg font-medium text-gray-700 mb-2">
                        Is your strategy with your thoughts and feelings helpful?
                      </label>
                      <div className="flex gap-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="isHelpful"
                            value="Yes"
                            checked={isHelpful === 'Yes'}
                            onChange={(e) => setIsHelpful(e.target.value)}
                            className="mr-2"
                          />
                          <span className="text-lg">Yes</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="isHelpful"
                            value="No"
                            checked={isHelpful === 'No'}
                            onChange={(e) => setIsHelpful(e.target.value)}
                            className="mr-2"
                          />
                          <span className="text-lg">No</span>
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-lg font-medium text-gray-700 mb-2">
                        Does your strategy with your thoughts and feelings allow you to live the life you want?
                      </label>
                      <div className="flex gap-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="allowsLife"
                            value="Yes"
                            checked={allowsLife === 'Yes'}
                            onChange={(e) => setAllowsLife(e.target.value)}
                            className="mr-2"
                          />
                          <span className="text-lg">Yes</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="allowsLife"
                            value="No"
                            checked={allowsLife === 'No'}
                            onChange={(e) => setAllowsLife(e.target.value)}
                            className="mr-2"
                          />
                          <span className="text-lg">No</span>
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-lg font-medium text-gray-700 mb-2">
                        Goal:
                      </label>
                      <textarea
                        value={goal}
                        onChange={(e) => setGoal(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        rows={2}
                        placeholder="What is your goal?"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <button
                        onClick={handleSubmit}
                        disabled={isSubmitted}
                        className={`w-full py-3 rounded-lg font-semibold transition-colors text-lg ${
                          isSubmitted 
                            ? 'bg-green-500 text-white cursor-not-allowed' 
                            : 'bg-yellow-500 text-white hover:bg-yellow-600'
                        }`}
                      >
                        {isSubmitted ? 'Submitted ✓ Redirecting...' : 'Submit Responses'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex justify-between w-full max-w-3xl mt-6 mb-8">
              <Link href="/weekly-modules/module1/basic-concept-quick-check" className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-400 transition-colors">
                BACK
              </Link>
              <div className="w-32"></div> {/* Spacer */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
