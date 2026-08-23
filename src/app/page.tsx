"use client";

import { useState } from "react";
import { ProjectEntry } from "~/components/ProjectEntry";
import {
	ProjectModal,
	type ProjectModalVideo,
} from "~/components/ProjectModal";
import { SiteFooter } from "~/components/SiteFooter";
import { SiteNavbar } from "~/components/SiteNavbar";

/** Self-hosted: add `public/videos/projector-printer.mp4`. Or use `{ kind: "youtube", id: "…" }` with the id from the watch URL. */
const projectorModalVideo: ProjectModalVideo = {
	kind: "file",
	src: "/videos/projector-printer.mov",
};

const sectionHeading =
	"mb-5 font-mono text-quiet text-xs uppercase tracking-widest";

const SKILLS = [
	{
		label: "hardware",
		items:
			"fpgas, pcb design, serial buses (i2c, spi, jtag), arm mcus, smt soldering, scopes and logic analyzers",
	},
	{
		label: "languages",
		items: "systemverilog, vhdl, c, c++, python, java",
	},
	{
		label: "software",
		items: "vivado design suite, git, gitlab, linux, jira",
	},
] as const;

export default function HomePage() {
	const [isProjectorModalOpen, setIsProjectorModalOpen] = useState(false);

	return (
		<>
			<SiteNavbar isHome />

			<main className="mx-auto max-w-3xl px-6" id="top">
				<header className="border-rule border-b py-14">
					<h1 className="font-semibold text-2xl tracking-tight sm:text-3xl">
						mary schwedatschenko
					</h1>
					<p className="mt-2 text-quiet text-sm sm:text-base">
						digital design and hardware verification. ece at wpi.
					</p>
				</header>

				<section className="py-12" id="about">
					<h2 className={sectionHeading}>about</h2>
					<div className="space-y-4 text-sm leading-relaxed sm:text-base">
						<p>
							i'm an electrical & computer engineering major at wpi with a cs
							minor, graduating in 2028.
						</p>
						<p>
							most of what i build ends up being a piece of hardware plus
							whatever software has to talk to it. fpga fabric handing samples
							up to a processor. a key matrix scanned by firmware. an sdr
							feeding an led panel. in practice that means a lot of vivado and
							kicad, and a bench with a scope on it.
						</p>
						<p>
							i spent last summer interning at teradyne, writing systemverilog
							for spi, i2c, and a frequency generator and then verifying them on
							the bench. getting a design to pass in simulation turned out to be
							the easy half. the things i actually learned from were the ones
							that only showed up with a scope on real hardware. lately i've
							been writing built-in self test for ddr sram, which i've found
							more interesting than i expected. memory doesn't just fail, it
							fails in specific characterizable ways, and you can write a
							pattern that goes hunting for each one. it's the same instinct
							that keeps me in wpi's plasma & nuclear diagnostics lab: i'd
							rather own the address map than trust a framework to tell me the
							truth.
						</p>
					</div>
				</section>

				<section className="border-rule border-t py-12" id="projects">
					<h2 className={sectionHeading}>projects</h2>
					<div>
						<ProjectEntry
							description="verilog on a zynq-7000 that generates sipm-like pulses in fabric, captures them into block ram on a trigger, and hands the buffer up to the arm side over axi. the goal is keeping the timing-critical part in programmable logic so the processor never has to be fast. it just has to show up after the capture is done. ongoing research in wpi's plasma & nuclear diagnostics lab."
							detailHref="/projects/zynq-fpga-data-acquisition"
							github="https://github.com/mschwedatschenko/sipm_data_acq"
							image="/zynq-block-diagram.png"
							imageFit="contain"
							tech={["zynq-7000", "verilog", "axi", "vivado"]}
							title="zynq fpga data acquisition"
							year="since 2025"
						/>
						<ProjectEntry
							description="an rtl-sdr v4 on a raspberry pi 4 pulls raw iq samples continuously and computes fft spectrums across several frequency bands in python and numpy, driving an led display housed in a casing i designed and 3d-printed. everything in the chain has to finish inside a frame, which is what turned it from a signal processing exercise into a real-time one."
							detailHref="/projects/campus-rf-spectrum-visualizer"
							github="https://github.com/mschwedatschenko/SpectrumVisualizer"
							image="/spectrum-visualizer.jpg"
							tech={["rtl-sdr v4", "raspberry pi 4", "python", "numpy"]}
							title="campus rf spectrum visualizer"
							year="2026"
						/>
						<ProjectEntry
							description="nine keys in a 3×3 matrix, each with its own diode so holding three at once doesn't produce phantom presses. i drew the whole board in kicad, down to the footprints and the angled outline, and wrote firmware for an arduino micro that scans the matrix, debounces, and enumerates as a plain usb keyboard."
							detailHref="/projects/custom-macropad-pcb"
							github="https://github.com/mschwedatschenko/Macropad"
							image="/macropad_layout.png"
							imageFit="contain"
							tech={["kicad", "c++", "arduino micro", "usb hid"]}
							title="custom macropad pcb"
							year="2025"
						/>
						<ProjectEntry
							description="a resin printer that cures each layer with a projector instead of a laser, which collapses the whole motion problem down to one axis. plywood enclosure i cut myself, lead screw z-stage driven by a stepper, and electronics still on a breadboard because it started as a bring-up rig and never needed to stop being one."
							image="/projector-printer.png"
							onOpen={() => setIsProjectorModalOpen(true)}
							tech={["arduino", "stepper control", "fabrication"]}
							title="projector-based sla 3d printer"
							year="2025"
						/>
					</div>
				</section>

				<section className="border-rule border-t py-12" id="skills">
					<h2 className={sectionHeading}>skills</h2>
					<dl className="space-y-3 text-sm">
						{SKILLS.map(({ label, items }) => (
							<div className="sm:flex sm:gap-6" key={label}>
								<dt className="w-24 shrink-0 font-mono text-quiet text-xs uppercase tracking-widest sm:pt-0.5">
									{label}
								</dt>
								<dd className="mt-1 sm:mt-0">{items}</dd>
							</div>
						))}
					</dl>
				</section>

				<section className="border-rule border-t py-12" id="education">
					<h2 className={sectionHeading}>education</h2>
					<div className="space-y-8 text-sm">
						<div>
							<div className="flex flex-wrap items-baseline justify-between gap-x-4">
								<p className="font-medium">worcester polytechnic institute</p>
								<span className="font-mono text-quiet text-xs">
									aug 2024 to may 2028
								</span>
							</div>
							<p className="mt-1 text-quiet">
								b.s. electrical & computer engineering, minor in computer
								science. gpa 3.7/4.0. dean's list and presidential scholarship.
							</p>
							<p className="mt-3">
								<span className="font-mono text-quiet text-xs uppercase tracking-widest">
									coursework
								</span>
								<br />
								<span className="text-quiet">
									advanced digital system design (rtl-to-tapeout asic flow),
									digital design with fpgas, real-time embedded systems, analog
									circuit design, algorithms & data structures, continuous-time
									& discrete-time signal analysis
								</span>
							</p>
						</div>
						<div>
							<p className="font-medium">outside of coursework</p>
							<p className="mt-2 text-quiet leading-relaxed">
								i'm president of wpi's ieee student branch, and i ta for
								ece2039, computational engineering, which has taught me more
								about the material than taking it ever did. i also sit on the
								ece student advisory board, run pr for our acm chapter, and
								serve as director of career development for chi omega. before
								any of that, back in 2022, i spent a summer in uiuc's
								micro-nano-mechanical systems cleanroom running
								photolithography: substrate prep, spin-coating, uv exposure,
								developing. that's where i first got curious about how chips
								actually get made.
							</p>
						</div>
					</div>
				</section>

				<SiteFooter />
			</main>

			<ProjectModal
				description="the enclosure open on the bench, mid bring-up. the red board is driving the lead screw stepper and the projector sits underneath, firing each layer up into the vat."
				image="/projector-printer.png"
				isOpen={isProjectorModalOpen}
				onClose={() => setIsProjectorModalOpen(false)}
				title="projector-based sla 3d printer"
				video={projectorModalVideo}
			/>
		</>
	);
}
