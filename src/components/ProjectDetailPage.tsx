import Image from "next/image";
import Link from "next/link";
import { ProjectCommentary, ProjectSummary } from "~/components/ProjectVoice";
import { SiteFooter } from "~/components/SiteFooter";
import { SiteNavbar } from "~/components/SiteNavbar";

export interface ProjectDetailSection {
	heading: string;
	bullets: string[];
	/** Optional personal notes — shown below the section bullets when set. */
	commentary?: string;
}

interface ProjectDetailPageProps {
	title: string;
	year: string;
	image?: string;
	imageCaption?: string;
	overview: string;
	sections: ProjectDetailSection[];
	/** Optional personal notes shown after the overview. */
	commentary?: string;
	tech: string[];
	github?: string;
}

export function ProjectDetailPage({
	title,
	year,
	image,
	imageCaption,
	overview,
	sections,
	commentary,
	tech,
	github,
}: ProjectDetailPageProps) {
	return (
		<>
			<SiteNavbar />
			<main className="mx-auto max-w-3xl px-6" id="top">
				<article className="py-12">
					<Link
						className="font-mono text-quiet text-xs hover:text-forest"
						href="/#projects"
					>
						← projects
					</Link>

					<header className="mt-6 flex items-baseline gap-3">
						<h1 className="font-semibold text-xl tracking-tight sm:text-2xl">
							{title}
						</h1>
						<span className="font-mono text-quiet text-xs">{year}</span>
					</header>

					{image ? (
						<figure className="mt-6">
							<div className="relative aspect-video w-full overflow-hidden border border-rule bg-paper">
								<Image
									alt={title}
									className="object-contain"
									fill
									priority
									sizes="(max-width: 768px) 100vw, 768px"
									src={image}
								/>
							</div>
							{imageCaption ? (
								<figcaption className="mt-2 font-mono text-quiet text-xs">
									{imageCaption}
								</figcaption>
							) : null}
						</figure>
					) : null}

					<div className="mt-8 space-y-8">
						<div>
							<ProjectSummary>
								<p>{overview}</p>
							</ProjectSummary>
							{commentary ? (
								<ProjectCommentary>
									<p>{commentary}</p>
								</ProjectCommentary>
							) : null}
						</div>

						{sections.map((section) => (
							<section key={section.heading}>
								<h2 className="font-mono text-quiet text-xs uppercase tracking-widest">
									{section.heading}
								</h2>
								<ProjectSummary labeled={false}>
									<ul className="mt-1 list-disc space-y-2 pl-5">
										{section.bullets.map((bullet) => (
											<li key={bullet}>{bullet}</li>
										))}
									</ul>
								</ProjectSummary>
								{section.commentary ? (
									<ProjectCommentary>
										<p>{section.commentary}</p>
									</ProjectCommentary>
								) : null}
							</section>
						))}
					</div>

					<dl className="mt-10 border-rule border-t pt-4 text-sm">
						<dt className="font-mono text-quiet text-xs uppercase tracking-widest">
							built with
						</dt>
						<dd className="mt-1">{tech.join(", ")}</dd>
					</dl>

					{github ? (
						<p className="mt-6 text-sm">
							<a
								className="underline decoration-rule underline-offset-4 hover:text-forest hover:decoration-forest"
								href={github}
								rel="noopener noreferrer"
								target="_blank"
							>
								source on github
							</a>
						</p>
					) : null}
				</article>

				<SiteFooter />
			</main>
		</>
	);
}
