import { CheckCircle } from 'lucide-react';

const pillars = [
  { title: 'Strategy First',      desc: 'Every campaign starts with sharp strategic thinking before a single creative asset is made.' },
  { title: 'Flawless Execution',  desc: 'We obsess over details — from 500-person events to 500,000-person roadshows.' },
  { title: 'Measured Results',    desc: 'ROI-driven activations backed by post-event analytics and brand lift tracking.' },
  { title: 'Proven Results',      desc: 'Over 200 successful campaigns across Africa with measurable brand impact at every step.' },
];

const images = [
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&q=80',
  'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&q=80',
  'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&q=80',
  'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=500&q=80',
];

export default function About() {
  return (
    <section id="about" className="bg-white py-28 section-divider overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Image collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-3">
              {images.map((src, i) => (
                <div key={i} className={`overflow-hidden rounded-2xl shadow-md ${i === 0 ? 'col-span-2' : ''}`}>
                  <img
                    src={src}
                    alt=""
                    className={`w-full object-cover ${i === 0 ? 'h-52' : 'h-40'} hover:scale-105 transition-transform duration-500`}
                  />
                </div>
              ))}
            </div>

            {/* Floating gradient stat card */}
            <div className="absolute -bottom-5 -right-5 bg-brand-gradient text-white p-6 rounded-2xl shadow-2xl">
              <p className="font-display font-black text-4xl leading-none">15+</p>
              <p className="text-white/80 text-xs font-medium mt-1 tracking-wide">Years of Experience</p>
            </div>

            {/* Decorative ring */}
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full border-2 border-[#2DE2C8]/20 pointer-events-none" />
          </div>

          {/* Content */}
          <div>
            <p className="text-xs font-bold tracking-[0.25em] uppercase mb-4 text-gradient inline-block">
              WHO WE ARE
            </p>
            <h2 className="font-display font-black text-5xl md:text-6xl text-surface-900 leading-tight mb-6">
              Brands Live in{' '}
              <span className="text-gradient italic">Moments.</span>
              <br />
              Not Messages.
            </h2>
            <p className="text-surface-500 leading-relaxed mb-4">
              Founded in Johannesburg, Agency 63 has grown to become Africa's most trusted experiential marketing agency. We partner with challenger brands and global giants alike — from FMCGs and automotive to financial services and tech.
            </p>
            <p className="text-surface-500 leading-relaxed mb-10">
              We believe the most powerful brand communication happens face-to-face, in the real world, at precisely the right moment.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {pillars.map((p) => (
                <div key={p.title} className="flex gap-3 p-4 rounded-xl bg-surface-100 border border-surface-200">
                  <CheckCircle size={18} className="text-[#2DE2C8] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-surface-900 font-semibold text-sm mb-1">{p.title}</p>
                    <p className="text-surface-500 text-xs leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
