const footerLinks = {
  Services: ['Experiential Marketing', 'Product Launches', 'Corporate Events', 'Roadshows', 'Trade Shows', 'Digital Events'],
  Company:  ['About Us', 'Our Team', 'Case Studies', 'Awards', 'Careers', 'Press'],
  Contact:  ['hello@agency63.co.za', '+27 11 555 1234', 'Johannesburg, SA', 'Cape Town, SA'],
};

const socials = ['IG', 'FB', 'TW', 'LI', 'YT'];

export default function Footer() {
  return (
    <footer className="bg-surface-900 text-white">
      {/* Gradient top stripe */}
      <div className="h-1 w-full bg-brand-gradient" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* Brand */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-lg bg-brand-gradient flex items-center justify-center shadow-md">
                <span className="font-display font-black text-white text-lg leading-none">63</span>
              </div>
              <div className="leading-none">
                <span className="font-display font-black text-xl tracking-widest text-white">AGENCY</span>
                <span className="font-display font-black text-xl tracking-widest text-gradient">63</span>
                <p className="text-[9px] tracking-[0.3em] text-surface-500 uppercase font-medium -mt-0.5">The Agency</p>
              </div>
            </div>
            <p className="text-surface-500 text-sm leading-relaxed mb-6">
              Africa's leading below-the-line and experiential marketing agency. Building brand moments that move people since 2009.
            </p>
            <div className="flex gap-2">
              {socials.map((label) => (
                <a
                  key={label}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-surface-800 flex items-center justify-center text-surface-400 hover:bg-brand-gradient hover:text-white transition-all duration-200 text-xs font-bold"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">{heading}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-surface-500 text-sm hover:text-gradient transition-all">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-surface-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-surface-600 text-xs">
            © {new Date().getFullYear()} Agency 63. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a key={item} href="#" className="text-surface-600 text-xs hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
