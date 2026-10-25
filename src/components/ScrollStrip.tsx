import { ArrowUpRight } from "lucide-react";

const items = [
  { img: "/images/still-life-1.jpg", title: "Aroma Studio website", client: "Squeeze" },
  { img: "/images/still-life-2.jpg", title: "Halo Digital Agency website", client: "Squeeze" },
  { img: "/images/still-life-3.jpg", title: "Digital Agency website", client: "Squeeze" },
  { img: "/images/abstract-purple-cubes.jpg", title: "Cube Labs website", client: "Squeeze" },
];

export default function ScrollStrip() {
  return (
    <section className="bg-[#f6f5f3] pb-24">
      <div className="flex gap-6 overflow-x-auto px-6 pb-4 sm:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map((item, i) => (
          <div key={i} className="group relative flex-none">
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
              <span className="text-neutral-400">For Squeeze</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
