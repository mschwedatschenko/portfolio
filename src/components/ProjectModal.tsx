"use client";

import Image from "next/image";
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "~/components/ui/dialog";
import { Button } from "~/components/ui/button";

interface ProjectModalProps {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	image: string;
	description: string;
	github: string;
}

export const ProjectModal = ({
	isOpen,
	onClose,
	title,
	image,
	description,
	github,
}: ProjectModalProps) => {
	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className="border-slate-700/70 bg-slate-950/95 text-slate-100 shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-shadow hover:shadow-[0_24px_64px_rgba(0,0,0,0.5)]">
				<DialogHeader>
					<DialogTitle className="text-lg font-semibold text-slate-50">
						{title}
					</DialogTitle>
				</DialogHeader>
				<div className="relative h-40 w-full overflow-hidden rounded-xl border border-slate-800/80 bg-slate-900">
					<Image
						src={image}
						alt={title}
						fill
						className="object-cover"
						sizes="(max-width: 768px) 100vw, 500px"
					/>
				</div>
				<p className="text-sm leading-relaxed text-slate-200">{description}</p>
				<DialogFooter className="flex gap-3 sm:justify-end">
					<a
						href={github}
						target="_blank"
						rel="noopener noreferrer"
						className="flex-1 sm:flex-none"
					>
						<Button className="w-full bg-violet-600 text-slate-50 hover:bg-violet-500">
							view on github
						</Button>
					</a>
					<Button
						variant="outline"
						onClick={onClose}
						className="flex-1 sm:flex-none"
					>
						close
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};
