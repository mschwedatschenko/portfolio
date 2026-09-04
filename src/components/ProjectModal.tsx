"use client";

import Image from "next/image";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "~/components/ui/dialog";
import { cn } from "~/lib/utils";

export type ProjectModalVideo =
	| { kind: "file"; src: string }
	| { kind: "youtube"; id: string };

interface ProjectModalProps {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	image: string;
	description: string;
	github?: string;
	video?: ProjectModalVideo;
}

export const ProjectModal = ({
	isOpen,
	onClose,
	title,
	image,
	description,
	github,
	video,
}: ProjectModalProps) => (
	<Dialog onOpenChange={onClose} open={isOpen}>
		<DialogContent
			className={cn(
				"border-rule bg-paper text-ink sm:max-w-md",
				video && "sm:max-w-2xl",
			)}
		>
			<DialogHeader>
				<DialogTitle className="font-medium text-base">{title}</DialogTitle>
			</DialogHeader>
			{video ? (
				<div className="relative aspect-video w-full overflow-hidden border border-rule bg-black">
					{video.kind === "youtube" ? (
						<iframe
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen
							className="absolute inset-0 h-full w-full"
							referrerPolicy="strict-origin-when-cross-origin"
							src={`https://www.youtube-nocookie.com/embed/${video.id}`}
							title={`${title} demo video`}
						/>
					) : (
						<video
							className="absolute inset-0 h-full w-full object-contain"
							controls
							playsInline
							poster={image}
							preload="metadata"
							src={video.src}
						/>
					)}
				</div>
			) : (
				<div className="relative aspect-[4/3] w-full overflow-hidden border border-rule bg-secondary">
					<Image
						alt={title}
						className="object-cover"
						fill
						sizes="(max-width: 768px) 100vw, 500px"
						src={image}
					/>
				</div>
			)}
			<p className="text-sm leading-relaxed">{description}</p>
			{github ? (
				<a
					className="text-sm underline decoration-rule underline-offset-4 hover:text-forest hover:decoration-forest"
					href={github}
					rel="noopener noreferrer"
					target="_blank"
				>
					source
				</a>
			) : null}
		</DialogContent>
	</Dialog>
);
