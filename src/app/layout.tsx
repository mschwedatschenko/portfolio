import "~/styles/globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Mary Schwedatschenko | Portfolio",
	description: "ECE + CS Student | PCB Design | Hardware/Software Integration",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className="dark scroll-smooth">
			<head>
				<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
				<link rel="manifest" href="/favicon/site.webmanifest"/>
			</head>
			<body
				className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-900 text-foreground antialiased"
				style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
			>
				<div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
					{/* subtle background glow */}
					<div className="pointer-events-none fixed inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl">
						<div className="relative left-1/2 aspect-[1108/632] w-[72rem] -translate-x-1/2 bg-gradient-to-tr from-violet-600/30 via-fuchsia-500/18 to-violet-400/28 opacity-60" />
					</div>
					{children}
				</div>
			</body>
		</html>
	);
}
