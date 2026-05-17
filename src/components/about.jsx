const overviewStats = [
  "Residential and commercial clients",
  "Clean energy system design",
  "Smart technology integration",
  "Maintenance and technical support",
];

export default function About() {
  return (
    <section id="overview" className="bg-[#f7f9f4] py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.86fr_1.14fr] lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#116b4f]">
            Overview
          </p>
          <h2 className="mt-3 text-3xl font-black text-[#10221f] sm:text-4xl">
            Reliable solar power and intelligent automation for modern living.
          </h2>
        </div>

        <div className="space-y-6 text-base leading-8 text-[#435853]">
          <p>
            VOLTEDGE AUTOMATED SYSTEMS is a Nigerian based smart energy and
            automation company committed to delivering reliable solar power
            solutions and intelligent automation systems for residential and
            commercial clients.
          </p>
          <p>
            We specialize in the design, installation, and maintenance of clean
            energy systems and smart technology integration that improve
            efficiency, reduce electricity cost, and enhance modern living.
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            {overviewStats.map((item) => (
              <div
                key={item}
                className="border border-[#d8e4dd] bg-white px-4 py-4 text-sm font-bold text-[#10221f]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 grid max-w-7xl gap-5 px-5 md:grid-cols-2 lg:px-8">
        <article className="border-l-4 border-[#f2b84b] bg-white p-7">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#116b4f]">
            Vision
          </p>
          <p className="mt-4 text-lg leading-8 text-[#24342f]">
            To become a trusted leader in Nigeria's renewable energy and smart
            automation industry, delivering innovative, secure, and sustainable
            energy solutions that enhance comfort, efficiency, and protection.
          </p>
        </article>

        <article className="border-l-4 border-[#116b4f] bg-white p-7">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#116b4f]">
            Mission
          </p>
          <p className="mt-4 text-lg leading-8 text-[#24342f]">
            To design and implement reliable solar energy and intelligent
            automation systems that empower homes and businesses with clean
            power, advanced security integration, operational efficiency, and
            long term value.
          </p>
        </article>
      </div>
    </section>
  );
}
