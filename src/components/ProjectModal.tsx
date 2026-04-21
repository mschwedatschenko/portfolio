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

const projectYearByTitle: Record<string, string> = {
	"campus rf spectrum visualizer": "2026",
	"zynq fpga data acquisition": "2026",
	"custom macropad pcb": "2025",
	"stoplight system": "2025",
};

export const ProjectModal = ({
	isOpen,
	onClose,
	title,
	image,
	description,
	github,
}: ProjectModalProps) => {
	const year = projectYearByTitle[title];

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className="border-slate-700/70 bg-slate-950/95 text-slate-100 shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-shadow hover:shadow-[0_24px_64px_rgba(0,0,0,0.5)] sm:max-w-md">
				{year ? (
					<p className="absolute left-4 top-4 z-10 rounded bg-slate-900/80 px-1.5 py-0.5 text-[0.62rem] font-semibold tracking-[0.12em] text-slate-300">
						{year}
					</p>
				) : null}
				<DialogHeader className="pt-2">
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
						<Button className="w-full border border-slate-700 bg-slate-900/70 text-slate-100 hover:border-violet-400/65 hover:bg-violet-500/15 hover:text-violet-200">
							view on github
						</Button>
					</a>
					<Button
						variant="outline"
						onClick={onClose}
						className="flex-1 border-slate-700 bg-slate-900/70 text-slate-100 sm:flex-none hover:border-violet-400/65 hover:bg-violet-500/15 hover:text-violet-200"
					>
						close
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};
