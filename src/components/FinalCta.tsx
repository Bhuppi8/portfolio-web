export default function FinalCta() {
  return (
    <section className="bg-[#f6f5f3] py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 text-center sm:px-10">
        <h2 className="text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl">
          Got a Vision? Let's Bring It to Life!
        </h2>
        <p className="mt-4 text-neutral-500">
          I'm always excited to collaborate on new and innovative projects.
          Whether you're starting from scratch or refining an existing idea.
        </p>
        <a
          href="#contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-7 py-3 text-sm font-medium text-white transition hover:bg-neutral-700"
        >
          Book A Call ↗
        </a>
      </div>
    </section>
  );
}
