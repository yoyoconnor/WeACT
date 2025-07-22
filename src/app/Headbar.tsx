import Image from "next/image";
import { useSession } from "next-auth/react";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const GearIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><circle cx="12" cy="12" r="3.5"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.09a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
);

export default function Headbar({ page }: { page?: string }) {
  const { data: session, status } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener("mousedown", handleClick);
    } else {
      document.removeEventListener("mousedown", handleClick);
    }
    return () => document.removeEventListener("mousedown", handleClick);
  }, [menuOpen]);

  return (
    <header className="relative w-full z-30 flex flex-row items-center justify-center h-[100px] bg-white border-b border-gray-200 shadow-sm">
      {/* Extruding card for Settings page */}
      {page === 'settings' && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full z-40 flex flex-row gap-4 bg-white rounded-b-3xl shadow-lg px-8 py-3 border-x border-b border-gray-200" style={{ minWidth: 220 }}>
          <Link href="/settings" className="flex items-center text-gray-700 font-semibold hover:text-[var(--weact-gold)] transition">
            <GearIcon /> Settings
          </Link>
        </div>
      )}
      <div className="relative flex items-center justify-center w-full max-w-5xl px-4 min-h-[72px]">
        <div className="absolute left-1/2 -translate-x-1/2">
          <Image
            src="/WEACT.png"
            alt="WeACT Logo"
            width={120}
            height={120}
            className="mb-2 cursor-pointer"
            onClick={() => window.location.href = '/'}
          />
        </div>
        {status === "authenticated" && session?.user?.image && (
          <div className="absolute right-8" ref={menuRef}>
            <button
              className="ml-4 rounded-full border-2 border-yellow-400 hover:border-yellow-600 transition focus:outline-none"
              onClick={() => setMenuOpen((v) => !v)}
              title={session.user.name || session.user.email || "Profile"}
            >
              <Image
                src={session.user.image}
                alt="Profile Picture"
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
            </button>
            {menuOpen && (
              <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-lg border border-gray-200 z-50 animate-fadeIn flex flex-col overflow-hidden">
                <div className="px-4 py-3 border-b border-gray-100">
                  <div className="font-semibold text-gray-800 text-base truncate">{session.user.name || session.user.email}</div>
                  <div className="text-xs text-gray-500 truncate">{session.user.email}</div>
                </div>
                <button
                  className="w-full text-left px-4 py-3 hover:bg-yellow-100 text-gray-800 font-medium transition"
                  onClick={() => { setMenuOpen(false); window.location.href = "/home"; }}
                >
                  Redirect to Homepage
                </button>
                <button
                  className="w-full text-left px-4 py-3 hover:bg-yellow-100 text-gray-800 font-medium transition"
                  onClick={() => { setMenuOpen(false); window.location.href = "/account"; }}
                >
                  Account Settings
                </button>
                <button
                  className="w-full text-left px-4 py-3 hover:bg-red-100 text-red-600 font-medium border-t border-gray-100 transition"
                  onClick={() => { setMenuOpen(false); import('next-auth/react').then(mod => mod.signOut({ callbackUrl: '/login' })); }}
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
