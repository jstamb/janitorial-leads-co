"use client";

import { CheckCircle, ArrowRight, Shield, Zap } from "lucide-react";

const included = [
  "Lead scraping in your service area",
  "3,000+ cold emails sent daily",
  "Multi-step email sequences",
  "Reply qualification & handling",
  "Appointment booking on your calendar",
  "Weekly reporting & analytics",
  "Dedicated account manager",
  "CRM integration (optional)",
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Simple Pricing
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            One Plan.{" "}
            <span className="text-primary">All Inclusive.</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            No tiers, no upsells, no hidden fees. Just a done-for-you appointment engine 
            that fills your calendar with qualified meetings.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          {/* Pricing Card */}
          <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 md:p-10 border-2 border-primary shadow-xl shadow-primary/10 relative">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="bg-secondary text-white text-sm font-semibold px-4 py-1 rounded-full flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Most Popular
              </div>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Appointment Engine
              </h3>
              <p className="text-slate-600 mb-6">
                Everything you need to fill your calendar
              </p>
              
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-5xl font-bold text-primary">$4,500</span>
                <span className="text-slate-600">/month</span>
              </div>
              <p className="text-sm text-slate-500">
                + $2,500 one-time setup fee
              </p>
            </div>

            {/* What's Included */}
            <div className="mb-8">
              <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-4">
                Everything Included:
              </h4>
              <ul className="space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary-light text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg shadow-primary/20 group"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Guarantee */}
          <div className="mt-8 bg-green-50 rounded-2xl p-6 border border-green-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">
                  Our Guarantee
                </h4>
                <p className="text-slate-700">
                  <span className="font-semibold text-green-700">5 qualified appointments in 60 days</span> or 
                  we work for free until we deliver. No questions asked.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
