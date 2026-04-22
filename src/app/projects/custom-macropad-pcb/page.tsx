import { ProjectDetailPage } from "~/components/ProjectDetailPage";

export default function CustomMacropadPcbPage() {
	return (
		<ProjectDetailPage
			github="https://github.com/mschwedatschenko/Macropad"
			highlights={[
				"Designed a compact switch matrix PCB in KiCad with diode isolation.",
				"Wrote firmware for scanning, debouncing, and USB HID key output.",
				"Integrated hardware and firmware bring-up for reliable everyday use.",
			]}
			image="/macropad_layout.png"
			overview="A full hardware-to-firmware keyboard side project focused on PCB design and embedded input handling. It combines custom electronics with microcontroller firmware to deliver a programmable USB macropad."
			tech={["pcb design", "kicad", "c++", "arduino micro", "usb hid"]}
			title="custom macropad pcb"
			year="2025"
		/>
	);
}
