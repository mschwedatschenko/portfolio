import { ProjectDetailPage } from "~/components/ProjectDetailPage";

export default function CampusRfSpectrumVisualizerPage() {
	return (
		<ProjectDetailPage
			body={[
				"i wanted a continuous view of which parts of the band around me were actually occupied. a spectrum analyzer will tell you that, but it tells you as an instrument, one measurement at a time. i was more interested in what it takes to keep a view like that running without interruption.",
				"an rtl-sdr v4 feeds raw iq samples to a raspberry pi 4. python and numpy compute fft spectrums across several frequency bands, and bin magnitude maps to brightness and color on an led display, so an occupied part of the band lights up and a quiet one stays dark.",
				"the constraint that shaped the design was keeping up. capture, fft, band mapping, and panel refresh all have to complete inside a frame. it's a soft deadline rather than a hard one. nothing breaks if you miss it, but missing it repeatedly is immediately obvious, because the display drifts out of step with the signal it's supposed to be tracking.",
				"numpy is doing the heavy lifting for exactly that reason. an fft written as a python loop over samples isn't remotely fast enough at these sample rates; pushing the transform and the magnitude scaling down into vectorized operations is the whole difference between keeping pace and visibly lagging. most of the tuning i did was finding places where i'd accidentally dropped back into interpreted python.",
				"the electronics and the led display live in a casing i designed and 3d-printed. that became its own small problem: the boards had to stay accessible enough to probe and debug, while the assembly still had to hold together as a single object rather than a breadboard sitting on a shelf.",
			]}
			github="https://github.com/mschwedatschenko/SpectrumVisualizer"
			image="/spectrum-visualizer.jpg"
			imageCaption="the panel mid-run in its printed casing, driver board and cabling off to the left"
			tech={[
				"rtl-sdr v4",
				"raspberry pi 4",
				"python",
				"numpy",
				"fft",
				"3d printing",
			]}
			title="campus rf spectrum visualizer"
			year="2026"
		/>
	);
}
