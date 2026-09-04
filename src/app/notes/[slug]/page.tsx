import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import { SiteFooter } from "~/components/SiteFooter";
import { SiteNavbar } from "~/components/SiteNavbar";
import { formatNoteDate } from "~/lib/note-format";
import { getNote, getNotes } from "~/lib/notes";

interface NotePageProps {
	params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
	return getNotes().map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({
	params,
}: NotePageProps): Promise<Metadata> {
	const { slug } = await params;
	const note = getNote(slug);
	if (!note) return { title: "note | Mary Schwedatschenko" };
	return {
		title: `${note.title} | Mary Schwedatschenko`,
	};
}

export default async function NotePage({ params }: NotePageProps) {
	const { slug } = await params;
	const note = getNote(slug);
	if (!note) notFound();

	return (
		<>
			<SiteNavbar />
			<main className="mx-auto max-w-3xl px-6" id="top">
				<article className="py-12">
					<Link
						className="font-mono text-quiet text-xs hover:text-forest"
						href="/notes"
					>
						← notes
					</Link>
					<header className="mt-6">
						<h1 className="font-semibold text-xl tracking-tight sm:text-2xl">
							{note.title}
						</h1>
						<time
							className="mt-2 block font-mono text-quiet text-xs"
							dateTime={note.date}
						>
							{formatNoteDate(note.date)}
						</time>
					</header>
					<div className="note-body mt-8 text-sm leading-relaxed sm:text-base">
						<Markdown>{note.body}</Markdown>
					</div>
				</article>
				<SiteFooter />
			</main>
		</>
	);
}
