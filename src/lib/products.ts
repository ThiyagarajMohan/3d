export type Shape = "knot" | "sphere" | "cube" | "cone" | "torus" | "icosa";

export type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  category: "Gift" | "Corporate" | "Custom";
  shape: Shape;
  color: string;
};

export const products: Product[] = [
  {
    id: "nebula-knot",
    name: "Nebula Knot",
    tagline: "Hand-finished aluminum sculpture",
    description:
      "Precision-machined on our 3-axis CNC, the Nebula Knot blends mathematical elegance with a mirror-polished finish. A statement piece for desks and shelves.",
    price: 149,
    category: "Gift",
    shape: "knot",
    color: "#22d3ee",
  },
  {
    id: "orbit-sphere",
    name: "Orbit Sphere",
    tagline: "Brushed brass paperweight",
    description:
      "A perfectly balanced sphere, micro-machined to 0.01mm tolerance. Cool to the touch, weighty in the hand, unforgettable on a desk.",
    price: 89,
    category: "Corporate",
    shape: "sphere",
    color: "#fbbf24",
  },
  {
    id: "monolith-cube",
    name: "Monolith",
    tagline: "Anodized titanium block",
    description:
      "Six perfect faces, one continuous bead-blasted finish. Engrave your logo for a corporate gift that won't end up in a drawer.",
    price: 119,
    category: "Corporate",
    shape: "cube",
    color: "#a78bfa",
  },
  {
    id: "apex-cone",
    name: "Apex",
    tagline: "Spun copper accent",
    description:
      "A single rising form, lathe-spun from solid copper and lacquered for a lifetime patina-free shine.",
    price: 99,
    category: "Gift",
    shape: "cone",
    color: "#fb7185",
  },
  {
    id: "halo-torus",
    name: "Halo",
    tagline: "Stainless steel ring",
    description:
      "A continuous loop, polished to a chrome-like finish. The geometry of infinity, sized for your hand.",
    price: 129,
    category: "Custom",
    shape: "torus",
    color: "#34d399",
  },
  {
    id: "icosa-prism",
    name: "Prism 20",
    tagline: "Faceted aluminum desk piece",
    description:
      "Twenty triangles, one mesmerizing object. Each facet catches light differently — a kinetic sculpture without moving parts.",
    price: 109,
    category: "Custom",
    shape: "icosa",
    color: "#22d3ee",
  },
];
