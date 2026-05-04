import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

import { ProductCard } from "@/components/ProductCard";
import type { Product } from "@/lib/products";
import { coverImage, products } from "@/lib/products";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const featured: Product[] = [
    products.find((p) => p.id === "personalised-key-chain"),
    ...products.slice(0, 2),
  ].filter(Boolean) as Product[];

  return (
    <div className="overflow-hidden">
      <section className="relative">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:gap-10 sm:px-6 md:grid-cols-2 md:items-center md:py-24 lg:gap-12">
          <div className="flex min-w-0 flex-col justify-center">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex w-fit items-center gap-2 rounded-full glass px-3 py-1.5 text-[10px] uppercase tracking-widest text-muted-foreground sm:px-4 sm:text-xs"
            >
              <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-primary" />
              3D THREE AXIS · personalised gifts
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-4 font-display text-4xl font-bold leading-[1.08] sm:mt-5 sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Your memory, <span className="text-primary text-glow">printed in 3D</span>,<br />{" "}
              crystal and light.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-5 max-w-md text-base text-muted-foreground sm:mt-6 sm:text-lg"
            >
              Custom mini statues from photos, laser 3D crystals for weddings and anniversaries,
              lithophane moon lamps, LED illusion name lights, and backlit layered shadow frames —
              crafted to order.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
            >
              <Link
                to="/products"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[0_0_30px_color-mix(in_oklab,var(--color-primary)_50%,transparent)] transition-transform hover:scale-105 sm:text-base"
              >
                View products
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-center text-sm font-medium transition-colors hover:bg-secondary sm:text-base"
              >
                Get a quote →
              </Link>
            </motion.div>
          </div>

          <div className="relative mx-auto w-full max-w-xl md:max-w-none md:mx-0">
            <div
              className="absolute inset-2 animate-pulse-glow rounded-3xl blur-sm sm:inset-3"
              aria-hidden
            />
            <div className="relative isolate rounded-3xl glass p-2 sm:p-3 md:p-4">
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
                {products.slice(0, 6).map((p) => (
                  <Link
                    key={p.id}
                    to="/products/$productId"
                    params={{ productId: p.id }}
                    className="group relative aspect-square overflow-hidden rounded-2xl bg-muted/25 ring-1 ring-border/50 transition-all hover:ring-primary/45 hover:shadow-[0_0_24px_color-mix(in_oklab,var(--color-primary)_18%,transparent)]"
                  >
                    <img
                      src={coverImage(p)}
                      alt={p.name}
                      className="h-full w-full object-contain p-1 sm:p-1.5"
                      loading="lazy"
                      decoding="async"
                      sizes="(max-width: 768px) 45vw, 25vw"
                    />
                  </Link>
                ))}
              </div>
              <p className="mt-3 text-center text-[10px] uppercase tracking-widest text-muted-foreground sm:text-xs">
                Gallery · crisp photos of real orders — tap any tile
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="mb-8 flex flex-col gap-6 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold sm:text-3xl md:text-4xl">
              Featured custom work
            </h2>
            <p className="mt-2 max-w-lg text-sm text-muted-foreground sm:text-base">
              Photos from orders we have produced — browse full gallery for crystals, lamps, and
              layered frames.
            </p>
          </div>
          <Link
            to="/products"
            className="text-sm font-medium text-primary hover:underline sm:inline-block"
          >
            All products →
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {featured.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <h2 className="text-center font-display text-2xl font-bold sm:text-3xl md:text-4xl">
          Why 3D THREE AXIS
        </h2>
        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {[
            {
              title: "Designed around your photo",
              body: "We walk you through art style, inscription, sizing, lighting, and base options before anything is machined or etched.",
            },
            {
              title: "True custom fabrication",
              body: "3D printing lithophanes, laser subsurface engraving in crystal, CNC or layered shadow scenes — matched to each gift.",
            },
            {
              title: "Direct chat & quoting",
              body: "Reach us by WhatsApp or email for fast timelines, proofs, packaging, and delivery across India.",
            },
          ].map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl glass p-6"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 font-display text-primary">
                0{i + 1}
              </div>
              <h3 className="font-display text-lg font-semibold sm:text-xl">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground sm:text-base">{f.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="relative overflow-hidden rounded-3xl glass p-8 text-center sm:p-12 md:p-16">
          <div
            className="absolute inset-0 opacity-40"
            style={{ background: "var(--gradient-hero)" }}
          />
          <div className="relative">
            <h2 className="font-display text-2xl font-bold sm:text-3xl md:text-5xl">
              Ready for a personalised piece?{" "}
              <span className="text-primary text-glow">Message us today.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
              Share reference photos or product ideas — we reply with what's possible on your
              timeline and budget.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground shadow-[0_0_30px_color-mix(in_oklab,var(--color-primary)_50%,transparent)] transition-transform hover:scale-105 sm:px-8 sm:text-base"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
