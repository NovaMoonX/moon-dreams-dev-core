import { Code2, Puzzle, BookOpen, ExternalLink } from 'lucide-react';
import { join } from '@moondreamsdev/dreamer-ui/utils';
import { FOUNDER_NAME } from '@lib/app';

const openSourceItems = [
	{
		icon: BookOpen,
		title: 'Dreamer UI',
		subtitle: 'Component Library',
		description:
			'An accessible, customizable React component library powering all Moon Dreams Dev projects. Built with Tailwind CSS — designed for speed without sacrificing quality.',
		url: 'https://ui.moondreams.dev/',
		urlLabel: 'ui.moondreams.dev',
		badge: 'npm',
	},
	{
		icon: Puzzle,
		title: 'Quick Links',
		subtitle: 'Chrome Extension',
		description:
			'A developer-focused browser extension for managing and launching your most-used links instantly. Local-only storage, zero telemetry, built for flow state.',
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
					Built for builders.
					<br />
					<span className={join('text-slate-400')}>Open to working with you.</span>
				</h2>
				<p className={join('mt-4 text-slate-400 max-w-xl text-base leading-relaxed')}>
					Moon Dreams Dev is actively open to developer collaboration. If
					you&rsquo;re working on something interesting or want to contribute,
					reach out to {FOUNDER_NAME} directly. Below are tools that came out of
					the same creative cycle.
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
						Pair programming, architecture consulting, greenfield projects, open-source
						contributions — all fair game. DM or email to start a conversation.
					</p>
				</div>
			</div>

			{/* Open-source tools */}
			<div className={join('grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 rounded-xl overflow-hidden')}>
				{openSourceItems.map(({ icon: Icon, title, subtitle, description, url, urlLabel, badge }) => (
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
