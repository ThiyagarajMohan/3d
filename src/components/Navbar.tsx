import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full glass px-6 py-3">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold tracking-tight">
          <span className="inline-block h-3 w-3 rounded-full bg-primary shadow-[0_0_12px_var(--color-primary)]" />
          3D<span className="text-primary">three</span>axis
        </Link>
        <nav className="hidden gap-8 text-sm md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-[0_0_24px_color-mix(in_oklab,var(--color-primary)_45%,transparent)] transition-transform hover:scale-105"
        >
          Order Now
        </Link>
      </div>
    </header>
  );
}
