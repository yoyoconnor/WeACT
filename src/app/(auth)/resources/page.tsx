"use client";
import Headbar from "../../Headbar";

export default function UserGuide() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#2B2B2B] via-[#2B2B2B] to-[#3A2B1C] flex flex-col">
      <Headbar />
      <div className="flex flex-col items-center w-full">
        <div className="bg-gradient-to-b from-yellow-200 to-yellow-400 w-full flex flex-col items-center min-h-[80vh] h-[calc(100vh-6rem)]">
          <div className="bg-[#fdfaf5] rounded-t-xl rounded-b-none shadow-xl max-w-3xl w-full flex flex-col items-center h-full justify-start mt-[120px]" style={{ minHeight: 400, padding: '32px 24px' }}>
            <span className="text-2xl sm:text-3xl font-bold text-[var(--weact-purple)] mb-2">Resources Page</span>
          </div>
        </div>
      </div>
    </div>
  );
}
