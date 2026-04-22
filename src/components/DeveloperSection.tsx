import { Code2, Puzzle, BookOpen, ExternalLink } from 'lucide-react';
import { join } from '@moondreamsdev/dreamer-ui/utils';

const devTools = [
	{
		icon: BookOpen,
		title: 'Dreamer UI',
		subtitle: 'Component Library',
		description:
			"My component library — built for the projects here and published for anyone to use. If you find it useful or want to contribute, I'm open to it.",
		url: 'https://ui.moondreams.dev/',
		urlLabel: 'ui.moondreams.dev',
		badge: 'npm',
	},
	{
		icon: Puzzle,
		title: 'Quick Links',
		subtitle: 'Chrome Extension',
		description:
			"A Chrome extension I made for managing frequently-used links. Opens a custom tab with instant access to whatever you have saved. Local-only, no accounts.",
		url: 'https://chromewebstore.google.com/detail/quick-links/enlpbohhejbabdcpeoepflldnppafjmb',
		urlLabel: 'Chrome Web Store',
		badge: 'extension',
	},
];

export function DeveloperSection() {
	return (
		<section
			id='developers'
			className={join('w-full max-w-5xl mx-auto px-6 py-20 md:py-28 scroll-mt-16')}
		>
			{/* Section header */}
			<div className={join('mb-14')}>
				<p className={join('text-xs font-mono text-violet-400 tracking-widest uppercase mb-3')}>
					§ 04 · For Developers
				</p>
				<h2 className={join('text-3xl md:text-4xl font-extrabold text-white tracking-tight')}>
					Things I use.
					<br />
					<span className={join('text-slate-400')}>Open to building with you.</span>
				</h2>
				<p className={join('mt-4 text-slate-400 max-w-xl text-base leading-relaxed')}>
					I&rsquo;m open to working with other developers — pair programming,
					reviewing code, contributing to something you&rsquo;re building, or
					just collaborating on ideas. Below are tools that came out of my own
					work that you might find useful.
				</p>
			</div>

			{/* Collaboration callout */}
			<div className={join('mb-10 p-5 rounded-xl border border-violet-500/20 bg-violet-500/5 flex flex-col sm:flex-row items-start sm:items-center gap-4')}>
				<div className={join('flex items-center justify-center w-10 h-10 rounded-lg bg-violet-500/15 border border-violet-500/25 shrink-0')}>
					<Code2 className={join('size-5 text-violet-400')} aria-hidden='true' />
				</div>
				<div>
					<p className={join('text-sm font-semibold text-white')}>
						Open to collaboration &amp; contract work
					</p>
					<p className={join('text-sm text-slate-400 mt-0.5')}>
						Pair programming, code reviews, greenfield projects, open-source — I&rsquo;m open to it. Just email me to start a conversation.
					</p>
				</div>
			</div>

			{/* Dev tools */}
			<div className={join('grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 rounded-xl overflow-hidden')}>
				{devTools.map(({ icon: Icon, title, subtitle, description, url, urlLabel, badge }) => (
					<div
						key={title}
						className={join('bg-[#020617] p-7 flex flex-col gap-5 hover:bg-white/[0.02] transition-colors duration-200')}
					>
						{/* Header */}
						<div className={join('flex items-start justify-between gap-3')}>
							<div className={join('flex items-center gap-3')}>
								<div className={join('flex items-center justify-center w-9 h-9 rounded-lg bg-violet-500/10 border border-violet-500/20 shrink-0')}>
									<Icon className={join('size-4.5 text-violet-400')} aria-hidden='true' />
								</div>
								<div>
									<h3 className={join('text-sm font-semibold text-white')}>{title}</h3>
									<p className={join('text-xs font-mono text-slate-500')}>{subtitle}</p>
								</div>
							</div>
							<span className={join('px-2 py-0.5 rounded text-[10px] font-mono text-violet-400 bg-violet-500/10 border border-violet-500/20 shrink-0')}>
								{badge}
							</span>
						</div>

						{/* Description */}
						<p className={join('text-sm text-slate-400 leading-relaxed flex-1')}>
							{description}
						</p>

						{/* Link */}
						<a
							href={url}
							target='_blank'
							rel='noopener noreferrer'
							className={join('inline-flex items-center gap-1.5 text-xs font-mono text-violet-400 hover:text-violet-300 transition-colors duration-150 group')}
							aria-label={`Visit ${title}`}
						>
							{urlLabel}
							<ExternalLink
								className={join('size-3 opacity-60 group-hover:opacity-100 transition-opacity duration-150')}
								aria-hidden='true'
							/>
						</a>
					</div>
				))}
			</div>
		</section>
	);
}
