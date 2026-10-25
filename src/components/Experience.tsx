import { ArrowUpRight } from "lucide-react";

const roles = [
  {
    company: "Creative Minds, New York, USA",
    period: "February 2022 - Present",
    desc: "Innovated designs, New York, Senior Product Designer",
    tags: ["UI/UX", "Branding"],
  },
  {
    company: "Innovative Designs Inc, USA",
    period: "January 2020 - February 2022",
    desc: "Led UX/UI, San Francisco. Crafting tomorrow's experiences",
    tags: ["UI/UX", "Branding"],
  },
  {
    company: "Visionary Creations Ltd, UK",
    period: "February 2022 - Present",
    desc: "Principal Designer, Berlin. Crafting tomorrow's experiences",
    tags: ["Branding", "UI/UX"],
  },
];

const featured = {
  company: "FutureTech, Berlin, Germany",
  period: "February 2022 - Present",
  desc: "From crafting seamless user experiences to leading strategic product design initiatives, each experience has shaped my approach and strengthened my passion for solving design challenges.",
  tags: ["Branding", "UI/UX"],
  images: ["/images/still-life-1.jpg", "/images/still-life-3.jpg", "/images/abstract-teal.jpg"],
};

const last = {
  company: "Expert Designs Inc, USA",
  period: "February 2022 - Present",
  desc: "Innovated designs, New York, Senior Product Designer",
  tags: ["UI/UX", "Branding"],
};

function Tag({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-neutral-300 px-3 py-1 text-xs text-neutral-600">
      {label}
    </span>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="flex flex-col justify-between gap-6 border-b border-neutral-200 pb-10 lg:flex-row lg:items-end">
          <div>
            <p className="mb-4 flex items-center gap-2 text-sm text-neutral-500">
              <span className="h-1.5 w-1.5 rounded-full bg-neutral-900" /> Experiences
            </p>
            <h2 className="max-w-md text-4xl font-medium tracking-tight text-neutral-900 sm:text-5xl">
              Explore My Design Journey
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-neutral-500">
              Over the past 4+ years, I've had the opportunity to work on a
              wide range of design projects, collaborating with diverse teams
              and clients to bring creative visions to life.
            </p>
            <a href="#contact" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-neutral-900 underline underline-offset-4">
              Book A Call ↗
            </a>
          </div>
        </div>

        <div className="divide-y divide-neutral-200">
          {roles.map((r) => (
            <div
              key={r.company}
              className="grid grid-cols-1 gap-3 py-8 sm:grid-cols-[1fr_1fr_auto] sm:items-center sm:gap-6"
            >
              <div>
                <p className="font-medium text-neutral-900">{r.company}</p>
                <p className="mt-1 text-sm text-neutral-400">{r.period}</p>
              </div>
              <p className="text-sm text-neutral-500">{r.desc}</p>
              <div className="flex gap-2 sm:justify-end">
                {r.tags.map((t) => (
                  <Tag key={t} label={t} />
                ))}
              </div>
            </div>
          ))}

          <div className="py-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="font-medium text-neutral-900">{featured.company}</p>
                <p className="mt-1 text-sm text-neutral-400">{featured.period}</p>
              </div>
              <div className="flex gap-2">
                {featured.tags.map((t) => (
                  <Tag key={t} label={t} />
                ))}
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[auto_1fr_auto] lg:items-center">
              <div className="flex gap-3">
                {featured.images.map((img, i) => (
                  <div key={i} className="h-24 w-24 overflow-hidden rounded-2xl bg-neutral-200 sm:h-28 sm:w-28">
                    <img src={img} alt="" className="h-full w-full object-cover" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-neutral-500 lg:px-6">{featured.desc}</p>
              <a
                href="#portfolio"
                className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-neutral-900 text-white transition hover:bg-neutral-700"
              >
                <ArrowUpRight size={20} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 py-8 sm:grid-cols-[1fr_1fr_auto] sm:items-center sm:gap-6">
            <div>
              <p className="font-medium text-neutral-900">{last.company}</p>
              <p className="mt-1 text-sm text-neutral-400">{last.period}</p>
            </div>
            <p className="text-sm text-neutral-500">{last.desc}</p>
            <div className="flex gap-2 sm:justify-end">
              {last.tags.map((t) => (
                <Tag key={t} label={t} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
