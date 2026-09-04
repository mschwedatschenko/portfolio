import type { Metadata } from "next";
import { NoteList } from "~/components/NoteList";
import { SiteFooter } from "~/components/SiteFooter";
import { SiteNavbar } from "~/components/SiteNavbar";
import { getNotes } from "~/lib/notes";

export const metadata: Metadata = {
	title: "notes | Mary Schwedatschenko",
	description: "Essays on my work in electrical and computer engineering.",
};

export default function NotesPage() {
	const notes = getNotes();

	return (
		<>
			<SiteNavbar />
			<main className="mx-auto max-w-3xl px-6" id="top">
				<article className="py-12">
					<h1 className="font-semibold text-xl tracking-tight sm:text-2xl">
						notes
					</h1>
					<p className="mt-3 max-w-xl text-quiet text-sm leading-relaxed sm:text-base">
						a collection of successes and failures from my work in electrical and computer engineering!
					</p>
					<div className="mt-10">
						<NoteList notes={notes} />
					</div>
				</article>
				<SiteFooter />
			</main>
		</>
	);
}