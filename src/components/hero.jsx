import heroImage from "../assets/voltedge-hero.png";
import logoImage from "../assets/voltedge-logo-source.png";

const heroSlides = [
  {
    src: heroImage,
    alt: "Solar panels, smart home security, and automation systems installed on a modern property",
    className: "object-cover",
  },
  {
    src: logoImage,
    alt: "VOLTEDGE SYSTEM brand artwork with smart homes, solar energy, access control, intercom, and CCTV services",
    className: "object-contain bg-[#241813]",
  },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#edf4ee]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-16">
        <div className="relative z-10 max-w-2xl">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-[#116b4f]">
            Where energy meets intelligence
          </p>
          <h1 className="text-4xl font-black leading-[1.03] text-[#10221f] sm:text-5xl lg:text-6xl">
            VOLTEDGE AUTOMATED SYSTEMS
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#41534f]">
            Nigerian smart energy and automation specialists delivering reliable
            solar power, intelligent security, and future-ready systems for
            homes, businesses, and commercial spaces.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#services"
              className="border border-[#f2b84b] bg-[#f2b84b] px-5 py-3 text-center text-sm font-black text-[#10221f] transition hover:bg-[#e0a93e]"
            >
              Explore Services
            </a>
            <a
              href="#products"
              className="border border-[#10221f] px-5 py-3 text-center text-sm font-black text-[#10221f] transition hover:bg-[#10221f] hover:text-white"
            >
              View Products
            </a>
          </div>

          <dl className="mt-10 grid max-w-xl grid-cols-3 border-y border-[#c7d6cf] text-[#10221f]">
            {[
              ["Solar", "Clean power"],
              ["Smart", "Automation"],
              ["Secure", "Monitoring"],
            ].map(([term, detail]) => (
              <div key={term} className="py-4 pr-4">
                <dt className="text-base font-black">{term}</dt>
                <dd className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#67817a]">
                  {detail}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative h-[420px] overflow-hidden border border-white/70 bg-[#10221f] shadow-2xl shadow-[#10221f]/15 sm:h-[500px] lg:h-[560px]">
          {heroSlides.map((slide, index) => (
            <img
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              className={`voltedge-hero-slide absolute inset-0 h-full w-full ${slide.className}`}
              style={{ animationDelay: `${index * 4}s` }}
            />
          ))}
          <div className="absolute bottom-5 left-5 max-w-[18rem] border border-white/70 bg-white/92 p-4 shadow-lg backdrop-blur">
            <p className="text-sm font-black text-[#10221f]">
              Clean energy power with intelligent control, monitoring, and
              protection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
