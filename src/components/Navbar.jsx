import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu } from "lucide-react";
import { GENERAL_ORDER_WHATSAPP_MESSAGE, waUrlWithText } from "@/lib/contact";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
const links = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
];
export function Navbar() {
    const [open, setOpen] = useState(false);
    return (<header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between gap-3 rounded-full glass px-4 py-3 sm:px-6">
        <Link to="/" className="flex min-w-0 shrink-0 items-center gap-2 rounded-md outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring sm:gap-3">
          <img src="/logo.png" alt="" className="h-10 w-auto shrink-0 object-contain md:h-11"/>
          <span className="truncate font-display text-xs font-bold uppercase leading-tight tracking-tight sm:text-sm md:text-base lg:text-lg">
            <span className="text-foreground">3D</span> <span className="text-primary">THREE</span>{" "}
            <span className="text-foreground">AXIS</span>
          </span>
        </Link>
        <nav className="hidden flex-1 justify-center gap-8 text-sm md:flex">
          {links.map((l) => (<Link key={l.to} to={l.to} className="text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-foreground" }} activeOptions={{ exact: l.to === "/" }}>
              {l.label}
            </Link>))}
        </nav>
        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="md:hidden rounded-md p-2 text-muted-foreground hover:text-foreground">
                <Menu className="h-5 w-5"/>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                {links.map((l) => (<Link key={l.to} to={l.to} className="text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-foreground" }} activeOptions={{ exact: l.to === "/" }} onClick={() => setOpen(false)}>
                    {l.label}
                  </Link>))}
              </nav>
            </SheetContent>
          </Sheet>
          <a href={waUrlWithText(GENERAL_ORDER_WHATSAPP_MESSAGE)} target="_blank" rel="noreferrer" className="rounded-full bg-primary px-3 py-2 text-center text-sm font-medium text-primary-foreground shadow-[0_0_24px_color-mix(in_oklab,var(--color-primary)_45%,transparent)] transition-transform hover:scale-105 sm:px-4">
            Order Now
          </a>
        </div>
      </div>
    </header>);
}
