import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

const items = [
  { img: "/images/still-life-1.jpg", title: "Vue Migration", client: "Legacy upgrade" },
  { img: "/images/still-life-2.jpg", title: "Product Dashboard", client: "React & Redux" },
  { img: "/images/still-life-3.jpg", title: "CMS Platform", client: "Figma to UI" },
  { img: "/images/abstract-purple-cubes.jpg", title: "Responsive Web App", client: "Cross-device UX" },
];

export default function ScrollStrip() {
  const stripRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;

    const updateScrollButtons = () => {
      setCanScrollLeft(strip.scrollLeft > 0);
      setCanScrollRight(strip.scrollLeft + strip.clientWidth < strip.scrollWidth - 1);
    };

    updateScrollButtons();
    strip.addEventListener("scroll", updateScrollButtons, { passive: true });
    window.addEventListener("resize", updateScrollButtons);

    return () => {
      strip.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, []);

  const scrollStrip = (direction: -1 | 1) => {
    const strip = stripRef.current;
    if (!strip) return;
    strip.scrollBy({
      left: direction * Math.max(strip.clientWidth * 0.8, 320),
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#f6f5f3] pb-24">
      <div className="mb-3 flex justify-end gap-2 px-6 sm:px-10">
        <button
          type="button"
          onClick={() => scrollStrip(-1)}
          disabled={!canScrollLeft}
          aria-label="Scroll projects left"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ArrowLeft size={18} />
        </button>
        <button
          type="button"
          onClick={() => scrollStrip(1)}
          disabled={!canScrollRight}
          aria-label="Scroll projects right"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ArrowRight size={18} />
        </button>
      </div>
      <div
        ref={stripRef}
        role="region"
        aria-label="Selected projects"
        tabIndex={0}
        className="flex gap-6 overflow-x-auto px-6 pb-4 [scrollbar-width:none] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 sm:px-10 [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => (
          <div key={item.title} className="group relative flex-none">
            <div className="relative h-[320px] w-[280px] overflow-hidden rounded-3xl bg-neutral-300 sm:h-[380px] sm:w-[360px]">
              <img
                src={item.img}
                alt={item.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
                <ArrowUpRight size={18} />
              </span>
            </div>
            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="font-medium text-neutral-800">{item.title}</span>
              <span className="text-neutral-400">{item.client}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
