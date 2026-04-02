import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Mail } from 'lucide-react';
import './index.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <img 
            src="/images/Instagram Logo SatéLounge.png" 
            alt="Saté Lounge" 
            className="h-16 md:h-20"
          />
          <a 
            href="#contact" 
            className="px-6 py-2 bg-[#228B22] text-white rounded-full font-medium hover:bg-[#1a6b1a] transition-colors"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-[#2D2420] mb-4">
              Authentieke Surinaamse Saté
            </h1>
            <p className="text-lg text-[#5D4E47] max-w-2xl mx-auto">
              Proef de rijke smaken van Suriname in de Markthal Rotterdam
            </p>
          </motion.div>

          {/* Food Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="/images/Bami Sate.jpeg" alt="Bami Saté" className="rounded-2xl shadow-lg w-full h-48 object-cover" />
            <img src="/images/Bara Kipkerrie.jpeg" alt="Bara Kipkerrie" className="rounded-2xl shadow-lg w-full h-48 object-cover" />
            <img src="/images/Nasi met Fernandes.jpeg" alt="Nasi" className="rounded-2xl shadow-lg w-full h-48 object-cover" />
            <img src="/images/Broodje Kipkerrie.jpeg" alt="Broodje" className="rounded-2xl shadow-lg w-full h-48 object-cover" />
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2D2420] mb-8">Ons Menu</h2>
          <img 
            src="/images/Boarding Pass Menu Saté Lounge.jpg" 
            alt="Menu Saté Lounge" 
            className="w-full rounded-2xl shadow-xl"
          />
        </div>
      </section>

      {/* More Photos */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#2D2420] mb-8">Impressie</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <img src="/images/Broodjes presentatie.jpeg" alt="Broodjes" className="rounded-xl shadow-lg w-full h-64 object-cover" />
            <img src="/images/Drankenpresentatie.jpeg" alt="Dranken" className="rounded-xl shadow-lg w-full h-64 object-cover" />
            <img src="/images/IMG_8604.jpeg" alt="Saté Lounge" className="rounded-xl shadow-lg w-full h-64 object-cover" />
            <img src="/images/IMG_8658.jpeg" alt="Eten" className="rounded-xl shadow-lg w-full h-64 object-cover" />
            <img src="/images/IMG_8661.jpeg" alt="Gerecht" className="rounded-xl shadow-lg w-full h-64 object-cover" />
            <img src="/images/IMG_8673.jpeg" alt="Restaurant" className="rounded-xl shadow-lg w-full h-64 object-cover" />
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section id="contact" className="py-16 bg-[#2D2420] text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Locatie & Contact</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-[#FFD700] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Adres</h3>
                  <p className="text-white/80">
                    Markthal Rotterdam<br />
                    Dominee Jan Scharpstraat 298<br />
                    Unit U31, 3011 GZ Rotterdam
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-[#FFD700] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Openingstijden</h3>
                  <p className="text-white/80">Ma - Wo: 10:00 - 20:00<br />Do - Za: 10:00 - 21:00<br />Zo: 12:00 - 20:00</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-6 h-6 text-[#FFD700] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a href="mailto:info@satelounge.nl" className="text-white/80 hover:text-[#FFD700]">info@satelounge.nl</a>
                </div>
              </div>
            </div>
            
            <div className="aspect-video bg-white/10 rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2461.0!2d4.487!3d51.92!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c4335c5e0f8a31%3A0x7a86c8c8c8c8c8c8!2sMarkthal!5e0!3m2!1snl!2snl!4v1234567890!5m2!1snl!2snl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1411] text-white/60 py-8 text-center">
        <p>© 2026 Saté Lounge - Surinaamse Specialiteiten</p>
      </footer>
    </div>
  );
}

export default App;