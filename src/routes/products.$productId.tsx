import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ProductViewer } from "@/components/ProductViewer";
import { products } from "@/lib/products";

export const Route = createFileRoute("/products/$productId")({
  loader: ({ params }) => {
    const product = products.find((p) => p.id === params.productId);
    if (!product) throw notFound();
    return product;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.name} — 3Dthreeaxis` },
          { name: "description", content: loaderData.description },
          { property: "og:title", content: `${loaderData.name} — 3Dthreeaxis` },
          { property: "og:description", content: loaderData.description },
        ]
      : [],
  }),
  component: ProductDetail,
  notFoundComponent: () => (
    <div className="mx-auto max-w-xl px-6 py-20 text-center">
      <h1 className="font-display text-3xl">Product not found</h1>
      <Link to="/products" className="mt-4 inline-block text-primary hover:underline">
        ← Back to products
      </Link>
    </div>
  ),
});

function ProductDetail() {
  const product = Route.useLoaderData();
  const wa = `https://wa.me/15550103333?text=${encodeURIComponent(`Hi! I'd like to order: ${product.name}`)}`;

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <Link to="/products" className="text-sm text-muted-foreground hover:text-foreground">
        ← All products
      </Link>

      <div className="mt-6 grid gap-10 md:grid-cols-2">
        <div className="relative h-[480px] overflow-hidden rounded-3xl glass md:h-[620px]">
          <ProductViewer shape={product.shape} color={product.color} />
          <div className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-widest text-muted-foreground">
            drag • scroll to zoom
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <span className="w-fit rounded-full glass px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
            {product.category}
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold md:text-5xl">{product.name}</h1>
          <p className="mt-2 text-lg text-muted-foreground">{product.tagline}</p>

          <div className="mt-6 font-display text-4xl text-primary text-glow">
            ${product.price}
          </div>

          <p className="mt-6 leading-relaxed text-muted-foreground">{product.description}</p>

          <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
            <li>• Machined on 3-axis CNC, 0.01mm tolerance</li>
            <li>• Hand-finished, signed and numbered</li>
            <li>• Ships worldwide in protective case</li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={wa}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground shadow-[0_0_30px_color-mix(in_oklab,var(--color-primary)_50%,transparent)] transition-transform hover:scale-105"
            >
              Order on WhatsApp
            </a>
            <Link
              to="/contact"
              className="rounded-full border border-border px-6 py-3 font-medium transition-colors hover:bg-secondary"
            >
              Request quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
