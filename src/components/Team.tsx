import { ExternalLink } from 'lucide-react';

const team = [
  {
    name: 'Ntlhafi Khumalo',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    bio: 'Visionary leader with 15+ years crafting brand experiences across Africa.',
    color: '#2DE2C8',
  },
  {
    name: 'Simran Goel',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    bio: 'Award-winning creative mind behind our most iconic campaign concepts.',
    color: '#5BA8EE',
  },
  {
    name: 'Priya Naithun',
    role: 'Head of Strategy',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    bio: 'Data-driven strategist who ensures every campaign delivers measurable ROI.',
    color: '#7B5CF6',
  },
  {
    name: 'Theodor Abundi',
    role: 'Operations Director',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    bio: 'The logistical genius behind flawless execution of our large-scale activations.',
    color: '#2DE2C8',
  },
];

export default function Team() {
  return (
    <section id="team" className="bg-surface-100 py-28 section-divider">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-[0.25em] uppercase mb-4 text-gradient inline-block">
            THE TEAM
          </p>
          <h2 className="font-display font-black text-5xl md:text-6xl text-surface-900 mb-4">
            The People Behind the Magic
          </h2>
          <p className="text-surface-500 max-w-lg mx-auto text-sm leading-relaxed">
            A diverse team of strategists, creatives, and producers who live and breathe brand experiences every single day.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div key={member.name} className="group bg-white rounded-2xl border border-surface-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

              {/* Gradient top accent */}
              <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${member.color}, #7B5CF6)` }} />

              {/* Photo */}
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />

                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-brand-gradient flex items-center justify-center shadow-lg"
                  >
                    <ExternalLink size={12} className="text-white" />
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-display font-bold text-lg text-surface-900 group-hover:text-gradient transition-all">
                  {member.name}
                </h3>
                <p className="text-xs font-bold tracking-wide uppercase mb-2" style={{ color: member.color }}>
                  {member.role}
                </p>
                <p className="text-surface-500 text-xs leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
