import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

type Category = 'All' | 'Business' | 'Product' | 'Glamour Ball' | 'Roadshow';
const categories: Category[] = ['All', 'Business', 'Product', 'Glamour Ball', 'Roadshow'];

const caseStudies = [
  {
    id: 1, title: 'Pulse Activation Tour',    category: 'Roadshow',     client: 'TeleCom Brand',      tags: ['Roadshow', 'Product', 'Activation'],
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
  },
  {
    id: 2, title: 'Flooded — Luxury Suite Launch', category: 'Business', client: 'Luxury Automotive', tags: ['Automotive', 'Launch', 'Lifestyle'],
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80',
  },
  {
    id: 3, title: 'Chrome — Annual Gala',     category: 'Glamour Ball', client: 'Fashion House',       tags: ['Glamour Ball', 'Fashion', 'Experience'],
    image: 'https://images.unsplash.com/photo-1519671282429-b44660ead0a7?w=800&q=80',
  },
  {
    id: 4, title: 'Via Gold — Tech Summit',   category: 'Business',     client: 'Tech Conglomerate',  tags: ['Conference', 'Tech', 'B2B'],
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80',
  },
  {
    id: 5, title: 'Olive Festival Pop-Up',    category: 'Product',      client: 'Food & Beverage',    tags: ['Pop-up', 'Lifestyle', 'Retail'],
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
  },
  {
    id: 6, title: 'Novo — Brand Activation',  category: 'Roadshow',     client: 'FMCG Giant',         tags: ['Roadshow', 'Consumer', 'Sampling'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
  },
];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filtered = activeCategory === 'All'
    ? caseStudies
    : caseStudies.filter((c) => c.category === activeCategory);

  return (
    <section id="work" className="bg-surface-100 py-28 section-divider">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-bold tracking-[0.25em] uppercase mb-4 text-gradient inline-block">
            OUR WORK
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-display font-black text-5xl md:text-6xl text-surface-900 leading-tight">
              Selected Case Studies
            </h2>
            {/* Filter tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-xs font-bold rounded-full transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-brand-gradient text-white shadow-md'
                      : 'bg-white border border-surface-300 text-surface-600 hover:border-surface-400 hover:text-surface-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((study) => (
            <div
              key={study.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-surface-200"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Category badge */}
                <span className="absolute top-4 left-4 text-xs font-bold bg-brand-gradient text-white px-3 py-1 rounded-full">
                  {study.category}
                </span>

                {/* Arrow */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                  <ArrowUpRight size={15} className="text-surface-800" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-surface-400 text-xs mb-1">{study.client}</p>
                <h3 className="font-display font-bold text-xl text-surface-900 mb-3 group-hover:text-gradient transition-all">
                  {study.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span key={tag} className="text-xs text-surface-500 border border-surface-200 bg-surface-100 rounded-full px-2.5 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-14">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-white border border-surface-300 text-surface-700 hover:border-transparent hover:bg-brand-gradient hover:text-white px-8 py-3 rounded-full transition-all duration-300 font-medium text-sm shadow-sm"
          >
            View All Projects
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
