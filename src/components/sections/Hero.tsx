"use client";

import { CheckCircle, ArrowRight, TrendingUp, Users, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/Button";

const stats = [
  { icon: TrendingUp, value: "347%", label: "Avg Lead Increase" },
  { icon: Users, value: "50+", label: "Cleaning Companies Served" },
  { icon: DollarSign, value: "$2.3M", label: "Revenue Generated" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary via-primary-dark to-slate-900 overflow-hidden pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span className="text-sm text-white font-medium">
                Marketing Exclusively for Commercial Cleaning
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Stop Competing on Price.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
                Start Winning Contracts.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-xl mx-auto lg:mx-0">
              We help commercial cleaning companies escape the race to the bottom. 
              Generate qualified leads, build authority, and grow predictably — 
              without relying on referrals alone.
            </p>

            {/* Trust Points */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
              {[
                "No long-term contracts",
                "Industry specialists",
                "ROI guaranteed",
              ].map((point) => (
                <div key={point} className="flex items-center gap-2 text-white/90">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-sm">{point}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="group">
                Get Your Free Strategy Call
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                See Case Studies
              </Button>
            </div>
          </div>

          {/* Right - Stats Card */}
          <div className="lg:pl-12">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-6 text-center">
                Results We Deliver
              </h3>
              
              <div className="grid gap-6">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-xl"
                  >
                    <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <stat.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-sm text-slate-400">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-center text-slate-400 text-sm mt-6">
                Based on results from 50+ cleaning company clients
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Wave SVG */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
