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
          <Link href="/home" className="flex items-center text-gray-700 font-semibold hover:text-[var(--weact-gold)] transition">
            Home
          </Link>
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
          <div className="absolute top-0 right-0 flex items-center h-full" ref={menuRef}>
            <button
              className="rounded-full border-2 border-yellow-400 hover:border-yellow-600 transition focus:outline-none"
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
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-56 bg-white rounded-xl shadow-lg border border-gray-200 z-50 animate-fadeIn flex flex-col overflow-hidden">
                <div className="px-4 py-3 border-b border-gray-100">
                  <div className="font-semibold text-gray-800 text-base truncate">{session.user.name || session.user.email}</div>
                  <div className="text-xs text-gray-500 truncate">{session.user.email}</div>
                </div>
                <button
                  className="w-full text-left px-4 py-3 hover:bg-yellow-100 text-gray-800 font-medium transition flex items-center"
                  onClick={() => { setMenuOpen(false); window.location.href = "/home"; }}
                >
                  {/* Home SVG from Sidebar */}
                  <span className="flex items-center text-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 20 20" style={{ minWidth: '28px', color: '#a13eb7', marginRight: '10px' }}>
                      <path d="M10.707 2.293a1 1 0 0 0-1.414 0l-7 7A1 1 0 0 0 3 11h1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3h2v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-6h1a1 1 0 0 0 .707-1.707l-7-7z"/>
                    </svg>
                    Home
                  </span>
                </button>
                <button
                  className="w-full text-left px-4 py-3 hover:bg-yellow-100 text-gray-800 font-medium transition flex items-center"
                  onClick={() => { setMenuOpen(false); window.location.href = "/account"; }}
                >
                  <span className="flex items-center text-lg">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#a13eb7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ minWidth: '28px', marginRight: '10px' }}>
                      <circle cx="12" cy="12" r="3.5"/>
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.09a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                    </svg>
                    <span>Settings</span>
                  </span>
                </button>
                <div className="border-t border-gray-100 my-1" />
                <button
                  className="w-full text-left px-4 py-3 hover:bg-red-100 text-red-600 font-medium transition flex items-center"
                  onClick={() => { setMenuOpen(false); import('next-auth/react').then(mod => mod.signOut({ callbackUrl: '/login' })); }}
                >
                  <span className="flex items-center text-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 24 24" style={{ minWidth: '28px', color: '#dc2626', marginRight: '10px' }}>
                      <path d="M16 17v1a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1" fill="none" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="7 12 21 12" fill="none" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="18 15 21 12 18 9" fill="none" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Sign out
                  </span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
