import { useState } from 'react';
import { join } from '@moondreamsdev/dreamer-ui/utils';
import { Disclosure, Modal, Button } from '@moondreamsdev/dreamer-ui/components';
import { ExternalLink } from 'lucide-react';

type ProjectStatus = 'Stable' | 'In Development' | 'On Hold';
type ProjectCategory = 'Web App' | 'Chrome Extension' | 'Mobile App';

interface Project {
	name: string;
	category: ProjectCategory;
	status: ProjectStatus;
	stack: string[];
	briefDescription: string;
	fullDescription?: string;
	url?: string;
}

const activeProjects: Project[] = [
	{
		name: 'Quick Links',
		category: 'Chrome Extension',
		status: 'Stable',
		stack: ['Chrome Extension API', 'TypeScript', 'React'],
		briefDescription:
			'Pin your most-visited links and jump to them instantly from the browser toolbar.',
		fullDescription:
			"I kept losing time hunting for the same links across tabs. Quick Links lets you pin anything and reach it from the extension popup in one click. No sync, no accounts — everything stays local in your browser.",
		url: 'https://chromewebstore.google.com/detail/quick-links/enlpbohhejbabdcpeoepflldnppafjmb',
	},
	{
		name: 'Angelia',
		category: 'Mobile App',
		status: 'In Development',
		stack: ['React Native', 'TypeScript', 'Firebase'],
		briefDescription:
			'A communication-focused app, originally built for the web and now becoming a native mobile experience.',
		fullDescription:
			"Started as a website and I've been rebuilding it as a React Native mobile app. The web version is still live, but mobile is where this is headed. Currently in alpha testing.",
		url: 'https://angelia.moondreams.dev/',
	},
	{
		name: 'Akyl',
		category: 'Web App',
		status: 'Stable',
		stack: ['React', 'TypeScript'],
		briefDescription:
			'Visualize how your money flows — from income to expenses to savings — as an interactive flowchart.',
		fullDescription:
			"I'd sometimes stop and wonder: where does the money go? I tried spreadsheets, apps, and handwritten notes — each with their own tradeoffs. For someone who budgets occasionally and doesn't need the depth of a full-featured app, having all the income and expense \"buckets\" laid out visually is exactly the right level.\n\nYou build a top-to-bottom flowchart that maps your income sources to spending categories and savings goals. You can view it across different periods (weekly, monthly, annually), and all data stays in your browser — no accounts, completely private. Export your budget as a file or image to save your work.",
		url: 'https://akyl.moondreams.dev/',
	},
	{
		name: 'Arke',
		category: 'Web App',
		status: 'In Development',
		stack: ['React', 'TypeScript', 'Firebase'],
		briefDescription:
			'Move content between your devices — text, links, images, files — without cables or accounts.',
		fullDescription:
			'Open it on two devices and transfer whatever you need in a few seconds. No setup, no login, no clipboard manager to install. Just a quick bridge between wherever you are.',
		url: 'https://arke.moondreams.dev/',
	},
	{
		name: 'Calypso',
		category: 'Web App',
		status: 'Stable',
		stack: [],
		briefDescription:
			'A secure web application for account and access management.',
		url: 'https://secure.moondreams.dev/login',
	},
	{
		name: 'Demmi',
		category: 'Web App',
		status: 'In Development',
		stack: [],
		briefDescription: 'A project currently in development.',
		url: 'https://demmi.moondreams.dev',
	},
	{
		name: 'Tinies',
		category: 'Web App',
		status: 'In Development',
		stack: [],
		briefDescription: 'A project currently in development.',
		url: 'https://tinies.moondreams.dev',
	},
];

