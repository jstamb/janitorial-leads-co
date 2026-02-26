"use client";

import { 
  Database, 
  Mail, 
  Handshake,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Database,
    title: "We Scrape The Leads",
    description: "We build targeted lists of decision-makers at offices, warehouses, property management companies, universities, medical centers, and retail chains in your service area.",
    details: [
      "Property managers & facility directors",
      "Business owners with cleaning contracts",
      "Companies with expiring contracts",
      "New construction & move-ins",
    ],
  },
  {
    number: "02",
    icon: Mail,
    title: "We Send 3,000+ Emails Daily",
    description: "Our proven cold email sequences reach thousands of prospects every day. We handle all the outreach, responses, and qualification — you never touch your inbox.",
    details: [
      "Multi-step personalized sequences",
      "A/B tested for maximum replies",
      "Automatic follow-up campaigns",
      "Response qualification",
    ],
  },
  {
    number: "03",
    icon: Handshake,
    title: "You Show Up & Close",
    description: "We book qualified appointments directly on your calendar. You show up to meetings with decision-makers who already need cleaning services — then close the deal.",
    details: [
      "Pre-qualified prospects",
      "Calendar scheduling handled",
      "Meeting prep provided",
      "You just close",
    ],
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Your Appointment Engine in{" "}
            <span className="text-primary">3 Simple Steps</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We handle everything — lead scraping, cold outreach, follow-ups, and booking. 
            You just show up to meetings and close.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-primary/30 transition-all duration-300 group"
            >
              {/* Connector Line (hidden on mobile, last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-slate-200 z-10" />
              )}

              {/* Step Number */}
              <div className="text-6xl font-bold text-slate-100 group-hover:text-primary/10 absolute top-4 right-4 transition-colors">
                {step.number}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 bg-primary/10 group-hover:bg-primary rounded-xl flex items-center justify-center mb-6 transition-all duration-300">
                <step.icon className="w-8 h-8 text-primary group-hover:text-white" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 mb-6">
                {step.description}
              </p>

              {/* Details */}
              <ul className="space-y-2">
                {step.details.map((detail) => (
                  <li key={detail} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg shadow-primary/20"
          >
            Start Getting Appointments
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
