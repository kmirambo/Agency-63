import { Zap, Rocket, Calendar, Users, Globe, Tv } from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: 'Experiential Marketing',
    desc: 'We create immersive brand experiences that connect consumers with your brand on a deep emotional level, leaving lasting impressions.',
    tags: ['Brand Activations', 'Pop-Up Events', 'Live Experiences'],
  },
  {
    icon: Rocket,
    title: 'Product Launches',
    desc: 'Unforgettable launch events that generate buzz. We craft the atmosphere, audience, and activation to make your product the talk of the market.',
    tags: ['Launch Events', 'PR Stunts', 'Media Coverage'],
  },
  {
    icon: Calendar,
    title: 'Corporate Events',
    desc: 'From intimate boardroom summits to large-scale conferences, we deliver seamless corporate events that reflect your brand.',
    tags: ['Conferences', 'AGMs', 'Team Building'],
  },
  {
    icon: Users,
    title: 'Roadshows & Tours',
    desc: 'We take your brand on the road — strategic multi-city roadshows that amplify reach and build real community connections.',
    tags: ['Multi-City', 'Consumer Tours', 'School Tours'],
  },
  {
    icon: Globe,
    title: 'Trade Shows & Exhibitions',
    desc: 'Award-winning exhibition stands and trade show presences that make customers come to you.',
    tags: ['Stand Design', 'Expos', 'B2B Exhibitions'],
  },
  {
    icon: Tv,
    title: 'Digital & Hybrid Events',
    desc: 'Blending physical and digital seamlessly — we produce hybrid events that engage live and virtual audiences simultaneously.',
    tags: ['Livestreaming', 'Virtual Events', 'Social Amplification'],
  },
];

// Subtle gradient per card position, cycling through logo gradient stops
const gradientAccents = [
  'from-[#2DE2C8]/10 to-[#5BA8EE]/5',
  'from-[#5BA8EE]/10 to-[#7B5CF6]/5',
  'from-[#7B5CF6]/10 to-[#2DE2C8]/5',
  'from-[#2DE2C8]/10 to-[#5BA8EE]/5',
  'from-[#5BA8EE]/10 to-[#7B5CF6]/5',
  'from-[#7B5CF6]/10 to-[#2DE2C8]/5',
];

const iconColors = [
  '#2DE2C8',
  '#5BA8EE',
  '#7B5CF6',
  '#2DE2C8',
  '#5BA8EE',
  '#7B5CF6',
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-28 section-divider">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-bold tracking-[0.25em] uppercase mb-4 text-gradient inline-block">
            WHAT WE DO
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-display font-black text-5xl md:text-6xl text-surface-900 leading-tight">
              Full-Spectrum BTL Services
            </h2>
            <p className="text-surface-500 text-sm max-w-sm leading-relaxed">
              From strategic concepting to flawless execution, we handle every dimension of your below-the-line campaign with precision and creativity.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.title}
                className={`group relative rounded-2xl bg-gradient-to-br ${gradientAccents[i]} border border-surface-200 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
              >
                {/* Decorative circle */}
                <div
                  className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-10 blur-xl"
                  style={{ background: iconColors[i] }}
                />

                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: `${iconColors[i]}18` }}
                >
                  <Icon size={20} style={{ color: iconColors[i] }} />
                </div>

                <h3 className="font-display font-bold text-xl text-surface-900 mb-3 group-hover:text-gradient transition-all">
                  {svc.title}
                </h3>
                <p className="text-surface-500 text-sm leading-relaxed mb-5">{svc.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {svc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-surface-600 bg-white border border-surface-200 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
