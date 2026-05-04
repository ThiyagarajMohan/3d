import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ProductGallery } from "@/components/ProductGallery";
import { waUrlWithText, whatsappOrderMessage } from "@/lib/contact";
import { products } from "@/lib/products";
export const Route = createFileRoute("/products/$productId")({
    loader: ({ params }) => {
        const product = products.find((p) => p.id === params.productId);
        if (!product)
            throw notFound();
        return product;
    },
    head: ({ loaderData }) => ({
        meta: loaderData
            ? [
                { title: `${loaderData.name} — 3D Three Axis` },
                { name: "description", content: loaderData.description },
                { property: "og:title", content: `${loaderData.name} — 3D Three Axis` },
                { property: "og:description", content: loaderData.description },
            ]
            : [],
    }),
    component: ProductDetail,
    notFoundComponent: () => (<div className="mx-auto max-w-xl px-4 py-16 text-center sm:px-6 sm:py-20">
      <h1 className="font-display text-2xl sm:text-3xl">Product not found</h1>
      <Link to="/products" className="mt-4 inline-block text-primary hover:underline">
        ← Back to products
      </Link>
    </div>),
});
function ProductDetail() {
    const product = Route.useLoaderData();
    const wa = waUrlWithText(whatsappOrderMessage(product.name));
    return (<div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
      <Link to="/products" className="text-sm text-muted-foreground hover:text-foreground">
        ← All products
      </Link>

      <div className="mt-6 grid gap-8 md:grid-cols-2 md:items-start lg:gap-12">
        <div className="space-y-6">
          {product.images.length > 0 && (<div className="overflow-hidden rounded-3xl glass">
              <img src={product.images[0]} alt={product.name} className="w-full object-contain" loading="lazy" decoding="async"/>
            </div>)}

          {product.images.length > 1 && <ProductGallery images={product.images} alt={product.name}/>}
        </div>

        <div className="flex min-w-0 flex-col pb-6">
          <span className="w-fit rounded-full glass px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
            {product.category}
          </span>
          <h1 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            {product.name}
          </h1>
          <p className="mt-2 text-base text-muted-foreground sm:text-lg">{product.tagline}</p>

          <p className="mt-6 leading-relaxed text-muted-foreground sm:text-base">
            {product.description}
          </p>

          <ul className="mt-6 space-y-2 text-sm text-muted-foreground sm:text-base">
            <li className="pl-1">
              Personalised from your photos, names, dates, or short messages.
            </li>
            <li className="pl-1">
              We confirm material, finish, size, and delivery before production.
            </li>
            <li className="pl-1">Prefer WhatsApp? Tap below for the fastest replies.</li>
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={wa} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center justify-center rounded-full bg-primary px-6 py-3 text-center text-sm font-medium text-primary-foreground shadow-[0_0_30px_color-mix(in_oklab,var(--color-primary)_50%,transparent)] transition-transform hover:scale-[1.02] sm:inline-flex sm:py-3">
              Order on WhatsApp
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-center text-sm font-medium transition-colors hover:bg-secondary">
              Email us a request
            </Link>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Quotations shared over email / WhatsApp — no prices listed online so we can quote
            exactly for your design.
          </p>
        </div>
      </div>
    </div>);
}
