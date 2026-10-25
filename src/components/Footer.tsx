const links = ["Home", "About Me", "Portfolio", "Services", "Blog"];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#121212] py-14 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 sm:flex-row sm:justify-between sm:px-10">
        <ul className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
          {links.map((l) => (
            <li key={l}>
              <a href="#top" className="transition hover:text-white">
                {l}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="mailto:hello@dnova.com"
          className="text-2xl font-medium tracking-tight transition hover:text-white/80 sm:text-3xl"
        >
          hello@dnova.com
        </a>
      </div>
      <p className="mt-10 text-center text-xs text-white/30">
        © {new Date().getFullYear()} D.Nova. All rights reserved.
      </p>
    </footer>
  );
}
