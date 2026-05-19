import ChlorideEcoSmokeDetector from "../assets/CHLORIDEUKConventionalECOSmokeDetector.jpg";
import ChlorideConventionalSmokeDetector from "../assets/CHLORIDEUKConventionalSmokeDetector.jpg";
import ChlorideUKFireAlarm from "../assets/Chloride-UK-Fire-Alarm-Control.jpg";
import UKFireAlarmControlPanel from "../assets/Chloride-UK-Fire-Alarm.jpg";
import CworthLithiumBattery from "../assets/CWORTHLithiumBattery.jpeg";
import DeyeInverter from "../assets/Deye.jpg";
import DualLensSolarCamera from "../assets/DualLensSolarCamer.jpg";
import FelicitySolarController from "../assets/FelicitySolar.jpg";
import Monocrystalline from "../assets/Monocrystalline.jpg";
import TripleLensSolarCamera from "../assets/TripleLens.jpg";

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
  {
    id: "Monocrystalline",
    name: "550W Monocrystalline 150 Cells Solar Panel",
    category: "Solar",
    image: Monocrystalline,
    description:
      "Power your home, office, or business with high-efficiency solar technology. The 550W Monocrystalline 150 Cells Solar Panel is engineered to deliver maximum energy output, long-lasting durability, and reliable performance under different weather conditions. Designed with advanced monocrystalline cells, this panel ensures superior energy conversion and stable power generation for residential, commercial, and industrial solar installations.",
    features: [
      "550 Watts High Power Output for efficient energy generation",
      "150 Monocrystalline Cells for improved performance and higher efficiency",
      "Excellent Low-Light Performance even during cloudy weather",
      "Weather Resistant Design built to withstand harsh environmental conditions",
      "Durable Aluminum Frame with strong tempered glass protection",
      "High Charging Efficiency for batteries and inverters",
      "Ideal for Hybrid & Off-Grid Systems",
      "High Charging Efficiency for batteries and inverters",
    ],
  },
  {
    id: "deye-5kva-hybrid-inverter",
    name: "5KVA Deye Hybrid Inverter",
    category: "Solar",
    image: DeyeInverter,
    description:
      "Experience reliable and intelligent power management with the 5KVA Deye Hybrid Inverter, a powerful solution designed for modern solar energy systems. Built with advanced hybrid technology, this inverter combines solar power, battery storage, and utility electricity to deliver stable and uninterrupted energy for homes, offices, and businesses.",
    features: [
      "5KVA high performance output for residential and commercial use",
      "Hybrid technology supporting solar, battery, and grid integration",
      "Pure sine wave output for safe operation of sensitive appliances",
      "Smart LCD display for real-time monitoring and system control",
      "Built-in MPPT solar charge controller for maximum solar efficiency",
      "Supports lithium and lead-acid batteries",
      "Automatic changeover system for uninterrupted power supply",
      "WiFi monitoring compatibility for remote system management",
    ],
  },
  {
    id: "cworth-lithium-battery",
    name: "CWORTH Lithium Battery",
    category: "Solar",
    image: CworthLithiumBattery,
    description:
      "Power your home and business with the advanced CWORTH Lithium Battery, a high-performance energy storage solution designed for reliable backup power, solar systems, and efficient energy management. Built with modern lithium battery technology, it delivers stable performance, faster charging, longer lifespan, and superior energy efficiency compared to traditional batteries.",
    features: [
      "Advanced lithium battery technology for high efficiency and long service life",
      "Fast charging and stable power output",
      "High energy storage capacity for reliable backup power",
      "Long cycle life with durable performance",
      "Built-in Battery Management System for enhanced safety and protection",
      "Lightweight and compact design compared to traditional batteries",
      "Low maintenance requirement",
      "Excellent deep cycle performance",
      "Compatible with hybrid and solar inverter systems",
      "Energy saving and environmentally friendly",
    ],
  },
  {
    id: "dual-lens-solar-camera",
    name: "Dual Lens Solar Camera",
    category: "Smart Security",
    image: DualLensSolarCamera,
    description:
      "The Dual Lens Solar Camera is an advanced smart security solution designed for maximum surveillance coverage, crystal-clear monitoring, and reliable outdoor protection. Equipped with dual HD lenses and solar-powered operation, it is ideal for homes, offices, warehouses, farms, hotels, schools, and remote locations.",
    features: [
      "Dual HD lenses for wider and clearer surveillance",
      "Solar-powered operation with rechargeable battery backup",
      "Full-color night vision for day and night monitoring",
      "Smart motion detection and instant alert notifications",
      "Two-way audio communication",
      "Remote viewing via mobile app",
      "PTZ control for flexible monitoring",
      "Weatherproof outdoor design with WiFi connectivity",
      "AI human detection for reduced false alarms",
    ],
  },
  {
    id: "felicity-solar-mppt-charge-controller",
    name: "Felicity Solar MPPT Charge Controller",
    category: "Solar",
    image: FelicitySolarController,
    description:
      "Maximize your solar power efficiency with the Felicity Solar MPPT Charge Controller, a smart and reliable solution designed to optimize battery charging and improve overall solar system performance. Available in 30AH, 40AH, 45AH, 60AH, 80AH, 100AH, 120AH, and 150AH capacities, it is suitable for small home setups and larger energy systems.",
    features: [
      "Advanced MPPT technology for maximum solar energy harvesting",
      "High charging efficiency for faster and smarter battery charging",
      "Multiple capacity options to fit different solar installations",
      "Battery protection against overcharge, overload, and short circuit",
      "LCD digital display for easy monitoring and control",
      "Compatible with lithium and lead-acid batteries",
      "Durable build quality for long-lasting operation",
      "Easy installation and user-friendly operation",
    ],
  },
  {
    id: "triple-lens-solar-security-camera",
    name: "Triple Lens Solar Security Camera",
    category: "Smart Security",
    image: TripleLensSolarCamera,
    description:
      "Upgrade your security with the Triple Lens Solar Security Camera, a smart surveillance solution designed for maximum coverage, crystal-clear monitoring, and reliable day-and-night protection. Powered by solar energy, it delivers dependable outdoor security for homes, offices, warehouses, farms, and commercial properties.",
    features: [
      "Triple lens technology for wider and clearer surveillance coverage",
      "Solar-powered system for energy-saving uninterrupted operation",
      "Full HD high-resolution video quality",
      "Smart motion detection and auto tracking",
      "Infrared and full-color night vision for 24/7 protection",
      "Two-way audio communication",
      "Remote viewing via mobile app",
      "Pan and tilt control for flexible camera positioning",
      "Weatherproof outdoor design with wireless WiFi connectivity",
      "Built-in security lights and alarm functions",
    ],
  },
  {
    id: "chloride-uk-conventional-smoke-detector-ah-388",
    name: "CHLORIDE UK Conventional Smoke Detector AH-388",
    category: "Fire Safety",
    image: ChlorideConventionalSmokeDetector,
    description:
      "Protect lives and property with the CHLORIDE UK Conventional Smoke Detector AH-388, a high-performance fire safety device designed for fast and accurate smoke detection. Built for conventional fire alarm systems, it provides early warning signals for homes, offices, schools, hotels, warehouses, and commercial buildings.",
    features: [
      "Model AH-388",
      "Conventional smoke detection technology",
      "Fast and accurate smoke detection",
      "Early fire warning system for enhanced safety",
      "High sensitivity smoke sensor",
      "Low power consumption",
      "LED status indicator for easy monitoring",
      "Durable heat-resistant housing",
      "Easy ceiling installation",
      "Compatible with conventional fire alarm panels",
    ],
  },
  {
    id: "chloride-uk-conventional-eco-smoke-detector",
    name: "CHLORIDE UK Conventional ECO Smoke Detector",
    category: "Fire Safety",
    image: ChlorideEcoSmokeDetector,
    description:
      "Enhance your fire safety system with the CHLORIDE UK Conventional ECO Smoke Detector, a reliable and energy-efficient smoke detection device designed to provide early warning against fire hazards. Built for conventional fire alarm systems, it combines fast smoke sensing technology with stable performance for residential, commercial, and industrial environments.",
    features: [
      "Conventional fire alarm smoke detector",
      "ECO energy-saving design with low power consumption",
      "Fast and accurate smoke detection",
      "High sensitivity smoke sensor for reliable fire warning",
      "LED status indicator for easy monitoring",
      "Stable and durable performance",
      "Compact and modern appearance",
      "Easy ceiling installation",
      "Compatible with conventional fire alarm panels",
      "Designed for continuous 24/7 protection",
    ],
  },
];

export default products;
