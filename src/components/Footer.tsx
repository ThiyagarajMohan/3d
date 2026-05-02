import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-display text-xl font-bold">
            <span className="inline-block h-3 w-3 rounded-full bg-primary shadow-[0_0_12px_var(--color-primary)]" />
            3D<span className="text-primary">three</span>axis
          </div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Precision 3-axis CNC sculptures and bespoke metalwork. Designed in-house, machined to 0.01mm.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/products" className="hover:text-foreground">Products</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>hello@3dthreeaxis.com</li>
            <li>+1 (555) 010-3D3D</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} 3Dthreeaxis. Crafted with light & metal.
      </div>
    </footer>
  );
}
