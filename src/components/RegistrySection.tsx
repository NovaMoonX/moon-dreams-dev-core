import { join } from '@moondreamsdev/dreamer-ui/utils';
import { ExternalLink } from 'lucide-react';

type ProjectStatus = 'Stable' | 'In Development' | 'Prototype' | 'Concept';
type ProjectCategory = 'Component Library' | 'Web Application' | 'Chrome Extension' | 'CLI Tool';

interface Project {
	name: string;
	category: ProjectCategory;
	status: ProjectStatus;
	stack: string[];
	impact: string;
	url?: string;
}

const projects: Project[] = [
	{
		name: 'Dreamer UI',
		category: 'Component Library',
		status: 'Stable',
		stack: ['React', 'TypeScript', 'Tailwind CSS'],
		impact:
			'Accessible, customizable component library accelerating UI development across all Moon Dreams Dev projects.',
		url: 'https://www.npmjs.com/package/@moondreamsdev/dreamer-ui',
	},
	{
		name: 'Quick Links',
		category: 'Chrome Extension',
		status: 'Stable',
		stack: ['Chrome Extension API', 'TypeScript', 'React'],
		impact:
			'Developer-focused tab for launching your most-used links instantly. Local-only, zero telemetry, designed for flow state.',
		url: 'https://chromewebstore.google.com/detail/quick-links/enlpbohhejbabdcpeoepflldnppafjmb',
	},
	{
		name: 'Moon Dreams Dev Core',
		category: 'Web Application',
		status: 'In Development',
		stack: ['React', 'TypeScript', 'Vite', 'Firebase'],
		impact:
			'Primary business presence and project registry for Moon Dreams Dev LLC.',
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
	Prototype: {
		label: 'Prototype',
		className: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
	},
	Concept: {
		label: 'Concept',
		className: 'bg-slate-700/40 text-slate-400 border-slate-600/30',
	},
};

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
					The Work.
				</h2>
				<p className='mt-4 text-slate-400 max-w-xl text-base leading-relaxed'>
					A catalog of active development organized by business utility. Each
					entry represents a deliberate response to a real friction.
				</p>
			</div>

			{/* Registry table */}
			<div className='rounded-xl border border-white/5 overflow-hidden'>
				{/* Table header */}
				<div className='hidden md:grid grid-cols-[2fr_1.5fr_1fr_2fr] gap-4 px-6 py-3 bg-white/[0.02] border-b border-white/5'>
					{['Project', 'Stack', 'Status', 'Impact'].map((col) => (
						<span
							key={col}
							className='text-xs font-mono text-slate-500 tracking-widest uppercase'
						>
							{col}
						</span>
					))}
				</div>

				{/* Project rows */}
				{projects.map((project, i) => (
					<div
						key={project.name}
						className={join(
							'grid grid-cols-1 md:grid-cols-[2fr_1.5fr_1fr_2fr] gap-4 px-6 py-5 hover:bg-white/[0.02] transition-colors duration-150',
							i < projects.length - 1 ? 'border-b border-white/5' : '',
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
										aria-label={`View ${project.name}`}
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

						{/* Impact */}
						<p className='text-sm text-slate-400 leading-relaxed'>
							{project.impact}
						</p>
					</div>
				))}
			</div>

			{/* More coming note */}
			<p className='mt-6 text-xs font-mono text-slate-600 text-center tracking-wide'>
				// More projects in development — registry updated as work ships.
			</p>
		</section>
	);
}
