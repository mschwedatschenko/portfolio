import { ProjectDetailPage } from "~/components/ProjectDetailPage";

export default function ZynqFpgaDataAcquisitionPage() {
	return (
		<ProjectDetailPage
			body={[
				"silicon photomultipliers put out short, fast pulses, and if you want to count them you have to be ready before the pulse arrives rather than after. that pushes the capture into fabric, which is what this project is about: a data acquisition path on a zynq-7000 where the programmable logic does the timing-critical work and the arm processor only shows up afterward to read the results.",
				"a generator core in the pl produces sipm-like pulses so i can exercise the path without a detector attached. those go through a fifo into a capture core, which waits on a trigger, writes the requested number of samples into block ram, and asserts a done flag. the processor reads that buffer back through an axi bram controller, and axi gpio carries the trigger and acquisition-length settings the other direction.",
				"splitting it this way means the processor is never in the critical path. it can be busy, or late, or running linux and doing five other things, and the capture is still deterministic because it happened entirely in fabric.",
				'the broader goal in the lab is moving off koheron-based fpga implementations and onto a memory-mapped architecture we own end to end. koheron works, but it puts a framework between us and the hardware, and when you need to change how a capture behaves that framework is the thing you end up fighting. owning the address map means the answer to "why did it do that" is always somewhere we can read.',
				"this is ongoing work in wpi's plasma & nuclear diagnostics lab, where i've been a research assistant since september 2025.",
			]}
			github="https://github.com/mschwedatschenko/sipm_data_acq"
			image="/zynq-block-diagram.png"
			imageCaption="vivado block design: generator and capture cores on the left, bram and the zynq ps on the right"
			tech={["zynq-7000", "verilog", "axi4", "vivado", "block ram"]}
			title="zynq fpga data acquisition"
			year="since 2025"
		/>
	);
}
