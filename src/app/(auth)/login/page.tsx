// This file was moved from /app/login/page.tsx to /app/(auth)/login/page.tsx to ensure it is wrapped by the client SessionProvider.

"use client";

import { useSession, signIn } from "next-auth/react";
import Image from "next/image";
import Headbar from "../../Headbar";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const { status } = useSession();

  // After successful sign in, redirect to home
  if (status === "authenticated") {
    if (typeof window !== "undefined") {
      router.replace("/home");
    }
    return null;
  }

  return (
    <>
      <Headbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-yellow-200 to-yellow-400 overflow-hidden w-full">
        <div className="w-full max-w-4xl bg-white rounded-3xl shadow-lg overflow-visible border-t-0">
          <div className="flex flex-row items-start">
            <div className="w-1/3 flex items-stretch overflow-hidden rounded-l-3xl" style={{ minHeight: "33.6rem", height: "33.6rem", padding: 0, margin: 0 }}>
              <Image
                src="/landscape.png"
                alt="Concept Art"
                width={400}
                height={537.6}
                className="object-cover opacity-90 w-full h-full"
                style={{ objectPosition: "top" }}
                priority
              />
            </div>
            <div className="w-2/3 flex flex-col justify-center p-8" style={{ minHeight: "33.6rem", height: "33.6rem" }}>
              <div className="flex flex-col items-center mb-4">
                <Image
                  src="/logo.png"
                  alt="WeACT Logo"
                  width={80}
                  height={80}
                />
                <h2 className="text-xl font-semibold mt-2 text-gray-800">
                  Login to the{" "}
                  <span className="font-bold">Program</span>
                </h2>
                <p className="text-xs text-gray-500">
                  Get ready to engage with the program.
                </p>
              </div>
              <div className="flex flex-col gap-4 mt-4">
                <button
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition"
                  onClick={() => signIn("microsoft", { callbackUrl: "/home" })}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect fill="#f35325" x="4" y="4" width="17" height="17"></rect>
                    <rect fill="#81bc06" x="27" y="4" width="17" height="17"></rect>
                    <rect fill="#05a6f0" x="4" y="27" width="17" height="17"></rect>
                    <rect fill="#ffba08" x="27" y="27" width="17" height="17"></rect>
                  </svg>
                  Sign in with Microsoft
                </button>
                <button
                  className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 py-2 rounded font-semibold hover:bg-gray-100 transition"
                  onClick={() => signIn("google", { callbackUrl: "/home" })}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path fill="#4285F4" d="M44.5 20H24v8.5h11.7C34.7 33.1 29.8 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c2.7 0 5.2.9 7.2 2.4l6.4-6.4C34.1 5.1 29.3 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21c10.5 0 19.5-7.6 21-17.5.1-.7.1-1.3.1-2 0-1.3-.1-2.6-.3-3.5z"></path>
                      <path fill="#34A853" d="M6.3 14.7l7 5.1C15.5 16.1 19.4 13 24 13c2.7 0 5.2.9 7.2 2.4l6.4-6.4C34.1 5.1 29.3 3 24 3c-7.2 0-13.4 3.1-17.7 8.1z"></path>
                      <path fill="#FBBC05" d="M24 45c5.4 0 10.3-1.8 14.1-4.9l-6.5-5.3C29.7 36.7 26.9 37.5 24 37.5c-5.7 0-10.6-3.1-13.2-7.7l-7 5.4C6.6 41.7 14.7 45 24 45z"></path>
                      <path fill="#EA4335" d="M44.5 20H24v8.5h11.7c-1.2 3.2-4.1 5.5-7.7 5.5-2.2 0-4.2-.7-5.7-2l-7 5.4C15.4 43.1 19.4 45 24 45c10.5 0 19.5-7.6 21-17.5.1-.7.1-1.3.1-2 0-1.3-.1-2.6-.3-3.5z"></path>
                    </g>
                  </svg>
                  Sign in with Google
                </button>
              </div>
              <div className="text-xs text-gray-400 text-center mt-8">
                © 2024 WeACT Program. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
