import { Users, Wrench, Moon } from 'lucide-react';
import { FOUNDER_NAME } from '@lib/app';

const pillars = [
	{
		icon: Users,
		title: 'Direct Access',
		body: `No project managers. No hand-offs. When you work with Moon Dreams Dev, you work directly with ${FOUNDER_NAME}—the architect behind every line of code. Communication is faster, context is never lost, and the work stays coherent from brief to deployment.`,
	},
	{
		icon: Wrench,
		title: 'Utility-First',
		body: 'Software built to solve specific frictions—not to check a feature box. Every project begins with a problem worth solving. The result is lean, purposeful code that earns its place in production.',
	},
	{
		icon: Moon,
		title: 'The Moon Philosophy',
		body: "The moon doesn't pause for clouds. Quality and creative output operate on a persistent, 24/7 cycle. Persistent visibility in the dark—that's the standard every piece of work is held to.",
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
					Single-Member.
					<br />
					<span className='text-slate-400'>Full Ownership.</span>
				</h2>
				<p className='mt-4 text-slate-400 max-w-xl text-base leading-relaxed'>
					Moon Dreams Dev is an independent software practice. Right now the work
					is driven by curiosity—building what should exist, pursuing what
					matters, and staying open to collaboration and contract work.
				</p>
			</div>

			{/* Pillars grid */}
			<div className='grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 rounded-xl overflow-hidden'>
				{pillars.map(({ icon: Icon, title, body }) => (
					<div
						key={title}
						className='bg-[#020617] p-7 flex flex-col gap-4 hover:bg-white/[0.02] transition-colors duration-200'
					>
						<div className='flex items-center justify-center w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/20'>
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
