export default function RequestCall() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-6 border border-[#d9e4de] bg-[#10221f] p-6 text-white shadow-xl shadow-[#10221f]/10 md:grid-cols-[1fr_auto] md:items-center md:p-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#f2b84b]">
              Request a call
            </p>
            <h2 className="mt-3 text-2xl font-black sm:text-3xl">
              Need help choosing the right energy or automation solution?
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-white/72">
              Call VOLTEDGE AUTOMATED SYSTEMS for solar installation, smart
              home automation, CCTV, access control, or technical support.
            </p>
          </div>

          <div className="border border-white/12 bg-white/7 p-5 md:min-w-72">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#f2b84b]">
              Phone
            </p>
            <a
              href="tel:+2348163044926"
              className="mt-2 block text-2xl font-black text-white"
            >
              08163044926
            </a>
            <a
              href="tel:+2348163044926"
              className="mt-5 block border border-[#f2b84b] bg-[#f2b84b] px-5 py-3 text-center text-sm font-black text-[#10221f] transition hover:bg-[#e0a93e]"
            >
              Request Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
