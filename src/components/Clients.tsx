const clients = [
  'CocaCola', 'Samsung', 'Unilever', 'Toyota', 'Absa', 'MTN',
  'Heineken', 'Nestlé', 'Standard Bank', 'Vodacom', 'Tiger Brands', 'Distell',
];

export default function Clients() {
  return (
    <section className="bg-surface-100 py-12 border-t border-b border-surface-200 overflow-hidden">
      <p className="text-center text-surface-400 text-[10px] font-bold tracking-[0.3em] uppercase mb-7">
        Trusted by Africa's leading brands
      </p>
      <div className="relative">
        <div className="flex gap-14 animate-marquee whitespace-nowrap">
          {[...clients, ...clients].map((name, i) => (
            <span
              key={i}
              className="font-display font-black text-2xl text-surface-300 hover:text-gradient transition-all cursor-default flex-shrink-0"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
