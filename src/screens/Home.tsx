import { useState } from 'react';
import { join } from '@moondreamsdev/dreamer-ui/utils';
import { HeroSection } from '@components/HeroSection';
import { SiteNav } from '@components/SiteNav';
import { MottoSection } from '@components/MottoSection';
import { AboutSection } from '@components/AboutSection';
import { RegistrySection } from '@components/RegistrySection';
import { DeveloperSection } from '@components/DeveloperSection';
import { ContactSection } from '@components/ContactSection';

function Home() {
	const [revealed, setRevealed] = useState(false);

	return (
		<div className='min-h-dvh w-full bg-[#020617] text-foreground font-[Inter,sans-serif]'>
			<HeroSection revealed={revealed} onReveal={() => setRevealed(true)} />
			<SiteNav visible={revealed} />

			{/* Main content — fades in after hero transition */}
			<main
				className={join(
					'transition-all duration-700 ease-in-out',
					revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none',
				)}
				aria-hidden={!revealed}
			>
				<MottoSection />

				<div className='max-w-5xl mx-auto px-6'>
					<div className='h-px bg-white/5' />
				</div>

				<AboutSection />

				<div className='max-w-5xl mx-auto px-6'>
					<div className='h-px bg-white/5' />
				</div>

				<RegistrySection />

				<div className='max-w-5xl mx-auto px-6'>
					<div className='h-px bg-white/5' />
				</div>

				<DeveloperSection />

				<ContactSection />
			</main>
		</div>
	);
}

export default Home;

