import Link from "next/link";

interface SiteNavbarProps {
	isHome?: boolean;
}

const SECTIONS = ["about", "projects", "education", "contact"] as const;

export function SiteNavbar({ isHome = false }: SiteNavbarProps) {
	const makeHref = (hash: string) => (isHome ? hash : `/${hash}`);

	return (
		<nav className="sticky top-0 z-50 border-rule border-b bg-paper">
			<div className="mx-auto flex max-w-3xl flex-wrap items-baseline justify-between gap-x-6 gap-y-1 px-6 py-3">
				<Link
					className="font-medium text-sm hover:text-rust"
					href={makeHref("#top")}
				>
					mary schwedatschenko
				</Link>
				<div className="flex gap-x-5 font-mono text-quiet text-xs">
					{SECTIONS.map((section) => (
						<Link
							className="hover:text-rust"
							href={makeHref(`#${section}`)}
							key={section}
						>
							{section}
						</Link>
					))}
				</div>
			</div>
		</nav>
	);
}
