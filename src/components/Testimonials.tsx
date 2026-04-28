import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Agency 63 exceeded every expectation. Our product launch was the most talked-about activation in our category — 3x the coverage we projected. The team is professional, creative, and relentless in their execution.",
    name: 'Sarah Mitchell',
    title: 'Head of Marketing, BeverageCo',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&q=80',
    rating: 5,
  },
  {
    quote: "The World Calling roadshow they executed for us reached 22 cities across 3 countries. Millions of consumer touchpoints, zero hiccups. Agency 63 is the real deal when it comes to large-scale BTL.",
    name: 'David Nkosi',
    title: 'Brand Director, TeleCom Africa',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    rating: 5,
  },
  {
    quote: "From concept to execution, they nailed it. Our annual gala had 600 guests and not a single detail was out of place. The creative direction was bold, sophisticated, and unmistakably on-brand.",
    name: 'Aisha Balogun',
    title: 'CEO, Style House Africa',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-28 section-divider">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-[0.25em] uppercase mb-4 text-gradient inline-block">
            CLIENT STORIES
          </p>
          <h2 className="font-display font-black text-5xl md:text-6xl text-surface-900">
            What Our Clients Say
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative rounded-2xl border border-surface-200 bg-white p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Gradient corner accent */}
              <div
                className="absolute top-0 right-0 w-24 h-24 opacity-5 rounded-bl-full"
                style={{ background: 'linear-gradient(135deg,#2DE2C8,#7B5CF6)' }}
              />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} fill="url(#starGrad)" className="text-[#5BA8EE]" />
                ))}
                <svg width="0" height="0">
                  <defs>
                    <linearGradient id="starGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%"   stopColor="#2DE2C8" />
                      <stop offset="100%" stopColor="#7B5CF6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Quote mark */}
              <p className="font-display font-black text-5xl text-gradient leading-none mb-3 opacity-30">"</p>

              {/* Quote */}
              <p className="text-surface-600 text-sm leading-relaxed flex-1 mb-6">
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-surface-100">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover border-2 border-surface-200" />
                <div>
                  <p className="text-surface-900 font-semibold text-sm">{t.name}</p>
                  <p className="text-surface-400 text-xs">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
