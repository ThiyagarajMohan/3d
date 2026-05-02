import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import type { Product } from "@/lib/products";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
    >
      <Link
        to="/products/$productId"
        params={{ productId: product.id }}
        className="group block overflow-hidden rounded-2xl glass transition-all hover:border-primary/50 hover:shadow-[0_0_40px_color-mix(in_oklab,var(--color-primary)_25%,transparent)]"
      >
        <div
          className="relative aspect-square overflow-hidden"
          style={{
            background: `radial-gradient(circle at 50% 40%, ${product.color}33, transparent 70%)`,
          }}
        >
          <div
            className="absolute inset-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl transition-transform duration-500 group-hover:scale-150"
            style={{ background: product.color, opacity: 0.5 }}
          />
          <div
            className="absolute inset-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-2xl border-2 transition-transform duration-500 group-hover:rotate-45 group-hover:scale-110"
            style={{ borderColor: product.color, boxShadow: `0 0 30px ${product.color}` }}
          />
          <span className="absolute left-4 top-4 rounded-full bg-background/70 px-3 py-1 text-xs backdrop-blur">
            {product.category}
          </span>
        </div>
        <div className="p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-display text-lg font-semibold">{product.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{product.tagline}</p>
            </div>
            <span className="font-display text-lg text-primary">${product.price}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
