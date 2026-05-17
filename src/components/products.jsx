import { useMemo, useState } from "react";
import ChlorideUKFireAlarm from "../assets/Chloride-UK-Fire-Alarm-Control.jpg";

import UKFireAlarmControlPanel from "../assets/Chloride-UK-Fire-Alarm.jpg";

const products = [
  {
    id: "ChlorideUKFireAlarm",
    name: "CHLORIDE UK OPTICAL SMOKE ALARM",
    category: "Smart Security",
    image: ChlorideUKFireAlarm,
    description:
      "The Chloride UK Smoke Detector is a high-performance fire detection device designed to provide early warning against smoke and potential fire outbreaks in residential, commercial, and industrial environments. Engineered with advanced sensing technology, this detector quickly identifies smoke particles in the air and instantly triggers the fire alarm system to enhance safety and emergency response. Its compact and modern design allows seamless ceiling installation while blending perfectly with different interior spaces. Built with durable materials and reliable electronic components, the detector ensures long-lasting performance and dependable fire protection.The device features a sensitive smoke detection chamber, LED status indicator, and test functionality for easy maintenance and system monitoring. It is ideal for use in offices, hotels, schools, warehouses, shopping malls, hospitals, and smart buildings where fire safety is a top priority.",
    features: [
      "Fast and accurate smoke detection",
      "Early fire warning system",
      "LED status and alarm indication",
      "Easy installation and maintenance",
      "Suitable for commercial and residential applications",
      "Stable and dependable performance",
      "Reliable and durable construction",
    ],
  },
  {
    id: "Chloride-UK-Fire-Alarm-Control-Panel",
    name: "CHLORIDE UK FIRE ALARM CONTROL PANEL",
    category: "Smart Security",
    image: UKFireAlarmControlPanel,
    description:
      "The Chloride UK Fire Alarm Control Panel is a reliable and intelligent fire detection and alarm management system designed to provide maximum safety for residential, commercial, and industrial buildings. Built with a durable metal enclosure and user-friendly interface, this panel ensures quick fire detection, alarm notification, and efficient emergency response.It features multiple fire zones for accurate fault and fire location identification, allowing users to easily monitor and control connected smoke detectors, heat detectors, manual call points, and sounders. The panel includes clearly labeled LED indicators for power status, fire alerts, system faults, disablement, and battery conditions, ensuring easy system monitoring at all times.The control panel is equipped with essential operational buttons such as Reset, Silence, Evacuate, and Control Enable, enabling fast emergency handling during fire incidents. Its compact and professional design makes it suitable for offices, schools, hotels, warehouses,",
    features: [
      "Multiple fire zone monitoring",
      "Fast and accurate fire detection",
      "LED status indicators for system monitoring",
      "Manual evacuation and alarm silence controls",
      "Backup battery support for power failure protection",
      "Easy installation and maintenance",
      "Suitable for commercial and industrial fire safety systems",
    ],
  },
];

const categories = [
  "All",
  ...new Set(products.map((product) => product.category)),
];

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory =
        category === "All" || product.category === category;
      const searchableText = [
        product.name,
        product.category,
        product.description,
        ...product.features,
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && searchableText.includes(query);
    });
  }, [category, searchTerm]);

  return (
    <section id="products" className="bg-[#f7f9f4] py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#116b4f]">
              Products
            </p>
            <h2 className="mt-3 text-3xl font-black text-[#10221f] sm:text-4xl">
              Browse smart energy and automation products.
            </h2>
            <p className="mt-4 text-base leading-7 text-[#536864]">
              Search through VOLTEDGE products and open each item to view its
              description, features, and recommended use.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-[1fr_14rem]">
            <label className="block">
              <span className="mb-2 block text-xs font-black uppercase tracking-[0.16em] text-[#526a64]">
                Search products
              </span>
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search solar, CCTV, inverter..."
                className="h-12 w-full border border-[#c9d8d1] bg-white px-4 text-sm font-semibold text-[#10221f] outline-none transition placeholder:text-[#8b9b97] focus:border-[#116b4f] focus:ring-2 focus:ring-[#116b4f]/15"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-xs font-black uppercase tracking-[0.16em] text-[#526a64]">
                Category
              </span>
              <select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="h-12 w-full border border-[#c9d8d1] bg-white px-4 text-sm  font-semibold text-[#10221f] outline-none transition focus:border-[#116b4f] focus:ring-2 focus:ring-[#116b4f]/15"
              >
                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="border border-[#d9e4de] bg-white shadow-lg shadow-[#10221f]/5"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#10221f]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="min-h-14 text-xl font-black leading-7 text-[#10221f]">
                  {product.name}
                </h3>
                <button
                  type="button"
                  className="mt-5 w-full border border-[#10221f] px-4 py-3 text-sm font-black text-[#10221f] transition hover:bg-[#10221f] hover:text-white"
                  onClick={() => setSelectedProduct(product)}
                >
                  View details
                </button>
              </div>
            </article>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="mt-10 border border-[#d9e4de] bg-white p-8 text-center">
            <p className="font-black text-[#10221f]">No products found.</p>
            <p className="mt-2 text-sm text-[#536864]">
              Try another keyword or switch the category back to All.
            </p>
          </div>
        )}
      </div>

      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-[#10221f]/72 px-5 py-8 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-details-title"
        >
          <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto bg-white shadow-2xl">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
              <div className="min-h-72 bg-[#10221f]">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="h-full max-h-[30rem] w-full object-cover"
                />
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-[#116b4f]">
                      {selectedProduct.category}
                    </p>
                    <h3
                      id="product-details-title"
                      className="mt-2 text-2xl font-black text-[#10221f]"
                    >
                      {selectedProduct.name}
                    </h3>
                  </div>
                  <button
                    type="button"
                    className="grid h-10 w-10 shrink-0 place-items-center border border-[#d9e4de] text-xl font-black text-[#10221f] transition hover:border-[#10221f]"
                    aria-label="Close product details"
                    onClick={() => setSelectedProduct(null)}
                  >
                    x
                  </button>
                </div>

                <p className="mt-5 leading-7 text-[#536864]">
                  {selectedProduct.description}
                </p>

                <div className="mt-6">
                  <p className="text-sm font-black uppercase tracking-[0.16em] text-[#10221f]">
                    Features
                  </p>
                  <ul className="mt-4 space-y-3">
                    {selectedProduct.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex gap-3 text-sm text-[#24342f]"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#116b4f]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`https://wa.me/2348163044926?text=${encodeURIComponent(
                    `Hello VOLTEDGE, I want details about ${selectedProduct.name}.`,
                  )}`}
                  className="mt-8 block border border-[#116b4f] bg-[#116b4f] px-5 py-3 text-center text-sm font-black text-white transition hover:bg-[#0c503c]"
                >
                  Ask about this product
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
