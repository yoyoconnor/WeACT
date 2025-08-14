"use client";
import Headbar from "../../../Headbar";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import ModulesSidebar from "../ModulesSidebar";

// Removed unused Thermometer component and type

export default function WeeklyModulesDashboard() {
  const { data: session } = useSession();
  const userName = session?.user?.name || "User";

  // Animated progress state
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? +(prev + 0.25).toFixed(2) : 100));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#232634] flex flex-col">
      <Headbar />
      <div className="flex flex-row w-full h-[calc(100vh-100px)] min-h-0 max-w-[100vw]">
        {/* Sidebar */}
        <ModulesSidebar progress={progress} />
        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-start bg-[#fdfaf5] h-full overflow-y-auto p-0">
          <div className="flex flex-col items-center w-full px-10 pt-10 flex-1">
            <div className="text-4xl font-bold text-gray-800 mb-2">
              Hi <span className="text-[var(--weact-purple)]">{userName}!</span>
            </div>
            <div className="text-xl text-gray-700 mb-8">
              Welcome to your Dashboard for Modules
            </div>
            <div className="w-full flex justify-center">
              <div className="grid grid-cols-3 gap-8 max-w-5xl">
                {/* Module Cards */}
                {[
                  { title: "Module 1.", desc: "Creative Hopelessness", img: "/weekly-modules/thumbnails/module1.png", link: "/weekly-modules/module1" },
                  { title: "Module 2.", desc: "Willingness & Defusion", img: "/weekly-modules/thumbnails/module2.png", link: "/weekly-modules/module2" },
                  { title: "Module 3.", desc: "Acceptance", img: "/weekly-modules/thumbnails/module3.png", link: "/weekly-modules/module3" },
                  { title: "Module 4.", desc: "Observer Self & Present Moment Awareness", img: "/weekly-modules/thumbnails/module4.png", link: "/weekly-modules/module4" },
                  { title: "Module 5.", desc: "Values & Committed Action – Part I", img: "/weekly-modules/thumbnails/module5.png", link: "/weekly-modules/module5" },
                  { title: "Module 6.", desc: "Values & Committed Action – Part II", img: "/weekly-modules/thumbnails/module6.png", link: "/weekly-modules/module6" },
                ].map((mod, idx) => (
                  <Link key={idx} href={mod.link} className="focus:outline-none" tabIndex={0}>
                    <div className="bg-white shadow p-2 flex flex-col items-center border border-gray-200 rounded-2xl transition-all duration-200 hover:shadow-lg hover:bg-yellow-400 cursor-pointer" style={{ maxWidth: '250px', minHeight: '230px', paddingBottom: '1.5rem' }}>
                      <Image src={mod.img} alt={mod.title} width={240} height={135} className="rounded-t-xl rounded-b-none object-cover w-full" />
                      <div className="mt-4 font-normal text-lg text-gray-900 flex flex-col items-center w-full text-center">
                        <span className="font-bold">{mod.title}</span>
                        <span className="text-gray-700 mt-1 text-base" style={{ fontSize: '0.97rem' }}>{mod.desc}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex-1" />
            <div className="text-xs text-gray-500 mb-6 mt-10 self-center w-full text-center" style={{ position: 'relative', left: '0', right: '0' }}>
              © 2024 WeACT Program. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
