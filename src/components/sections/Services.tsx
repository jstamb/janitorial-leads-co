"use client";

import { 
  Target, 
  Globe, 
  Search, 
  Megaphone, 
  Star,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Lead Generation",
    description: "Get a steady stream of qualified commercial cleaning leads delivered to your inbox. Property managers, facility directors, and decision-makers actively looking for cleaning services.",
    features: [
      "Exclusive leads (not shared with competitors)",
      "Decision-maker contact info",
      "Lead scoring & qualification",
      "CRM integration",
    ],
    highlight: "Most Popular",
  },
  {
    icon: Globe,
    title: "Website Design",
    description: "A professional website that converts visitors into leads. Built specifically for commercial cleaning companies with trust signals, case studies, and clear calls to action.",
    features: [
      "Mobile-responsive design",
      "Quote request forms",
      "Live chat integration",
      "Speed optimized",
    ],
  },
  {
    icon: Search,
    title: "Local SEO",
    description: "Dominate Google when facility managers search for cleaning services in your area. We optimize your Google Business Profile and build local authority.",
    features: [
      "Google Business optimization",
      "Local keyword ranking",
      "Review generation strategy",
      "Local citations & NAP",
    ],
  },
  {
    icon: Megaphone,
    title: "Google Ads",
    description: "Get in front of high-intent buyers right when they're searching. Our PPC campaigns are optimized specifically for commercial cleaning ROI.",
    features: [
      "Keyword research & targeting",
      "Ad copy that converts",
      "Landing page optimization",
      "Conversion tracking",
    ],
  },
  {
    icon: Star,
    title: "Reputation Management",
    description: "Build and protect your online reputation. We help you collect more 5-star reviews and respond professionally to showcase your quality.",
    features: [
      "Automated review requests",
      "Review response templates",
      "Reputation monitoring",
      "Testimonial collection",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Everything You Need to{" "}
            <span className="text-primary">Grow Predictably</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            No generic marketing playbooks. Every strategy is built specifically 
            for commercial cleaning companies.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 group"
            >
              {/* Highlight Badge */}
              {service.highlight && (
                <div className="absolute -top-3 right-6 px-3 py-1 bg-secondary text-white text-xs font-semibold rounded-full">
                  {service.highlight}
                </div>
              )}

              {/* Icon */}
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 mb-4">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-primary font-medium hover:gap-2 transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-6">
            Not sure where to start? We&apos;ll audit your current marketing and create a custom plan.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg shadow-primary/20"
          >
            Get Your Free Marketing Audit
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
