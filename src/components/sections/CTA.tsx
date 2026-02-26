"use client";

import { ArrowRight, Sparkles } from "lucide-react";

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
          <Sparkles className="w-4 h-4 text-secondary" />
          <span className="text-sm text-white font-medium">
            Limited Availability
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Stop Leaving Money on the Table
        </h2>

        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          Every day you wait is another day of competing on price, losing deals, 
          and watching competitors grow. Let&apos;s change that — starting today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg shadow-secondary/30 group"
          >
            Get Your Free Strategy Call
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
          We only take on 5 new clients per month to ensure quality. Don&apos;t wait.
        </p>
      </div>
    </section>
  );
}
