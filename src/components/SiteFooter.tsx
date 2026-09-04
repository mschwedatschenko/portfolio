const LINKS = [
	{
		label: "mschwedatschenko@wpi.edu",
		href: "mailto:mschwedatschenko@wpi.edu",
	},
	{ label: "github", href: "https://github.com/mschwedatschenko" },
	{ label: "linkedin", href: "https://linkedin.com/in/maryschwed" },
] as const;

export function SiteFooter() {
	return (
		<footer className="mt-20 border-rule border-t py-10" id="contact">
			<h2 className="mb-3 font-mono text-quiet text-xs uppercase tracking-widest">
				contact
			</h2>
			<p className="mb-4 text-sm">
				the fastest way to reach me is email, i check that far too often.
				beware, i'll talk your ear off about anything on this page. i always
				love seeing new linkedin connection requests too!
			</p>
			<ul className="space-y-1 text-sm">
				{LINKS.map(({ label, href }) => (
					<li key={href}>
						<a
							className="underline decoration-rule underline-offset-4 hover:text-forest hover:decoration-forest"
							href={href}
							rel="noopener noreferrer"
							target={href.startsWith("mailto:") ? undefined : "_blank"}
						>
							{label}
						</a>
					</li>
				))}
			</ul>
			<p className="mt-8 font-mono text-quiet text-xs">
				© {new Date().getFullYear()} mary schwedatschenko
				{" · "}
				<a
					className="underline decoration-rule underline-offset-4 hover:text-forest hover:decoration-forest"
					href="/colophon"
				>
					colophon
				</a>
			</p>
		</footer>
	);
}
