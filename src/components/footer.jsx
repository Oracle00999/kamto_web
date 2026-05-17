import LogoMark from "./logoMark";

const footerContacts = [
  {
    label: "Email",
    value: "VoltEdgesystems3@gmail.com",
    href: "mailto:VoltEdgesystems3@gmail.com",
  },
  {
    label: "WhatsApp",
    value: "08163044926",
    href: "https://wa.me/2348163044926",
  },
  {
    label: "Address",
    value: "Alaba International Market, Ojo, Lagos State",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#10221f] px-5 py-10 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
        <div>
          <LogoMark light />
        </div>

        <div className="grid gap-4 text-sm sm:grid-cols-3 lg:justify-items-end">
          {footerContacts.map((item) => (
            <div
              key={item.label}
              className="w-full border border-white/10 bg-white/5 px-4 py-3 sm:min-h-24 lg:max-w-56"
            >
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#f2b84b]">
                {item.label}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  className="mt-2 block break-words leading-6 text-white/78 transition hover:text-white"
                >
                  {item.value}
                </a>
              ) : (
                <p className="mt-2 leading-6 text-white/78">{item.value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-5">
        <p className="text-xs font-semibold text-white/52">
          Copyright &copy; 2026 VOLTEDGE AUTOMATED SYSTEMS. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
