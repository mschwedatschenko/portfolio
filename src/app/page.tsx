import { HomePage } from "~/components/HomePage";
import { getNotes } from "~/lib/notes";

export default function Page() {
	return <HomePage notes={getNotes()} />;
}
