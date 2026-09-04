import Link from "next/link";

interface SiteNavbarProps {
	isHome?: boolean;
}

const PROJECTS = [
	{
		title: "zynq fpga data acquisition",
		writeUp: "/projects/zynq-fpga-data-acquisition",
		source: "https://github.com/mschwedatschenko/sipm_data_acq",
	},
	{
		title: "campus rf spectrum visualizer",
		writeUp: "/projects/campus-rf-spectrum-visualizer",
		source: "https://github.com/mschwedatschenko/SpectrumVisualizer",
	},
	{
		title: "custom macropad pcb",
		writeUp: "/projects/custom-macropad-pcb",
		source: "https://github.com/mschwedatschenko/Macropad",
	},
	{
		title: "projector-based sla 3d printer",
		section: "#projector-printer",
	},
] as const;

const linkClass = "hover:text-forest";
const subLinkClass =
	"block py-0.5 text-quiet hover:text-forest hover:underline hover:decoration-forest hover:underline-offset-4";

export function SiteNavbar({ isHome = false }: SiteNavbarProps) {
	const homeHref = (hash: string) => (isHome ? hash : `/${hash}`);

	return (
		<nav className="sticky top-0 z-50 border-rule border-b bg-paper">
			<div className="mx-auto flex max-w-3xl flex-wrap items-baseline justify-between gap-x-6 gap-y-1 px-6 py-3">
				<Link
					className="font-medium text-sm hover:text-forest"
					href={homeHref("#top")}
				>
					mary schwedatschenko
				</Link>
				<div className="flex items-baseline gap-x-5 font-mono text-quiet text-xs">
					<Link className={linkClass} href={homeHref("#about")}>
						about
					</Link>
					<div className="group relative">
						<Link className={linkClass} href={homeHref("#projects")}>
							projects
						</Link>
						<div className="invisible absolute top-full left-0 z-20 w-64 pt-2 opacity-0 transition-opacity group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
							<div className="border border-rule bg-paper px-3 py-2">
								{PROJECTS.map((project) => (
									<div
										className="border-rule border-t py-2 first:border-t-0 first:pt-0"
										key={project.title}
									>
										{"section" in project ? (
											<Link
												className={`${linkClass} text-ink`}
												href={homeHref(project.section)}
											>
												{project.title}
											</Link>
										) : (
											<>
												<p className="text-ink">{project.title}</p>
												<div className="mt-1 flex flex-col">
													<Link className={subLinkClass} href={project.writeUp}>
														write-up
													</Link>
													<a
														className={subLinkClass}
														href={project.source}
														rel="noopener noreferrer"
														target="_blank"
													>
														source
													</a>
												</div>
											</>
										)}
									</div>
								))}
							</div>
						</div>
					</div>
					<Link className={linkClass} href="/notes">
						notes
					</Link>
					<Link className={linkClass} href={homeHref("#education")}>
						education
					</Link>
					<Link className={linkClass} href={homeHref("#contact")}>
						contact
					</Link>
				</div>
			</div>
		</nav>
	);
}
