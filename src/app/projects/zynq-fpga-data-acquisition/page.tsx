import { ProjectDetailPage } from "~/components/ProjectDetailPage";

export default function ZynqFpgaDataAcquisitionPage() {
	return (
		<ProjectDetailPage
			github="https://github.com/mschwedatschenko/sipm_data_acq"
			highlights={[
				"Implemented a PL-side acquisition and buffering path tuned for deterministic transfer.",
				"Connected programmable logic and ARM processing over AXI interfaces.",
				"Validated end-to-end movement from captured events to processor-readable data.",
			]}
			image="/zynq-block-diagram.png"
			overview="This build explores a Zynq-based data acquisition flow for simulated SiPM-style signals. The goal is fast, predictable capture in programmable logic with clean handoff to software for downstream analysis and control."
			tech={["zynq-7000", "verilog", "axi", "embedded linux"]}
			title="zynq fpga data acquisition"
			year="2026"
		/>
	);
}
