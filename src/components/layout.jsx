import About from "./about";
import Contact from "./contact";
import Footer from "./footer";
import Hero from "./hero";
import Navbar from "./navbar";
import Products from "./products";
import Services from "./services";
import Values from "./values";
import WhatsAppFloat from "./whatsappFloat";

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#f7f9f4] text-[#18221f]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <Values />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
