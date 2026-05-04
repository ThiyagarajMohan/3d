import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
export const Route = createFileRoute("/about")({
    component: About,
    head: () => ({
        meta: [
            { title: "About — 3D Three Axis Print Solutions" },
            {
                name: "description",
                content: "We combine 3D printing, laser engraving, and lighted presentation to ship personalised statues, crystals, lithophanes, and shadow-box art.",
            },
            { property: "og:title", content: "About — 3D Three Axis Print Solutions" },
            {
                property: "og:description",
                content: "Personalised 3D-printed gifts, laser crystals, and illuminated décor from YOUR photos.",
            },
        ],
    }),
});
function About() {
    return (<div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
        Where your photos become <span className="text-primary text-glow">keepsakes</span>.
      </motion.h1>
      <p className="mt-6 text-base text-muted-foreground sm:text-lg">
        3D THREE AXIS Print Solutions specialises in sentimental gifts built from YOUR references —
        wearable or desk-sized statues, optical crystals with embedded 3D portraits, lithophanes
        that shine when lit, edge-lit acrylic LED pieces, and deep framed illuminated dioramas.
      </p>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 sm:gap-6">
        {[
            { k: "3D print", v: "PLA lithophanes, miniatures & props" },
            { k: "Laser crystal", v: "Subsurface engraving in optical glass" },
            { k: "LED gifting", v: "Acrylic plaques & backlit compositions" },
            { k: "Personal", v: "Every order drafted with proofs & care" },
        ].map((s) => (<div key={s.k} className="rounded-2xl glass p-6">
            <div className="font-display text-lg font-semibold text-primary sm:text-xl">{s.k}</div>
            <div className="mt-1 text-sm text-muted-foreground sm:text-base">{s.v}</div>
          </div>))}
      </div>

      <div className="mt-14 space-y-6 text-sm text-muted-foreground sm:text-base">
        <h2 className="font-display text-2xl text-foreground">How we collaborate</h2>
        <p>
          You send clear photos plus any text & dates. We propose materials, illumination (battery
          vs mains), stand or frame style, sizing, packaging, and a delivery window. Larger
          shadow-box compositions may need extra reference angles — we explain what&apos;s practical
          before we invoice.
        </p>
        <h2 className="font-display text-2xl text-foreground">Aftercare</h2>
        <p>
          Lithophanes and crystals are durable showpieces yet still fine objects — we share cleaning
          tips and safe handling once your piece arrives. For damage in transit we document
          replacements case by case.
        </p>
      </div>
    </div>);
}
