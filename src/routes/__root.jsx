import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import appCss from "../styles.css?url";
const themeScript = `
(() => {
  try {
    var root = document.documentElement;
    root.classList.remove("dark");
  } catch (e) {
    // fallback
  }
})();
`;
function NotFoundComponent() {
    return (<div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-glow">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Lost in the void</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          That page doesn't exist — or hasn't been machined yet.
        </p>
        <Link to="/" className="mt-6 inline-flex rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground">
          Go home
        </Link>
      </div>
    </div>);
}
export const Route = createRootRoute({
    head: () => ({
        meta: [
            { charSet: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { title: "3D THREE AXIS — Personalised 3D printing, crystals & lighted gifts" },
            {
                name: "description",
                content: "Custom figurines from photos, laser 3D crystals, lithophane moon lamps, LED illusion plaques, and illuminated shadow frames. Contact WhatsApp +91 9092237193 or 3aprintsolutions@gmail.com.",
            },
            { property: "og:title", content: "3D THREE AXIS — Personalised prints & crystals" },
            {
                property: "og:description",
                content: "Photos of real customised orders — quote by WhatsApp or email. No catalogue prices; every piece is personalised.",
            },
            { property: "og:type", content: "website" },
            { name: "twitter:card", content: "summary_large_image" },
        ],
        links: [{ rel: "stylesheet", href: appCss }],
    }),
    shellComponent: RootShell,
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
});
function RootShell({ children }) {
    return (<html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
            __html: themeScript,
        }}/>
        <HeadContent />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet"/>
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>);
}
function RootComponent() {
    return (<div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        <Outlet />
      </main>
      <Footer />
    </div>);
}
