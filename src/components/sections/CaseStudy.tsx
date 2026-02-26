"use client";

import { Quote, TrendingUp, Calendar, DollarSign, ArrowRight } from "lucide-react";

const results = [
  { label: "Increase in Leads", value: "412%", icon: TrendingUp },
  { label: "New Contracts in 90 Days", value: "23", icon: Calendar },
  { label: "Revenue Growth", value: "$847K", icon: DollarSign },
];

export function CaseStudy() {
  return (
    <section id="results" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Case Study
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Real Results for{" "}
            <span className="text-primary">Real Cleaning Companies</span>
          </h2>
        </div>

        {/* Case Study Card */}
        <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl overflow-hidden border border-slate-200">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left - Image/Visual */}
            <div className="relative bg-gradient-to-br from-primary to-primary-dark p-10 lg:p-12 flex flex-col justify-center min-h-[400px]">
              {/* Decorative Elements */}
              <div className="absolute top-10 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
              <div className="absolute bottom-10 left-10 w-24 h-24 bg-accent/20 rounded-full blur-xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">SP</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Sparkling Professionals</h3>
                    <p className="text-white/70">Commercial Cleaning • Chicago, IL</p>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <Quote className="w-8 h-8 text-secondary mb-4" />
                  <blockquote className="text-white text-lg leading-relaxed mb-4">
                    &ldquo;Before working with Janitorial Leads Co, we were stuck at $1.2M in revenue for 3 years. 
                    Within the first year, we doubled that. Their understanding of our industry makes all the difference.&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">MK</span>
                    </div>
                    <div>
                      <div className="text-white font-medium">Michael K.</div>
                      <div className="text-white/60 text-sm">Owner & CEO</div>
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
                Sparkling Professionals had been stuck at the same revenue for years. 
                They relied entirely on word-of-mouth, had no online presence, and 
                were constantly competing on price against lowball competitors.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Our Solution
              </h3>
              <p className="text-slate-600 mb-8">
                We rebuilt their brand positioning, launched a conversion-focused website, 
                and implemented a multi-channel lead generation system combining 
                SEO, Google Ads, and targeted LinkedIn outreach to facility managers.
              </p>

              {/* Results Grid */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {results.map((result) => (
                  <div
                    key={result.label}
                    className="bg-white rounded-xl p-4 text-center shadow-sm border border-slate-100"
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
                Want results like this? Let&apos;s talk
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* More Case Studies Coming */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm">
            More case studies coming soon. We&apos;re documenting results from our newest clients.
          </p>
        </div>
      </div>
    </section>
  );
}
