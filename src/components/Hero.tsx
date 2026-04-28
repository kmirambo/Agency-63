import { ArrowRight, Play } from 'lucide-react';

const stats = [
  { value: '200+', label: 'Projects Delivered' },
  { value: '50+',  label: 'Brand Partners'     },
  { value: '2M+',  label: 'Audience Reached'   },
  { value: '12',   label: 'Industry Awards'     },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center hero-bg overflow-hidden pt-24">

      {/* Soft gradient orbs */}
      <div className="absolute top-1/4 right-10 w-[480px] h-[480px] rounded-full bg-gradient-to-br from-[#2DE2C8]/12 to-[#7B5CF6]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-72 h-72 rounded-full bg-[#5BA8EE]/8 blur-3xl pointer-events-none" />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#0D1126 1px, transparent 1px), linear-gradient(90deg, #0D1126 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="max-w-3xl">

          {/* Eyebrow pill */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-surface-300 bg-white/60 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-brand-gradient" style={{background:'linear-gradient(115deg,#2DE2C8,#7B5CF6)'}} />
            <p className="text-surface-600 text-xs font-semibold tracking-[0.15em] uppercase">
              Africa's Leading BTL Marketing Agency
            </p>
          </div>

          {/* Headline */}
          <h1 className="font-display font-black text-6xl md:text-7xl lg:text-8xl leading-[0.92] text-surface-900 mb-8">
            We Create{' '}
            <span className="text-gradient italic">Moments</span>{' '}
            That
            <br />
            Move People.
          </h1>

          {/* Sub */}
          <p className="text-surface-600 text-lg leading-relaxed max-w-xl mb-10">
            Africa's leading below-the-line and experiential marketing agency. From product launches to roadshows — we build brand experiences and marketing asset forges.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-20">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-brand-gradient text-white font-bold px-7 py-3.5 rounded-lg shadow-lg hover:opacity-90 hover:shadow-xl transition-all duration-200"
            >
              Start Your Project
              <ArrowRight size={16} />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 text-surface-600 hover:text-surface-900 font-medium transition-colors"
            >
              <span className="w-10 h-10 rounded-full border border-surface-300 bg-white flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                <Play size={13} fill="currentColor" className="text-surface-700 ml-0.5" />
              </span>
              View Our Work
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-surface-300">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display font-black text-4xl text-gradient leading-none mb-1">
                  {stat.value}
                </p>
                <p className="text-surface-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-surface-100 to-transparent pointer-events-none" />
    </section>
  );
}
