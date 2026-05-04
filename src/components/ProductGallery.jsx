import * as React from "react";
import { cn } from "@/lib/utils";
/** Full-width main image + optional thumbnail strip when multiple URLs are provided. Uses object-contain for sharp product shots. */
export function ProductGallery({ images, alt, className }) {
    const list = images.filter(Boolean);
    const [active, setActive] = React.useState(0);
    React.useEffect(() => {
        setActive(0);
    }, [images]);
    if (list.length === 0)
        return null;
    const current = list[Math.min(active, list.length - 1)];
    return (<div className={cn("space-y-4", className)}>
      <div className="relative overflow-hidden rounded-2xl glass sm:rounded-3xl">
        <img src={current} alt={`${alt} — view ${active + 1}`} className="mx-auto block w-full max-h-[min(78vh,720px)] object-contain" decoding="async" sizes="(max-width: 768px) 100vw, 50vw"/>
      </div>

      {list.length > 1 && (<div className="flex gap-2 overflow-x-auto pb-1 [-webkit-overflow-scrolling:touch]">
          {list.map((src, i) => (<button key={`${src}-${i}`} type="button" onClick={() => setActive(i)} className={cn("relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border-2 bg-muted/40 transition-all sm:h-20 sm:w-20", active === i
                    ? "border-primary ring-2 ring-primary/30"
                    : "border-transparent opacity-80 hover:opacity-100")} aria-label={`Show image ${i + 1}`}>
              <img src={src} alt="" className="h-full w-full object-contain p-0.5" loading="lazy"/>
            </button>))}
        </div>)}
    </div>);
}
