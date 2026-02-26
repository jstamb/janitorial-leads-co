import { Sparkles, Mail, Phone, Shield } from "lucide-react";

const footerLinks = {
  services: [
    { href: "#how-it-works", label: "How It Works" },
    { href: "#targets", label: "Who We Target" },
    { href: "#pricing", label: "Pricing" },
  ],
  company: [
    { href: "#the-math", label: "ROI Calculator" },
    { href: "#results", label: "Case Study" },
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
                <span className="text-xs text-slate-400 -mt-0.5">Appointment Engine</span>
              </div>
            </a>
            <p className="text-slate-400 text-sm mb-4">
              A done-for-you appointment engine for commercial cleaning companies. 
              We book your sales meetings — you close the deals.
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
            <h4 className="font-semibold text-white mb-4">The Service</h4>
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

          {/* Guarantee */}
          <div>
            <h4 className="font-semibold text-white mb-4">Our Guarantee</h4>
            <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <p className="text-green-300 text-sm">
                  5 qualified appointments in 60 days or we work free until we deliver.
                </p>
              </div>
            </div>
            <p className="text-slate-500 text-xs mt-4">
              $4,500/month + $2,500 setup
            </p>
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
