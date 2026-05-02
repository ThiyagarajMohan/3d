import { createFileRoute, Outlet, useMatches } from "@tanstack/react-router";
import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";

export const Route = createFileRoute("/products")({
  component: ProductsLayout,
  head: () => ({
    meta: [
      { title: "Products — 3Dthreeaxis" },
      { name: "description", content: "Browse precision 3-axis CNC sculptures and corporate gifts. Each piece interactive in 3D." },
      { property: "og:title", content: "Products — 3Dthreeaxis" },
      { property: "og:description", content: "Browse precision CNC sculptures and corporate gifts." },
    ],
  }),
});

function ProductsLayout() {
  const matches = useMatches();
  const isChild = matches.some((m) => m.routeId === "/products/$productId");
  if (isChild) return <Outlet />;
  return <ProductsIndex />;
}

const categories = ["All", "Gift", "Corporate", "Custom"] as const;

function ProductsIndex() {
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const [maxPrice, setMaxPrice] = useState(200);

  const filtered = products.filter(
    (p) => (cat === "All" || p.category === cat) && p.price <= maxPrice,
  );

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-10">
        <h1 className="font-display text-4xl font-bold md:text-5xl">All products</h1>
        <p className="mt-2 text-muted-foreground">{filtered.length} pieces, machined to order.</p>
      </div>

      {/* Filters */}
      <div className="mb-10 flex flex-col gap-4 rounded-2xl glass p-5 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
                cat === c
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <label className="flex items-center gap-3 text-sm text-muted-foreground">
          Max price: <span className="font-display text-foreground">${maxPrice}</span>
          <input
            type="range"
            min={50}
            max={200}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="accent-[var(--color-primary)]"
          />
        </label>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p, i) => (
          <ProductCard key={p.id} product={p} index={i} />
        ))}
      </div>
    </div>
  );
}
