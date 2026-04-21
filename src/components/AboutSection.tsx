import { Users, Wrench, Moon } from 'lucide-react';
import { join } from '@moondreamsdev/dreamer-ui/utils';

const pillars = [
	{
		icon: Users,
		title: 'We work together directly.',
		body: "If you hire me, you work with me. There's no account manager or handoff. I think this makes things simpler — you know exactly who's doing the work, decisions move faster, and we both actually understand what's needed by the time we're done talking.",
	},
	{
		icon: Wrench,
		title: 'It starts with the problem.',
		body: "I'm drawn to things that are genuinely annoying to live with. Not everything I've built solves the problem well — a couple projects are parked right now because they didn't. But that's where I try to start: something real, something worth fixing.",
	},
	{
		icon: Moon,
		title: 'Still learning. Still building.',
		body: "I'm a developer who takes pride in the work and genuinely enjoys it. I'm also still figuring a lot of things out. What I care about most is getting better while working on things that actually matter to the people using them.",
	},
];

export function AboutSection() {
	return (
		<section
			id='about'
			className='w-full max-w-5xl mx-auto px-6 py-20 md:py-28 scroll-mt-16'
		>
			{/* Section header */}
			<div className='mb-14'>
				<p className='text-xs font-mono text-violet-400 tracking-widest uppercase mb-3'>
					§ 02 · The Practice
				</p>
				<h2 className='text-3xl md:text-4xl font-extrabold text-white tracking-tight'>
					I&rsquo;m Nova.
					<br />
					<span className='text-slate-400'>I build what I believe should exist.</span>
				</h2>
				<p className='mt-4 text-slate-400 max-w-xl text-base leading-relaxed'>
					Moon Dreams Dev is just me — a single-member LLC. I'm open to
					contract work and collaboration. If something here is useful to you
					or you want to work together, reach out.
				</p>
			</div>

			{/* Pillars grid */}
			<div className={join('grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 rounded-xl overflow-hidden')}>
				{pillars.map(({ icon: Icon, title, body }) => (
					<div
						key={title}
						className={join('bg-[#020617] p-7 flex flex-col gap-4 hover:bg-white/[0.02] transition-colors duration-200')}
					>
						<div className={join('flex items-center justify-center w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/20')}>
							<Icon className='size-5 text-violet-400' aria-hidden='true' />
						</div>
						<div>
							<h3 className='text-base font-semibold text-white mb-2'>{title}</h3>
							<p className='text-sm text-slate-400 leading-relaxed'>{body}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
