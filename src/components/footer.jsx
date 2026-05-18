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

const socialLinks = [
  {
    label: "X",
    href: "https://x.com/VoltEdgeS",
    icon: (
      <path
        fill="currentColor"
        d="M18.9 2h3.4l-7.5 8.6L23.6 22h-6.9l-5.4-7.1L5.1 22H1.7l8-9.2L1.2 2h7.1l4.9 6.5L18.9 2Zm-1.2 18h1.9L7.3 3.9h-2L17.7 20Z"
      />
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1E6dXPxkkh/",
    icon: (
      <path
        fill="currentColor"
        d="M22 12.1C22 6.6 17.5 2 12 2S2 6.6 2 12.1c0 5 3.7 9.2 8.4 9.9v-7H7.9v-2.9h2.5V9.9c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.2c-1.2 0-1.6.8-1.6 1.5v1.9h2.8l-.4 2.9h-2.4v7c4.8-.7 8.5-4.9 8.5-9.9Z"
      />
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/24th_savage_101?igsh=aWFiYnUxOG55ZWNm",
    icon: (
      <>
        <path
          fill="currentColor"
          d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm8.4 18A3.8 3.8 0 0 0 20 16.2V7.8A3.8 3.8 0 0 0 16.2 4H7.8A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4Z"
        />
        <path
          fill="currentColor"
          d="M12 7.1A4.9 4.9 0 1 1 12 17a4.9 4.9 0 0 1 0-9.9Zm0 7.9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5.1-8.2a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0Z"
        />
      </>
    ),
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
      <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-5 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs font-semibold text-white/52">
          Copyright &copy; 2026 VOLTEDGE AUTOMATED SYSTEMS. All rights
          reserved.
        </p>
        <div className="flex items-center gap-3">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center border border-white/12 bg-white/5 text-white/70 transition hover:border-[#f2b84b] hover:text-[#f2b84b]"
              aria-label={`Visit VOLTEDGE on ${item.label}`}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                {item.icon}
              </svg>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
