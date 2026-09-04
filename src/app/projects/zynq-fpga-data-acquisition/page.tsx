import { ProjectDetailPage } from "~/components/ProjectDetailPage";

export default function ZynqFpgaDataAcquisitionPage() {
	return (
		<ProjectDetailPage
			commentary=""
			github="https://github.com/mschwedatschenko/sipm_data_acq"
			image="/zynq-block-diagram.png"
			imageCaption="Vivado block design: generator and capture cores (left), BRAM and Zynq processing system (right)."
			overview="FPGA-based data acquisition path for silicon photomultiplier (SiPM) pulses on a Xilinx Zynq-7000. Timing-critical capture runs entirely in programmable logic; the ARM processing system configures the acquisition and reads completed buffers over AXI."
			sections={[
				{
					heading: "architecture",
					bullets: [
						"Zynq-7000 heterogeneous SoC: programmable logic (PL) for real-time capture, processing system (PS) for configuration and post-capture readout.",
						"Verilog generator core synthesizes SiPM-like pulses in fabric, enabling end-to-end bring-up without a physical detector attached.",
						"Capture core waits on a programmable trigger, writes a configurable number of samples into block RAM via a FIFO staging path, and asserts a done flag when the buffer is complete.",
						"PS reads the captured buffer through an AXI BRAM controller; AXI GPIO carries trigger enable and acquisition-length settings from the processor into the PL.",
					],
					commentary: "after many youtube videos explaining the ps and pl parts of the zynq, it was awesome to see it in action! unfortunately, this project has not been hardware synthesized yet, but i plan to further develop it in spring 2027.",
				},
				{
					heading: "design rationale",
					bullets: [
						"Keeping the critical path in programmable logic makes capture timing deterministic regardless of processor load, OS scheduling, or concurrent software tasks.",
						"The processor is never required to service the pulse in real time; it only needs to retrieve results after the fabric signals completion.",
						"Memory-mapped register and buffer access gives direct ownership of the address map, simplifying debug when capture behavior must be inspected or changed.",
					],
					commentary: "",
				},
				{
					heading: "context & goals",
					bullets: [
						"Ongoing research in WPI's Plasma & Nuclear Diagnostics Lab; research assistant role since September 2025.",
						"Broader lab objective: migrate SiPM acquisition off Koheron-based FPGA implementations onto a fully owned, memory-mapped architecture.",
						"Owning the stack end-to-end reduces dependence on vendor frameworks when capture behavior, buffering, or trigger semantics need to change.",
					],
					commentary: "i heard many times from my lab professor that i need to explain to everyone else what's going on, since nobody had gone this low-level in the actual hardware before. i was alone a lot on this project since i was an electrical engineering student surrounded by physicists.",
				},
			]}
			tech={["zynq-7000", "verilog", "axi4", "vivado", "block ram"]}
			title="zynq fpga data acquisition"
			year="since 2025"
		/>
	);
}
