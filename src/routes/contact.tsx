import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact — 3Dthreeaxis" },
      { name: "description", content: "Request a custom 3D sculpture, corporate gift run, or quote. We respond within 24 hours." },
      { property: "og:title", content: "Contact — 3Dthreeaxis" },
      { property: "og:description", content: "Request a custom sculpture or quote." },
    ],
  }),
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="font-display text-5xl font-bold md:text-6xl">
        Let's <span className="text-primary text-glow">make</span> something.
      </h1>
      <p className="mt-4 max-w-xl text-lg text-muted-foreground">
        Tell us about your project — a single gift, a corporate run, or a wild idea on a napkin.
      </p>

      <div className="mt-12 grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="rounded-3xl glass p-7 space-y-5"
        >
          <Field label="Name">
            <input required className="input" placeholder="Ada Lovelace" />
          </Field>
          <Field label="Email">
            <input required type="email" className="input" placeholder="ada@studio.com" />
          </Field>
          <Field label="What can we machine?">
            <textarea required rows={5} className="input resize-none" placeholder="Tell us about the piece, quantity, deadline…" />
          </Field>
          <button
            type="submit"
            className="w-full rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground shadow-[0_0_30px_color-mix(in_oklab,var(--color-primary)_50%,transparent)] transition-transform hover:scale-[1.02]"
          >
            {sent ? "Message sent ✓" : "Send message"}
          </button>
        </form>

        <div className="space-y-5">
          <div className="rounded-2xl glass p-6">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Email</div>
            <div className="mt-1 font-display text-lg">hello@3dthreeaxis.com</div>
          </div>
          <div className="rounded-2xl glass p-6">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">WhatsApp</div>
            <a
              href="https://wa.me/15550103333"
              target="_blank"
              rel="noreferrer"
              className="mt-1 block font-display text-lg text-primary hover:underline"
            >
              +1 (555) 010-3D3D
            </a>
          </div>
          <div className="rounded-2xl glass p-6">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Studio</div>
            <div className="mt-1 font-display text-lg">Brooklyn, NY</div>
            <div className="text-sm text-muted-foreground">By appointment</div>
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
        }
        .input:focus {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px color-mix(in oklab, var(--color-primary) 25%, transparent);
        }
      `}</style>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
