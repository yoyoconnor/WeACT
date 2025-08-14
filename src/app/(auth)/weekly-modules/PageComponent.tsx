"use client";
import Headbar from "../../Headbar";
import ModulesSidebar from "./ModulesSidebar";
import Image from "next/image";

export default function PageComponent({
  progress = 0,
  audioTitle = "Audio Clip",
  audioDuration = "0:00 Minutes",
  audioFile,
  imageFile = "/weekly-modules/thumbnails/module1.png",
  transcript = "Transcript goes here.",
  title = "Orientation I"
}: {
  progress?: number;
  audioTitle?: string;
  audioDuration?: string;
  audioFile?: string;
  imageFile?: string;
  transcript?: string;
  title?: string;
}) {
  // Split transcript by double newlines for paragraphs, single newline for line breaks
  const transcriptBlocks = transcript.split(/\n\n+/);
  const transcriptParagraphs = transcriptBlocks.map((block, idx) => (
    <p key={idx} className="mb-6 text-gray-800 text-lg font-normal">
      {block.split(/\n/).map((line, i) => (
        <span key={i}>
          {line.trim()}
          {i < block.split(/\n/).length - 1 ? <br /> : null}
        </span>
      ))}
    </p>
  ));

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-yellow-300 to-yellow-100 flex flex-col">
      <Headbar />
      <div className="flex flex-row w-full h-[calc(100vh-100px)] min-h-0 max-w-[100vw]">
        {/* Sidebar */}
        <ModulesSidebar progress={progress} />
        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-start bg-[#fdfaf5] h-full overflow-y-auto p-0">
          <div className="flex flex-col items-center w-full px-10 pt-10 flex-1 max-w-4xl mx-auto">
            {/* Orientation Title */}
            <div className="w-full text-2xl font-bold text-gray-900 mb-2">{title}</div>
            {/* Audio Clip Card */}
            <div className="bg-white rounded-xl shadow flex items-center gap-4 px-6 py-4 mb-6 w-full max-w-md">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[var(--weact-purple)]">
                <svg width="36" height="36" fill="white" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="white" opacity="0.2"/><polygon points="10,8 16,12 10,16" fill="white"/></svg>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-900">{audioTitle}</span>
                <span className="text-gray-500 text-sm">{audioDuration}</span>
                {audioFile && (
                  <audio controls className="mt-2 w-full">
                    <source src={audioFile} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                )}
              </div>
            </div>
            {/* Transcript and Image Side by Side */}
            <div className="flex flex-row items-start gap-8 w-full max-w-3xl mt-2">
              <div className="flex-1">
                <div className="font-bold text-lg text-gray-900 mb-2">Transcript</div>
                {transcriptParagraphs}
              </div>
              <div className="flex flex-col items-center">
                <Image src={imageFile} alt="ACT Hexaflex" width={260} height={260} className="rounded-xl mb-2" />
                <div className="text-xs text-gray-500 text-center max-w-[220px]">Image source: https://www.healthandhealingtherapy.com/mental-health/approach/acceptance-commitment-therapy/</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
