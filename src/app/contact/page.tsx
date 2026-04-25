'use client';

import { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';

const serviceOptions = [
  'Companion Care',
  'Personal Care',
  'Memory Care Support',
  'Respite Care',
  'Transition Care',
  'Home Support Services',
  'Not Sure Yet',
];

const referralSources = [
  'Google Search',
  'Friend or Family Referral',
  'Senior Living Community',
  'Doctor or Hospital',
  'Social Media',
  'Other',
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#F1EEE7]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs tracking-[0.25em] uppercase text-[#0E3B3A] font-medium mb-4">
              Contact Us
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-medium text-[#0E1B1B] mb-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Let&apos;s Talk About
              <br />
              Your <em>Family</em>
            </h1>
            <p className="text-lg text-[#2F6E6B] leading-relaxed">
              A free consultation takes about 20 minutes. No sales pitch, no
              pressure. Just an honest conversation about your situation and
              how we might help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                {submitted ? (
                  <div className="bg-[#E6E1D3] rounded-2xl p-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-[#0E3B3A] flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </div>
                    <h3
                      className="text-2xl font-medium text-[#0E1B1B] mb-3"
                      style={{ fontFamily: 'var(--font-serif)' }}
                    >
                      Thank You
                    </h3>
                    <p className="text-[#2F6E6B]">
                      We received your message and will be in touch within one
                      business day. If your situation is urgent, please call us
                      directly at 714-307-4911.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-[#0E1B1B] mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          className="w-full rounded-xl border border-[#E6E1D3] px-4 py-3 text-[#0E1B1B] placeholder:text-[#A8A29E] focus:outline-none focus:ring-2 focus:ring-[#B9D4CF]/25 focus:border-[#2F6E6B] transition-all"
                          placeholder="First name"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-[#0E1B1B] mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          className="w-full rounded-xl border border-[#E6E1D3] px-4 py-3 text-[#0E1B1B] placeholder:text-[#A8A29E] focus:outline-none focus:ring-2 focus:ring-[#B9D4CF]/25 focus:border-[#2F6E6B] transition-all"
                          placeholder="Last name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-[#0E1B1B] mb-2">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          className="w-full rounded-xl border border-[#E6E1D3] px-4 py-3 text-[#0E1B1B] placeholder:text-[#A8A29E] focus:outline-none focus:ring-2 focus:ring-[#B9D4CF]/25 focus:border-[#2F6E6B] transition-all"
                          placeholder="714-307-4911"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[#0E1B1B] mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full rounded-xl border border-[#E6E1D3] px-4 py-3 text-[#0E1B1B] placeholder:text-[#A8A29E] focus:outline-none focus:ring-2 focus:ring-[#B9D4CF]/25 focus:border-[#2F6E6B] transition-all"
                          placeholder="you@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="cityZip" className="block text-sm font-medium text-[#0E1B1B] mb-2">
                        City / ZIP Code
                      </label>
                      <input
                        type="text"
                        id="cityZip"
                        name="cityZip"
                        className="w-full rounded-xl border border-[#E6E1D3] px-4 py-3 text-[#0E1B1B] placeholder:text-[#A8A29E] focus:outline-none focus:ring-2 focus:ring-[#B9D4CF]/25 focus:border-[#2F6E6B] transition-all"
                        placeholder="Buckeye, AZ or 85326"
                      />
                    </div>

                    <div>
                      <label htmlFor="serviceType" className="block text-sm font-medium text-[#0E1B1B] mb-2">
                        Service Type
                      </label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        className="w-full rounded-xl border border-[#E6E1D3] px-4 py-3 text-[#0E1B1B] focus:outline-none focus:ring-2 focus:ring-[#B9D4CF]/25 focus:border-[#2F6E6B] transition-all bg-white"
                      >
                        <option value="">Select a service...</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-[#0E1B1B] mb-2">
                        Tell Us About Your Situation
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        className="w-full rounded-xl border border-[#E6E1D3] px-4 py-3 text-[#0E1B1B] placeholder:text-[#A8A29E] focus:outline-none focus:ring-2 focus:ring-[#B9D4CF]/25 focus:border-[#2F6E6B] transition-all resize-none"
                        placeholder="What's going on with your loved one? What are you looking for? The more context you share, the more helpful our first conversation will be."
                      />
                    </div>

                    <div>
                      <label htmlFor="referral" className="block text-sm font-medium text-[#0E1B1B] mb-2">
                        How Did You Hear About Us?
                      </label>
                      <select
                        id="referral"
                        name="referral"
                        className="w-full rounded-xl border border-[#E6E1D3] px-4 py-3 text-[#0E1B1B] focus:outline-none focus:ring-2 focus:ring-[#B9D4CF]/25 focus:border-[#2F6E6B] transition-all bg-white"
                      >
                        <option value="">Select an option...</option>
                        {referralSources.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-full bg-[#0E3B3A] hover:bg-[#2F6E6B] px-8 py-4 text-white font-medium transition-all duration-300"
                    >
                      Send Message
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </button>
                  </form>
                )}
              </ScrollReveal>
            </div>

            {/* Contact Info Sidebar */}
            <div>
              <ScrollReveal delay={150}>
                <div className="bg-[#F1EEE7] rounded-2xl p-8 border border-[#E6E1D3] space-y-8">
                  <div>
                    <h3 className="font-semibold text-[#0E1B1B] mb-2">Call Us</h3>
                    <a
                      href="tel:+17143074911"
                      className="text-[#0E3B3A] text-lg font-medium hover:underline"
                    >
                      714-307-4911
                    </a>
                    <p className="text-sm text-[#2F6E6B] mt-1">
                      Available 7 days a week
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#0E1B1B] mb-2">Office Hours</h3>
                    <p className="text-[#2F6E6B] text-sm">
                      Monday - Friday: 8:00 AM - 6:00 PM
                      <br />
                      Saturday: 9:00 AM - 2:00 PM
                      <br />
                      Sunday: Closed (on-call available)
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#0E1B1B] mb-2">
                      Office Address
                    </h3>
                    <p className="text-[#2F6E6B] text-sm">
                      22790 W Yuma Road
                      <br />
                      Buckeye, AZ 85326
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#0E1B1B] mb-2">
                      Care Available
                    </h3>
                    <p className="text-[#2F6E6B] text-sm">
                      24/7, 365 days a year.
                      <br />
                      Caregivers are available around the clock, including
                      holidays and weekends.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E6E1D3]">
                    <p className="text-xs text-[#A8A29E]">
                      Urgent situations? Call us directly. We can often arrange
                      emergency care within 24-48 hours.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
