"use client";

import React from "react";
import Image from "next/image";

function useTypewriter(text: string, duration: number = 1000, start: boolean = true) {
  const [displayed, setDisplayed] = React.useState("");
  React.useEffect(() => {
    if (!start) {
      setDisplayed("");
      return;
    }
    setDisplayed("");
    let i = 0;
    const delay = text.length > 0 ? duration / text.length : duration;
    let cancelled = false;
    function step() {
      if (cancelled) return;
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i < text.length) {
        setTimeout(step, delay);
      }
    }
    step();
    return () => {
      cancelled = true;
    };
  }, [text, duration, start]);
  return displayed || "";
};

const CombinedIntroPanel = () => {
  const [logoAnim, setLogoAnim] = React.useState<'start' | 'shrink'>('start');
  const [showText, setShowText] = React.useState(false);
  const [showButton, setShowButton] = React.useState(false);
  const [typeStart, setTypeStart] = React.useState(false);
  const [descTypeStart, setDescTypeStart] = React.useState(false);

  React.useEffect(() => {
    // Start by shrinking
    setTimeout(() => setLogoAnim('shrink'), 100);
    // Show text after logo animates (0.7s)
    setTimeout(() => setShowText(true), 800);
    // Start typewriter after logo is in final place (1.5s)
    setTimeout(() => setTypeStart(true), 1500);
    // Start desc typewriter after welcome finishes (0.6s)
    setTimeout(() => setDescTypeStart(true), 2600);
  }, []);

  // Show button only after description finishes typing
  React.useEffect(() => {
    if (!descTypeStart) return;
    // Wait for the typewriter to finish (duration = 3500ms)
    const timeout = setTimeout(() => setShowButton(true), 3500);
    return () => clearTimeout(timeout);
  }, [descTypeStart]);

  const welcomeText = useTypewriter("WELCOME TO THE", 500, typeStart);
  const descText = useTypewriter(
    "This self-help program (WeACT) is designed to guide family caregivers of persons living with dementia to better cope with the thoughts and emotions that arise in their day-to-day caregiving situations, while supporting them in acting and living more in line with their values.",
    3500, // Slower animation: increase duration from 1200 to 3500ms
    descTypeStart
  );

  let logoStyle = {};
  if (logoAnim === 'start') {
    logoStyle = {
      width: 260,
      height: 180,
      transform: 'translate(-50%, -50%) scale(1)',
      transition: 'all 0.7s cubic-bezier(0.77,0,0.175,1)',
      zIndex: 2,
    };
  } else if (logoAnim === 'shrink') {
    logoStyle = {
      width: 230,
      height: 153,
      // Move right 40px (was -310px, now -280px) and down 20px (was -142px, now -122px)
      transform: 'translate(-280px, -128px) scale(1)',
      transition: 'all 0.7s cubic-bezier(0.77,0,0.175,1)',
      zIndex: 2,
    };
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-white border-[24px] border-[var(--weact-gold)] rounded-3xl overflow-hidden">
      <div className="relative flex flex-col items-center w-full h-full" style={{ top: '-30px' }}>
        {/* Logo in animated position/size */}
        <div
          className="absolute left-1/2 top-1/2 flex items-end justify-center"
          style={logoStyle}
        >
          <Image src="/WEACT.png" alt="WeACT Logo" width={320} height={200} style={{ width: '100%', height: 'auto' }} />
        </div>
        {/* Welcome text and Program always at same vertical position, shifted down by 300px */}
        <div className="flex flex-col items-center justify-center w-full h-full" style={{ zIndex: 1, minHeight: 420, justifyContent: 'flex-start', position: 'relative', top: 300 }}>
          <div className="tracking-widest text-gray-700 text-4xl mb-6 mt-24 font-normal" style={{ minHeight: 40, marginTop: 0, position: 'relative', top: '-62px', letterSpacing: '0.36em' }}>
            {welcomeText}
          </div>
          <div className="flex flex-row items-end justify-center mb-4 gap-2 w-full max-w-3xl" style={{ marginTop: 0, left: 30, position: 'relative' }}>
            <div
              className="flex-shrink-0 flex items-end justify-end"
              style={{ width: 120, height: 80, marginRight: 32, opacity: 0 }}
            />
            <span
              className="text-7xl font-extrabold align-bottom pb-4 mt-2"
              style={{ color: 'var(--weact-purple)', lineHeight: '1', position: 'relative', top: '20px', opacity: showText ? 1 : 0, transition: 'opacity 0.7s 0.2s', minWidth: 180 }}
            >
              Program
            </span>
          </div>
          <p className="text-gray-800 text-lg mt-2 max-w-xl text-center" style={{ opacity: showText ? 1 : 0, transition: 'opacity 0.7s 0.3s', minHeight: 96, display: 'flex', alignItems: 'center' }}>
            {descTypeStart ? descText : ''}
          </p>
          <button
            className="bg-[var(--weact-gold)] text-gray-900 rounded-full px-10 py-4 font-semibold text-xl shadow hover:bg-yellow-300 transition mt-8"
            style={{ opacity: showButton ? 1 : 0, transition: 'opacity 0.7s 0.4s', pointerEvents: showButton ? 'auto' : 'none' }}
            tabIndex={showButton ? 0 : -1}
            onClick={() => window.location.href = '/login'}
          >
            Let&apos;s Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return <CombinedIntroPanel />;
}
