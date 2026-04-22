import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";

interface ProjectCardProps {
	image: string;
	title: string;
	badges: string[];
	description: string;
	github?: string;
	learnMoreHref?: string;
	onLearnMore?: () => void;
}

export const ProjectCard = ({
	image,
	title,
	badges,
	description,
	github,
	learnMoreHref,
	onLearnMore,
}: ProjectCardProps) => (
	<div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800/80 bg-gradient-to-br from-slate-950/80 via-slate-900/80 to-slate-950/90 text-white shadow-[0_18px_45px_rgba(15,23,42,0.8)] transition-transform duration-200 hover:-translate-y-1.5 hover:border-violet-400/45 hover:shadow-[0_24px_48px_rgba(0,0,0,0.35)]">
		<div className="relative h-48 w-full overflow-hidden rounded-t-2xl bg-slate-900">
			<Image
				src={image}
				alt={title}
				fill
				className="object-cover transition duration-300 group-hover:scale-[1.04] group-hover:brightness-110"
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
			/>
			<div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
				<div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-slate-950/0 to-transparent" />
			</div>
		</div>
		<div className="flex flex-1 flex-col p-6">
			<h5 className="mb-2 text-lg font-semibold tracking-tight text-slate-50">
				{title}
			</h5>
			<div className="mb-3 flex flex-wrap gap-2">
				{badges.map((badge, i) => (
					<span
						key={i}
						className="rounded-full bg-slate-900/90 px-2.5 py-1 text-[0.7rem] font-medium text-slate-200 ring-1 ring-slate-700 transition group-hover:ring-violet-400/45"
					>
						{badge}
					</span>
				))}
			</div>
			<p className="flex-1 text-sm text-slate-300">{description}</p>
		</div>
		<div className="flex gap-2 p-6 pt-0">
			{github ? (
				<a
					href={github}
					target="_blank"
					rel="noopener noreferrer"
					className="flex-1"
				>
					<Button
						variant="outline"
						className="w-full border-slate-700/80 bg-slate-900/60 text-slate-100 hover:border-violet-400/65 hover:bg-slate-900"
					>
						view on github
					</Button>
				</a>
			) : null}
			{learnMoreHref ? (
				<Link className={github ? "flex-1" : "w-full"} href={learnMoreHref}>
					<Button className="w-full border border-slate-700 bg-slate-900/70 text-slate-100 hover:border-violet-400/65 hover:bg-violet-500/15 hover:text-violet-200">
						learn more
					</Button>
				</Link>
			) : (
				<Button
					onClick={onLearnMore}
					className={
						github
							? "flex-1 border border-slate-700 bg-slate-900/70 text-slate-100 hover:border-violet-400/65 hover:bg-violet-500/15 hover:text-violet-200"
							: "w-full border border-slate-700 bg-slate-900/70 text-slate-100 hover:border-violet-400/65 hover:bg-violet-500/15 hover:text-violet-200"
					}
				>
					learn more
				</Button>
			)}
		</div>
	</div>
);
