import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { type Note, type NoteMeta } from "~/lib/note-format";

export type { Note, NoteMeta } from "~/lib/note-format";

const NOTES_DIR = path.join(process.cwd(), "content", "notes");

function isPublished(data: { draft?: boolean; title?: string; date?: string }) {
	return Boolean(data.title && data.date && !data.draft);
}

function readNoteFile(filename: string): Note | null {
	if (!filename.endsWith(".md") || filename.startsWith("_")) return null;

	const raw = fs.readFileSync(path.join(NOTES_DIR, filename), "utf8");
	const { data, content } = matter(raw);

	if (!isPublished(data)) return null;

	return {
		slug: filename.replace(/\.md$/, ""),
		title: data.title as string,
		date: data.date as string,
		body: content.trim(),
	};
}

export function getNotes(): NoteMeta[] {
	if (!fs.existsSync(NOTES_DIR)) return [];

	return fs
		.readdirSync(NOTES_DIR)
		.map(readNoteFile)
		.filter((note): note is Note => note !== null)
		.sort((a, b) => (a.date < b.date ? 1 : -1))
		.map(({ slug, title, date }) => ({ slug, title, date }));
}

export function getNote(slug: string): Note | null {
	const filename = `${slug}.md`;
	if (
		filename.startsWith("_") ||
		filename.includes("/") ||
		filename.includes("\\")
	) {
		return null;
	}
	const filePath = path.join(NOTES_DIR, filename);
	if (!fs.existsSync(filePath)) return null;
	return readNoteFile(filename);
}
