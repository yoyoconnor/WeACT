"use client";
import Headbar from '../../Headbar';
import Image from "next/image";
import { useState } from "react";

const steps = [
	{
		key: "welcome",
		label: "Welcome",
		content: (
			<div className="flex flex-col items-center justify-center h-full w-full">
				<Image src="/flower.png" alt="Flower" width={90} height={90} className="mb-6" />
				<h2 className="text-2xl font-bold text-[var(--weact-purple)] mb-2">Welcome to Daily Practice</h2>
				<p className="text-gray-700 text-lg text-center max-w-md mb-6">Take a few minutes for yourself today. Answer a quick check-in, try a short practice, and reflect on your experience. Ready to begin?</p>
			</div>
		),
	},
	{
		key: "survey",
		label: "Daily Check-in",
		content: (
			<div className="flex flex-col items-center w-full">
				<h3 className="text-xl font-semibold text-gray-800 mb-4">How are you feeling today?</h3>
				<div className="flex flex-col gap-3 w-full max-w-xs">
					{["Great", "Good", "Okay", "Not so good", "Struggling"].map((opt) => (
						<label key={opt} className="flex items-center gap-3 bg-gray-100 rounded-lg px-4 py-2 cursor-pointer hover:bg-yellow-100 transition">
							<input type="radio" name="mood" value={opt} className="accent-[var(--weact-purple)]" />
							<span className="text-gray-800">{opt}</span>
						</label>
					))}
				</div>
			</div>
		),
	},
	{
		key: "practice",
		label: "Practice",
		content: (
			<div className="flex flex-col items-center w-full">
				<h3 className="text-xl font-semibold text-gray-800 mb-4">Today&apos;s Practice: Mindful Breathing</h3>
				<p className="text-gray-700 text-center mb-6 max-w-md">Take a deep breath. Notice the sensation of air entering and leaving your body. If your mind wanders, gently bring it back to your breath. Try this for one minute.</p>
				<Image src="/flower.png" alt="Flower" width={70} height={70} className="mb-2" />
			</div>
		),
	},
	{
		key: "feedback",
		label: "Feedback",
		content: (
			<div className="flex flex-col items-center w-full">
				<h3 className="text-xl font-semibold text-gray-800 mb-4">How was your practice?</h3>
				<textarea className="w-full max-w-xs rounded-lg border border-gray-300 p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[var(--weact-gold)] mb-4" rows={3} placeholder="Share your thoughts..." />
			</div>
		),
	},
	{
		key: "complete",
		label: "Complete",
		content: (
			<div className="flex flex-col items-center justify-center h-full w-full">
				<Image src="/flower.png" alt="Flower" width={90} height={90} className="mb-6" />
				<h2 className="text-2xl font-bold text-[var(--weact-purple)] mb-2">Well done!</h2>
				<p className="text-gray-700 text-lg text-center max-w-md mb-6">You completed your daily practice. Come back tomorrow for another check-in and practice!</p>
			</div>
		),
	},
];

export default function DailyPractice() {
	const [step, setStep] = useState(0);
	const isFirst = step === 0;
	const isLast = step === steps.length - 1;

	// Progress bar width (0-100%)
	const progress = (step / (steps.length - 1)) * 100;

	return (
		<div
			className="min-h-screen w-full bg-gradient-to-b from-[#2B2B2B] via-[#2B2B2B] to-[#3A2B1C] flex flex-col"
			style={{
				backgroundImage: "url('/flower.png')",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center",
				backgroundSize: "cover",
			}}
		>
			<Headbar />
			<div className="w-full max-w-3xl flex-1 flex flex-col items-center justify-start pt-12 pb-0 mx-auto">
				<div className="bg-white bg-opacity-90 rounded-t-3xl rounded-b-none shadow-lg w-full flex-1 flex flex-col p-8 relative" style={{ minHeight: 'calc(100vh - 120px)' }}>
					{/* Progress Bar */}
					<div className="w-full h-2 bg-gray-200 rounded-full mb-8 overflow-hidden">
						<div className="h-2 bg-[var(--weact-gold)] transition-all duration-300" style={{ width: `${progress}%` }} />
					</div>
					{/* Step Content */}
					<div className="flex-1 flex flex-col items-center justify-center min-h-[320px]">
						{steps[step].content}
					</div>
					{/* Navigation */}
					<div className="flex flex-row justify-between items-center mt-8 gap-4">
						<button
							className="px-6 py-2 rounded-full bg-gray-100 text-gray-700 font-semibold shadow hover:bg-yellow-100 transition disabled:opacity-50"
							onClick={() => setStep((s) => Math.max(0, s - 1))}
							disabled={isFirst}
						>
							Back
						</button>
						{!isLast ? (
							<button
								className="px-8 py-2 rounded-full bg-[var(--weact-gold)] text-gray-900 font-bold shadow hover:bg-yellow-300 transition"
								onClick={() => setStep((s) => Math.min(steps.length - 1, s + 1))}
							>
								Next
							</button>
						) : (
							<button
								className="px-8 py-2 rounded-full bg-[var(--weact-purple)] text-white font-bold shadow hover:bg-purple-700 transition"
								onClick={() => setStep(0)}
							>
								Return to Dashboard
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
