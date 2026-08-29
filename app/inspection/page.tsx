"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const WHATSAPP_NUMBER = "2348162649021";

const propertyOptions = [
  "Havilah Court 5",
  "Havilah Court 5 Annex",
  "Havilah Court 4",
  "Havilah Court 3",
  "Havilah Court 2",
  "Havilah Court 1",
  "Koinonia",
  "Homewood Residences",
  "Havilah Court 6",
  "Not sure yet, advise me",
];

const timeOptions = [
  "Morning, 9am to 12pm",
  "Afternoon, 12pm to 4pm",
  "Evening, 4pm to 6pm",
];

function InspectionForm() {
  const searchParams = useSearchParams();
  const prefill = searchParams.get("property") || "";

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [property, setProperty] = useState(prefill);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (prefill) setProperty(prefill);
  }, [prefill]);

  const minDate = new Date().toISOString().split("T")[0];

  function validate() {
    const phoneDigits = (phone.match(/\d/g) || []).length;
    const dateOk = date >= minDate;
    const newErrors: Record<string, boolean> = {
      name: !name.trim(),
      phone: phoneDigits < 7,
      property: !property,
      date: !dateOk,
      time: !time,
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    const readableDate = new Date(date + "T00:00:00").toLocaleDateString(
      "en-GB",
      { weekday: "long", day: "numeric", month: "long", year: "numeric" }
    );

    const lines = [
      "Hello Havilah, I would like to book an inspection.",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Property: ${property}`,
      `Preferred date: ${readableDate}`,
      `Preferred time: ${time}`,
    ];
    if (notes.trim()) lines.push(`Notes: ${notes.trim()}`);

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank",
      "noopener"
    );
  }

  const inputClass =
    "w-full bg-transparent border-0 border-b border-line py-[11px] px-0.5 font-jost text-[15px] text-ink rounded-none transition-colors duration-250 focus:outline-none focus:border-gold-deep appearance-none cursor-pointer";
  const invalidClass = "!border-[#a3372f]";

  return (
    <form className="space-y-[22px]" onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-2 gap-[22px] max-md:grid-cols-1 max-md:gap-0">
        <div>
          <label htmlFor="name" className="block text-[11.5px] tracking-[2.5px] uppercase text-stone mb-2">
            Your name
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`${inputClass} ${errors.name ? invalidClass : ""}`}
          />
          {errors.name && (
            <span className="block mt-[7px] text-[12px] tracking-[1px] text-[#a3372f]">
              Please enter your name.
            </span>
          )}
        </div>
        <div>
          <label htmlFor="phone" className="block text-[11.5px] tracking-[2.5px] uppercase text-stone mb-2">
            Phone number
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="080 0000 0000"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={`${inputClass} ${errors.phone ? invalidClass : ""}`}
          />
          {errors.phone && (
            <span className="block mt-[7px] text-[12px] tracking-[1px] text-[#a3372f]">
              Please enter a phone number we can reach you on.
            </span>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="property" className="block text-[11.5px] tracking-[2.5px] uppercase text-stone mb-2">
          Property of interest
        </label>
        <select
          id="property"
          value={property}
          onChange={(e) => setProperty(e.target.value)}
          className={`${inputClass} ${errors.property ? invalidClass : ""}`}
          style={{
            backgroundImage:
              "linear-gradient(45deg, transparent 50%, var(--color-stone) 50%), linear-gradient(135deg, var(--color-stone) 50%, transparent 50%)",
            backgroundPosition: "calc(100% - 13px) 20px, calc(100% - 8px) 20px",
            backgroundSize: "5px 5px, 5px 5px",
            backgroundRepeat: "no-repeat",
          }}
        >
          <option value="">Select a property</option>
          {propertyOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {errors.property && (
          <span className="block mt-[7px] text-[12px] tracking-[1px] text-[#a3372f]">
            Please choose which property you would like to see.
          </span>
        )}
      </div>

      <div className="grid grid-cols-2 gap-[22px] max-md:grid-cols-1 max-md:gap-0">
        <div>
          <label htmlFor="date" className="block text-[11.5px] tracking-[2.5px] uppercase text-stone mb-2">
            Preferred date
          </label>
          <input
            id="date"
            type="date"
            min={minDate}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={`${inputClass} ${errors.date ? invalidClass : ""}`}
          />
          {errors.date && (
            <span className="block mt-[7px] text-[12px] tracking-[1px] text-[#a3372f]">
              Please choose a date from today onwards.
            </span>
          )}
        </div>
        <div>
          <label htmlFor="time" className="block text-[11.5px] tracking-[2.5px] uppercase text-stone mb-2">
            Preferred time
          </label>
          <select
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className={`${inputClass} ${errors.time ? invalidClass : ""}`}
          >
            <option value="">Select a time</option>
            {timeOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.time && (
            <span className="block mt-[7px] text-[12px] tracking-[1px] text-[#a3372f]">
              Please choose a time.
            </span>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="notes" className="block text-[11.5px] tracking-[2.5px] uppercase text-stone mb-2">
          Anything else? (optional)
        </label>
        <textarea
          id="notes"
          placeholder="Number of bedrooms, budget, questions for the team"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className={`${inputClass} resize-y min-h-[74px] leading-[1.6]`}
        />
      </div>

      <button
        type="submit"
        className="mt-3 inline-flex items-center gap-[11px] border border-ink bg-ink text-paper rounded-full py-[15px] px-8 font-jost text-[12px] tracking-[2.5px] uppercase cursor-pointer transition-colors duration-300 hover:bg-transparent hover:text-ink"
      >
        Send via WhatsApp
      </button>
      <p className="mt-4 text-[12px] leading-[1.7] text-stone">
        This opens WhatsApp with your details filled in. Nothing is sent until
        you press send there.
      </p>
    </form>
  );
}

export default function InspectionPage() {
  return (
    <div className="min-h-screen bg-paper">
      <nav className="absolute top-0 left-0 right-0 z-10 flex justify-between items-start py-[26px] px-[34px] text-ink max-md:py-5 max-md:px-[22px]">
        <Link href="/" className="font-cormorant text-[20px] tracking-[3px] leading-tight">
          HAVILAH
          <em className="font-great-vibes font-normal text-[15px] block tracking-[1px] opacity-80">
            Development
          </em>
        </Link>
        <Link href="/" className="text-[12px] tracking-[2px] uppercase border-b border-current pb-[2px]">
          Back to site
        </Link>
      </nav>

      <div className="max-w-[1120px] mx-auto px-[6vw] pt-[150px] pb-[90px] max-md:pt-[130px] max-md:px-7 max-md:pb-[70px]">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[5px] uppercase text-gold-deep mb-3.5">
            Havilah Development
          </p>
          <h1 className="text-[clamp(38px,6vw,76px)] leading-[1.05] uppercase font-cormorant font-medium">
            Book an Inspection
            <span className="block font-great-vibes text-gold normal-case text-[clamp(24px,3.4vw,40px)] mt-1">
              walk the site with us
            </span>
          </h1>
          <p className="max-w-[560px] mx-auto mt-[22px] text-[14.5px] leading-[1.85] text-[#3f434b]">
            Tell us when suits you and which property you would like to see. We
            will confirm your slot and meet you on site.
          </p>
        </div>

        <div className="grid grid-cols-[1.25fr_0.75fr] gap-[5vw] items-start max-md:grid-cols-1 max-md:gap-[52px]">
          <Suspense fallback={<p>Loading form...</p>}>
            <InspectionForm />
          </Suspense>

          <aside className="border-l border-line pl-[5vw] max-md:border-l-0 max-md:border-t max-md:border-line max-md:pl-0 max-md:pt-[38px]">
            <div className="mb-8">
              <h3 className="text-[22px] mb-2 font-cormorant font-medium">What to expect</h3>
              <ol className="m-0 pl-[18px]">
                <li className="text-[14px] leading-[1.85] text-[#3f434b] mb-[7px]">We confirm your slot by phone or WhatsApp.</li>
                <li className="text-[14px] leading-[1.85] text-[#3f434b] mb-[7px]">You meet a member of the team on site.</li>
                <li className="text-[14px] leading-[1.85] text-[#3f434b] mb-[7px]">You walk the property and ask anything.</li>
                <li className="text-[14px] leading-[1.85] text-[#3f434b] mb-[7px]">No obligation to proceed afterwards.</li>
              </ol>
            </div>
            <div className="mb-8">
              <p className="text-[11.5px] tracking-[2.5px] uppercase text-stone mb-[9px]">Visit</p>
              <p className="text-[14px] leading-[1.85] text-[#3f434b]">
                Eyebrow Area<br />Lekki, Lagos State<br />Nigeria
              </p>
            </div>
            <div className="mb-8">
              <p className="text-[11.5px] tracking-[2.5px] uppercase text-stone mb-[9px]">Talk</p>
              <p className="text-[14px] leading-[1.85] text-[#3f434b]">
                <a href="tel:+2348162649021" className="border-b border-line hover:border-gold-deep">0816 264 9021</a><br />
                <a href="https://wa.me/2348162649021" target="_blank" rel="noopener" className="border-b border-line hover:border-gold-deep">Message on WhatsApp</a><br />
                <a href="mailto:hr.havilah@gmail.com" className="border-b border-line hover:border-gold-deep">hr.havilah@gmail.com</a>
              </p>
            </div>
            <div>
              <p className="text-[11.5px] tracking-[2.5px] uppercase text-stone mb-[9px]">Inspection hours</p>
              <p className="text-[14px] leading-[1.85] text-[#3f434b]">
                Monday to Saturday<br />9am to 6pm
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
