"use client";

import { 
  Building2, 
  Warehouse, 
  Home,
  GraduationCap,
  Stethoscope,
  Store,
  CheckCircle
} from "lucide-react";

const targets = [
  {
    icon: Building2,
    title: "Office Buildings",
    description: "Corporate offices, coworking spaces, and business parks",
  },
  {
    icon: Warehouse,
    title: "Warehouses & Distribution",
    description: "Logistics hubs, fulfillment centers, and industrial facilities",
  },
  {
    icon: Home,
    title: "Property Management",
    description: "Property managers, HOAs, and multi-family buildings",
  },
  {
    icon: GraduationCap,
    title: "Universities & Schools",
    description: "Colleges, K-12 schools, and educational facilities",
  },
  {
    icon: Stethoscope,
    title: "Medical Centers",
    description: "Clinics, hospitals, dental offices, and healthcare facilities",
  },
  {
    icon: Store,
    title: "Retail Chains",
    description: "Retail stores, shopping centers, and franchises",
  },
];

export function WhatWeTarget() {
  return (
    <section id="targets" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Your Target Market
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Who We Book Appointments With{" "}
            <span className="text-primary">For You</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We focus on decision-makers at high-value commercial accounts — the ones 
            that sign contracts worth $20K-$100K+ per year.
          </p>
        </div>

        {/* Targets Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {targets.map((target) => (
            <div
              key={target.title}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary/10 group-hover:bg-primary rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300">
                  <target.icon className="w-7 h-7 text-primary group-hover:text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    {target.title}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {target.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* What We Find */}
        <div className="mt-16 bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                We Find The Perfect Prospects
              </h3>
              <p className="text-slate-600 mb-6">
                Our lead scraping targets decision-makers who are actively looking 
                for new cleaning services or have contracts coming up for renewal.
              </p>
              <ul className="space-y-3">
                {[
                  "Decision-makers with buying authority",
                  "Companies with current cleaning contracts",
                  "Facilities expanding or moving",
                  "Properties with poor current service",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">3,000+</div>
                <div className="text-slate-600 mb-4">Emails Sent Daily</div>
                <div className="border-t border-slate-100 pt-4">
                  <div className="text-3xl font-bold text-secondary mb-2">8-15</div>
                  <div className="text-slate-600">Qualified Appointments/Month</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
