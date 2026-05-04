import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BUSINESS_EMAIL, PHONE_DISPLAY, TEL_URL, WA_URL } from "@/lib/contact";
export const Route = createFileRoute("/contact")({
    component: Contact,
    head: () => ({
        meta: [
            { title: "Contact — 3D Three Axis Print Solutions" },
            {
                name: "description",
                content: "WhatsApp or email us to order custom 3D printed gifts, crystals, lithophanes, and LED personalised art.",
            },
            { property: "og:title", content: "Contact — 3D Three Axis Print Solutions" },
            {
                property: "og:description",
                content: "Reach 3aprintsolutions@gmail.com or WhatsApp 9092237193 for customised orders.",
            },
        ],
    }),
});
function Contact() {
    const [sent, setSent] = useState(false);
    return (<div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="font-display text-4xl font-bold sm:text-5xl md:text-6xl">
        Let's <span className="text-primary text-glow">create</span> something personal.
      </h1>
      <p className="mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
        Send your idea, references, occasion, and deadline. We reply on WhatsApp and email with
        material choices, timelines, and a clear quote — no showroom visit required.
      </p>

      <div className="mt-10 grid gap-8 md:mt-12 md:grid-cols-[1.35fr_1fr] md:gap-10">
        <form onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            const name = String(fd.get("name") ?? "").trim();
            const email = String(fd.get("email") ?? "").trim();
            const phone = String(fd.get("phone") ?? "").trim();
            const msg = String(fd.get("message") ?? "").trim();
            const subject = `Website enquiry — ${name || "Guest"}`;
            const body = `Name: ${name}\n` + `Email: ${email}\n` + `Phone: ${phone}\n\n` + `${msg}\n`;
            window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            setSent(true);
        }} className="space-y-5 rounded-3xl glass p-6 sm:p-7">
          <Field label="Name">
            <input name="name" required className="input" placeholder="Your name" autoComplete="name"/>
          </Field>
          <Field label="Email">
            <input name="email" required type="email" className="input" placeholder="you@example.com" autoComplete="email"/>
          </Field>
          <Field label="Phone (optional)">
            <input name="phone" type="tel" className="input" placeholder="+91 …" autoComplete="tel"/>
          </Field>
          <Field label="What would you like?">
            <textarea name="message" required rows={5} className="input resize-none" placeholder="Product type, dates, quantities, references — anything that helps."/>
          </Field>
          <button type="submit" className="w-full rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[0_0_30px_color-mix(in_oklab,var(--color-primary)_50%,transparent)] transition-transform hover:scale-[1.01] sm:text-base">
            {sent ? "Open your mail app ✓" : "Send via email app"}
          </button>
          <p className="text-xs leading-relaxed text-muted-foreground">
            This opens your default email client with{" "}
            <span className="text-foreground">{BUSINESS_EMAIL}</span> as the recipient. If nothing
            opens, copy the address from the sidebar and mail us manually.
          </p>
        </form>

        <div className="space-y-4 sm:space-y-5">
          <div className="rounded-2xl glass p-5 sm:p-6">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Email</div>
            <a href={`mailto:${BUSINESS_EMAIL}`} className="mt-1 block font-display text-base break-all text-primary hover:underline sm:text-lg">
              {BUSINESS_EMAIL}
            </a>
          </div>
          <div className="rounded-2xl glass p-5 sm:p-6">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Phone</div>
            <a href={TEL_URL} className="mt-1 block font-display text-base text-foreground hover:underline sm:text-lg">
              {PHONE_DISPLAY}
            </a>
          </div>
          <div className="rounded-2xl glass p-5 sm:p-6">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">WhatsApp</div>
            <a href={WA_URL} target="_blank" rel="noreferrer" className="mt-1 block font-display text-base text-primary hover:underline sm:text-lg">
              {PHONE_DISPLAY}
            </a>
            <p className="mt-2 text-xs text-muted-foreground">
              Same number for calls and WhatsApp chat.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .input {
          width: 100%;
          background: color-mix(in oklab, var(--color-background) 80%, transparent);
          border: 1px solid var(--color-border);
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
          color: var(--color-foreground);
          outline: none;
          transition: border-color .2s, box-shadow .2s;
          font-size: 16px;
        }
        @media (min-width: 640px) {
          .input {
            font-size: 0.875rem;
          }
        }
        .input:focus {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px color-mix(in oklab, var(--color-primary) 25%, transparent);
        }
      `}</style>
    </div>);
}
function Field({ label, children }) {
    return (<label className="block">
      <span className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      {children}
    </label>);
}
