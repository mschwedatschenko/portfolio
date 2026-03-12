export const SkillBadge = ({ skill }: { skill: string }) => (
	<span className="mr-2 mb-2 inline-flex items-center gap-1.5 rounded-full border border-violet-400/25 bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-100 shadow-sm shadow-violet-900/50">
		<span className="h-1.5 w-1.5 rounded-full bg-gradient-to-tr from-violet-400 to-fuchsia-400" />
		{skill}
	</span>
);
