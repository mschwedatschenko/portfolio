"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ProjectCard } from "~/components/ProjectCard";
import { ProjectModal } from "~/components/ProjectModal";

interface ModalState {
	[key: string]: boolean;
}

export default function HomePage() {
	const [modals, setModals] = useState<ModalState>({
		macropad: false,
		project2: false,
		project3: false,
		project4: false,
	});
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

	const openModal = (modal: string) =>
		setModals((prev) => ({ ...prev, [modal]: true }));
	const closeModal = (modal: string) =>
		setModals((prev) => ({ ...prev, [modal]: false }));

	return (
		<>
			<nav
				className="fixed top-0 left-1/2 z-50 flex w-screen max-w-none -translate-x-1/2 items-center justify-between gap-4 bg-transparent px-5 py-3 text-slate-100 sm:px-8 lg:px-10"
			>
				<a
					className="font-semibold text-sm tracking-tight transition hover:text-violet-300"
					href="#top"
				>
					<span className="font-semibold text-sm">
						mary schwedatschenko
					</span>
				</a>
				<div className="flex items-center gap-6 text-sm">
					<a
						className="group relative transition hover:text-violet-300"
						href="#about"
					>
						<span>about</span>
						<span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-violet-400/70 transition-transform duration-200 group-hover:scale-x-100" />
					</a>
					<a
						className="group relative transition hover:text-violet-300"
						href="#projects"
					>
						<span>projects</span>
						<span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-violet-400/70 transition-transform duration-200 group-hover:scale-x-100" />
					</a>
					<a
						className="group relative transition hover:text-violet-300"
						href="#education"
					>
						<span>education</span>
						<span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-violet-400/70 transition-transform duration-200 group-hover:scale-x-100" />
					</a>
					<a
						className="group relative transition hover:text-violet-300"
						href="#contact"
					>
						<span>contact</span>
						<span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-violet-400/70 transition-transform duration-200 group-hover:scale-x-100" />
					</a>
				</div>
			</nav>

			{/* Hero starts at top; fixed nav overlays this image */}
			<section className="relative right-1/2 left-1/2 mb-16 h-[62vh] min-h-[420px] w-screen -translate-x-1/2 overflow-hidden">

				<div className="pointer-events-none absolute inset-0 -z-10">
					<Image
						alt=""
						className="object-cover opacity-65"
						fill
						priority
						src="/header-chip-bg.png"
					/>
					<div className="absolute inset-0 bg-slate-950/40" />
					<div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-b from-transparent via-slate-950/70 to-slate-950" />
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
							onLearnMore={() => openModal("macropad")}
							title="campus rf spectrum visualizer"
						/>
						<ProjectCard
							badges={["zynq-7000", "verilog", "axi"]}
							description="a verilog-based data acquisition pipeline for simulating sipm pulses on a zynq-7000 fpga, connecting programmable logic to the arm processor over axi for real-time readout."
							github="https://github.com/mschwedatschenko/sipm_data_acq"
							image="/zynq-data-acq.svg"
							onLearnMore={() => openModal("project2")}
							title="zynq fpga data acquisition"
						/>
						<ProjectCard
							badges={["pcb design", "kicad", "c++"]}
							description="a custom macropad pcb with switch matrix and diode isolation designed in kicad, paired with arduino-based firmware for usb hid and matrix scanning."
							github="https://github.com/mschwedatschenko/Macropad"
							image="/macropad_layout.png"
							onLearnMore={() => openModal("project3")}
							title="custom macropad pcb"
						/>
						<ProjectCard
							badges={["c", "fsm", "embedded"]}
							description="a non-blocking traffic light finite-state machine in c built around clean state transitions and predictable timing."
							github="https://github.com/mschwedatschenko/stoplight-system"
							image="/stoplight-system.svg"
							onLearnMore={() => openModal("project4")}
							title="stoplight system"
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

			{/* FOOTER */}
			<footer
				className="relative right-1/2 left-1/2 mt-20 w-screen -translate-x-1/2 px-6 py-12 text-center text-slate-400"
				id="contact"
			>
				<div className="mx-auto max-w-2xl space-y-4">
					<div className="mb-2">
						<h2 className="font-semibold text-lg text-slate-50 tracking-tight">
							contact
						</h2>
					</div>
					<div className="flex items-center justify-center gap-5">
						<a
							aria-label="email mary"
							className="rounded-full border border-slate-700 bg-slate-900/60 p-2.5 text-slate-300 transition hover:border-violet-400 hover:text-violet-300"
							href="mailto:mschwedatschenko@wpi.edu"
						>
							<Mail className="h-5 w-5" />
						</a>
						<a
							aria-label="mary github"
							className="rounded-full border border-slate-700 bg-slate-900/60 p-2.5 text-slate-300 transition hover:border-violet-400 hover:text-violet-300"
							href="https://github.com/mschwedatschenko"
							rel="noopener noreferrer"
							target="_blank"
						>
							<Github className="h-5 w-5" />
						</a>
						<a
							aria-label="mary linkedin"
							className="rounded-full border border-slate-700 bg-slate-900/60 p-2.5 text-slate-300 transition hover:border-violet-400 hover:text-violet-300"
							href="https://linkedin.com/in/maryschwed"
							rel="noopener noreferrer"
							target="_blank"
						>
							<Linkedin className="h-5 w-5" />
						</a>
					</div>
					<p className="pt-2 text-slate-500 text-xs">
						© {new Date().getFullYear()} mary schwedatschenko
					</p>
				</div>
			</footer>

			{/* MODALS */}
			<ProjectModal
				description="a light art installation that turns campus rf activity into motion and color. it uses an rtl-sdr dongle feeding a raspberry pi fft pipeline, driving a custom hub75 led matrix behind frosted acrylic so wireless activity becomes a real-time visual."
				github="https://github.com/mschwedatschenko/SpectrumVisualizer"
				image="/spectrum-visualizer.svg"
				isOpen={!!modals.macropad}
				onClose={() => closeModal("macropad")}
				title="campus rf spectrum visualizer"
			/>
			<ProjectModal
				description="a vhdl-based data acquisition chain for simulated sipm (silicon photomultiplier) pulses on a zynq-7000 fpga. programmable logic captures and processes events, then hands data to the arm processor over axi for real-time readout and analysis."
				github="https://github.com/mschwedatschenko/sipm_data_acq"
				image="/zynq-data-acq.svg"
				isOpen={!!modals.project2}
				onClose={() => closeModal("project2")}
				title="zynq fpga data acquisition"
			/>
			<ProjectModal
				description="a custom macropad pcb designed in kicad with a switch matrix and diode isolation, paired with arduino micro firmware in c++ for usb hid, debouncing, and matrix scanning."
				github="https://github.com/mschwedatschenko/Macropad"
				image="/macropad_layout.png"
				isOpen={!!modals.project3}
				onClose={() => closeModal("project3")}
				title="custom macropad pcb"
			/>
			<ProjectModal
				description="a c-based traffic light controller implemented as a finite-state machine. this project focuses on non-blocking timing, readable state logic, and embedded-friendly structure."
				github="https://github.com/mschwedatschenko/stoplight-system"
				image="/stoplight-system.svg"
				isOpen={!!modals.project4}
				onClose={() => closeModal("project4")}
				title="stoplight system"
			/>
		</>
	);
}
