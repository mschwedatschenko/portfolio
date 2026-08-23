import "~/styles/globals.css";

import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";

const plexSans = IBM_Plex_Sans({
	subsets: ["latin"],
	weight: ["400", "500", "600"],
	variable: "--font-plex-sans",
	display: "swap",
});

const plexMono = IBM_Plex_Mono({
	subsets: ["latin"],
	weight: ["400", "500"],
	variable: "--font-plex-mono",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Mary Schwedatschenko",
	description:
		"Digital design and hardware verification. ECE at WPI, hardware engineer at Teradyne. FPGAs, ASICs, SystemVerilog, and PCB design.",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html
			className={`${plexSans.variable} ${plexMono.variable} scroll-smooth`}
			lang="en"
		>
			<head>
				<link
					href="/favicon/apple-touch-icon.png"
					rel="apple-touch-icon"
					sizes="180x180"
				/>
				<link
					href="/favicon/favicon-32x32.png"
					rel="icon"
					sizes="32x32"
					type="image/png"
				/>
				<link
					href="/favicon/favicon-16x16.png"
					rel="icon"
					sizes="16x16"
					type="image/png"
				/>
				<link href="/favicon/site.webmanifest" rel="manifest" />
			</head>
			<body className="min-h-screen bg-paper font-sans text-ink antialiased">
				{children}
			</body>
		</html>
	);
}
