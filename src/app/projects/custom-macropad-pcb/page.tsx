import { ProjectDetailPage } from "~/components/ProjectDetailPage";

export default function CustomMacropadPcbPage() {
	return (
		<ProjectDetailPage
			body={[
				"i wanted a board i had actually designed rather than assembled from a kit, and a nine-key macropad is about the smallest project that still makes you deal with every part of the process: schematic, footprints, routing, board outline, fab, and then firmware on the other side.",
				"the switches sit in a 3×3 matrix so nine keys only need six microcontroller pins. the catch with matrices is ghosting: hold down three keys that share rows and columns and the scan reports a fourth one you never pressed. one diode per switch blocks the return path that causes it, which is why there are nine diodes down the right edge of the layout.",
				"firmware runs on an arduino micro. it drives one row at a time, reads the columns, debounces in software, and reports over usb hid, so the board enumerates as an ordinary keyboard and needs no drivers on the host.",
				"drawing it in kicad was the part i learned the most from. routing a matrix by hand teaches you quickly that the schematic being correct and the board being routable are two different problems.",
			]}
			github="https://github.com/mschwedatschenko/Macropad"
			image="/macropad_layout.png"
			imageCaption="kicad layout: 3×3 switch matrix with per-key diodes along the right edge"
			tech={["kicad", "c++", "arduino micro", "usb hid"]}
			title="custom macropad pcb"
			year="2025"
		/>
	);
}
