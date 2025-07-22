"use client";
import Headbar from '../../Headbar';

export default function DailyPractice() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#2B2B2B] via-[#2B2B2B] to-[#3A2B1C] flex flex-col">
      <Headbar />
      <div className="w-full max-w-3xl flex-1 flex flex-col items-center justify-start pt-12 pb-0">
        <div className="bg-white rounded-t-3xl rounded-b-none shadow-lg w-full flex-1 flex flex-col p-8" style={{ minHeight: 'calc(100vh - 120px)' }}>
          Daily Practice Page
        </div>
      </div>
    </div>
  );
}
