"use client";
import Headbar from "../../Headbar";
import { useSession } from "next-auth/react";

// This file was moved from /app/(auth)/dashboard/page.tsx to /app/(auth)/home/page.tsx to become the new protected Home page.

export default function Home() {
  const { data: session } = useSession();
  // You can replace this with the actual user's name logic
  const userName = session?.user?.name || "User";

  const menu = [
    { label: "Weekly Modules", path: "/weekly-modules/dashboard" },
    { label: "Daily Practice", path: "/daily-practice" },
    { label: "User Guide", path: "/user-guide" },
    { label: "Research Team", path: "/research-team" },
    { label: "Resources", path: "/resources" },
    { label: "Study Q&A", path: "/study-qna" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-yellow-200 to-yellow-400">
      <Headbar />
      <div className="flex flex-col items-center justify-center w-full pt-28">
        <div className="bg-white rounded-2xl shadow-xl p-12 max-w-3xl w-full flex flex-col items-center mt-4" style={{ minHeight: 500 }}>
          <div className="flex flex-col items-center w-full">
            <span className="text-2xl sm:text-3xl font-normal text-gray-700 mb-2">Hi <span className="font-bold">{userName}!</span></span>
            <hr className="w-full border-t border-gray-200 my-4" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full mt-2">
              {menu.map((item) => (
                <button
                  key={item.label}
                  className="rounded-xl px-6 py-8 text-xl font-normal shadow-md transition-all duration-200 bg-gray-100 text-black hover:bg-yellow-400 hover:text-black focus:bg-yellow-400 focus:text-black active:bg-yellow-300"
                  style={{ minWidth: 180, minHeight: 100 }}
                  onClick={() => window.location.href = item.path}
                  type="button"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
