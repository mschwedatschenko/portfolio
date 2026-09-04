import Link from "next/link";
import { formatNoteDate, type NoteMeta } from "~/lib/note-format";

const linkClass =
	"underline decoration-rule underline-offset-4 hover:text-forest hover:decoration-forest";

export function NoteList({ notes }: { notes: NoteMeta[] }) {
	if (notes.length === 0) {
		return (
			<p className="text-quiet text-sm">
				nothing published yet. stay tuned!
			</p>
		);
	}

	return (
		<ul>
			{notes.map((note) => (
				<li
					className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-rule border-t py-3 first:border-t-0 first:pt-0"
					key={note.slug}
				>
					<Link className={linkClass} href={`/notes/${note.slug}`}>
						{note.title}
					</Link>
					<time className="font-mono text-quiet text-xs" dateTime={note.date}>
						{formatNoteDate(note.date)}
					</time>
				</li>
			))}
		</ul>
	);
}
