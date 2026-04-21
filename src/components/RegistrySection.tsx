import { join } from '@moondreamsdev/dreamer-ui/utils';
import { ExternalLink } from 'lucide-react';

type ProjectStatus = 'Stable' | 'In Development' | 'On Hold';
type ProjectCategory = 'Component Library' | 'Web Application' | 'Chrome Extension' | 'Mobile Application';

interface Project {
	name: string;
	category: ProjectCategory;
	status: ProjectStatus;
	stack: string[];
	description: string;
	url?: string;
	startDate?: string;
}

const activeProjects: Project[] = [
	{
		name: 'Quick Links',
		category: 'Chrome Extension',
		status: 'Stable',
		stack: ['Chrome Extension API', 'TypeScript', 'React'],
		description:
			"Built this because I kept losing time switching between tabs to find the same links. Local storage only — no accounts, no tracking.",
		url: 'https://chromewebstore.google.com/detail/quick-links/enlpbohhejbabdcpeoepflldnppafjmb',
	},
	{
		name: 'Angelia',
		category: 'Mobile Application',
		status: 'In Development',
		stack: ['React Native', 'TypeScript', 'Firebase'],
		description:
			'Originally built as a web app. Now becoming a React Native mobile app — currently in alpha testing.',
		url: 'https://angelia.moondreams.dev/',
	},
	{
		name: 'Akyl',
		category: 'Web Application',
		status: 'In Development',
		stack: ['React', 'TypeScript'],
		description: 'An active web project in development.',
		url: 'https://akyl.moondreams.dev/',
	},
	{
		name: 'Arke',
		category: 'Web Application',
		status: 'In Development',
		stack: ['React', 'TypeScript', 'Firebase'],
		description:
			'Transfer text, links, files, and media across devices — just open it on both ends.',
		url: 'https://arke.moondreams.dev/',
	},
];

const onHoldProjects: Project[] = [
	{
		name: 'Planner',
		category: 'Web Application',
		status: 'On Hold',
		stack: ['React', 'TypeScript'],
		description:
			"Got it mostly built, but it didn't solve the problem the way I wanted it to. Parked for now — might come back to it.",
		url: 'https://planner.moondreams.dev',
	},
	{
		name: 'Mnemo',
		category: 'Web Application',
		status: 'On Hold',
		stack: ['React', 'TypeScript', 'Firebase'],
		description:
			"Same situation as Planner — the core idea didn't quite land. Still here if I figure out a better angle.",
		url: 'https://mnemo-ba644.web.app/',
	},
];

const statusConfig: Record<ProjectStatus, { label: string; className: string }> = {
	Stable: {
		label: 'Stable',
		className: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
	},
	'In Development': {
		label: 'In Development',
		className: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
	},
	'On Hold': {
		label: 'On Hold',
		className: 'bg-slate-700/40 text-slate-400 border-slate-600/30',
	},
};

function ProjectRow({ project, isLast }: { project: Project; isLast: boolean }) {
	return (
		<div
			className={join(
				'grid grid-cols-1 md:grid-cols-[2fr_1.5fr_1fr_2fr] gap-4 px-6 py-5 hover:bg-white/[0.02] transition-colors duration-150',
				isLast ? '' : 'border-b border-white/5',
			)}
		>
			{/* Name + Category */}
			<div className='flex flex-col gap-1'>
				<div className='flex items-center gap-2'>
					<span className='text-sm font-semibold text-white'>
						{project.name}
					</span>
					{project.url && (
						<a
							href={project.url}
							target='_blank'
							rel='noopener noreferrer'
							className='text-slate-600 hover:text-violet-400 transition-colors duration-150'
							aria-label={`Visit ${project.name}`}
						>
							<ExternalLink className='size-3.5' />
						</a>
					)}
				</div>
				<span className='text-xs font-mono text-slate-500'>
					{project.category}
				</span>
			</div>

			{/* Stack */}
			<div className='flex flex-wrap gap-1.5 items-start content-start'>
				{project.stack.map((tech) => (
					<span
						key={tech}
						className='px-2 py-0.5 rounded text-[10px] font-mono text-slate-400 bg-white/[0.04] border border-white/5'
					>
						{tech}
					</span>
				))}
			</div>

			{/* Status */}
			<div className='flex items-start'>
				<span
					className={join(
						'inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-mono border',
						statusConfig[project.status].className,
					)}
				>
					{statusConfig[project.status].label}
				</span>
			</div>

			{/* Description */}
			<p className='text-sm text-slate-400 leading-relaxed'>
				{project.description}
			</p>
		</div>
	);
}

function TableHeader() {
	return (
		<div className='hidden md:grid grid-cols-[2fr_1.5fr_1fr_2fr] gap-4 px-6 py-3 bg-white/[0.02] border-b border-white/5'>
			{['Project', 'Stack', 'Status', 'Description'].map((col) => (
				<span
					key={col}
					className='text-xs font-mono text-slate-500 tracking-widest uppercase'
				>
					{col}
				</span>
			))}
		</div>
	);
}

export function RegistrySection() {
	return (
		<section
			id='registry'
			className='w-full max-w-5xl mx-auto px-6 py-20 md:py-28 scroll-mt-16'
		>
			{/* Section header */}
			<div className='mb-14'>
				<p className='text-xs font-mono text-violet-400 tracking-widest uppercase mb-3'>
					§ 03 · Project Registry
				</p>
				<h2 className='text-3xl md:text-4xl font-extrabold text-white tracking-tight'>
					What I&rsquo;ve built.
				</h2>
				<p className='mt-4 text-slate-400 max-w-xl text-base leading-relaxed'>
					Things that came out of problems I wanted to solve. Some are
					finished and in use, some are still moving, and a couple didn&rsquo;t
					quite get there.
				</p>
			</div>

			{/* Active projects */}
			<div className='rounded-xl border border-white/5 overflow-hidden mb-10'>
				<TableHeader />
				{activeProjects.map((project, i) => (
					<ProjectRow
						key={project.name}
						project={project}
						isLast={i === activeProjects.length - 1}
					/>
				))}
			</div>

			{/* On-hold projects */}
			<div className='mb-4'>
				<p className='text-xs font-mono text-slate-500 tracking-widest uppercase mb-4'>
					// On hold — may revisit
				</p>
				<div className='rounded-xl border border-white/5 overflow-hidden'>
					<TableHeader />
					{onHoldProjects.map((project, i) => (
						<ProjectRow
							key={project.name}
							project={project}
							isLast={i === onHoldProjects.length - 1}
						/>
					))}
				</div>
			</div>

			<p className='mt-6 text-xs font-mono text-slate-600 text-center tracking-wide'>
				// Start dates to be added — registry updated as things ship.
			</p>
		</section>
	);
}
