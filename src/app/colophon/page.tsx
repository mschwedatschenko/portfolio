import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "~/components/SiteFooter";
import { SiteNavbar } from "~/components/SiteNavbar";

export const metadata: Metadata = {
	title: "colophon | Mary Schwedatschenko",
	description: "How this site is put together.",
};

export default function ColophonPage() {
	return (
		<>
			<SiteNavbar />
			<main className="mx-auto max-w-3xl px-6" id="top">
				<article className="py-12">
					<h1 className="font-semibold text-xl tracking-tight sm:text-2xl">
						colophon
					</h1>
					<div className="mt-8 max-w-xl space-y-4 text-sm leading-relaxed sm:text-base">
						<p>
							this is a next.js site, set in ibm plex sans and ibm plex mono, on
							an off-white that i think of as printer paper. links go forest
							green-colored when you hover, give it a try!
						</p>
						<p>
							the about page, the education writing, the project commentary, and
							anything under{" "}
							<Link
								className="underline decoration-rule underline-offset-4 hover:text-forest hover:decoration-forest"
								href="/notes"
							>
								notes
							</Link>{" "}
							are mary-written! sorry to disappoint, but i didn't build this
							website by myself. i didn't want to pretend a portfolio website
							made by an electrical engineering student magically appeared out
							of nowhere.
						</p>
						<p>
							i used cursor to help me build the layout, the project pages, and
							the professional summaries on each project. those summaries are
							supposed to represent the bare bones technical details of the
							project, without any fluff.
						</p>
						<p>
							photos and diagrams on the project pages are from the actual work.
						</p>
						<p>sources are available on github.</p>
					</div>
				</article>
				<SiteFooter />
			</main>
		</>
	);
}
