"use client";

import { Calculator, TrendingUp, Clock, ArrowRight } from "lucide-react";

export function TheMath() {
  return (
    <section id="the-math" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
            The Math
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            One Contract{" "}
            <span className="text-primary">Pays For Everything</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Let&apos;s break down why this is a no-brainer investment for growing cleaning companies.
          </p>
        </div>

        {/* Math Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Calculator className="w-6 h-6 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">$4,500</div>
            <div className="text-sm text-slate-600">Our Monthly Fee</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-center">
            <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-secondary" />
            </div>
            <div className="text-3xl font-bold text-secondary mb-2">$20K+</div>
            <div className="text-sm text-slate-600">Your Smallest Contract/Year</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-center">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-accent" />
            </div>
            <div className="text-3xl font-bold text-accent mb-2">$30-100K</div>
            <div className="text-sm text-slate-600">Average Contract/Year</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-green-600 mb-2">12+</div>
            <div className="text-sm text-slate-600">Months of Fees Covered</div>
          </div>
        </div>

        {/* Highlight Box */}
        <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 rounded-full blur-2xl" />
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              The Bottom Line
            </h3>
            <p className="text-xl md:text-2xl text-white/90 mb-6 max-w-3xl mx-auto">
              Sign <span className="text-secondary font-bold">one contract</span> from our appointments 
              and it covers <span className="text-secondary font-bold">12+ months</span> of our fee.
              <br />
              <span className="text-white/70 text-lg">Everything after that is pure profit.</span>
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-8 py-4 rounded-lg hover:bg-slate-100 transition-colors shadow-lg"
            >
              Start Getting Appointments
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
