import type { Metadata } from "next";
import LayoutShell from "../layout-shell";

export const metadata: Metadata = {
  title: "Contact · Havilah Development and Management Services",
  description:
    "Get in touch with Havilah Development and Management Services Limited by phone, WhatsApp or email.",
};

const WHATSAPP = "https://wa.me/2348162649021";

export default function ContactPage() {
  return (
    <LayoutShell>
      <section className="bg-paper px-[8vw] py-[clamp(72px,10vh,120px)]">
        <div className="mx-auto max-w-[900px]">
          <p className="mb-4 text-[12px] uppercase tracking-[5px] text-gold-deep">
            Get In Touch
          </p>
          <h1 className="font-cormorant text-[clamp(38px,6vw,72px)] uppercase leading-[1.05]">
            Contact Us
          </h1>
          <p className="mt-5 max-w-[54ch] text-[15.5px] leading-[1.85] text-[#3f434b]">
            Reach us by phone, WhatsApp or email and a member of the team will
            get back to you.
          </p>

          <div className="mt-12 grid gap-10 border-t border-line pt-10 sm:grid-cols-2">
            <div>
              <p className="mb-2.5 text-[11.5px] uppercase tracking-[2.5px] text-stone">
                Talk
              </p>
              <a
                href="tel:+2348162649021"
                className="block text-[19px] text-ink hover:text-gold-deep"
              >
                0816 264 9021
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1.5 block text-[15px] text-[#3f434b] underline-offset-4 hover:text-gold-deep hover:underline"
              >
                Message on WhatsApp
              </a>
              <a
                href="mailto:hr.havilah@gmail.com"
                className="mt-1.5 block text-[15px] text-[#3f434b] underline-offset-4 hover:text-gold-deep hover:underline"
              >
                hr.havilah@gmail.com
              </a>
            </div>

            <div>
              <p className="mb-2.5 text-[11.5px] uppercase tracking-[2.5px] text-stone">
                Office Hours
              </p>
              <p className="text-[15px] leading-[1.9] text-[#3f434b]">
                Monday to Saturday
                <br />
                9am to 6pm
              </p>
            </div>
          </div>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-block rounded-full bg-ink px-10 py-4 text-[12.5px] uppercase tracking-[2.5px] text-paper transition-colors duration-300 hover:bg-gold-deep"
          >
            Start a WhatsApp chat
          </a>
        </div>
      </section>
    </LayoutShell>
  );
}
