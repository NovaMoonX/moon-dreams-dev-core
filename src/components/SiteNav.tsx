import { join } from '@moondreamsdev/dreamer-ui/utils';
import { Moon } from 'lucide-react';
import { APP_TITLE, NAV_LINKS } from '@lib/app';

interface SiteNavProps {
	visible: boolean;
}

export function SiteNav({ visible }: SiteNavProps) {
	return (
		<nav
			className={join(
				'sticky top-0 z-40 w-full border-b border-white/5 bg-[#020617]/90 backdrop-blur-md transition-all duration-500',
				visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none',
			)}
			aria-label='Primary navigation'
		>
			<div className={join(
				'max-w-5xl mx-auto px-6 py-2.5 flex flex-col items-center sm:flex-row sm:justify-between gap-y-1 gap-x-6',
			)}>
				{/* Company name — left on wide, centered on narrow */}
				<div className='flex items-center gap-2 shrink-0'>
					<Moon className='size-4 text-violet-400' aria-hidden='true' />
					<span className='text-sm font-bold text-white tracking-tight'>
						{APP_TITLE}
					</span>
				</div>

				{/* Nav links — right on wide, centered below on narrow */}
				<div className='flex items-center flex-wrap justify-center gap-x-6 gap-y-1'>
					{NAV_LINKS.map(({ href, label }) => (
						<a
							key={href}
							href={href}
							className='text-xs font-mono text-slate-500 hover:text-violet-400 transition-colors duration-150 tracking-widest uppercase'
						>
							{label}
						</a>
					))}
				</div>
			</div>
		</nav>
	);
}
