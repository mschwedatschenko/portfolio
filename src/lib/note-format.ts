export interface NoteMeta {
	slug: string;
	title: string;
	date: string;
}

export interface Note extends NoteMeta {
	body: string;
}

export function formatNoteDate(isoDate: string) {
	const date = new Date(`${isoDate}T00:00:00`);
	return date
		.toLocaleDateString("en-GB", {
			day: "numeric",
			month: "short",
			year: "numeric",
		})
		.toLowerCase();
}
