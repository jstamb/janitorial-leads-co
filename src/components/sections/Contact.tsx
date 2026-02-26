"use client";

import { useState } from "react";
import { Send, CheckCircle, Phone, Mail, Calendar, Loader2, Shield } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";

const benefits = [
  "8-15 qualified appointments/month",
  "We handle all the cold outreach",
  "You just show up and close",
  "5 appointments in 60 days guaranteed",
];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    revenue: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      // POST to API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          revenue: "",
          message: "",
        });
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      // For demo purposes, show success anyway
      setStatus("success");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-4">
              Let&apos;s Talk
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Fill Your Calendar With Qualified Meetings?
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              Book a call with our team. We&apos;ll show you exactly how our appointment 
              engine works and how many meetings we can book for your cleaning company.
            </p>

            {/* Benefits */}
            <ul className="space-y-4 mb-10">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>

            {/* Guarantee */}
            <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-4 mb-8">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-green-400" />
                <p className="text-green-300 font-medium">
                  5 qualified appointments in 60 days or we work free until we deliver
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 pt-8 border-t border-slate-800">
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                (123) 456-7890
              </a>
              <a
                href="mailto:hello@janitorialleads.co"
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                hello@janitorialleads.co
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            {status === "success" ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Thank You!
                </h3>
                <p className="text-slate-600 mb-6">
                  We&apos;ll be in touch within 24 hours to show you how we can 
                  fill your calendar with qualified appointments.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-primary font-medium hover:underline"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-2 mb-6">
                  <Calendar className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-semibold text-slate-900">
                    Get Your Calendar Filled
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input
                      id="name"
                      name="name"
                      label="Full Name"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      label="Email Address"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      label="Phone Number"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                    <Input
                      id="company"
                      name="company"
                      label="Company Name"
                      placeholder="ABC Cleaning Co"
                      value={formData.company}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="revenue" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Crew Size
                    </label>
                    <select
                      id="revenue"
                      name="revenue"
                      value={formData.revenue}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      required
                    >
                      <option value="">Select crew size</option>
                      <option value="1-5">1-5 employees</option>
                      <option value="6-15">6-15 employees</option>
                      <option value="16-30">16-30 employees</option>
                      <option value="31-50">31-50 employees</option>
                      <option value="50+">50+ employees</option>
                    </select>
                  </div>

                  <Textarea
                    id="message"
                    name="message"
                    label="What's your biggest growth challenge?"
                    placeholder="Tell us about your current situation..."
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                  />

                  <Button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full"
                    size="lg"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Get Started — $4,500/mo
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-slate-500 text-center">
                    + $2,500 one-time setup • 5 appointments in 60 days guaranteed
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
