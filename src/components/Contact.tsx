import { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

type FormState = {
  name: string; email: string; company: string; service: string; message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', company: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  const inputClass = 'w-full bg-surface-100 border border-surface-200 rounded-xl text-surface-900 text-sm px-4 py-3 focus:outline-none focus:border-[#2DE2C8] focus:ring-2 focus:ring-[#2DE2C8]/10 transition-all placeholder:text-surface-400';

  return (
    <section id="contact" className="bg-surface-100 py-28 section-divider">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left */}
          <div>
            <p className="text-xs font-bold tracking-[0.25em] uppercase mb-4 text-gradient inline-block">
              GET IN TOUCH
            </p>
            <h2 className="font-display font-black text-5xl md:text-6xl text-surface-900 leading-tight mb-6">
              Let's Build Something{' '}
              <span className="text-gradient">Remarkable.</span>
            </h2>
            <p className="text-surface-500 text-sm leading-relaxed mb-10">
              We'd love to hear about your next project. Tell us what you're working on and one of our strategists will be in touch within 24 hours.
            </p>

            {/* Contact details */}
            <div className="space-y-4">
              {[
                { icon: Mail,   label: 'Email Us',   value: 'hello@agency63.co.za',              href: 'mailto:hello@agency63.co.za' },
                { icon: Phone,  label: 'Call Us',    value: '+27 11 555 1234',                   href: 'tel:+27115551234' },
                { icon: MapPin, label: 'Visit Us',   value: '4 Eton Road, Parktown, Johannesburg', href: '#' },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-surface-200 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-brand-gradient flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="text-surface-400 text-xs mb-0.5">{label}</p>
                    <a href={href} className="text-surface-800 text-sm font-medium hover:text-gradient transition-all">{value}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-white rounded-3xl p-8 border border-surface-200 shadow-lg">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-16 h-16 rounded-2xl bg-brand-gradient flex items-center justify-center mb-6 shadow-lg">
                  <ArrowRight size={26} className="text-white" />
                </div>
                <h3 className="font-display font-bold text-2xl text-surface-900 mb-3">Message Received!</h3>
                <p className="text-surface-500 text-sm">We'll be in touch within 24 hours. Great things are coming!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-surface-600 text-xs font-medium mb-1.5 block">Full Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} required placeholder="Jane Smith" className={inputClass} />
                  </div>
                  <div>
                    <label className="text-surface-600 text-xs font-medium mb-1.5 block">Email *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="jane@company.com" className={inputClass} />
                  </div>
                </div>
                <div>
                  <label className="text-surface-600 text-xs font-medium mb-1.5 block">Company</label>
                  <input name="company" value={form.company} onChange={handleChange} placeholder="Your Company Name" className={inputClass} />
                </div>
                <div>
                  <label className="text-surface-600 text-xs font-medium mb-1.5 block">Service Required</label>
                  <select name="service" value={form.service} onChange={handleChange} className={inputClass}>
                    <option value="">Select a Service</option>
                    <option>Experiential Marketing</option>
                    <option>Product Launch</option>
                    <option>Corporate Event</option>
                    <option>Roadshow / Tour</option>
                    <option>Trade Show / Exhibition</option>
                    <option>Digital / Hybrid Event</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-surface-600 text-xs font-medium mb-1.5 block">Project Brief *</label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange} required rows={5}
                    placeholder="Tell us about your project, goals, timeline and budget..."
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-brand-gradient text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 hover:shadow-xl transition-all duration-200 shadow-md"
                >
                  Send Brief
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
