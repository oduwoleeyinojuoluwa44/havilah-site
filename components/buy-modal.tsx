"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import type { Project } from "@/data/projects";

interface BuyModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const PAYMENT_OPTIONS = [
  { id: "deposit", title: "Initial Deposit", amount: "₦150,000,000", note: "150M Initial Commitment" },
  { id: "outright", title: "Outright Purchase", amount: "₦300,000,000", note: "300M Full Payment" },
  { id: "milestone", title: "Milestone Plan", amount: "Flexible", note: "Structured payment schedule" },
];

const AMENITIES = [
  "Swimming Pool",
  "Fully Equipped Gym",
  "24-Hour Power",
  "Fast Fiber Network",
  "Ample Parking",
  "Robust 24/7 Security",
];

export default function BuyModal({ project, isOpen, onClose }: BuyModalProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentOption, setPaymentOption] = useState("deposit");
  const [units, setUnits] = useState("1");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !phone.trim()) return;
    setSubmitted(true);
  };

  const reset = () => {
    setFullName("");
    setEmail("");
    setPhone("");
    setPaymentOption("deposit");
    setUnits("1");
    setNotes("");
    setSubmitted(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-ink/75 backdrop-blur-xs"
            onClick={onClose}
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative z-10 w-full max-w-[620px] overflow-hidden rounded-[28px] bg-paper shadow-2xl my-6 flex flex-col max-h-[92dvh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-ink/60 text-white/90 transition-colors hover:bg-gold hover:text-ink cursor-pointer"
              aria-label="Close"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>

            {/* Header Banner with Property Identity */}
            <div className="relative isolate overflow-hidden bg-ink px-7 pt-8 pb-6 text-white">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="-z-20 object-cover opacity-25 brightness-[.45]"
              />
              <div
                className="absolute inset-0 -z-10"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(13,14,17,0.75) 0%, rgba(13,14,17,0.92) 100%)",
                }}
              />

              <p className="text-[11px] uppercase tracking-[3px] text-golden font-medium mb-1">
                Unit Purchase &amp; Reservation
              </p>
              <h2 className="font-cormorant text-[32px] sm:text-[36px] font-medium leading-tight text-white">
                {project.name}
              </h2>
              <p className="mt-1 text-[13px] uppercase tracking-[2px] text-white/70">
                {project.location} &bull; 4 Bedroom Terraces
              </p>

              {/* Price Details */}
              <div className="mt-4 flex flex-wrap items-center gap-5 text-sm border-t border-white/15 pt-3.5">
                <div>
                  <span className="text-white/60 text-[11px] uppercase tracking-[1.5px] block">Outright</span>
                  <span className="font-semibold text-white text-[15px]">₦300,000,000</span>
                </div>
                <div className="h-6 w-px bg-white/20" />
                <div>
                  <span className="text-white/60 text-[11px] uppercase tracking-[1.5px] block">Initial Deposit</span>
                  <span className="font-semibold text-golden text-[15px]">₦150,000,000</span>
                </div>
              </div>
            </div>

            {/* Scrollable Form Body */}
            <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/20 text-gold-deep">
                    <svg viewBox="0 0 24 24" className="h-8 w-8 fill-none stroke-current stroke-2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="font-cormorant text-3xl font-medium text-ink">
                    Purchase Request Received!
                  </h3>
                  <p className="max-w-[460px] mx-auto text-[15px] leading-relaxed text-stone">
                    Thank you, <strong className="text-ink">{fullName}</strong>. Your reservation inquiry for{" "}
                    <strong className="text-ink">{project.name}</strong> has been logged. A senior property consultant will reach out via phone or email within 24 hours to finalize your unit allocation.
                  </p>
                  <div className="pt-2 text-xs text-stone">
                    For immediate assistance, call:{" "}
                    <a href="tel:08162649021" className="text-gold font-medium underline">
                      0816 264 9021
                    </a>
                  </div>
                  <div className="pt-4 flex justify-center gap-3">
                    <button
                      type="button"
                      onClick={reset}
                      className="rounded-full border border-ink/20 px-6 py-2.5 text-xs uppercase tracking-[2px] text-ink hover:bg-ink/5 transition-colors cursor-pointer"
                    >
                      Make Another Request
                    </button>
                    <button
                      type="button"
                      onClick={onClose}
                      className="rounded-full bg-gold px-7 py-2.5 text-xs font-semibold uppercase tracking-[2px] text-ink hover:bg-golden transition-colors cursor-pointer"
                    >
                      Close
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Select Payment Plan */}
                  <div>
                    <label className="mb-2 block text-[13px] font-medium text-ink">
                      Select Payment Option <span className="text-gold">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {PAYMENT_OPTIONS.map((opt) => {
                        const selected = paymentOption === opt.id;
                        return (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => setPaymentOption(opt.id)}
                            className={`rounded-xl p-3 text-left transition-all border cursor-pointer ${
                              selected
                                ? "border-gold bg-gold/10 ring-1 ring-gold"
                                : "border-ink/15 bg-white hover:border-gold/50"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-[12px] font-semibold text-ink uppercase tracking-[1px]">
                                {opt.title}
                              </span>
                              <span
                                className={`h-3.5 w-3.5 rounded-full border flex items-center justify-center ${
                                  selected ? "border-gold bg-gold" : "border-ink/30"
                                }`}
                              >
                                {selected && <span className="h-1.5 w-1.5 rounded-full bg-ink" />}
                              </span>
                            </div>
                            <span className="mt-1 block font-medium text-[14px] text-ink">
                              {opt.amount}
                            </span>
                            <span className="mt-0.5 block text-[11px] text-stone">
                              {opt.note}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Personal Info: Name & Email */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-[13px] font-medium text-ink">
                        Full Name <span className="text-gold">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="E.g. Chief Adeleke Johnson"
                        className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-[16px] sm:text-[14px] text-ink placeholder:text-stone/60 focus:border-gold focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-[13px] font-medium text-ink">
                        Email Address <span className="text-gold">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="adeleke@example.com"
                        className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-[16px] sm:text-[14px] text-ink placeholder:text-stone/60 focus:border-gold focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone & Number of Units */}
                  <div className="grid gap-4 sm:grid-cols-[1.4fr_0.6fr]">
                    <div>
                      <label className="mb-1.5 block text-[13px] font-medium text-ink">
                        Phone Number <span className="text-gold">*</span>
                      </label>
                      <div className="flex items-center rounded-xl border border-ink/15 bg-white px-3 py-2.5 focus-within:border-gold transition-colors">
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
                          className="w-full bg-transparent text-[16px] sm:text-[14px] text-ink placeholder:text-stone/60 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-1.5 block text-[13px] font-medium text-ink">
                        Terraces / Units
                      </label>
                      <select
                        value={units}
                        onChange={(e) => setUnits(e.target.value)}
                        className="w-full rounded-xl border border-ink/15 bg-white px-3.5 py-3 text-[16px] sm:text-[14px] text-ink focus:border-gold focus:outline-none transition-colors cursor-pointer"
                      >
                        <option value="1">1 Unit</option>
                        <option value="2">2 Units</option>
                        <option value="3">3 Units</option>
                        <option value="4+">4+ Units</option>
                      </select>
                    </div>
                  </div>

                  {/* Notes / Special Requests */}
                  <div>
                    <label className="mb-1.5 block text-[13px] font-medium text-ink">
                      Additional Notes / Preferred Site Visit Date
                    </label>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="E.g. Interested in corner unit, would like to inspect this Saturday..."
                      className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-[16px] sm:text-[14px] text-ink placeholder:text-stone/60 focus:border-gold focus:outline-none resize-none transition-colors"
                    />
                  </div>

                  {/* Amenities List */}
                  <div className="rounded-xl bg-white p-3.5 border border-ink/10">
                    <p className="text-[11px] uppercase tracking-[1.5px] text-gold-deep font-semibold mb-2">
                      Features &amp; Amenities Included:
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-stone">
                      {AMENITIES.map((a) => (
                        <div key={a} className="flex items-center gap-1.5">
                          <span className="text-gold font-bold">&check;</span>
                          <span>{a}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 rounded-full bg-gold hover:bg-golden text-ink py-4 px-6 font-semibold text-[13px] uppercase tracking-[2px] transition-all duration-300 shadow-md hover:shadow-gold/25 active:scale-[0.99] cursor-pointer"
                    >
                      <span>Submit Purchase Request</span>
                      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </button>
                    <p className="mt-2.5 text-center text-xs text-stone">
                      Or call directly:{" "}
                      <a href="tel:08162649021" className="text-ink font-semibold hover:text-gold transition-colors">
                        0816 264 9021
                      </a>
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
