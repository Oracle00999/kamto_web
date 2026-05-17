export default function Contact() {
  return (
    <section id="contact" className="bg-[#edf4ee] py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[1fr_0.8fr] lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#116b4f]">
            Commitment
          </p>
          <h2 className="mt-3 text-3xl font-black text-[#10221f] sm:text-4xl">
            Powering Nigeria's future through clean energy and smart automation.
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#435853]">
            At VOLTEDGE AUTOMATED SYSTEMS, we are committed to delivering
            smarter systems and reliable energy solutions for today and
            tomorrow.
          </p>
        </div>

        <div className="border border-[#d8e4dd] bg-white p-6 shadow-xl shadow-[#10221f]/8">
          <h3 className="text-xl font-black text-[#10221f]">Start a project</h3>
          <p className="mt-3 text-sm leading-6 text-[#536864]">
            Speak with VOLTEDGE AUTOMATED SYSTEMS about solar installation,
            automation integration, maintenance, or technical consultation.
          </p>
          <div className="mt-6 space-y-3">
            <a
              href="mailto:VoltEdgesystems3@gmail.com"
              className="block border border-[#10221f] px-4 py-3 text-sm font-black text-[#10221f] transition hover:bg-[#10221f] hover:text-white"
            >
              VoltEdgesystems3@gmail.com
            </a>
            <a
              href="https://wa.me/2348163044926"
              className="block border border-[#116b4f] bg-[#116b4f] px-4 py-3 text-sm font-black text-white transition hover:bg-[#0c503c]"
            >
              WhatsApp: 08163044926
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
