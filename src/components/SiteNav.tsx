import { join } from '@moondreamsdev/dreamer-ui/utils';

const navLinks = [
	{ href: '#about', label: 'About' },
	{ href: '#registry', label: 'Registry' },
	{ href: '#contact', label: 'Contact' },
];

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
			<div className='max-w-5xl mx-auto px-6 h-12 flex items-center justify-end gap-6'>
				{navLinks.map(({ href, label }) => (
					<a
						key={href}
						href={href}
						className='text-xs font-mono text-slate-500 hover:text-violet-400 transition-colors duration-150 tracking-widest uppercase'
					>
						{label}
					</a>
				))}
			</div>
		</nav>
	);
}
