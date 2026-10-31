import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

const links = [
  { label: "About Me", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#experience" },
  { label: "Blog", href: "#blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const desktopBreakpoint = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = () => {
      if (desktopBreakpoint.matches) setOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    desktopBreakpoint.addEventListener("change", closeOnDesktop);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      desktopBreakpoint.removeEventListener("change", closeOnDesktop);
    };
  }, [open]);

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <nav aria-label="Main navigation" className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7 sm:px-10">
        <a href="#top" className="flex items-center gap-2 text-sm font-semibold tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white">
            <Sparkles size={15} />
          </span>
          <span className="hidden text-white sm:inline">Bhupender Singh Rautela</span>
        </a>

        <ul className="hidden items-center gap-9 text-sm text-white/80 md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="transition hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden items-center gap-1.5 rounded-full border border-white/30 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white hover:text-black md:inline-flex"
        >
          Book A Call <ArrowUpRight size={15} />
        </a>

        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="text-white md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <div
        id="mobile-navigation"
        hidden={!open}
        className="mx-6 rounded-2xl bg-black/90 p-6 text-white backdrop-blur md:hidden"
      >
        <ul className="flex flex-col gap-4 text-base">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" onClick={() => setOpen(false)} className="font-medium">
              Book A Call →
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
