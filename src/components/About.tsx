import { Globe2, ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative bg-[#f6f5f3] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-4 flex items-center gap-2 text-sm text-neutral-500">
              <span className="h-1.5 w-1.5 rounded-full bg-neutral-900" /> Who I Am
            </p>
            <h2 className="text-4xl font-medium tracking-tight text-neutral-900 sm:text-5xl">
              About Me
            </h2>
            <p className="mt-6 max-w-sm text-neutral-500">
              I&apos;m a creative frontend developer with 8+ years of experience
              building responsive, scalable interfaces using React.js, Vue.js,
              AngularJS, and TypeScript. I turn product ideas into polished,
              accessible experiences that are both beautiful and performant.
            </p>

            <div className="mt-16 hidden lg:block">
              <svg width="90" height="90" viewBox="0 0 90 90" fill="none" className="text-neutral-300">
                <path
                  d="M5 15C40 5 70 35 55 65C45 85 15 80 15 60"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
                <path d="M8 55 L15 62 L22 54" stroke="currentColor" strokeWidth="1.5" fill="none" />
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="flex flex-col justify-between rounded-3xl border border-neutral-200 bg-white p-7">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 text-neutral-700">
                <Globe2 size={16} />
              </span>
              <div className="mt-10">
                <p className="text-5xl font-medium tracking-tight text-neutral-900">8+</p>
                <p className="mt-3 text-sm text-neutral-500">
                  Years crafting modern frontend experiences across web products.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl bg-neutral-200">
              <img
                src="/images/about-photo.jpg"
                alt="Bhupender Singh Rautela portrait"
                className="h-full w-full min-h-[260px] object-cover grayscale"
              />
            </div>

            <div className="sm:col-span-2 flex flex-col gap-5">
              <div className="flex items-start gap-4 rounded-2xl border border-neutral-200 bg-white p-5">
                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-neutral-900 text-xs text-white">
                  +
                </span>
                <p className="text-sm text-neutral-600">
                  Over the past 8+ years, I&apos;ve built and optimized frontend
                  systems for enterprise products, improving maintainability,
                  performance, and user experience through reusable components and
                  clean architecture.
                </p>
              </div>
              <div className="flex items-start gap-4 rounded-2xl border border-neutral-200 bg-white p-5">
                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-neutral-900 text-xs text-white">
                  +
                </span>
                <p className="text-sm text-neutral-600">
                  I work closely with UX designers, backend engineers, and QA to
                  turn Figma and Adobe XD designs into pixel-perfect, accessible,
                  production-ready interfaces that deliver business value.
                </p>
              </div>

              <div className="flex items-center gap-3 self-end rounded-full border border-neutral-200 bg-white py-2 pl-2 pr-4">
                <div className="relative h-9 w-9 overflow-hidden rounded-full">
                  <img
                    src="/images/avatar-small.jpg"
                    alt="Client avatar"
                    className="h-full w-full object-cover grayscale"
                  />
                </div>
                <span className="text-sm text-neutral-600">Core stack: React, Vue, TypeScript</span>
                <ArrowUpRight size={15} className="text-neutral-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
