import Image from "next/image";
import Link from "next/link";
import { ProjectCommentary, ProjectSummary } from "~/components/ProjectVoice";

interface ProjectEntryProps {
	title: string;
	year: string;
	description: string;
	/** Optional personal notes — shown below the professional description when set. */
	commentary?: string;
	tech: string[];
	image?: string;
	/** Diagrams need "contain" so they stay legible; photos crop fine. */
	imageFit?: "cover" | "contain";
	github?: string;
	detailHref?: string;
	onOpen?: () => void;
	id?: string;
}

const linkClass =
	"underline decoration-rule underline-offset-4 hover:text-forest hover:decoration-forest";

export const ProjectEntry = ({
	title,
	year,
	description,
	commentary,
	tech,
	image,
	imageFit = "cover",
	github,
	detailHref,
	onOpen,
	id,
}: ProjectEntryProps) => (
	<article
		className="scroll-mt-16 border-rule border-t py-8 first:border-t-0 first:pt-0"
		id={id}
	>
		<div className="grid gap-5 sm:grid-cols-[1fr_13rem] sm:gap-8">
			<div>
				<div className="flex items-baseline gap-3">
					<h3 className="font-medium text-base">{title}</h3>
					<span className="font-mono text-quiet text-xs">{year}</span>
				</div>
				<div className="mt-3">
					<ProjectSummary>
						<p>{description}</p>
					</ProjectSummary>
					{commentary ? (
						<ProjectCommentary>
							<p>{commentary}</p>
						</ProjectCommentary>
					) : null}
				</div>
				<p className="mt-3 font-mono text-quiet text-xs">{tech.join(" · ")}</p>
				<div className="mt-3 flex gap-5 text-sm">
					{detailHref ? (
						<Link className={linkClass} href={detailHref}>
							write-up
						</Link>
					) : null}
					{onOpen ? (
						<button className={linkClass} onClick={onOpen} type="button">
							photos + video
						</button>
					) : null}
					{github ? (
						<a
							className={linkClass}
							href={github}
							rel="noopener noreferrer"
							target="_blank"
						>
							source
						</a>
					) : null}
				</div>
			</div>
			{image ? (
				<div className="relative aspect-[4/3] w-full self-start overflow-hidden border border-rule bg-paper">
					<Image
						alt={title}
						className={
							imageFit === "contain" ? "object-contain" : "object-cover"
						}
						fill
						sizes="(max-width: 640px) 100vw, 208px"
						src={image}
					/>
				</div>
			) : null}
		</div>
	</article>
);
