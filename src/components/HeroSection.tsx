import { useEffect, useState } from 'react';
import { Moon, ChevronDown } from 'lucide-react';
import { join } from '@moondreamsdev/dreamer-ui/utils';
import { APP_TITLE, APP_DESCRIPTION, APP_MOTTO, NAV_LINKS } from '@lib/app';

interface HeroSectionProps {
	revealed: boolean;
	onReveal: () => void;
}

export function HeroSection({ revealed, onReveal }: HeroSectionProps) {
	const [mottoVisible, setMottoVisible] = useState(false);
	const [ctaVisible, setCtaVisible] = useState(false);
	const [shimmer, setShimmer] = useState(false);

	useEffect(() => {
		const fadeInMotto   = setTimeout(() => setMottoVisible(true), 400);
		const showCta       = setTimeout(() => setCtaVisible(true), 2800);
		const startShimmer  = setTimeout(() => setShimmer(true), 4800);
		const triggerReveal = setTimeout(() => onReveal(), 6200);

		return () => {
			clearTimeout(fadeInMotto);
			clearTimeout(showCta);
			clearTimeout(startShimmer);
			clearTimeout(triggerReveal);
		};
	}, [onReveal]);

	return (
		<header
			className={join(
				'sticky top-0 z-50 relative w-full overflow-hidden border-b border-white/5 transition-all duration-700 ease-in-out',
				revealed ? 'h-16' : 'h-dvh',
			)}
		>
			{/* Ambient glow background */}
			<div className='absolute inset-0 bg-[#020617]'>
				<div className='absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(139,92,246,0.12),transparent)]' />
			</div>

			{/* Intro — absolutely fills the header, centered in viewport; fades out on reveal */}
			<div
				className={join(
					'absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 px-6 transition-opacity duration-500 ease-in-out',
					revealed
						? 'opacity-0 pointer-events-none'
						: mottoVisible
							? 'opacity-100'
							: 'opacity-0',
				)}
				aria-hidden={revealed}
			>
				{/* Crescent moon mark */}
				<div className='relative'>
					<Moon
						className='size-14 text-violet-400 stroke-[1.25]'
						aria-hidden='true'
					/>
					<div className='absolute inset-0 blur-2xl bg-violet-500/20 rounded-full scale-150' />
				</div>

				<div className='space-y-2 text-center'>
					<h1 className='text-4xl md:text-6xl font-extrabold tracking-tight text-white text-center'>
						{APP_TITLE}
					</h1>
					<p className='text-sm md:text-base text-slate-500 font-mono tracking-widest uppercase text-center'>
						{APP_DESCRIPTION}
					</p>
				</div>

				{/* Motto — no transition-colors so shimmer can animate cleanly */}
				<p className={join(
					'text-lg md:text-xl italic font-light max-w-md text-center',
					shimmer ? 'motto-shimmer' : 'text-slate-300',
				)}>
					&ldquo;{APP_MOTTO}&rdquo;
				</p>

				{/* Scroll CTA */}
				<div
					className={join(
						'flex flex-col items-center gap-1 text-slate-500 transition-opacity duration-700',
						ctaVisible ? 'opacity-100' : 'opacity-0',
					)}
					aria-label='Content loading'
				>
					<span className='text-xs font-mono tracking-widest uppercase'>
						Exploring
					</span>
					<ChevronDown className='size-4 animate-bounce' aria-hidden='true' />
				</div>
			</div>

			{/* Collapsed header — absolutely fills the h-16 bar; logo left, nav right */}
			<div
				className={join(
					'absolute inset-0 z-10 flex items-center justify-center transition-opacity duration-500 ease-in-out',
					revealed
						? 'opacity-100'
						: 'opacity-0 pointer-events-none',
				)}
			>
				<div className='w-full max-w-5xl mx-auto px-6 flex flex-col items-center sm:flex-row sm:justify-between gap-y-1 gap-x-4 flex-wrap'>
					{/* Logo */}
					<div className='flex items-center gap-2.5 shrink-0'>
						<Moon className='size-5 text-violet-400' aria-hidden='true' />
						<span className='text-base font-bold text-white tracking-tight'>
							{APP_TITLE}
						</span>
						<span className='hidden sm:inline text-slate-600 text-sm font-mono'>
							/ LLC
						</span>
					</div>

					{/* Nav links */}
					<nav className='flex items-center flex-wrap justify-center gap-x-6 gap-y-1' aria-label='Site sections'>
						{NAV_LINKS.map(({ href, label }) => (
							<a
								key={href}
								href={href}
								className='text-xs font-mono text-slate-500 hover:text-violet-400 transition-colors duration-150 tracking-widest uppercase'
							>
								{label}
							</a>
						))}
					</nav>
				</div>
			</div>
		</header>
	);
}
