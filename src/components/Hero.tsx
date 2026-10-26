import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#121212] text-white">
      <Navbar />

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col px-6 pb-10 pt-28 sm:px-10">
        {/* side labels */}
        <span className="absolute left-4 top-1/2 hidden -translate-y-1/2 -rotate-90 text-xs tracking-[0.3em] text-white/40 sm:left-6 lg:block">
          FRONTEND DEVELOPER
        </span>
        <span className="absolute right-4 top-1/2 hidden -translate-y-1/2 rotate-90 text-xs tracking-[0.3em] text-white/40 sm:right-6 lg:block">
          2025
        </span>

        <div className="grid flex-1 grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-10">
            <div className="flex flex-wrap items-center gap-10 text-sm text-white/70">
              <div>
                <p className="text-2xl font-semibold text-white">8+</p>
                <p>Years experience</p>
              </div>
              <div className="h-10 w-px bg-white/15" />
              <div>
                <p className="text-2xl font-semibold text-white">4+</p>
                <p>Years at Omnicom</p>
              </div>
            </div>

            <div>
              <h1 className="font-serif text-[18vw] font-medium leading-[0.85] tracking-tight sm:text-[10rem] lg:text-[9rem]">
                Hello
              </h1>
              <p className="mt-6 max-w-md text-base text-white/60">
                — I&apos;m Bhupender Singh Rautela, a frontend developer creating
                responsive, high-performing interfaces with React, Vue, and TypeScript.
              </p>
            </div>
          </div>

          <div className="relative mx-auto h-[420px] w-full max-w-sm overflow-hidden rounded-[2rem] sm:h-[520px] lg:h-[620px] lg:max-w-none">
            <img
              src="/images/hero-portrait.jpg"
              alt="Portrait of Bhupender Singh Rautela, frontend developer"
              className="h-full w-full object-cover grayscale"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center">
          <a href="#about" className="flex items-center gap-2 text-sm text-white/60 transition hover:text-white">
            Scroll down <span className="animate-bounce">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
