import { ProjectDetailPage } from "~/components/ProjectDetailPage";

export default function CampusRfSpectrumVisualizerPage() {
	return (
		<ProjectDetailPage
			github="https://github.com/mschwedatschenko/SpectrumVisualizer"
			highlights={[
				"Captured live RF activity with an RTL-SDR pipeline running on Raspberry Pi.",
				"Converted FFT output into color and motion mapped to a HUB75 LED matrix.",
				"Built the display into a frosted enclosure for a smooth, gallery-style visual effect.",
			]}
			image="/spectrum-visualizer.svg"
			overview="This project turns ambient campus wireless activity into real-time light art. The system samples spectrum data, transforms it into a visual representation, and renders the result continuously on a custom LED panel setup."
			tech={["rtl-sdr", "raspberry pi", "signal processing", "hub75 led matrix"]}
			title="campus rf spectrum visualizer"
			year="2026"
		/>
	);
}
