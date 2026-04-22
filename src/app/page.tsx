"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ProjectCard } from "~/components/ProjectCard";
import {
	type ProjectModalVideo,
	ProjectModal,
} from "~/components/ProjectModal";
import { SiteFooter } from "~/components/SiteFooter";
import { SiteNavbar } from "~/components/SiteNavbar";

/** Self-hosted: add `public/videos/projector-printer.mp4`. Or use `{ kind: "youtube", id: "…" }` with the id from the watch URL. */
const projectorModalVideo: ProjectModalVideo = {
	kind: "file",
	src: "/videos/projector-printer.mov",
};

export default function HomePage() {
	const [isProjectorModalOpen, setIsProjectorModalOpen] = useState(false);
	const buildItems = [
		{
			text: "turning live campus rf signals into visuals with rtl-sdr + raspberry pi + hub75 led panels.",
			link: "https://github.com/mschwedatschenko/SpectrumVisualizer",
		},
		{
			text: "building a fast acquisition path for signal data on zynq with programmable logic and axi transfer.",
			link: "https://github.com/mschwedatschenko/sipm_data_acq",
		},
		{
			text: "developing a posture coach for people with scoliosis using esp8266 and an rtos.",
			link: "https://github.com/mschwedatschenko/Macropad",
		},
	] as const;
	const [tickerIndex, setTickerIndex] = useState(0);
	const [tickerText, setTickerText] = useState("");
	const [isDeleting, setIsDeleting] = useState(false);
	const currentBuild = buildItems[tickerIndex] ?? buildItems[0];

	useEffect(() => {
		const currentText = currentBuild.text;
		const typingSpeed = isDeleting ? 24 : 42;
		let timeoutId: ReturnType<typeof setTimeout>;

		if (!isDeleting && tickerText.length < currentText.length) {
			timeoutId = setTimeout(() => {
				setTickerText(currentText.slice(0, tickerText.length + 1));
			}, typingSpeed);
		} else if (!isDeleting && tickerText.length === currentText.length) {
			timeoutId = setTimeout(() => {
				setIsDeleting(true);
			}, 1300);
		} else if (isDeleting && tickerText.length > 0) {
			timeoutId = setTimeout(() => {
				setTickerText(currentText.slice(0, tickerText.length - 1));
			}, typingSpeed);
		} else {
			timeoutId = setTimeout(() => {
				setIsDeleting(false);
				setTickerIndex((prev) => (prev + 1) % buildItems.length);
			}, 220);
		}

		return () => clearTimeout(timeoutId);
	}, [
		currentBuild.text,
		isDeleting,
		tickerIndex,
		tickerText,
		buildItems.length,
	]);

	return (
		<>
			<SiteNavbar isHome />

			{/* Hero starts at top; fixed nav overlays this image */}
			<section className="relative right-1/2 left-1/2 mb-16 h-[62vh] min-h-[420px] w-screen -translate-x-1/2 overflow-hidden">

				<div className="pointer-events-none absolute inset-0 translate-y-[-30%] -z-10">
					<Image
						alt=""
						className="object-cover opacity-90 -scale-x-100"
						fill
						priority
						src="/hero-wafer-bg.png"
					/>
					<div className="absolute inset-0 bg-slate-950/15" />
					<div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-b from-transparent via-slate-950/58 to-slate-950" />
				</div>

				{/* HEADER */}
				<header className="flex h-full items-center justify-center text-center" id="top">
					<div className="mx-auto max-w-3xl translate-y-[-6] px-6">
						<h1 className="mt-4 mb-3 font-semibold text-4xl text-slate-50 sm:text-5xl md:text-6xl">
							mary schwedatschenko
						</h1>
						<p className="mx-auto max-w-3xl text-base text-slate-300 sm:text-lg">
							building things at the intersection of{" "}
							<span className="font-medium text-violet-300">
								electrical engineering
							</span>{" "}
							and{" "}
							<span className="font-medium text-violet-300">
								computer science
							</span>
						</p>
					</div>
				</header>
			</section>

			{/* ABOUT */}
			<section className="mb-16" id="about">
				<div className="mb-5">
					<h2 className="text-left font-semibold text-2xl text-slate-50 tracking-tight sm:text-3xl">
						about
					</h2>
				</div>
				<div className="mx-auto max-w-4xl">
					<p className="text-base text-slate-200 leading-relaxed sm:text-lg">
						i'm an ece/cs student at wpi! my work spans FPGAs, embedded systems,
						PCB design, and hardware diagnostic tools.
					</p>
					<p className="mt-4 text-base text-violet-300/85 sm:text-lg">
						<span className="font-semibold text-slate-100">
							i&apos;m currently working on{" "}
						</span>
						{tickerText}
						<span className="ml-0.5 inline-block h-4 w-[2px] translate-y-[2px] animate-pulse bg-violet-300" />
					</p>
				</div>
			</section>

			{/* PROJECTS */}
			<section className="mb-20" id="projects">
				<div className="mb-6">
					<h2 className="text-left font-semibold text-2xl text-slate-50 tracking-tight sm:text-3xl">
						projects
					</h2>
				</div>
				<div className="rounded-3xl border border-slate-800/70 bg-slate-950/60 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.7)]">
					<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
						<ProjectCard
							badges={["rtl-sdr", "raspberry pi", "led matrix"]}
							description="a light art installation that visualizes real-time radio frequency activity on campus using an rtl-sdr, raspberry pi fft pipeline, and a custom hub75 led matrix display."
							github="https://github.com/mschwedatschenko/SpectrumVisualizer"
							image="/spectrum-visualizer.svg"
							learnMoreHref="/projects/campus-rf-spectrum-visualizer"
							title="campus rf spectrum visualizer"
						/>
						<ProjectCard
							badges={["zynq-7000", "verilog", "axi"]}
							description="a verilog-based data acquisition pipeline for simulating sipm pulses on a zynq-7000 fpga, connecting programmable logic to the arm processor over axi for real-time readout."
							github="https://github.com/mschwedatschenko/sipm_data_acq"
							image="/zynq-block-diagram.png"
							learnMoreHref="/projects/zynq-fpga-data-acquisition"
							title="zynq fpga data acquisition"
						/>
						<ProjectCard
							badges={["pcb design", "kicad", "c++"]}
							description="a custom macropad pcb with switch matrix and diode isolation designed in kicad, paired with arduino-based firmware for usb hid and matrix scanning."
							github="https://github.com/mschwedatschenko/Macropad"
							image="/macropad_layout.png"
							learnMoreHref="/projects/custom-macropad-pcb"
							title="custom macropad pcb"
						/>
						<ProjectCard
							badges={["arduino"]}
							description="custom DLP stereolithography 3D printer, integrating a hand-fabricated mechanical frame, Arduino-controlled Z-axis motion, and projector-based layer exposure to produce multi-layer resin parts."
							image="/projector-printer.png"
							onLearnMore={() => setIsProjectorModalOpen(true)}
							title="projector-based sla 3d printer"
						/>
					</div>
				</div>
			</section>

			{/* EDUCATION — compact */}
			<section className="mb-16" id="education">
				<div className="mb-5">
					<h2 className="text-left font-semibold text-2xl text-slate-50 tracking-tight sm:text-3xl">
						education
					</h2>
				</div>
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
					<div className="rounded-2xl border border-slate-800/70 bg-slate-950/70 p-5">
						<p className="font-semibold text-base text-slate-100">
							worcester polytechnic institute
						</p>
						<ul className="mt-2 space-y-1.5 text-slate-300 text-sm">
							<li>b.s. electrical & computer engineering</li>
							<li>minor in computer science</li>
							<li>class of 2028 · worcester, ma</li>
							<li>dean's list, presidential scholarship</li>
						</ul>
					</div>
					<div className="rounded-2xl border border-slate-800/70 bg-slate-950/70 p-5">
						<p className="font-semibold text-base text-slate-100">
							extracurricular involvement
						</p>
						<ul className="mt-2 space-y-1.5 text-slate-300 text-sm">
							<li>president, ieee wpi student branch</li>
							<li>
								research assistant, wpi plasma &amp; nuclear diagnostics lab
							</li>
							<li>
								public relations chair, association of computing machinery
							</li>
							<li>
								director of career development, chi omega women's fraternity
							</li>
						</ul>
					</div>
				</div>
			</section>

			<SiteFooter />

			{/* SLA printer modal kept as requested */}
			<ProjectModal
				description="a diy sla resin printer build using projected light for exposure, with custom plywood enclosure, lead-screw z motion, and arduino-based electronics on breadboard for bring-up and control."
				image="/projector-printer.png"
				isOpen={isProjectorModalOpen}
				onClose={() => setIsProjectorModalOpen(false)}
				title="projector-based sla 3d printer"
				video={projectorModalVideo}
			/>
		</>
	);
}
