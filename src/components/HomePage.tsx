"use client";

import { useState } from "react";
import { NoteList } from "~/components/NoteList";
import { ProjectEntry } from "~/components/ProjectEntry";
import {
	ProjectModal,
	type ProjectModalVideo,
} from "~/components/ProjectModal";
import { SiteFooter } from "~/components/SiteFooter";
import { SiteNavbar } from "~/components/SiteNavbar";
import type { NoteMeta } from "~/lib/note-format";

/** Self-hosted: add `public/videos/projector-printer.mp4`. Or use `{ kind: "youtube", id: "…" }` with the id from the watch URL. */
const projectorModalVideo: ProjectModalVideo = {
	kind: "file",
	src: "/videos/projector-printer.mov",
};

const sectionHeading =
	"mb-5 font-mono text-quiet text-xs uppercase tracking-widest";

export function HomePage({ notes }: { notes: NoteMeta[] }) {
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
						electrical and computer engineering at worcester polytechnic institute
					</p>
				</header>

				<section className="py-12" id="about">
					<h2 className={sectionHeading}>about</h2>
					<div className="max-w-xl space-y-4 text-sm leading-relaxed sm:text-base">
						<p>
							hi! my name is mary! thanks for visiting my site. here, you can learn a bit about me past the formalities
							on my resume.
						</p>
						<p>
							speaking of my resume, if you're reading this, you've probably already seen it. this site is not meant
							to reiterate everything you already know about me. instead, i'm hoping to share more of a behind-the-scenes
							view of my work, and showcase a bit of my actual personality along the way.
						</p>

						<p>
							i hope you can already tell that i love computers (if you can't, something needs to change), 
							but if you were to track the amount of time i spend on individual applications,
							you'd see that i spend most of my time in vivado, firefox (mostly for watching youtube), and steam.
						</p>
						<p>
							outside of that, i spent my last summer interning at teradyne, which was an incredible experience! 
							besides getting to fangirl over some awesome technology, i wrote systemverilog
							for spi, i2c, and a frequency generator and then verifying them in the lab.
							lately i've been writing built-in self tests for ddr sram, which i've found
							more interesting than i expected! 
						</p>

						<p>as claude would say when describing memory testing:</p>
						<figure className="-mx-2 sm:-mx-4">
							<blockquote className="border-forest/35 border-l-2 pl-4 font-mono text-quiet text-sm leading-relaxed sm:pl-5 sm:text-[0.95rem]">
								"memory doesn't just fail, it fails in specific characterizable ways,
								and you can write a pattern that goes hunting for each one. i'd rather
								own the address map than trust a framework to tell me the truth."
							</blockquote>
							<figcaption className="mt-3 pl-4 text-quiet text-sm leading-relaxed sm:pl-5">
								my friends were not super happy with this quote, and bring it up every
								time i mention my website, as it sounds very ai generated. however, i
								actually really like the way in which it describes debugging.
							</figcaption>
						</figure>
					</div>
				</section>

				<section className="border-rule border-t py-12" id="projects">
					<h2 className={sectionHeading}>projects</h2>
					<p className="mb-8 max-w-xl text-quiet text-sm leading-relaxed">
						the professional{" "}
						<span className="font-mono text-[10px] uppercase tracking-widest">
							summary
						</span>{" "}
						blocks were drafted with ai. everything else on this site, including about,
						education,{" "}
						<span className="font-mono text-[10px] text-forest uppercase tracking-widest">
							commentary
						</span>
						, and{" "}
						<a
							className="underline decoration-rule underline-offset-4 hover:text-forest hover:decoration-forest"
							href="/notes"
						>
							notes
						</a>{" "}
						, and the projects themselves, are written by me.
					</p>
					<div>
						<ProjectEntry
							commentary=""
							description="FPGA-based data acquisition for silicon photomultiplier pulses on a Zynq-7000. Programmable logic handles triggered capture into block RAM; the ARM processor reads results over AXI. Ongoing research in WPI's Plasma & Nuclear Diagnostics Lab."
							detailHref="/projects/zynq-fpga-data-acquisition"
							github="https://github.com/mschwedatschenko/sipm_data_acq"
							image="/zynq-block-diagram.png"
							imageFit="contain"
							tech={["zynq-7000", "verilog", "axi", "vivado"]}
							title="zynq fpga data acquisition"
							year="since 2025"
						/>
						<ProjectEntry
							commentary=""
							description="Real-time RF spectrum analyzer using an RTL-SDR V4 and Raspberry Pi 4. Continuously samples IQ data, computes FFTs across multiple bands in Python/NumPy, and drives a custom LED display."
							detailHref="/projects/campus-rf-spectrum-visualizer"
							github="https://github.com/mschwedatschenko/SpectrumVisualizer"
							image="/spectrum-visualizer.jpg"
							tech={["rtl-sdr v4", "raspberry pi 4", "python", "numpy"]}
							title="campus rf spectrum visualizer"
							year="2026"
						/>
						<ProjectEntry
							commentary=""
							description="Custom 3×3 mechanical macropad PCB designed in KiCad with per-key diodes for n-key rollover. Arduino Micro firmware handles matrix scanning, debouncing, and USB HID keyboard enumeration."
							detailHref="/projects/custom-macropad-pcb"
							github="https://github.com/mschwedatschenko/Macropad"
							image="/macropad_layout.png"
							imageFit="contain"
							tech={["kicad", "c++", "arduino micro", "usb hid"]}
							title="custom macropad pcb"
							year="2025"
						/>
						<ProjectEntry
							commentary=""
							description="DIY SLA 3D printer that cures each resin layer with a projector. Single-axis lead-screw motion driven by a stepper motor in a plywood enclosure."
							id="projector-printer"
							image="/projector-printer.png"
							onOpen={() => setIsProjectorModalOpen(true)}
							tech={["arduino", "stepper control", "fabrication"]}
							title="projector-based sla 3d printer"
							year="2025"
						/>
					</div>
				</section>

				{notes.length > 0 ? (
					<section className="border-rule border-t py-12" id="notes">
						<h2 className={sectionHeading}>notes</h2>
						<NoteList notes={notes.slice(0, 5)} />
					</section>
				) : null}

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
								i'm working towards a bachelor's of science in electrical & computer engineering, 
								hopefully with a minor in computer science to complement it nicely. on track to graduate in may 2028!
							</p>
							<p className="mt-3">
								<span className="font-mono text-quiet text-xs uppercase tracking-widest">
									coursework
								</span>
								<br />
								<span className="text-quiet">
									I have taken or am in the process of taking: advanced digital system design (rtl-to-tapeout asic flow),
									digital design with fpgas, real-time embedded systems, analog
									circuit design, algorithms & data structures, continuous-time
									& discrete-time signal analysis
								</span>
							</p>
						</div>
						<div>
							<p className="font-medium">outside of coursework</p>
							<p className="mt-2 text-quiet leading-relaxed">
								i'm president of wpi's ieee student branch, which takes up a LOT of my time.
								lots of moving parts in that organization, but the connections i've made there have been invaluable.
							</p>
							<p className="mt-2 text-quiet leading-relaxed">	
								i'm also a researcher in wpi's plasma & nuclear diagnostics lab, under william mccarthy.
								i've been working on a way to transition the lab from a black-box framework to a more open-source one.
							</p>
							<p className="mt-2 text-quiet leading-relaxed">	
								i ta for ece2039, computational engineering, which has taught me more
								about the material than taking it ever did! the term computational engineering mostly encompasses
								teaching ece majors how to actually code and get introduced to linux.
							</p>
							<p className="mt-2 text-quiet leading-relaxed">	
								i also sit on the ece student advisory board, alongside the other ece student organization leads, 
								and
								serve as director of career development for my sorority, where i mentor members in 
								finding internships and jobs (and supply bagels on the mornings of career fair days).
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
