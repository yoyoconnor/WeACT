"use client";
import Image from "next/image";

export default function ModulesSidebar({ progress }: { progress: number }) {
  // Clamp progress for positive and negative ranges
  const clampedProgress = Math.min(Math.max(progress, -20), 100); // Allow up to -20% for visual effect
  const isNegative = clampedProgress < 0;
  const positiveFill = isNegative ? '0%' : `${clampedProgress}%`;
  const negativeFill = isNegative ? `${Math.abs(clampedProgress)}%` : '0%';

  return (
    <div className="flex flex-col items-center py-8 px-2 bg-gradient-to-b from-yellow-300 to-yellow-500" style={{ width: 165, minHeight: '100vh' }}>
      <div className="flex flex-col items-center">
        {/* Thermometer */}
        <div className="flex flex-col items-center" style={{ marginTop: '60px' }}>
          <div className="w-12 h-48 bg-white relative overflow-hidden border-x-8 border-t-8 border-white rounded-t-full rounded-b-none z-10">
            <div className="absolute bottom-0 left-0 w-full h-full bg-purple-300" />
            {isNegative && (
              <div
                className="absolute bottom-0 left-0 w-full bg-red-400 animate-pulse"
                style={{ height: negativeFill, zIndex: 20, opacity: 0.7 }}
              />
            )}
            {!isNegative && (
              <div
                className="absolute bottom-0 left-0 w-full overflow-hidden"
                style={{ height: positiveFill }}
              >
                <div className="w-full h-full bg-[#a13eb7]" />
              </div>
            )}
          </div>
          <div className="relative z-0" style={{ marginTop: '-1.5rem', top: '14px' }}>
            <div className={`w-20 h-20 rounded-full flex items-center justify-center shadow-xl border-8 border-white ${isNegative ? 'bg-red-500' : 'bg-[#a13eb7]'}`}>
              <span className={`text-white text-2xl font-bold relative z-10 ${isNegative ? 'text-red-100' : ''}`}>{Math.floor(clampedProgress)}%</span>
            </div>
          </div>
          <div className="mt-4 text-lg font-bold text-white text-center">Modules<br /><span className="font-extrabold">Progress</span></div>
        </div>
      </div>
    </div>
  );
}
