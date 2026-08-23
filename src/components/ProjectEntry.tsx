import Image from "next/image";
import Link from "next/link";

interface ProjectEntryProps {
	title: string;
	year: string;
	description: string;
	tech: string[];
	image?: string;
	/** Diagrams need "contain" so they stay legible; photos crop fine. */
	imageFit?: "cover" | "contain";
	github?: string;
	detailHref?: string;
	onOpen?: () => void;
}

const linkClass =
	"underline decoration-rule underline-offset-4 hover:text-rust hover:decoration-rust";

export const ProjectEntry = ({
	title,
	year,
	description,
	tech,
	image,
	imageFit = "cover",
	github,
	detailHref,
	onOpen,
}: ProjectEntryProps) => (
	<article className="border-rule border-t py-8 first:border-t-0 first:pt-0">
		<div className="grid gap-5 sm:grid-cols-[1fr_13rem] sm:gap-8">
			<div>
				<div className="flex items-baseline gap-3">
					<h3 className="font-medium text-base">{title}</h3>
					<span className="font-mono text-quiet text-xs">{year}</span>
				</div>
				<p className="mt-2 text-sm leading-relaxed">{description}</p>
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
