"use client";

import Image from "next/image";
import { useState } from "react";
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

	const openModal = (modal: string) =>
		setModals((prev) => ({ ...prev, [modal]: true }));
	const closeModal = (modal: string) =>
		setModals((prev) => ({ ...prev, [modal]: false }));

	return (
		<>
			{/* NAVBAR */}
			<nav className="sticky top-4 z-40 mb-10 rounded-full border border-slate-800/70 bg-slate-950/80 px-4 py-2.5 backdrop-blur">
				<div className="flex items-center justify-between gap-4">
					<a
						href="#top"
						className="text-sm font-semibold tracking-tight text-slate-100 transition hover:text-violet-300"
					>
						<span className="rounded-full bg-slate-900/80 px-3 py-1 text-[0.75rem] font-medium tracking-[0.18em] text-slate-200">
							mary schwedatschenko
						</span>
					</a>
					<div className="flex items-center gap-6 text-sm text-slate-300">
						<a
							href="#projects"
							className="group relative transition hover:text-violet-300"
						>
							<span>projects</span>
							<span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-500 transition-transform duration-200 group-hover:scale-x-100" />
						</a>
						<a
							href="#about"
							className="group relative transition hover:text-violet-300"
						>
							<span>about</span>
							<span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-500 transition-transform duration-200 group-hover:scale-x-100" />
						</a>
						<a
							href="#education"
							className="group relative transition hover:text-violet-300"
						>
							<span>education</span>
							<span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-500 transition-transform duration-200 group-hover:scale-x-100" />
						</a>
						<a
							href="#contact"
							className="group relative transition hover:text-violet-300"
						>
							<span>contact</span>
							<span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-500 transition-transform duration-200 group-hover:scale-x-100" />
						</a>
					</div>
				</div>
			</nav>

			{/* HEADER */}
			<header id="top" className="mb-16 text-center">
				<div className="mx-auto max-w-3xl">
					<div className="mb-8 inline-block">
						<Image
							src="/cat.jpg"
							alt="My photo"
							width={150}
							height={150}
							className="rounded-full border border-slate-700/70 bg-slate-900/60 object-cover shadow-xl shadow-sky-900/40"
						/>
					</div>
					<h1 className="mb-3 text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl md:text-6xl">
						mary schwedatschenko
					</h1>
					<p className="mx-auto max-w-3xl whitespace-nowrap text-base text-slate-300 sm:text-lg">
						building things at the intersection of{" "}
						<span className="font-medium text-violet-300">electrical engineering</span> and{" "}
						<span className="font-medium text-violet-300">computer science</span>
					</p>
				</div>
			</header>

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
							image="/cat.jpg"
							title="campus rf spectrum visualizer"
							badges={["rtl-sdr", "raspberry pi", "led matrix"]}
							description="a light art installation that visualizes real-time radio frequency activity on campus using an rtl-sdr, raspberry pi fft pipeline, and a custom hub75 led matrix display."
							github="https://github.com/mschwedatschenko/macropad"
							onLearnMore={() => openModal("macropad")}
						/>
						<ProjectCard
							image="/cat.jpg"
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
							github="https://github.com/mschwedatschenko"
							onLearnMore={() => openModal("project3")}
						/>
						<ProjectCard
							image="/cat.jpg"
							title="project four"
							badges={["Python", "Tooling"]}
							description="A placeholder for a future tool, script, or automation project you want to highlight."
							github="https://github.com/mschwedatschenko"
							onLearnMore={() => openModal("project4")}
						/>
					</div>
				</div>
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
						i&apos;m a student at wpi. i like taking ideas from schematics and simulations
						all the way to hardware that works in the lab — fpga data acquisition, embedded systems,
						pcb design, and tools that let you see what your hardware is doing in real time.
					</p>
					<p className="mt-4 text-sm text-slate-400">
						tools: fpgas, arm mcus, pcb design, c/c++, verilog/vhdl, python, linux, git
					</p>
				</div>
			</section>

			{/* EDUCATION — compact */}
			<section id="education" className="mb-16">
				<div className="mb-5">
					<h2 className="text-left text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
						education
					</h2>
				</div>
				<p className="text-slate-300">
					wpi &apos;28 · b.s. electrical & computer engineering, minor in computer science ·
					president, ieee wpi branch · director of career development, chi omega
				</p>
			</section>

			{/* FOOTER */}
			<footer
				id="contact"
				className="mb-10 rounded-3xl border border-slate-800/60 bg-slate-950/75 px-6 py-10 text-center text-slate-400 shadow-[0_18px_50px_rgba(15,23,42,0.7)]"
			>
				<div className="mx-auto max-w-2xl space-y-4">
					<div className="mb-2">
						<h2 className="text-lg font-semibold tracking-tight text-slate-50">
							contact
						</h2>
					</div>
					<div className="space-y-2 text-sm">
						<p>
							Email:{" "}
							<a
								href="mailto:mschwedatschenko@wpi.edu"
								className="font-medium text-violet-300 underline-offset-4 hover:underline"
							>
								mschwedatschenko@wpi.edu
							</a>
						</p>
						<p>
							GitHub:{" "}
							<a
								href="https://github.com/mschwedatschenko"
								className="font-medium text-violet-300 underline-offset-4 hover:underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								github.com/mschwedatschenko
							</a>
						</p>
						<p>
							LinkedIn:{" "}
							<a
								href="https://linkedin.com/in/maryschwed"
								className="font-medium text-violet-300 underline-offset-4 hover:underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								linkedin.com/in/maryschwed
							</a>
						</p>
					</div>
				</div>
			</footer>

			{/* MODALS */}
			<ProjectModal
				isOpen={!!modals.macropad}
				onClose={() => closeModal("macropad")}
				title="campus rf spectrum visualizer"
				image="/macropad_layout.png"
				description="a light art installation that turns campus rf activity into motion and color. it uses an rtl-sdr dongle feeding a raspberry pi fft pipeline, driving a custom hub75 led matrix behind frosted acrylic so wireless activity becomes a real-time visual."
				github="https://github.com/mschwedatschenko"
			/>
			<ProjectModal
				isOpen={!!modals.project2}
				onClose={() => closeModal("project2")}
				title="zynq fpga data acquisition"
				image="/cat.jpg"
				description="a vhdl-based data acquisition chain for simulated sipm (silicon photomultiplier) pulses on a zynq-7000 fpga. programmable logic captures and processes events, then hands data to the arm processor over axi for real-time readout and analysis."
				github="https://github.com/mschwedatschenko"
			/>
			<ProjectModal
				isOpen={!!modals.project3}
				onClose={() => closeModal("project3")}
				title="custom macropad pcb"
				image="/cat.jpg"
				description="a custom macropad pcb designed in kicad with a switch matrix and diode isolation, paired with arduino micro firmware in c++ for usb hid, debouncing, and matrix scanning."
				github="https://github.com/mschwedatschenko/macropad"
			/>
			<ProjectModal
				isOpen={!!modals.project4}
				onClose={() => closeModal("project4")}
				title="project four"
				image="/cat.jpg"
				description="placeholder for a fourth project — maybe a tool, script, or something fun you want to show off."
				github="https://github.com/mschwedatschenko"
			/>
		</>
	);
}
