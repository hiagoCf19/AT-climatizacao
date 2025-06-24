import Header from "./components/header";
import Home from "./page";

import Features from "./components/features";
import Services from "./components/services";
import Testimonials from "./components/testimonials";
import Cta from "./components/CTA";
import Contact from "./components/contact";
import Footer from "./components/footer";
import WhatsAppCTA from "./components/whatsAppCTA";
import About from "./components/about";
function App() {
  return (
    <div className="flex min-h-screen flex-col  ">
      <Header />
      <main className="flex-1 ">
        <Home />
        {/* Features */}
        <Features />
        {/* Services */}
        <Services />
        {/* About */}
        <About />
        {/* Testimonials */}
        <Testimonials />
        {/* CTA */}
        <Cta />
        {/* Contact */}
        <Contact />
      </main>
      <WhatsAppCTA />

      <Footer />
    </div>
  );
}

export default App;
