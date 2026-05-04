import { Link } from "@tanstack/react-router";

import { BUSINESS_EMAIL, PHONE_DISPLAY, TEL_URL, WA_URL } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background/80">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:gap-10 sm:px-6 md:grid-cols-4 md:py-14">
        <div className="md:col-span-2">
          <div className="font-display text-lg font-bold uppercase tracking-tight sm:text-xl">
            <span className="text-foreground">3D</span> <span className="text-primary">THREE</span>{" "}
            <span className="text-foreground">AXIS</span>
          </div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Custom 3D printed figurines, laser-etched crystals, lithophane moon and heart lamps, LED
            illusion lights, and illuminated shadow-box frames — personalised from your photos.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/products" className="hover:text-foreground">
                Products
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-foreground">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-foreground">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href={`mailto:${BUSINESS_EMAIL}`} className="break-all hover:text-foreground">
                {BUSINESS_EMAIL}
              </a>
            </li>
            <li>
              <a href={TEL_URL} className="hover:text-foreground">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={WA_URL}
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:underline"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 px-4 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} 3D THREE AXIS · Print Solutions
      </div>
    </footer>
  );
}
