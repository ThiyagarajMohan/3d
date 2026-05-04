import { createFileRoute, Outlet, useMatches } from "@tanstack/react-router";
import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";
const categories = [
    "All",
    "Decor",
    "Figurines",
    "Keepsakes",
    "Crystal",
    "Lamps",
    "Shadow boxes",
];
export const Route = createFileRoute("/products")({
    component: ProductsLayout,
    head: () => ({
        meta: [
            { title: "Products — 3D Three Axis Print Solutions" },
            {
                name: "description",
                content: "Custom 3D printed figurines, laser crystal keepsakes, lithophane moon lamps, LED gifts, and illuminated shadow boxes — personalised from your photos.",
            },
            { property: "og:title", content: "Products — 3D Three Axis Print Solutions" },
            {
                property: "og:description",
                content: "Personalised 3D printing, laser crystals, and illuminated gifts. Browse photos of real orders.",
            },
        ],
    }),
});
function ProductsLayout() {
    const matches = useMatches();
    const isChild = matches.some((m) => m.routeId === "/products/$productId");
    if (isChild)
        return <Outlet />;
    return <ProductsIndex />;
}
function ProductsIndex() {
    const [cat, setCat] = useState("All");
    const filtered = products.filter((p) => cat === "All" || p.category === cat);
    return (<div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
      <div className="mb-8 sm:mb-10">
        <h1 className="font-display text-3xl font-bold sm:text-4xl md:text-5xl">Our products</h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
          Showroom shots on every card — decor, lithophanes, crystals, filament samples, name gifts,
          toys, and more. Ask on WhatsApp or email for custom colours and batch pricing.
        </p>
      </div>

      <div className="mb-8 flex flex-col gap-4 rounded-2xl glass p-4 sm:mb-10 sm:flex-row sm:items-center sm:justify-between sm:p-5">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (<button key={c} type="button" onClick={() => setCat(c)} className={`rounded-full px-3 py-1.5 text-xs transition-colors sm:px-4 sm:text-sm ${cat === c
                ? "bg-primary text-primary-foreground"
                : "border border-border text-muted-foreground hover:text-foreground"}`}>
              {c}
            </button>))}
        </div>
        <p className="text-xs text-muted-foreground sm:text-sm">
          Showing <span className="font-display text-foreground">{filtered.length}</span> designs
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {filtered.map((p, i) => (<ProductCard key={p.id} product={p} index={i}/>))}
      </div>
    </div>);
}
