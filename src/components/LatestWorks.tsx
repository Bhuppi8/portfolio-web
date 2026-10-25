import { ArrowUpRight } from "lucide-react";

const works = [
  { img: "/images/abstract-teal.jpg", title: "Halo Digital Agency website", site: "" },
  { img: "/images/abstract-purple-cubes.jpg", title: "Halo Digital Agency website", site: "halodigital.xyz" },
  { img: "/images/still-life-2.jpg", title: "Halo Digital Agency website", site: "" },
];

export default function LatestWorks() {
  return (
    <section id="portfolio" className="bg-[#f6f5f3] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 text-center sm:px-10">
        <p className="mb-4 flex items-center justify-center gap-2 text-sm text-neutral-500">
          <span className="h-1.5 w-1.5 rounded-full bg-neutral-900" /> Portfolio
        </p>
        <h2 className="text-4xl font-medium tracking-tight text-neutral-900 sm:text-5xl">
          Latest Works
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
          {works.map((w, i) => (
            <div key={i} className="group">
              <div className="relative h-72 overflow-hidden rounded-3xl bg-neutral-300">
                <img
                  src={w.img}
                  alt={w.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                {w.site && (
                  <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
                    <ArrowUpRight size={18} />
                  </span>
                )}
                {w.site && (
                  <span className="absolute bottom-4 right-4 rounded-full bg-white/90 px-3 py-1 text-xs text-neutral-700">
                    {w.site}
                  </span>
                )}
              </div>
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="font-medium text-neutral-800">{w.title}</span>
                <span className="text-neutral-400">For Squeeze</span>
              </div>
            </div>
          ))}
        </div>

        <a
          href="#portfolio"
          className="mt-14 inline-flex items-center gap-2 text-sm font-medium text-neutral-900 underline underline-offset-4"
        >
          Check out More → View More
        </a>
      </div>
    </section>
  );
}
