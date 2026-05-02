import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Hero3D } from "@/components/Hero3D";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const featured = products.slice(0, 3);

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
          <div className="flex flex-col justify-center">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex w-fit items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-widest text-muted-foreground"
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              3-axis CNC studio
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-5 font-display text-5xl font-bold leading-[1.05] md:text-7xl"
            >
              Sculpted in <span className="text-primary text-glow">metal</span>,
              <br /> rendered in light.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 max-w-md text-lg text-muted-foreground"
            >
              Premium 3-axis CNC sculptures, corporate gifts, and bespoke metalwork — machined to 0.01mm and finished by hand.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                to="/products"
                className="rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground shadow-[0_0_30px_color-mix(in_oklab,var(--color-primary)_50%,transparent)] transition-transform hover:scale-105"
              >
                Explore Products
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-border px-6 py-3 font-medium transition-colors hover:bg-secondary"
              >
                Custom Order →
              </Link>
            </motion.div>
          </div>

          <div className="relative h-[420px] md:h-[560px]">
            <div className="absolute inset-0 animate-pulse-glow rounded-3xl" />
            <div className="relative h-full overflow-hidden rounded-3xl glass">
              <Hero3D />
              <div className="pointer-events-none absolute bottom-3 right-4 text-[10px] uppercase tracking-widest text-muted-foreground">
                drag to rotate
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="font-display text-3xl font-bold md:text-4xl">Featured pieces</h2>
            <p className="mt-2 text-muted-foreground">A selection of our most-loved sculptures.</p>
          </div>
          <Link to="/products" className="hidden text-sm text-primary hover:underline md:block">
            View all →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center font-display text-3xl font-bold md:text-4xl">Why 3Dthreeaxis</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { title: "0.01mm tolerance", body: "Every piece is machined and inspected to aerospace-grade precision." },
            { title: "Hand-finished", body: "Polished, brushed, anodized — every surface is touched by a craftsperson." },
            { title: "Bespoke at scale", body: "From single gifts to thousand-unit corporate runs, with the same care." },
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
              <h3 className="font-display text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl glass p-10 text-center md:p-16">
          <div
            className="absolute inset-0 opacity-40"
            style={{ background: "var(--gradient-hero)" }}
          />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold md:text-5xl">
              Have an idea? <span className="text-primary text-glow">Let's machine it.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Send us your sketch, CAD file, or napkin drawing. We'll quote within 24 hours.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex rounded-full bg-primary px-8 py-3 font-medium text-primary-foreground shadow-[0_0_30px_color-mix(in_oklab,var(--color-primary)_50%,transparent)] transition-transform hover:scale-105"
            >
              Start a custom order
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
