import { useState } from "react";

export default function WhatsAppFloat() {
  const [showPrompt, setShowPrompt] = useState(true);
  const whatsappUrl =
    "https://wa.me/2348163044926?text=Hello%20VOLTEDGE%2C%20I%20have%20a%20question.";

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-end gap-3">
      {showPrompt && (
        <div
          className="whatsapp-prompt relative max-w-60 rounded-2xl rounded-br-sm border border-black/5 bg-white px-4 py-3 pr-9 text-[#10221f] shadow-2xl shadow-[#10221f]/20"
          role="status"
        >
          <button
            type="button"
            onClick={() => setShowPrompt(false)}
            className="absolute right-2 top-2 grid h-6 w-6 place-items-center rounded-full text-lg leading-none text-[#10221f]/45 transition hover:bg-black/5 hover:text-[#10221f] focus:outline-none focus:ring-2 focus:ring-[#25d366]"
            aria-label="Close WhatsApp message"
          >
            &times;
          </button>
          <p className="text-sm font-black">Have a question?</p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-1 block text-xs font-semibold leading-5 text-[#10221f]/65 transition hover:text-[#1f9d50]"
          >
            Chat with us on WhatsApp
          </a>
        </div>
      )}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#25d366] text-white shadow-2xl shadow-[#10221f]/25 ring-4 ring-white/90 transition hover:-translate-y-1 hover:bg-[#1fbd5c] focus:outline-none focus:ring-[#f2b84b]"
        aria-label="Chat with VOLTEDGE AUTOMATED SYSTEMS on WhatsApp"
      >
        <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
          <path
            fill="currentColor"
            d="M16.04 3.2A12.74 12.74 0 0 0 5.18 22.6L3.7 28.05l5.58-1.46A12.74 12.74 0 1 0 16.04 3.2Zm0 23.25a10.5 10.5 0 0 1-5.35-1.47l-.38-.22-3.31.87.89-3.22-.25-.4a10.5 10.5 0 1 1 8.4 4.44Zm5.76-7.86c-.32-.16-1.87-.92-2.16-1.03-.29-.1-.5-.16-.71.16-.21.31-.81 1.03-.99 1.24-.18.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.57-.94-.84-1.58-1.88-1.76-2.2-.18-.31-.02-.48.14-.64.14-.14.32-.37.47-.55.16-.18.21-.31.32-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.61-.52-.53-.71-.54h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.63 0 1.55 1.13 3.05 1.29 3.26.16.21 2.22 3.39 5.38 4.75.75.32 1.34.52 1.8.66.76.24 1.45.21 1.99.13.61-.09 1.87-.76 2.13-1.5.26-.74.26-1.37.18-1.5-.08-.13-.29-.21-.61-.37Z"
          />
        </svg>
      </a>
    </div>
  );
}
