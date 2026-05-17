import { useState } from "react";
import LogoMark from "./logoMark";

const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Values", href: "#values" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-30 border-b border-black/10 bg-[#f7f9f4]/92 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" className="flex items-center gap-3" onClick={closeMenu}>
          <LogoMark compact />
          <span className="leading-tight">
            <span className="block text-sm font-black tracking-[0.12em] text-[#10221f]">
              VOLTEDGE
            </span>
            <span className="block text-xs font-semibold text-[#56706a]">
              Automated Systems
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-[#425752] transition hover:text-[#116b4f]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="https://wa.me/2348163044926"
          className="hidden border border-[#116b4f] bg-[#116b4f] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#0c503c] md:block"
        >
          WhatsApp
        </a>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center border border-[#c9d8d1] text-[#10221f] transition hover:border-[#116b4f] hover:text-[#116b4f] md:hidden"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 h-0.5 w-5 bg-current transition ${
                menuOpen ? "top-2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-2 h-0.5 w-5 bg-current transition ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-5 bg-current transition ${
                menuOpen ? "top-2 -rotate-45" : "top-4"
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={`border-t border-black/10 bg-[#f7f9f4] px-5 py-4 shadow-xl shadow-[#10221f]/8 md:hidden ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <div className="mx-auto grid max-w-7xl gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="border border-[#dce7e1] bg-white px-4 py-3 text-sm font-black text-[#10221f] transition hover:border-[#116b4f] hover:text-[#116b4f]"
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/2348163044926"
            className="border border-[#116b4f] bg-[#116b4f] px-4 py-3 text-center text-sm font-black text-white transition hover:bg-[#0c503c]"
            onClick={closeMenu}
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
