import { Mail, GitBranch, Moon } from 'lucide-react';
import { FOUNDER_NAME, FOUNDER_EMAIL, APP_TITLE } from '@lib/app';

const serviceStack = [
	{ label: 'React', description: 'Component architecture & SPA development' },
	{ label: 'TypeScript', description: 'Type-safe, maintainable codebases' },
	{ label: 'Tailwind CSS', description: 'Utility-first styling systems' },
	{ label: 'Chrome Extension API', description: 'Browser extension development' },
	{ label: 'Node.js', description: 'Server-side JavaScript & CLI tooling' },
	{ label: 'Vite', description: 'Fast builds, modern DX' },
	{ label: 'Firebase', description: 'Hosting, auth, and real-time data' },
	{ label: 'REST / Web APIs', description: 'Integration and service design' },
];

export function ContactSection() {
	return (
		<footer
			id='contact'
			className='w-full border-t border-white/5 bg-white/[0.01] scroll-mt-16'
		>
			<div className='max-w-5xl mx-auto px-6 py-20 md:py-24'>
				{/* Two-column layout: stack + contact */}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
					{/* Service stack */}
					<div>
						<p className='text-xs font-mono text-violet-400 tracking-widest uppercase mb-3'>
						§ 05 · Service Stack
						</p>
						<h2 className='text-2xl font-extrabold text-white mb-6 tracking-tight'>
							What ships here.
						</h2>
						<div className='grid grid-cols-1 gap-3'>
							{serviceStack.map(({ label, description }) => (
								<div
									key={label}
									className='flex items-center gap-4 py-2.5 border-b border-white/5 last:border-0'
								>
									<span className='text-xs font-mono text-violet-400 bg-violet-500/10 border border-violet-500/15 rounded px-2 py-0.5 shrink-0 w-40'>
										{label}
									</span>
									<span className='text-sm text-slate-500'>{description}</span>
								</div>
							))}
						</div>
					</div>

					{/* Connect */}
					<div>
						<p className='text-xs font-mono text-violet-400 tracking-widest uppercase mb-3'>
						§ 06 · Connect
						</p>
						<h2 className='text-2xl font-extrabold text-white mb-4 tracking-tight'>
							Let&rsquo;s build something.
						</h2>
						<p className='text-slate-400 text-sm leading-relaxed mb-8'>
							{APP_TITLE} is open to collaboration and contract work. Whether
							it&rsquo;s a greenfield project, a specific engineering problem, or
							something in between—reach out directly to {FOUNDER_NAME}.
						</p>

						<div className='space-y-4'>
							{/* Email */}
							<a
								href={`mailto:${FOUNDER_EMAIL}`}
								className='flex items-center gap-3 group w-fit'
								aria-label={`Email ${FOUNDER_NAME}`}
							>
								<div className='flex items-center justify-center w-9 h-9 rounded-lg bg-violet-500/10 border border-violet-500/20 group-hover:bg-violet-500/20 transition-colors duration-200'>
									<Mail className='size-4 text-violet-400' aria-hidden='true' />
								</div>
								<div>
									<span className='text-xs font-mono text-slate-500 block'>
										Primary
									</span>
									<span className='text-sm text-white group-hover:text-violet-300 transition-colors duration-200 font-mono'>
										{FOUNDER_EMAIL}
									</span>
								</div>
							</a>

							{/* GitHub */}
							<a
								href='https://github.com/NovaMoonX'
								target='_blank'
								rel='noopener noreferrer'
								className='flex items-center gap-3 group w-fit'
								aria-label='GitHub profile'
							>
								<div className='flex items-center justify-center w-9 h-9 rounded-lg bg-white/[0.04] border border-white/10 group-hover:bg-white/[0.08] transition-colors duration-200'>
									<GitBranch
										className='size-4 text-slate-400'
										aria-hidden='true'
									/>
								</div>
								<div>
									<span className='text-xs font-mono text-slate-500 block'>
										Open Source
									</span>
									<span className='text-sm text-white group-hover:text-slate-200 transition-colors duration-200 font-mono'>
										github.com/NovaMoonX
									</span>
								</div>
							</a>
						</div>

						{/* Availability note */}
						<div className='mt-10 p-4 rounded-lg bg-white/[0.03] border border-white/5'>
							<p className='text-xs font-mono text-slate-500 leading-relaxed'>
								<span className='text-emerald-400'>●</span> Available for
								contract work and collaboration. Response within 48h.
							</p>
						</div>
					</div>
				</div>

				{/* Footer mark */}
				<div className='mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4'>
					<div className='flex items-center gap-2 text-slate-600'>
						<Moon className='size-4 text-violet-500/60' aria-hidden='true' />
						<span className='text-xs font-mono'>
							{APP_TITLE} LLC &mdash; {FOUNDER_NAME}
						</span>
					</div>
					<span className='text-xs font-mono text-slate-700'>
						// built with persistence
					</span>
				</div>
			</div>
		</footer>
	);
}
