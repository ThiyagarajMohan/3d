import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About — 3Dthreeaxis" },
      { name: "description", content: "A small studio of machinists, designers, and finishers crafting precision 3D sculptures." },
      { property: "og:title", content: "About — 3Dthreeaxis" },
      { property: "og:description", content: "A small studio crafting precision 3D sculptures." },
    ],
  }),
});

function About() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-display text-5xl font-bold md:text-6xl"
      >
        A studio between <span className="text-primary text-glow">code and metal</span>.
      </motion.h1>
      <p className="mt-6 text-lg text-muted-foreground">
        We're a small team of machinists, designers, and finishers obsessed with the meeting point of digital geometry and physical craft. Every sculpture starts as a parametric model and ends as a hand-polished object.
      </p>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {[
          { k: "10+", v: "years machining" },
          { k: "0.01mm", v: "tolerance on every part" },
          { k: "3-axis", v: "CNC + lathe + finishing" },
          { k: "100%", v: "hand-inspected" },
        ].map((s) => (
          <div key={s.k} className="rounded-2xl glass p-6">
            <div className="font-display text-4xl text-primary text-glow">{s.k}</div>
            <div className="mt-1 text-sm text-muted-foreground">{s.v}</div>
          </div>
        ))}
      </div>

      <div className="mt-14 space-y-6 text-muted-foreground">
        <h2 className="font-display text-2xl text-foreground">Our machines</h2>
        <p>
          A Haas VF-2 3-axis mill, a Mazak Quick Turn lathe, and a small army of polishing wheels, anodizing tanks, and bead blasters. Software is Fusion 360 and a lot of patience.
        </p>
        <h2 className="font-display text-2xl text-foreground">Quality</h2>
        <p>
          Every piece is measured on a Mitutoyo CMM before it ships. If it isn't right, we make it again — no questions, no surcharge.
        </p>
      </div>
    </div>
  );
}
