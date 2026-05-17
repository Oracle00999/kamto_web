const values = [
  "Innovation",
  "Integrity",
  "Reliability",
  "Sustainability",
  "Customer commitment",
];

const reasons = [
  "Professional and skilled technical expertise",
  "High quality and durable equipment",
  "Tailored solution for each client",
  "Affordable and scalable installation",
  "Reliable after-installation support",
];

const targets = [
  "Home owners",
  "Real estate developers",
  "SMEs",
  "Schools and religious institutions",
  "Offices and commercial centres",
];

export default function Values() {
  return (
    <section id="values" className="bg-[#10221f] py-20 text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#f2b84b]">
              Why choose us
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Built for dependable power, smarter spaces, and peace of mind.
            </h2>
            <p className="mt-5 leading-7 text-white/72">
              We provide solutions that not only power properties, but also
              enhance safety, monitoring, operational efficiency, and long term
              value for clients.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <article className="border border-white/12 bg-white/7 p-6">
              <h3 className="text-xl font-black">Core Values</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {values.map((value) => (
                  <span
                    key={value}
                    className="border border-white/18 bg-white/8 px-3 py-2 text-sm font-bold text-white/86"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </article>

            <article className="border border-white/12 bg-white/7 p-6">
              <h3 className="text-xl font-black">Market Target</h3>
              <ul className="mt-5 space-y-3">
                {targets.map((target) => (
                  <li key={target} className="flex gap-3 text-sm text-white/80">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#f2b84b]" />
                    <span>{target}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-5">
          {reasons.map((reason) => (
            <div
              key={reason}
              className="border border-white/12 bg-[#17352e] p-4 text-sm font-semibold leading-6 text-white/84"
            >
              {reason}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
