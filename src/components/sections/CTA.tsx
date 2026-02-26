"use client";

import { ArrowRight, Calendar, Shield } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
          <Calendar className="w-4 h-4 text-secondary" />
          <span className="text-sm text-white font-medium">
            Limited Availability — 5 Spots/Month
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Fill Your Calendar?
        </h2>

        <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          Stop chasing referrals. Start showing up to qualified meetings with 
          decision-makers who need cleaning services.
        </p>

        {/* Guarantee Badge */}
        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 mb-10 border border-white/20">
          <Shield className="w-6 h-6 text-secondary" />
          <span className="text-white">
            <span className="font-semibold">5 appointments in 60 days</span> or we work free until we deliver
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg shadow-secondary/30 group"
          >
            Get Your Calendar Filled
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="tel:+1234567890"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
          >
            Call (123) 456-7890
          </a>
        </div>

        <p className="mt-8 text-slate-400 text-sm">
          $4,500/mo + $2,500 setup • Results in 60 days or less
        </p>
      </div>
    </section>
  );
}
