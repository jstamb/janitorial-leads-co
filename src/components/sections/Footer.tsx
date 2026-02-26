import { Sparkles, Mail, Phone } from "lucide-react";

const footerLinks = {
  services: [
    { href: "#services", label: "Lead Generation" },
    { href: "#services", label: "Website Design" },
    { href: "#services", label: "Local SEO" },
    { href: "#services", label: "Google Ads" },
    { href: "#services", label: "Reputation Management" },
  ],
  company: [
    { href: "#pain-points", label: "Why Choose Us" },
    { href: "#results", label: "Case Studies" },
    { href: "#contact", label: "Contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white text-lg leading-tight">Janitorial Leads</span>
                <span className="text-xs text-slate-400 -mt-0.5">Growth Marketing</span>
              </div>
            </a>
            <p className="text-slate-400 text-sm mb-4">
              Marketing exclusively for commercial cleaning companies. 
              Stop competing on price — start winning contracts.
            </p>
            <div className="flex flex-col gap-2 text-sm text-slate-400">
              <a href="mailto:hello@janitorialleads.co" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4" /> hello@janitorialleads.co
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4" /> (123) 456-7890
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-white mb-4">Stay Updated</h4>
            <p className="text-slate-400 text-sm mb-4">
              Get cleaning industry marketing tips delivered weekly.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-secondary text-sm"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-secondary hover:bg-secondary-dark rounded-lg text-white font-medium text-sm transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Janitorial Leads Co. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
