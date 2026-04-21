"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";
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
	}, [currentBuild.text, isDeleting, tickerIndex, tickerText, buildItems.length]);

	const openModal = (modal: string) =>
		setModals((prev) => ({ ...prev, [modal]: true }));
	const closeModal = (modal: string) =>
		setModals((prev) => ({ ...prev, [modal]: false }));

	return (
		<>
			<section className="relative left-1/2 right-1/2 mb-16 h-[62vh] min-h-[420px] w-screen -translate-x-1/2 overflow-hidden">
				<div className="pointer-events-none absolute inset-0 -z-10">
					<Image
						src="/header-chip-bg.png"
						alt=""
						fill
						priority
						className="object-cover opacity-65"
					/>
					<div className="absolute inset-0 bg-slate-950/40" />
					<div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-b from-transparent via-slate-950/70 to-slate-950" />
				</div>

				{/* NAVBAR */}
				<nav className="sticky top-4 z-40 mx-4 mb-10 px-1 py-2 sm:mx-6 lg:mx-8">
					<div className="flex items-center justify-between gap-4">
						<a
							href="#top"
							className="text-sm font-semibold tracking-tight text-slate-100 transition hover:text-violet-300"
						>
							<span className="text-sm font-semibold text-slate-200">
								mary schwedatschenko
							</span>
						</a>
						<div className="flex items-center gap-6 text-sm text-slate-300">
							<a
								href="#about"
								className="group relative transition hover:text-violet-300"
							>
								<span>about</span>
								<span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-violet-400/70 transition-transform duration-200 group-hover:scale-x-100" />
							</a>
							<a
								href="#projects"
								className="group relative transition hover:text-violet-300"
							>
								<span>projects</span>
								<span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-violet-400/70 transition-transform duration-200 group-hover:scale-x-100" />
							</a>
							<a
								href="#education"
								className="group relative transition hover:text-violet-300"
							>
								<span>education</span>
								<span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-violet-400/70 transition-transform duration-200 group-hover:scale-x-100" />
							</a>
							<a
								href="#contact"
								className="group relative transition hover:text-violet-300"
							>
								<span>contact</span>
								<span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-violet-400/70 transition-transform duration-200 group-hover:scale-x-100" />
							</a>
						</div>
					</div>
				</nav>

				{/* HEADER */}
				<header id="top" className="text-center">
					<div className="mx-auto max-w-3xl px-6 py-14 sm:py-18">
					<h1 className="mt-4 mb-3 text-4xl font-semibold text-slate-50 sm:text-5xl md:text-6xl">
						mary schwedatschenko
					</h1>
					<p className="mx-auto max-w-3xl text-base text-slate-300 sm:text-lg">
						building things at the intersection of{" "}
						<span className="font-medium text-violet-300">electrical engineering</span> and{" "}
						<span className="font-medium text-violet-300">computer science</span>
					</p>
					</div>
				</header>
			</section>

			{/* ABOUT */}
			<section id="about" className="mb-16">
				<div className="mb-5">
					<h2 className="text-left text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
						about
					</h2>
				</div>
				<div className="mx-auto max-w-4xl">
					<p className="text-base leading-relaxed text-slate-200 sm:text-lg">
					i'm an ece/cs student at wpi! my work spans FPGAs, embedded systems, PCB design, and hardware diagnostic tools.
					</p>
					<p className="mt-4 text-base text-violet-300/85 sm:text-lg">
						<span className="font-semibold text-slate-100">i&apos;m currently working on </span>
						{tickerText}
						<span className="ml-0.5 inline-block h-4 w-[2px] translate-y-[2px] animate-pulse bg-violet-300" />
					</p>
				</div>
			</section>

			{/* PROJECTS */}
			<section id="projects" className="mb-20">
				<div className="mb-6">
					<h2 className="text-left text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
						projects
					</h2>
				</div>
				<div className="rounded-3xl border border-slate-800/70 bg-slate-950/60 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.7)]">
					<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
						<ProjectCard
							image="/spectrum-visualizer.svg"
							title="campus rf spectrum visualizer"
							badges={["rtl-sdr", "raspberry pi", "led matrix"]}
							description="a light art installation that visualizes real-time radio frequency activity on campus using an rtl-sdr, raspberry pi fft pipeline, and a custom hub75 led matrix display."
							github="https://github.com/mschwedatschenko/SpectrumVisualizer"
							onLearnMore={() => openModal("macropad")}
						/>
						<ProjectCard
							image="/zynq-data-acq.svg"
							title="zynq fpga data acquisition"
							badges={["zynq-7000", "verilog", "axi"]}
							description="a verilog-based data acquisition pipeline for simulating sipm pulses on a zynq-7000 fpga, connecting programmable logic to the arm processor over axi for real-time readout."
							github="https://github.com/mschwedatschenko/sipm_data_acq"
							onLearnMore={() => openModal("project2")}
						/>
						<ProjectCard
							image="/macropad_layout.png"
							title="custom macropad pcb"
							badges={["pcb design", "kicad", "c++"]}
							description="a custom macropad pcb with switch matrix and diode isolation designed in kicad, paired with arduino-based firmware for usb hid and matrix scanning."
							github="https://github.com/mschwedatschenko/Macropad"
							onLearnMore={() => openModal("project3")}
						/>
						<ProjectCard
							image="/stoplight-system.svg"
							title="stoplight system"
							badges={["c", "fsm", "embedded"]}
							description="a non-blocking traffic light finite-state machine in c built around clean state transitions and predictable timing."
							github="https://github.com/mschwedatschenko/stoplight-system"
							onLearnMore={() => openModal("project4")}
						/>
					</div>
				</div>
			</section>

			{/* EDUCATION — compact */}
			<section id="education" className="mb-16">
				<div className="mb-5">
					<h2 className="text-left text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
						education
					</h2>
				</div>
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
					<div className="rounded-2xl border border-slate-800/70 bg-slate-950/70 p-5">
						<p className="text-base font-semibold text-slate-100">
							worcester polytechnic institute
						</p>
						<ul className="mt-2 space-y-1.5 text-sm text-slate-300">
							<li>b.s. electrical & computer engineering</li>
							<li>minor in computer science</li>
							<li>class of 2028 · worcester, ma</li>
							<li>dean's list, presidential scholarship</li>
						</ul>
					</div>
					<div className="rounded-2xl border border-slate-800/70 bg-slate-950/70 p-5">
						<p className="text-base font-semibold text-slate-100">
							extracurricular involvement
						</p>
						<ul className="mt-2 space-y-1.5 text-sm text-slate-300">
							<li>president, ieee wpi student branch</li>
							<li>research assistant, wpi plasma &amp; nuclear diagnostics lab</li>
							<li>public relations chair, association of computing machinery</li>
							<li>director of career development, chi omega women's fraternity</li>
						</ul>
					</div>
				</div>
			</section>

			{/* FOOTER */}
			<footer
				id="contact"
				className="relative left-1/2 right-1/2 mt-20 w-screen -translate-x-1/2 px-6 py-12 text-center text-slate-400"
			>
				<div className="mx-auto max-w-2xl space-y-4">
					<div className="mb-2">
						<h2 className="text-lg font-semibold tracking-tight text-slate-50">
							contact
						</h2>
					</div>
					<div className="flex items-center justify-center gap-5">
						<a
							href="mailto:mschwedatschenko@wpi.edu"
							className="rounded-full border border-slate-700 bg-slate-900/60 p-2.5 text-slate-300 transition hover:border-violet-400 hover:text-violet-300"
							aria-label="email mary"
						>
							<Mail className="h-5 w-5" />
						</a>
						<a
							href="https://github.com/mschwedatschenko"
							className="rounded-full border border-slate-700 bg-slate-900/60 p-2.5 text-slate-300 transition hover:border-violet-400 hover:text-violet-300"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="mary github"
						>
							<Github className="h-5 w-5" />
						</a>
						<a
							href="https://linkedin.com/in/maryschwed"
							className="rounded-full border border-slate-700 bg-slate-900/60 p-2.5 text-slate-300 transition hover:border-violet-400 hover:text-violet-300"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="mary linkedin"
						>
							<Linkedin className="h-5 w-5" />
						</a>
					</div>
					<p className="pt-2 text-xs text-slate-500">
						© {new Date().getFullYear()} mary schwedatschenko
					</p>
				</div>
			</footer>

			{/* MODALS */}
			<ProjectModal
				isOpen={!!modals.macropad}
				onClose={() => closeModal("macropad")}
				title="campus rf spectrum visualizer"
				image="/spectrum-visualizer.svg"
				description="a light art installation that turns campus rf activity into motion and color. it uses an rtl-sdr dongle feeding a raspberry pi fft pipeline, driving a custom hub75 led matrix behind frosted acrylic so wireless activity becomes a real-time visual."
				github="https://github.com/mschwedatschenko/SpectrumVisualizer"
			/>
			<ProjectModal
				isOpen={!!modals.project2}
				onClose={() => closeModal("project2")}
				title="zynq fpga data acquisition"
				image="/zynq-data-acq.svg"
				description="a vhdl-based data acquisition chain for simulated sipm (silicon photomultiplier) pulses on a zynq-7000 fpga. programmable logic captures and processes events, then hands data to the arm processor over axi for real-time readout and analysis."
				github="https://github.com/mschwedatschenko/sipm_data_acq"
			/>
			<ProjectModal
				isOpen={!!modals.project3}
				onClose={() => closeModal("project3")}
				title="custom macropad pcb"
				image="/macropad_layout.png"
				description="a custom macropad pcb designed in kicad with a switch matrix and diode isolation, paired with arduino micro firmware in c++ for usb hid, debouncing, and matrix scanning."
				github="https://github.com/mschwedatschenko/Macropad"
			/>
			<ProjectModal
				isOpen={!!modals.project4}
				onClose={() => closeModal("project4")}
				title="stoplight system"
				image="/stoplight-system.svg"
				description="a c-based traffic light controller implemented as a finite-state machine. this project focuses on non-blocking timing, readable state logic, and embedded-friendly structure."
				github="https://github.com/mschwedatschenko/stoplight-system"
			/>
		</>
	);
}
