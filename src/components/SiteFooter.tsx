import { Github, Linkedin, Mail } from "lucide-react";

export function SiteFooter() {
	return (
		<footer
			className="relative right-1/2 left-1/2 mt-20 w-screen -translate-x-1/2 px-6 py-12 text-center text-slate-400"
			id="contact"
		>
			<div className="mx-auto max-w-2xl space-y-4">
				<div className="mb-2">
					<h2 className="font-semibold text-lg text-slate-50 tracking-tight">
						contact
					</h2>
				</div>
				<div className="flex items-center justify-center gap-5">
					<a
						aria-label="email mary"
						className="rounded-full border border-slate-700 bg-slate-900/60 p-2.5 text-slate-300 transition hover:border-violet-400 hover:text-violet-300"
						href="mailto:mschwedatschenko@wpi.edu"
					>
						<Mail className="h-5 w-5" />
					</a>
					<a
						aria-label="mary github"
						className="rounded-full border border-slate-700 bg-slate-900/60 p-2.5 text-slate-300 transition hover:border-violet-400 hover:text-violet-300"
						href="https://github.com/mschwedatschenko"
						rel="noopener noreferrer"
						target="_blank"
					>
						<Github className="h-5 w-5" />
					</a>
					<a
						aria-label="mary linkedin"
						className="rounded-full border border-slate-700 bg-slate-900/60 p-2.5 text-slate-300 transition hover:border-violet-400 hover:text-violet-300"
						href="https://linkedin.com/in/maryschwed"
						rel="noopener noreferrer"
						target="_blank"
					>
						<Linkedin className="h-5 w-5" />
					</a>
				</div>
				<p className="pt-2 text-slate-500 text-xs">
					© {new Date().getFullYear()} mary schwedatschenko
				</p>
			</div>
		</footer>
	);
}
