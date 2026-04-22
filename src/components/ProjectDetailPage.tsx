"use client";

import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "~/components/SiteFooter";
import { SiteNavbar } from "~/components/SiteNavbar";

interface ProjectDetailPageProps {
	title: string;
	year: string;
	image: string;
	overview: string;
	highlights: string[];
	tech: string[];
	github?: string;
}

export function ProjectDetailPage({
	title,
	year,
	image,
	overview,
	highlights,
	tech,
	github,
}: ProjectDetailPageProps) {
	return (
		<>
			<SiteNavbar />
			<main className="pt-24 pb-12 sm:pt-28 sm:pb-14" id="top">
				<div className="mx-auto max-w-4xl space-y-7">
					<Link
						className="inline-flex text-sm text-violet-300 transition hover:text-violet-200"
						href="/#projects"
					>
						← back to projects
					</Link>

					<header className="space-y-3">
						<p className="font-semibold text-slate-400 text-xs tracking-[0.15em] uppercase">
							{year} project
						</p>
						<h1 className="font-semibold text-3xl text-slate-50 tracking-tight sm:text-4xl">
							{title}
						</h1>
					</header>

					<div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900">
						<Image
							alt={title}
							className="object-cover"
							fill
							priority
							sizes="(max-width: 1024px) 100vw, 1024px"
							src={image}
						/>
					</div>

					<section className="space-y-3">
						<h2 className="font-semibold text-slate-100 text-xl">overview</h2>
						<p className="text-base text-slate-200 leading-relaxed">{overview}</p>
					</section>

					<section className="space-y-3">
						<h2 className="font-semibold text-slate-100 text-xl">highlights</h2>
						<ul className="space-y-2 text-slate-200">
							{highlights.map((item) => (
								<li key={item}>• {item}</li>
							))}
						</ul>
					</section>

					<section className="space-y-3">
						<h2 className="font-semibold text-slate-100 text-xl">stack + tools</h2>
						<div className="flex flex-wrap gap-2">
							{tech.map((item) => (
								<span
									key={item}
									className="rounded-full bg-slate-900/90 px-2.5 py-1 text-[0.72rem] font-medium text-slate-200 ring-1 ring-slate-700"
								>
									{item}
								</span>
							))}
						</div>
					</section>

					{github ? (
						<a
							className="inline-flex rounded-lg border border-slate-700 bg-slate-900/70 px-4 py-2 text-slate-100 transition hover:border-violet-400/65 hover:bg-violet-500/15 hover:text-violet-200"
							href={github}
							rel="noopener noreferrer"
							target="_blank"
						>
							view on github
						</a>
					) : null}
				</div>
			</main>
			<SiteFooter />
		</>
	);
}
