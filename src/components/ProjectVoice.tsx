import type { ReactNode } from "react";

const summaryBody = "font-mono text-quiet text-sm leading-relaxed";

/** Polished / drafted technical copy — reads as machine summary. */
export function ProjectSummary({
	children,
	labeled = true,
}: {
	children: ReactNode;
	labeled?: boolean;
}) {
	return (
		<div>
			{labeled ? (
				<p className="font-mono text-[10px] text-quiet uppercase tracking-widest">
					summary
				</p>
			) : null}
			<div className={labeled ? `mt-1.5 ${summaryBody}` : summaryBody}>
				{children}
			</div>
		</div>
	);
}

/** First-person voice — reads as human commentary. */
export function ProjectCommentary({ children }: { children: ReactNode }) {
	return (
		<div className="mt-4 border-forest/40 border-l-2 pl-3">
			<p className="font-mono text-[10px] text-forest uppercase tracking-widest">
				commentary
			</p>
			<div className="mt-1.5 text-sm leading-relaxed sm:text-base">{children}</div>
		</div>
	);
}
