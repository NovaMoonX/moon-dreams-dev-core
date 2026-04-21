import { join } from '@moondreamsdev/dreamer-ui/utils';
import { APP_MOTTO } from '@lib/app';

export function MottoSection() {
	return (
		<section
			id='motto'
			className={join('w-full max-w-5xl mx-auto px-6 py-16 md:py-20 scroll-mt-16')}
		>
			<div className={join('max-w-2xl')}>
				<p className={join('text-xs font-mono text-violet-400 tracking-widest uppercase mb-4')}>
					§ 01 · The Name
				</p>
				<blockquote className={join('text-2xl md:text-3xl font-light text-white italic leading-snug mb-6')}>
					&ldquo;{APP_MOTTO}&rdquo;
				</blockquote>
				<p className={join('text-slate-400 text-base leading-relaxed')}>
					Some ideas don&rsquo;t go quiet. They come back after long days,
					in the margins of other work, while you&rsquo;re doing something
					completely unrelated. Most of what&rsquo;s in here started as that
					kind of thought — something I couldn&rsquo;t stop turning over until
					I built it. Not all of it worked out the way I hoped. But the ones
					that kept coming back are all somewhere on this page.
				</p>
			</div>
		</section>
	);
}
