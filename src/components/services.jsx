const serviceGroups = [
  {
    title: "Solar Energy Solutions",
    summary:
      "Design, installation, upgrades, and maintenance for dependable clean power.",
    items: [
      "Residential solar system installation",
      "Commercial solar system deployment",
      "Hybrid and off-grid solar solutions",
      "Inverters and battery installation",
      "System upgrades and maintenance",
    ],
  },
  {
    title: "Smart Home Automation",
    summary:
      "Connected systems that improve security, comfort, monitoring, and control.",
    items: [
      "Smart lighting systems",
      "CCTV and surveillance integration",
      "Remote monitoring systems",
      "Automated gate and access control",
      "Smart energy management systems",
    ],
  },
  {
    title: "Commercial and Industrial Solutions",
    summary:
      "Reliable infrastructure planning for businesses, offices, and institutions.",
    items: [
      "Backup power solutions",
      "Electrical wiring and upgrades",
      "Energy optimization design",
      "Structured system integration",
    ],
  },
  {
    title: "Maintenance and Technical Support",
    summary:
      "Practical support that keeps solar and automation systems running smoothly.",
    items: [
      "Solar system servicing",
      "Fault diagnosis and repair",
      "Preventive maintenance",
      "Technical consultation",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#116b4f]">
            Our services
          </p>
          <h2 className="mt-3 text-3xl font-black text-[#10221f] sm:text-4xl">
            Solar energy and smart automation under one roof.
          </h2>
          <p className="mt-4 text-base leading-7 text-[#536864]">
            VOLTEDGE AUTOMATED SYSTEMS combines renewable energy expertise with
            advanced automation technology to create sustainable, secure, and
            future-ready environments across Africa.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {serviceGroups.map((service, index) => (
            <article
              key={service.title}
              className="border border-[#d9e4de] bg-[#f8fbf7] p-6"
            >
              <div className="mb-5 flex items-start gap-4">
                <span className="relative h-12 w-12 shrink-0 border border-[#f2b84b] bg-white">
                  <span className="absolute left-3 top-3 h-6 w-6 border-2 border-[#116b4f]" />
                  <span className="absolute bottom-2 right-2 h-3 w-3 bg-[#f2b84b]" />
                </span>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#7a8d88]">
                    Section {index + 1}
                  </p>
                  <h3 className="mt-1 text-xl font-black text-[#10221f]">
                    {service.title}
                  </h3>
                </div>
              </div>
              <p className="text-sm leading-6 text-[#536864]">
                {service.summary}
              </p>
              <ul className="mt-5 space-y-3">
                {service.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-[#24342f]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#116b4f]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
