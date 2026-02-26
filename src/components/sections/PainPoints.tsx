"use client";

import { 
  TrendingDown, 
  Users, 
  Target, 
  ShieldQuestion, 
  Handshake,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const painPoints = [
  {
    icon: TrendingDown,
    problem: "Razor-Thin Margins",
    description: "You are stuck in a race to the bottom, cutting prices just to win bids. Every contract feels like a fight for scraps.",
    solution: "We position you as a premium provider so you can charge what you're worth.",
  },
  {
    icon: Users,
    problem: "75-200% Annual Turnover",
    description: "You're constantly hiring, training, and losing staff. It's eating your profits and driving away clients.",
    solution: "Attract better clients who value quality — reducing churn stress on your team.",
  },
  {
    icon: Target,
    problem: "No Differentiation",
    description: "You look exactly like every other cleaning company online. Prospects can't tell why they should choose you.",
    solution: "Build a brand that stands out and makes price a secondary consideration.",
  },
  {
    icon: ShieldQuestion,
    problem: "Can't Prove Your Value",
    description: "You do great work, but struggle to show prospects why you're better. No case studies, no social proof.",
    solution: "Systematically collect and showcase proof that converts skeptics into clients.",
  },
  {
    icon: Handshake,
    problem: "Relationship-Dependent Growth",
    description: "90% of your business comes from referrals. If one relationship sours, you're in trouble.",
    solution: "Create a predictable lead generation system that works while you sleep.",
  },
];

export function PainPoints() {
  return (
    <section id="pain-points" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            We Understand Your Challenges
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Sound Familiar?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Running a commercial cleaning company is brutal. You&apos;re fighting battles 
            on every front while trying to grow. We get it — and we can help.
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {painPoints.map((item) => (
            <div
              key={item.problem}
              className="group bg-slate-50 rounded-2xl p-6 hover:bg-primary transition-all duration-300 border border-slate-100 hover:border-primary"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-error/10 group-hover:bg-white/20 rounded-xl flex items-center justify-center mb-4 transition-colors">
                <item.icon className="w-7 h-7 text-error group-hover:text-white" />
              </div>

              {/* Problem */}
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-white mb-3">
                {item.problem}
              </h3>
              
              {/* Description */}
              <p className="text-slate-600 group-hover:text-white/80 mb-4">
                {item.description}
              </p>

              {/* Solution */}
              <div className="flex items-start gap-2 pt-4 border-t border-slate-200 group-hover:border-white/20">
                <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-primary group-hover:text-white font-medium">
                  {item.solution}
                </p>
              </div>
            </div>
          ))}

          {/* CTA Card */}
          <div className="bg-gradient-to-br from-secondary to-accent rounded-2xl p-6 flex flex-col justify-center text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Break Free?
            </h3>
            <p className="text-white/90 mb-6">
              We&apos;ve helped 50+ commercial cleaning companies escape these exact problems. 
              Let&apos;s talk about your situation.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-lg hover:bg-slate-100 transition-colors w-fit"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
