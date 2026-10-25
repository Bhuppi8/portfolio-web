export default function CtaBanner() {
  return (
    <section className="bg-white px-6 pb-24 sm:px-10">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem]">
        <img
          src="/images/abstract-teal.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-70 grayscale"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative flex flex-col items-center gap-4 px-6 py-20 text-center text-white sm:py-28">
          <p className="text-xs uppercase tracking-[0.3em] text-white/60">
            Book Your Free Consultation Now!
          </p>
          <h2 className="max-w-2xl text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
            Exclusive Winter Deal Days Get a Free Consultation!
          </h2>
          <p className="max-w-md text-sm text-white/60">
            Take advantage of the limited-time offer to discuss your design
            needs with an experienced UI/UX and product designer.
          </p>
          <a
            href="#contact"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition hover:bg-white/90"
          >
            Let's talk ↗
          </a>
        </div>
      </div>
    </section>
  );
}
