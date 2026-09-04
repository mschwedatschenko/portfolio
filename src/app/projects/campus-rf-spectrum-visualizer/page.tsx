import { ProjectDetailPage } from "~/components/ProjectDetailPage";

export default function CampusRfSpectrumVisualizerPage() {
	return (
		<ProjectDetailPage
			commentary=""
			github="https://github.com/mschwedatschenko/SpectrumVisualizer"
			image="/spectrum-visualizer.jpg"
			imageCaption="LED panel mid-run in the printed enclosure; driver board and cabling visible at left."
			overview="Real-time RF spectrum visualizer that continuously samples the local RF environment, computes spectral content across multiple bands, and maps occupancy onto a custom LED display. Built around an RTL-SDR V4 front end and a Raspberry Pi 4 host."
			sections={[
				{
					heading: "signal chain",
					bullets: [
						"RTL-SDR V4 provides continuous raw IQ sample streams to the Raspberry Pi 4 over USB.",
						"Python and NumPy compute FFT spectra across several configured frequency bands.",
						"Per-bin magnitude is mapped to LED brightness and color so occupied spectrum regions illuminate and quiet regions remain dark.",
						"Band selection and display mapping run as a continuous pipeline rather than as one-shot instrument sweeps.",
					],
					commentary: "shoutout to my friend ben who lent me his antenna to use for this project. being able to hook up the sdr and actually listen to radio stations on my computer that i was receiving myself was SO COOL. i was also able to output the different frequency bands straight to my ubuntu terminal after doing the fft, finally seeing the signals change in real time.",
				},
				{
					heading: "real-time constraints",
					bullets: [
						"Capture, FFT, band mapping, and panel refresh must complete within a single display frame to keep the visualization synchronized with the live signal.",
						"The frame deadline is soft: a missed update does not fault the system, but repeated misses are immediately visible as display lag.",
						"FFT and magnitude scaling are implemented with vectorized NumPy operations; interpreted Python loops cannot sustain the required sample rates.",
						"Performance tuning focused on eliminating accidental fallbacks from vectorized code paths into slower per-sample Python.",
					],
					commentary: "on top of all of this, one thing i was really struggling with was picking up some of the more subtle signals. i had to use normalization to make sure that the signals were all on the same scale, and that the different frequency bands were all visible.",
				},
				{
					heading: "mechanical design",
					bullets: [
						"Electronics and LED panel are housed in a custom enclosure designed and 3D-printed for the assembly.",
						"Enclosure design balanced board accessibility for probing and debug against structural integrity as a single portable unit.",
					],
					commentary: "using onshape for the first time to design the enclosure was a breeze! being able to 3d print something for the first time that fit my project requirements exactly was SO cool. i understand a little bit more about mechanical engineers now. the back sports a holey design, keeping all of the electronics in, letting the wires pass through.",
				},
			]}
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
