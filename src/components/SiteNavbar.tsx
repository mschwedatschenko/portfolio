"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const PROJECT_LINKS = [
	{
		href: "/projects/campus-rf-spectrum-visualizer",
		label: "campus rf spectrum visualizer",
	},
	{
		href: "/projects/zynq-fpga-data-acquisition",
		label: "zynq fpga data acquisition",
	},
	{ href: "/projects/custom-macropad-pcb", label: "custom macropad pcb" },
	{ href: "/#projects", label: "projector-based sla 3d printer" },
] as const;

interface SiteNavbarProps {
	isHome?: boolean;
}

export function SiteNavbar({ isHome = false }: SiteNavbarProps) {
	const [navBackdropProgress, setNavBackdropProgress] = useState(0);
	const [mobileNavOpen, setMobileNavOpen] = useState(false);
	const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
	const NAV_BACKDROP_FADE_PX = 30;
	const NAV_BACKDROP_BLUR_MAX_PX = 14;

	const makeHref = (hash: string) => (isHome ? hash : `/${hash}`);

	useEffect(() => {
		const updateNavBackdrop = () => {
			const y = window.scrollY;
			setNavBackdropProgress(Math.min(1, Math.max(0, y / NAV_BACKDROP_FADE_PX)));
		};
		updateNavBackdrop();
		window.addEventListener("scroll", updateNavBackdrop, { passive: true });
		return () => window.removeEventListener("scroll", updateNavBackdrop);
	}, []);

	useEffect(() => {
		if (!mobileNavOpen) return;
		const prevOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = prevOverflow;
		};
	}, [mobileNavOpen]);

	useEffect(() => {
		if (!mobileNavOpen) return;
		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") setMobileNavOpen(false);
		};
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [mobileNavOpen]);

	useEffect(() => {
		const mq = window.matchMedia("(min-width: 1024px)");
		const onChange = () => {
			if (mq.matches) {
				setMobileNavOpen(false);
				setMobileProjectsOpen(false);
			}
		};
		mq.addEventListener("change", onChange);
		return () => mq.removeEventListener("change", onChange);
	}, []);

	return (
		<>
			{mobileNavOpen ? (
				<button
					aria-label="Close navigation menu"
					className="fixed inset-0 z-40 bg-slate-950/50 backdrop-blur-sm lg:hidden"
					onClick={() => setMobileNavOpen(false)}
					type="button"
				/>
			) : null}

			<nav className="fixed top-0 left-1/2 z-50 w-screen max-w-none -translate-x-1/2 px-5 py-3 text-slate-100 sm:px-8 lg:px-10">
				<div
					aria-hidden
					className="pointer-events-none absolute inset-0 transition-[backdrop-filter] duration-200 ease-out"
					style={{
						backdropFilter: `blur(${navBackdropProgress * NAV_BACKDROP_BLUR_MAX_PX}px)`,
						WebkitBackdropFilter: `blur(${navBackdropProgress * NAV_BACKDROP_BLUR_MAX_PX}px)`,
					}}
				/>
				<div className="relative flex flex-col gap-0">
					<div className="flex items-center justify-between gap-4">
						<Link
							className="min-w-0 shrink font-semibold text-sm tracking-tight transition hover:text-violet-300"
							href={makeHref("#top")}
							onClick={() => setMobileNavOpen(false)}
						>
							<span className="block truncate font-semibold text-sm">
								mary schwedatschenko
							</span>
						</Link>
						<div className="max-lg:hidden lg:flex items-center gap-6 text-sm">
							<Link
								className="group relative transition hover:text-violet-300"
								href={makeHref("#about")}
							>
								<span>about</span>
								<span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-violet-400/70 transition-transform duration-200 group-hover:scale-x-100" />
							</Link>
							<div className="group relative">
								<button
									className="flex items-center gap-1.5 transition hover:text-violet-300"
									type="button"
								>
									<span>projects</span>
									<ChevronDown className="h-3.5 w-3.5" />
								</button>
								<div className="invisible absolute top-full left-1/2 z-20 mt-2 w-64 -translate-x-1/2 rounded-xl border border-slate-700/80 bg-slate-950/95 p-2 opacity-0 shadow-xl transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
									{PROJECT_LINKS.map(({ href, label }) => (
										<Link
											className="block rounded-md px-3 py-2 text-slate-200 text-sm transition hover:bg-slate-800/60 hover:text-violet-300"
											href={href}
											key={href}
										>
											{label}
										</Link>
									))}
								</div>
							</div>
							<Link
								className="group relative transition hover:text-violet-300"
								href={makeHref("#education")}
							>
								<span>education</span>
								<span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-violet-400/70 transition-transform duration-200 group-hover:scale-x-100" />
							</Link>
							<Link
								className="group relative transition hover:text-violet-300"
								href={makeHref("#contact")}
							>
								<span>contact</span>
								<span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-violet-400/70 transition-transform duration-200 group-hover:scale-x-100" />
							</Link>
						</div>
						<button
							aria-controls="mobile-nav"
							aria-expanded={mobileNavOpen}
							className="-mr-2 rounded-lg p-2 text-slate-100 transition hover:bg-slate-800/40 hover:text-violet-300 focus-visible:outline focus-visible:outline-violet-400/70 focus-visible:outline-offset-2 lg:hidden"
							onClick={() => setMobileNavOpen((open) => !open)}
							type="button"
						>
							{mobileNavOpen ? (
								<X aria-hidden className="h-5 w-5" />
							) : (
								<Menu aria-hidden className="h-5 w-5" />
							)}
						</button>
					</div>

					<div
						aria-hidden={!mobileNavOpen}
						className={`lg:hidden ${mobileNavOpen ? "max-h-[min(70vh,26rem)] border-t border-slate-800/60 py-3 opacity-100" : "pointer-events-none max-h-0 border-t border-transparent py-0 opacity-0"} -mx-5 overflow-hidden px-5 transition-[max-height,opacity,padding,border-color] duration-200 ease-out sm:-mx-8 sm:px-8 lg:-mx-10 lg:px-10`}
						id="mobile-nav"
					>
						<div className="flex flex-col gap-1">
							<Link
								className="rounded-lg px-3 py-3 text-base text-slate-100 transition hover:bg-slate-800/50 hover:text-violet-300"
								href={makeHref("#about")}
								onClick={() => setMobileNavOpen(false)}
								tabIndex={mobileNavOpen ? 0 : -1}
							>
								about
							</Link>
							<button
								className="flex items-center justify-between rounded-lg px-3 py-3 text-base text-slate-100 transition hover:bg-slate-800/50 hover:text-violet-300"
								onClick={() => setMobileProjectsOpen((open) => !open)}
								tabIndex={mobileNavOpen ? 0 : -1}
								type="button"
							>
								<span>projects</span>
								<ChevronDown
									className={`h-4 w-4 transition-transform ${mobileProjectsOpen ? "rotate-180" : ""}`}
								/>
							</button>
							<div
								className={`overflow-hidden pl-2 transition-[max-height,opacity] duration-200 ${mobileProjectsOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"}`}
							>
								<div className="space-y-1 pb-2">
									{PROJECT_LINKS.map(({ href, label }) => (
										<Link
											className="block rounded-lg px-3 py-2 text-slate-200 text-sm transition hover:bg-slate-800/50 hover:text-violet-300"
											href={href}
											key={href}
											onClick={() => {
												setMobileProjectsOpen(false);
												setMobileNavOpen(false);
											}}
											tabIndex={mobileNavOpen && mobileProjectsOpen ? 0 : -1}
										>
											{label}
										</Link>
									))}
								</div>
							</div>
							<Link
								className="rounded-lg px-3 py-3 text-base text-slate-100 transition hover:bg-slate-800/50 hover:text-violet-300"
								href={makeHref("#education")}
								onClick={() => setMobileNavOpen(false)}
								tabIndex={mobileNavOpen ? 0 : -1}
							>
								education
							</Link>
							<Link
								className="rounded-lg px-3 py-3 text-base text-slate-100 transition hover:bg-slate-800/50 hover:text-violet-300"
								href={makeHref("#contact")}
								onClick={() => setMobileNavOpen(false)}
								tabIndex={mobileNavOpen ? 0 : -1}
							>
								contact
							</Link>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}
