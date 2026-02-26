"use client";

import { Quote, Calendar, DollarSign, Users, ArrowRight } from "lucide-react";

const results = [
  { label: "New Contracts", value: "11", icon: Calendar },
  { label: "New ARR Added", value: "$347K", icon: DollarSign },
  { label: "Time to Results", value: "90 Days", icon: Users },
];

export function CaseStudy() {
  return (
    <section id="results" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Case Study
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Real Results:{" "}
            <span className="text-primary">$347K ARR in 90 Days</span>
          </h2>
        </div>

        {/* Case Study Card */}
        <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left - Story */}
            <div className="relative bg-gradient-to-br from-primary to-primary-dark p-10 lg:p-12 flex flex-col justify-center min-h-[450px]">
              {/* Decorative Elements */}
              <div className="absolute top-10 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
              <div className="absolute bottom-10 left-10 w-24 h-24 bg-accent/20 rounded-full blur-xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">MK</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Mike&apos;s Commercial Cleaning</h3>
                    <p className="text-white/70">22-Person Crew • Phoenix, AZ</p>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <Quote className="w-8 h-8 text-secondary mb-4" />
                  <blockquote className="text-white text-lg leading-relaxed mb-4">
                    &ldquo;We went from constantly chasing referrals to having meetings booked on my calendar every week. 
                    In 90 days, we signed 11 new contracts worth $347K in annual revenue. 
                    The ROI is insane — one contract pays for a full year of this service.&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">MK</span>
                    </div>
                    <div>
                      <div className="text-white font-medium">Mike K.</div>
                      <div className="text-white/60 text-sm">Owner</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Results */}
            <div className="p-10 lg:p-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                The Challenge
              </h3>
              <p className="text-slate-600 mb-6">
                Mike had grown his Phoenix cleaning company to a 22-person crew, but was stuck. 
                100% of new business came from referrals. He had no predictable way to get 
                in front of property managers and facility directors who needed cleaning services.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Our Solution
              </h3>
              <p className="text-slate-600 mb-8">
                We built Mike a done-for-you appointment engine. We scraped decision-makers 
                at office buildings, warehouses, and property management companies across Phoenix. 
                Then we sent 3,000+ cold emails per day and booked qualified meetings directly 
                on his calendar. All Mike had to do was show up and close.
              </p>

              {/* Results Grid */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {results.map((result) => (
                  <div
                    key={result.label}
                    className="bg-slate-50 rounded-xl p-4 text-center border border-slate-100"
                  >
                    <result.icon className="w-6 h-6 text-secondary mx-auto mb-2" />
                    <div className="text-2xl md:text-3xl font-bold text-primary">{result.value}</div>
                    <div className="text-xs text-slate-500">{result.label}</div>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Get results like Mike
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
