import { ArrowUpRight } from "lucide-react";

const roles = [
  {
    company: "Omnicom (Annalect), Gurugram, Haryana, India",
    period: "Aug 2022 – Present · 4 yrs",
    desc: "Frontend Developer · Built and modernized responsive interfaces using React.js, Vue.js, TypeScript, and Redux while leading AngularJS-to-Vue migration initiatives.",
    tags: ["React", "Vue", "TypeScript"],
  },
  {
    company: "Chetu, Inc., Noida, Uttar Pradesh, India",
    period: "Mar 2022 – Jul 2022 · 5 mos",
    desc: "Senior Frontend Developer · Delivered scalable React apps and reusable UI components with REST API integration and performance optimizations.",
    tags: ["React", "UI Components", "Performance"],
  },
  {
    company: "Chetu, Inc., Noida, Uttar Pradesh, India",
    period: "Feb 2021 – Mar 2022 · 1 yr 2 mos",
    desc: "UI Frontend Developer · Developed responsive, accessible frontend features in Agile teams using HTML5, CSS3, JavaScript, React, and TypeScript.",
    tags: ["JavaScript", "HTML5", "CSS3"],
  },
];

const featured = {
  company: "Roasted Web Technology Pvt. Ltd., Noida, Uttar Pradesh, India",
  period: "Dec 2017 – Nov 2020 · 3 yrs",
  desc: "Web / UI Designer · Specialized in responsive layouts, PSD-to-HTML conversion, Adobe XD mockups, WordPress customization, and design-to-code workflows.",
  tags: ["UX", "Design Systems", "WordPress"],
  images: ["/images/still-life-1.jpg", "/images/still-life-3.jpg", "/images/abstract-teal.jpg"],
};

const last = {
  company: "Graphic Era Hill University, Bhimtal, Uttarakhand",
  period: "2011 – 2015",
  desc: "B.Tech, Information Technology",
  tags: ["IT", "Engineering"],
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
              Explore My Frontend Journey
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-neutral-500">
              With 8+ years of frontend development experience, I&apos;ve built
              responsive web applications, led migrations, and partnered with
              design and backend teams to deliver high-quality digital products.
            </p>
            <a href="#contact" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-neutral-900 underline underline-offset-4">
              Let&apos;s Connect ↗
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
