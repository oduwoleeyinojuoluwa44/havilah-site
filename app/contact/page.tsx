"use client";

import { useState } from "react";
import Image from "next/image";
import PageShell from "../page-shell";

const COUNTRIES = [
  "Nigeria",
  "United Kingdom",
  "United States",
  "Canada",
  "Ghana",
  "South Africa",
  "United Arab Emirates",
  "Other",
];

const HEAR_OPTIONS = [
  "Social Media (Instagram, LinkedIn, X)",
  "Search Engine (Google)",
  "Referral / Word of Mouth",
  "Real Estate Agent / Broker",
  "Billboard / Outdoor Advertising",
  "Event / Exhibition",
  "Other",
];

const MESSAGE_TYPES = [
  "Property Inquiry (Buying a Home)",
  "Property Management Services",
  "Site Inspection Booking",
  "Investment & Partnerships",
  "General Inquiry",
];

export default function ContactPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [hearAbout, setHearAbout] = useState("");
  const [messageType, setMessageType] = useState("");
  const [message, setMessage] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !email.trim() || !phone.trim() || !agreed) {
      return;
    }
    setSubmitted(true);
  };

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setCountry("");
    setHearAbout("");
    setMessageType("");
    setMessage("");
    setAgreed(false);
    setSubmitted(false);
  };

  return (
    <PageShell>
      <section className="bg-paper min-h-[calc(100vh-84px)] overflow-hidden">
        <div className="w-full grid lg:grid-cols-[1.12fr_0.88fr] xl:grid-cols-[1.18fr_0.82fr] items-stretch min-h-[calc(100vh-84px)]">
          {/* Left Column: Contact Form sitting cleanly on the page background */}
          <div className="px-6 sm:px-12 lg:pl-[8vw] lg:pr-12 py-[clamp(44px,6vh,72px)] flex flex-col justify-center max-w-[760px]">
            {/* Header */}
            <div>
              <p className="mb-2 text-[12px] uppercase tracking-[5px] text-gold-deep font-medium">
                Get In Touch
              </p>
              <h1 className="font-cormorant text-[clamp(38px,5.8vw,72px)] font-medium uppercase leading-[1.04] text-ink">
                Contact <span className="text-gold font-great-vibes normal-case text-[0.85em]">Us</span>
              </h1>
              <p className="mt-3.5 text-[15.5px] leading-[1.7] text-[#3f434b]">
                We appreciate your interest in Havilah. Please fill the form and we will get back to you as soon as possible.
              </p>
            </div>

            {/* Form Area */}
            <div className="mt-9">
              {submitted ? (
                <div className="py-14 text-center space-y-5 rounded-2xl bg-white/70 p-8 border border-ink/10">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/20 text-gold-deep">
                    <svg viewBox="0 0 24 24" className="h-8 w-8 fill-none stroke-current stroke-2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h2 className="font-cormorant text-3xl font-medium text-ink">
                    Thank You, {firstName}!
                  </h2>
                  <p className="max-w-[440px] mx-auto text-[15px] leading-relaxed text-stone">
                    Your message has been received. A member of the Havilah team will contact you shortly via email or phone.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={resetForm}
                      className="rounded-full bg-gold px-8 py-3.5 text-[12.5px] font-medium uppercase tracking-[2px] text-ink transition-colors hover:bg-golden cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Row 1: First Name & Last Name */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-[13px] font-medium text-ink">
                        First Name <span className="text-gold">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="E.g. John"
                        className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-[16px] sm:text-[14.5px] text-ink placeholder:text-stone/60 focus:border-gold focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-[13px] font-medium text-ink">
                        Last Name
                      </label>
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="E.g. Doe"
                        className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-[16px] sm:text-[14.5px] text-ink placeholder:text-stone/60 focus:border-gold focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Phone */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-[13px] font-medium text-ink">
                        Email Address <span className="text-gold">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-[16px] sm:text-[14.5px] text-ink placeholder:text-stone/60 focus:border-gold focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-[13px] font-medium text-ink">
                        Phone Number <span className="text-gold">*</span>
                      </label>
                      <div className="flex items-center rounded-xl border border-ink/15 bg-white px-3.5 py-3 focus-within:border-gold transition-colors">
                        <div className="flex items-center gap-1.5 mr-2.5 border-r border-ink/15 pr-2.5 select-none">
                          <svg className="h-3.5 w-5 rounded-xs overflow-hidden border border-ink/10" viewBox="0 0 3 2">
                            <rect width="1" height="2" fill="#008751" />
                            <rect x="1" width="1" height="2" fill="#ffffff" />
                            <rect x="2" width="1" height="2" fill="#008751" />
                          </svg>
                          <span className="text-[13px] font-medium text-ink">+234</span>
                        </div>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="802 123 4567"
                          className="w-full bg-transparent text-[16px] sm:text-[14.5px] text-ink placeholder:text-stone/60 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Country of Residence & How did you hear about us */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-[13px] font-medium text-ink">
                        Country of Residence <span className="text-gold">*</span>
                      </label>
                      <div className="relative">
                        <select
                          required
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          className="w-full appearance-none rounded-xl border border-ink/15 bg-white px-4 py-3 text-[16px] sm:text-[14px] text-ink focus:border-gold focus:outline-none transition-colors cursor-pointer"
                        >
                          <option value="">Select country</option>
                          {COUNTRIES.map((c) => (
                            <option key={c} value={c}>
                              {c}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-3.5 flex items-center text-stone">
                          <svg viewBox="0 0 20 20" className="h-4 w-4 fill-current">
                            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="mb-1.5 block text-[13px] font-medium text-ink">
                        How did you hear about us? <span className="text-gold">*</span>
                      </label>
                      <div className="relative">
                        <select
                          required
                          value={hearAbout}
                          onChange={(e) => setHearAbout(e.target.value)}
                          className="w-full appearance-none rounded-xl border border-ink/15 bg-white px-4 py-3 text-[16px] sm:text-[14px] text-ink focus:border-gold focus:outline-none transition-colors cursor-pointer"
                        >
                          <option value="">Please select an option</option>
                          {HEAR_OPTIONS.map((h) => (
                            <option key={h} value={h}>
                              {h}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-3.5 flex items-center text-stone">
                          <svg viewBox="0 0 20 20" className="h-4 w-4 fill-current">
                            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Row 4: Message Type */}
                  <div>
                    <label className="mb-1.5 block text-[13px] font-medium text-ink">
                      Message Type <span className="text-gold">*</span>
                    </label>
                    <div className="relative">
                      <select
                        required
                        value={messageType}
                        onChange={(e) => setMessageType(e.target.value)}
                        className="w-full appearance-none rounded-xl border border-ink/15 bg-white px-4 py-3 text-[16px] sm:text-[14px] text-ink focus:border-gold focus:outline-none transition-colors cursor-pointer"
                      >
                        <option value="">Please select an option</option>
                        {MESSAGE_TYPES.map((m) => (
                          <option key={m} value={m}>
                            {m}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-3.5 flex items-center text-stone">
                        <svg viewBox="0 0 20 20" className="h-4 w-4 fill-current">
                          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Row 5: Message */}
                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label className="block text-[13px] font-medium text-ink">
                        Message
                      </label>
                      <span className="text-xs text-stone">{message.length} / 180</span>
                    </div>
                    <textarea
                      rows={4}
                      maxLength={180}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Enter your message..."
                      className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-[16px] sm:text-[14.5px] text-ink placeholder:text-stone/60 focus:border-gold focus:outline-none resize-none transition-colors"
                    />
                  </div>

                  {/* Row 6: Terms Agreement */}
                  <div className="flex items-start gap-3 pt-1">
                    <input
                      type="checkbox"
                      id="terms"
                      required
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="mt-1 h-4 w-4 rounded-xs border-ink/20 text-gold focus:ring-gold cursor-pointer"
                    />
                    <label htmlFor="terms" className="text-[13px] leading-[1.6] text-stone cursor-pointer select-none">
                      I accept the{" "}
                      <span className="text-gold underline underline-offset-2">User Agreement</span>,{" "}
                      <span className="text-gold underline underline-offset-2">Cookie</span> and{" "}
                      <span className="text-gold underline underline-offset-2">Privacy Policy</span>.
                    </label>
                  </div>

                  {/* Row 7: Send Message Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-gold px-11 py-4 text-[13px] font-medium uppercase tracking-[2px] text-ink transition-all duration-300 hover:bg-golden cursor-pointer shadow-md hover:shadow-gold/20 active:scale-[0.99] text-center"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Headquarters Card touching the right edge, matching the reference image */}
          <div className="relative isolate flex flex-col justify-between overflow-hidden rounded-t-[36px] lg:rounded-t-none lg:rounded-l-[40px] bg-ink text-white shadow-2xl p-6 sm:p-12 lg:p-14 min-h-[500px] sm:min-h-[560px] lg:min-h-full">
            {/* Real property photograph behind the card */}
            <Image
              src="/images/hero-2.jpg"
              alt="Havilah developments"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="-z-20 object-cover object-center brightness-[.65]"
            />
            {/* Elegant luxury gradient scrim: transparent enough to clearly show daylight, facade, and sky */}
            <div
              className="absolute inset-0 -z-10"
              style={{
                background:
                  "linear-gradient(180deg, rgba(13,14,17,0.68) 0%, rgba(13,14,17,0.76) 45%, rgba(13,14,17,0.90) 100%)",
              }}
            />

            <div className="space-y-9 my-auto">
              {/* Location Section */}
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/20 text-gold mb-4">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
                    <path d="M12 21s-8-7.5-8-12a8 8 0 1 1 16 0c0 4.5-8 12-8 12z" />
                    <circle cx="12" cy="9" r="3" />
                  </svg>
                </div>
                <h2 className="font-cormorant text-[28px] lg:text-[32px] font-medium uppercase tracking-[1px] text-white">
                  Havilah Headquarters
                </h2>
                <p className="mt-2.5 text-[15px] leading-relaxed text-white/85">
                  Eyebrow Area, Lekki, Lagos State, Nigeria
                </p>
              </div>

              {/* Phone Section */}
              <div className="border-t border-white/15 pt-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/20 text-gold mb-4">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="space-y-2.5 text-[15px] text-white/90">
                  <p>
                    <a href="tel:08162649021" className="hover:text-gold transition-colors underline underline-offset-4 decoration-white/30 hover:decoration-gold">
                      0816 264 9021
                    </a>{" "}
                    <span className="text-xs text-white/65 font-light">(Sales hotline: 24/7)</span>
                  </p>
                  <p>
                    <a href="tel:+2348162649021" className="hover:text-gold transition-colors underline underline-offset-4 decoration-white/30 hover:decoration-gold">
                      +234 816 264 9021
                    </a>{" "}
                    <span className="text-xs text-white/65 font-light">(Customer Care: 8AM - 5PM)</span>
                  </p>
                </div>
              </div>

              {/* Email Section */}
              <div className="border-t border-white/15 pt-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/20 text-gold mb-4">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="space-y-2.5 text-[15px] text-white/90">
                  <p>
                    <a href="mailto:hr.havilah@gmail.com" className="hover:text-gold transition-colors underline underline-offset-4 decoration-white/30 hover:decoration-gold">
                      hr.havilah@gmail.com
                    </a>
                  </p>
                  <p>
                    <a href="mailto:info@havilahdevelopments.com" className="hover:text-gold transition-colors underline underline-offset-4 decoration-white/30 hover:decoration-gold">
                      info@havilahdevelopments.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
