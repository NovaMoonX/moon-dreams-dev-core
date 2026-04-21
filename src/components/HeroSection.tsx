import { useEffect, useState } from 'react';
import { Moon, ChevronDown } from 'lucide-react';
import { join } from '@moondreamsdev/dreamer-ui/utils';
import { APP_TITLE, APP_DESCRIPTION, APP_MOTTO } from '@lib/app';

interface HeroSectionProps {
	revealed: boolean;
	onReveal: () => void;
}

export function HeroSection({ revealed, onReveal }: HeroSectionProps) {
	const [mottoVisible, setMottoVisible] = useState(false);
	const [ctaVisible, setCtaVisible] = useState(false);

	useEffect(() => {
		const fadeInMotto = setTimeout(() => setMottoVisible(true), 400);
		const showCta = setTimeout(() => setCtaVisible(true), 2000);
		const triggerReveal = setTimeout(() => onReveal(), 3200);

		return () => {
			clearTimeout(fadeInMotto);
			clearTimeout(showCta);
			clearTimeout(triggerReveal);
		};
	}, [onReveal]);

	return (
		<header
			className={join(
				'relative w-full overflow-hidden flex items-center justify-center transition-all duration-700 ease-in-out border-b border-white/5',
				revealed ? 'h-16' : 'h-dvh',
			)}
		>
			{/* Ambient glow background */}
			<div className='absolute inset-0 bg-[#020617]'>
				<div className='absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(139,92,246,0.12),transparent)]' />
			</div>

			{/* Intro — full-screen motto (hidden after reveal) */}
			<div
				className={join(
					'relative z-10 flex flex-col items-center text-center gap-6 px-6 transition-all duration-500 ease-in-out',
					revealed
						? 'opacity-0 -translate-y-3 pointer-events-none absolute'
						: mottoVisible
							? 'opacity-100 translate-y-0'
							: 'opacity-0 translate-y-2',
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

				<div className='space-y-1'>
					<h1 className='text-4xl md:text-6xl font-extrabold tracking-tight text-white'>
						{APP_TITLE}
					</h1>
					<p className='text-sm md:text-base text-slate-500 font-mono tracking-widest uppercase'>
						{APP_DESCRIPTION}
					</p>
				</div>

				<p className='text-lg md:text-xl text-slate-300 italic font-light max-w-md'>
					&ldquo;{APP_MOTTO}&rdquo;
				</p>

				{/* Scroll CTA */}
				<div
					className={join(
						'flex flex-col items-center gap-1 text-slate-500 transition-opacity duration-700 mt-4',
						ctaVisible ? 'opacity-100' : 'opacity-0',
					)}
					aria-label='Scroll to explore'
				>
					<span className='text-xs font-mono tracking-widest uppercase'>
						Exploring
					</span>
					<ChevronDown className='size-4 animate-bounce' aria-hidden='true' />
				</div>
			</div>

			{/* Collapsed header — logo lockup (visible after reveal) */}
			<div
				className={join(
					'relative z-10 flex items-center gap-2.5 transition-all duration-500 ease-in-out',
					revealed
						? 'opacity-100 translate-y-0'
						: 'opacity-0 translate-y-1 pointer-events-none absolute',
				)}
				aria-label='Moon Dreams Dev'
			>
				<Moon className='size-5 text-violet-400' aria-hidden='true' />
				<span className='text-base font-bold text-white tracking-tight'>
					{APP_TITLE}
				</span>
				<span className='hidden sm:inline text-slate-600 text-sm font-mono'>
					/ LLC
				</span>
			</div>
		</header>
	);
}
