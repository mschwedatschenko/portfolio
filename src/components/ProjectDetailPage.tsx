import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "~/components/SiteFooter";
import { SiteNavbar } from "~/components/SiteNavbar";

interface ProjectDetailPageProps {
	title: string;
	year: string;
	image?: string;
	imageCaption?: string;
	body: string[];
	tech: string[];
	github?: string;
}

export function ProjectDetailPage({
	title,
	year,
	image,
	imageCaption,
	body,
	tech,
	github,
}: ProjectDetailPageProps) {
	return (
		<>
			<SiteNavbar />
			<main className="mx-auto max-w-3xl px-6" id="top">
				<article className="py-12">
					<Link
						className="font-mono text-quiet text-xs hover:text-rust"
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

					<div className="mt-8 space-y-4 text-sm leading-relaxed sm:text-base">
						{body.map((paragraph) => (
							<p key={paragraph}>{paragraph}</p>
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
								className="underline decoration-rule underline-offset-4 hover:text-rust hover:decoration-rust"
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
