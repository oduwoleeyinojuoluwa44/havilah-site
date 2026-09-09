"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const COUNTRIES = [
  { name: "Nigeria", code: "+ 234", flag: "🇳🇬", iso: "NG" },
  { name: "United Kingdom", code: "+ 44", flag: "🇬🇧", iso: "GB" },
  { name: "United States", code: "+ 1", flag: "🇺🇸", iso: "US" },
  { name: "Canada", code: "+ 1", flag: "🇨🇦", iso: "CA" },
  { name: "Ghana", code: "+ 233", flag: "🇬🇭", iso: "GH" },
  { name: "South Africa", code: "+ 27", flag: "🇿🇦", iso: "ZA" },
  { name: "United Arab Emirates", code: "+ 971", flag: "🇦🇪", iso: "AE" },
];

export default function ChatModal({ isOpen, onClose }: ChatModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [showCountryMenu, setShowCountryMenu] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setSubmitted(true);
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setSubmitted(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-4 sm:p-6 pointer-events-none">
          {/* Backdrop (dismissible) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-ink/65 backdrop-blur-[2px] pointer-events-auto"
            onClick={onClose}
          />

          {/* Modal / Widget Container in Havilah Luxury Brand Theme */}
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.26, ease: "easeOut" }}
            className="relative z-10 w-full max-w-[390px] overflow-hidden rounded-[26px] bg-ink border border-gold/30 shadow-[0_25px_60px_rgba(0,0,0,0.65)] pointer-events-auto flex flex-col max-h-[92dvh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-3.5 right-3.5 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-gold hover:text-ink cursor-pointer"
              aria-label="Close form"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>

            {/* Havilah Brand Header */}
            <div className="px-6 pt-7 pb-4 text-center">
              <p className="text-[10.5px] uppercase tracking-[3px] text-gold font-medium mb-1.5">
                Havilah Inquiries
              </p>
              <h2 className="text-[15px] sm:text-[16px] font-medium leading-snug text-paper">
                Please fill out the form below and we will get back to you as soon as possible.
              </h2>
            </div>

            {/* White/Paper Form Card */}
            <div className="mx-3.5 mb-3.5 overflow-y-auto rounded-[22px] bg-paper p-5 shadow-sm">
              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/20 text-gold-deep">
                    <svg viewBox="0 0 24 24" className="h-7 w-7 fill-none stroke-current stroke-2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="font-cormorant text-2xl font-medium text-ink">Inquiry Sent</h3>
                  <p className="text-sm text-stone px-2 leading-relaxed">
                    Thank you, {name}. We have received your message and our team will get back to you shortly.
                  </p>
                  <div className="pt-2 flex flex-col gap-2">
                    <button
                      type="button"
                      onClick={resetForm}
                      className="rounded-xl border border-ink/20 py-2.5 text-xs font-medium uppercase tracking-[1.5px] text-ink hover:bg-ink/5 transition-colors cursor-pointer"
                    >
                      Send another message
                    </button>
                    <button
                      type="button"
                      onClick={onClose}
                      className="rounded-xl bg-gold py-2.5 text-xs font-medium uppercase tracking-[1.5px] text-ink hover:bg-golden transition-colors cursor-pointer"
                    >
                      Close
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  {/* Name Input */}
                  <div>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="* Name"
                      className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-[16px] sm:text-[14px] text-ink placeholder:text-stone focus:border-gold focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="* Email"
                      className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-[16px] sm:text-[14px] text-ink placeholder:text-stone focus:border-gold focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Phone Input with Country Code */}
                  <div className="flex items-stretch gap-2">
                    {/* Country Flag Selector */}
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setShowCountryMenu((v) => !v)}
                        className="flex h-full items-center gap-1.5 rounded-xl border border-ink/15 bg-white px-3 py-2.5 hover:border-gold/50 transition-colors cursor-pointer"
                        aria-label="Select Country"
                      >
                        {selectedCountry.iso === "NG" ? (
                          <svg className="h-3.5 w-5 rounded-xs overflow-hidden border border-ink/10" viewBox="0 0 3 2">
                            <rect width="1" height="2" fill="#008751" />
                            <rect x="1" width="1" height="2" fill="#ffffff" />
                            <rect x="2" width="1" height="2" fill="#008751" />
                          </svg>
                        ) : (
                          <span className="text-base leading-none">{selectedCountry.flag}</span>
                        )}
                        <svg viewBox="0 0 20 20" className="h-3 w-3 fill-stone">
                          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                      </button>

                      {showCountryMenu && (
                        <div className="absolute left-0 bottom-full mb-1 z-30 w-52 max-h-48 overflow-y-auto rounded-xl border border-ink/15 bg-white p-1 shadow-lg">
                          {COUNTRIES.map((c) => (
                            <button
                              key={c.name}
                              type="button"
                              onClick={() => {
                                setSelectedCountry(c);
                                setShowCountryMenu(false);
                              }}
                              className="flex w-full items-center gap-2 rounded-lg px-2.5 py-1.5 text-left text-xs text-ink hover:bg-gold/10 transition-colors cursor-pointer"
                            >
                              <span>{c.flag}</span>
                              <span className="flex-1 truncate">{c.name}</span>
                              <span className="text-stone font-mono text-[11px]">{c.code}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Phone Number with Inset Label */}
                    <div className="relative flex-1 rounded-xl border border-ink/15 bg-white px-3.5 py-2.5 flex items-center focus-within:border-gold transition-colors">
                      <span className="absolute -top-2.5 left-3 bg-white px-1 text-[11px] font-medium text-stone">
                        * Phone
                      </span>
                      <span className="text-[14px] font-medium text-ink select-none mr-2">
                        {selectedCountry.code}
                      </span>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="801 234 5678"
                        className="w-full bg-transparent text-[16px] sm:text-[14px] text-ink placeholder:text-stone/60 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Message Input */}
                  <div>
                    <textarea
                      required
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="* Message"
                      className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-[16px] sm:text-[14px] text-ink placeholder:text-stone focus:border-gold focus:outline-none resize-none transition-colors"
                    />
                  </div>

                  {/* Submit Button in Havilah signature Gold */}
                  <div className="pt-1">
                    <button
                      type="submit"
                      title="Submit"
                      className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gold hover:bg-golden text-ink py-3.5 px-4 font-medium text-[13px] uppercase tracking-[1.5px] transition-all duration-300 shadow-md hover:shadow-gold/25 active:scale-[0.99] cursor-pointer"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                      <span>Submit</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Bottom Bar: Home return */}
            <div className="flex items-center justify-center bg-ink py-3 px-8 border-t border-white/10">
              <button
                type="button"
                onClick={onClose}
                aria-label="Home"
                className="flex items-center gap-2 p-1 text-gold hover:text-golden transition-colors cursor-pointer"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                <span className="text-[11px] uppercase tracking-[2px] font-medium">Home</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
