import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { coverImage } from "@/lib/products";
export function ProductCard({ product, index = 0 }) {
    return (<motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: index * 0.06 }}>
      <Link to="/products/$productId" params={{ productId: product.id }} className="group block overflow-hidden rounded-2xl glass transition-all hover:border-primary/50 hover:shadow-[0_0_40px_color-mix(in_oklab,var(--color-primary)_25%,transparent)]">
        <div className="relative aspect-square overflow-hidden bg-muted/40">
          <img src={coverImage(product)} alt="" className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]" loading="lazy" decoding="async"/>
          <span className="absolute left-3 top-3 rounded-full bg-background/80 px-2.5 py-1 text-xs backdrop-blur sm:left-4 sm:top-4 sm:px-3">
            {product.category}
          </span>
        </div>
        <div className="p-4 sm:p-5">
          <h3 className="font-display text-base font-semibold leading-snug sm:text-lg">
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{product.tagline}</p>
        </div>
      </Link>
    </motion.div>);
}
