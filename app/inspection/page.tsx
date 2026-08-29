"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";

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

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="name">Your name</label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={errors.name ? styles.invalid : ""}
          />
          {errors.name && (
            <span className={styles.err}>Please enter your name.</span>
          )}
        </div>
        <div className={styles.field}>
          <label htmlFor="phone">Phone number</label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="080 0000 0000"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={errors.phone ? styles.invalid : ""}
          />
          {errors.phone && (
            <span className={styles.err}>
              Please enter a phone number we can reach you on.
            </span>
          )}
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="property">Property of interest</label>
        <select
          id="property"
          value={property}
          onChange={(e) => setProperty(e.target.value)}
          className={errors.property ? styles.invalid : ""}
        >
          <option value="">Select a property</option>
          {propertyOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {errors.property && (
          <span className={styles.err}>
            Please choose which property you would like to see.
          </span>
        )}
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="date">Preferred date</label>
          <input
            id="date"
            type="date"
            min={minDate}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={errors.date ? styles.invalid : ""}
          />
          {errors.date && (
            <span className={styles.err}>
              Please choose a date from today onwards.
            </span>
          )}
        </div>
        <div className={styles.field}>
          <label htmlFor="time">Preferred time</label>
          <select
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className={errors.time ? styles.invalid : ""}
          >
            <option value="">Select a time</option>
            {timeOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.time && (
            <span className={styles.err}>Please choose a time.</span>
          )}
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="notes">Anything else? (optional)</label>
        <textarea
          id="notes"
          placeholder="Number of bedrooms, budget, questions for the team"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>

      <button type="submit" className={styles.submit}>
        Send via WhatsApp
      </button>
      <p className={styles.note}>
        This opens WhatsApp with your details filled in. Nothing is sent until
        you press send there.
      </p>
    </form>
  );
}

export default function InspectionPage() {
  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          HAVILAH<em>Development</em>
        </Link>
        <Link href="/" className={styles.back}>
          Back to site
        </Link>
      </nav>

      <div className={styles.wrap}>
        <div className={styles.head}>
          <p className="section-kicker">Havilah Development</p>
          <h1 className={styles.heading}>
            Book an Inspection
            <span className="script"> walk the site with us</span>
          </h1>
          <p className={styles.sub}>
            Tell us when suits you and which property you would like to see. We
            will confirm your slot and meet you on site.
          </p>
        </div>

        <div className={styles.grid}>
          <Suspense fallback={<p>Loading form...</p>}>
            <InspectionForm />
          </Suspense>

          <aside className={styles.aside}>
            <div className={styles.blk}>
              <h3>What to expect</h3>
              <ol>
                <li>We confirm your slot by phone or WhatsApp.</li>
                <li>You meet a member of the team on site.</li>
                <li>You walk the property and ask anything.</li>
                <li>No obligation to proceed afterwards.</li>
              </ol>
            </div>
            <div className={styles.blk}>
              <p className={styles.lbl}>Visit</p>
              <p>
                Eyebrow Area
                <br />
                Lekki, Lagos State
                <br />
                Nigeria
              </p>
            </div>
            <div className={styles.blk}>
              <p className={styles.lbl}>Talk</p>
              <p>
                <a href="tel:+2348162649021">0816 264 9021</a>
                <br />
                <a
                  href="https://wa.me/2348162649021"
                  target="_blank"
                  rel="noopener"
                >
                  Message on WhatsApp
                </a>
                <br />
                <a href="mailto:hr.havilah@gmail.com">hr.havilah@gmail.com</a>
              </p>
            </div>
            <div className={styles.blk}>
              <p className={styles.lbl}>Inspection hours</p>
              <p>
                Monday to Saturday
                <br />
                9am to 6pm
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