const onHoldProjects: Project[] = [
	{
		name: 'Planner',
		category: 'Web App',
		status: 'On Hold',
		stack: ['React', 'TypeScript'],
		briefDescription:
			"Got it mostly built, but it didn't solve the problem the way I wanted it to.",
		fullDescription:
			"Parked for now. The core functionality works, but something about the approach wasn't clicking. I might come back to it with a different angle.",
		url: 'https://planner.moondreams.dev',
	},
	{
		name: 'Mnemo',
		category: 'Web App',
		status: 'On Hold',
		stack: ['React', 'TypeScript', 'Firebase'],
		briefDescription:
			"Same situation as Planner — the core idea didn't quite land the way I hoped.",
		fullDescription:
			"Still here if I figure out a better approach. Not abandoned, just waiting for the right direction.",
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

interface ProjectCardProps {
	project: Project;
	onShowTech: () => void;
	muted?: boolean;
}

function ProjectCard({ project, onShowTech, muted }: ProjectCardProps) {
	return (
		<div
			className={join(
				'rounded-xl border p-6 flex flex-col gap-4 transition-colors duration-150',
				muted
					? 'border-white/[0.04] bg-white/[0.01] hover:bg-white/[0.02]'
					: 'border-white/5 bg-white/[0.02] hover:bg-white/[0.03]',
			)}
		>
			{/* Header row */}
			<div className='flex items-start justify-between gap-3'>
				<div className='flex flex-col gap-1'>
					<div className='flex items-center gap-2'>
						<span className={join('text-base font-semibold', muted ? 'text-slate-400' : 'text-white')}>
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
					<span className='text-xs font-mono text-slate-600'>
						{project.category}
					</span>
				</div>
				<span
					className={join(
						'inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-mono border shrink-0',
						statusConfig[project.status].className,
					)}
				>
					{statusConfig[project.status].label}
				</span>
			</div>

			{/* Brief description */}
			<p className='text-sm text-slate-400 leading-relaxed'>
				{project.briefDescription}
			</p>

			{/* Full description via Disclosure */}
			{project.fullDescription && (
				<Disclosure
					label='Read more'
					className='text-xs'
					buttonClassName='text-xs font-mono text-slate-500 hover:text-violet-400 transition-colors duration-150'
				>
					<p className='mt-2 text-sm text-slate-500 leading-relaxed whitespace-pre-line'>
						{project.fullDescription}
					</p>
				</Disclosure>
			)}

			{/* Tech details button */}
			{project.stack.length > 0 && (
				<div className='mt-auto pt-2'>
					<Button
						variant='outline'
						size='sm'
						onClick={onShowTech}
						className='text-xs font-mono text-slate-500'
					>
						Tech details
					</Button>
				</div>
			)}
		</div>
	);
}

export function RegistrySection() {
	const [techProject, setTechProject] = useState<Project | null>(null);

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

			{/* Active projects grid */}
			<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-12'>
				{activeProjects.map((project) => (
					<ProjectCard
						key={project.name}
						project={project}
						onShowTech={() => setTechProject(project)}
					/>
				))}
			</div>

			{/* On-hold projects */}
			<div>
				<p className='text-xs font-mono text-slate-500 tracking-widest uppercase mb-4'>
					// On hold — may revisit
				</p>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
					{onHoldProjects.map((project) => (
						<ProjectCard
							key={project.name}
							project={project}
							onShowTech={() => setTechProject(project)}
							muted
						/>
					))}
				</div>
			</div>

			<p className='mt-10 text-xs font-mono text-slate-600 text-center tracking-wide'>
				// Start dates to be added — registry updated as things ship.
			</p>

			{/* Tech stack modal */}
			<Modal
				isOpen={techProject !== null}
				onClose={() => setTechProject(null)}
				title={techProject ? `${techProject.name} — Tech Stack` : ''}
			>
				<div className='flex flex-wrap gap-2 pt-2'>
					{techProject?.stack.map((tech) => (
						<span
							key={tech}
							className='px-3 py-1 rounded text-xs font-mono text-violet-300 bg-violet-500/10 border border-violet-500/20'
						>
							{tech}
						</span>
					))}
				</div>
			</Modal>
		</section>
	);
}
