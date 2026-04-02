import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Mail } from 'lucide-react';
import './index.css';

// Image helper with fallback
const ImageWithFallback = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  const [error, setError] = useState(false);
  
  if (error) {
    return (
      <div className={`bg-gradient-to-br from-green-100 to-yellow-100 flex items-center justify-center ${className}`}>
        <span className="text-green-800 font-medium text-sm px-4 text-center">{alt}</span>
      </div>
    );
  }
  
  return (
    <img 
      src={src} 
      alt={alt} 
      className={className}
      onError={() => setError(true)}
      loading="lazy"
    />
  );
};

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const foodImages = [
    { src: '/images/Bami%20Sate.jpeg', alt: 'Bami Saté' },
    { src: '/images/Bara%20Kipkerrie.jpeg', alt: 'Bara Kipkerrie' },
    { src: '/images/Nasi%20met%20Fernandes.jpeg', alt: 'Nasi met Fernandes' },
    { src: '/images/Broodje%20Kipkerrie.jpeg', alt: 'Broodje Kipkerrie' },
  ];

  const galleryImages = [
    { src: '/images/Broodjes%20presentatie.jpeg', alt: 'Broodjes Presentatie' },
    { src: '/images/Drankenpresentatie.jpeg', alt: 'Dranken' },
    { src: '/images/IMG_8604.jpeg', alt: 'Saté Lounge' },
    { src: '/images/IMG_8658.jpeg', alt: 'Gerechten' },
    { src: '/images/IMG_8661.jpeg', alt: 'Specialiteiten' },
    { src: '/images/IMG_8673.jpeg', alt: 'Restaurant' },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
      }`}>
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#228B22] to-[#1a6b1a] rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">SL</span>
            </div>
            <span className="text-xl font-bold text-[#2D2420]">Saté Lounge</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#menu" className="hidden md:block text-[#2D2420] hover:text-[#228B22] font-medium transition-colors">
              Menu
            </a>
            <a href="#contact" className="px-6 py-2 bg-[#228B22] text-white rounded-full font-medium hover:bg-[#1a6b1a] transition-all hover:shadow-lg">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#228B22]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFD700]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 bg-[#228B22]/10 text-[#228B22] rounded-full text-sm font-medium mb-4">
              Surinaamse Specialiteiten
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-[#2D2420] mb-6 leading-tight">
              Authentieke<br />
              <span className="text-[#228B22]">Surinaamse Saté</span>
            </h1>
            <p className="text-lg md:text-xl text-[#5D4E47] max-w-2xl mx-auto leading-relaxed">
              Proef de rijke smaken van Suriname in de Markthal Rotterdam. 
              Ambachtelijk bereid met traditionele recepten.
            </p>
          </motion.div>

          {/* Food Gallery */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {foodImages.map((img, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl shadow-lg aspect-square">
                <ImageWithFallback 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="absolute bottom-4 left-4 text-white font-medium">{img.alt}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="inline-block px-4 py-1.5 bg-[#FFD700]/20 text-[#B8860B] rounded-full text-sm font-medium mb-4">
              Ons Aanbod
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2D2420]">Menu</h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-[#228B22]/20 via-[#FFD700]/20 to-[#DC143C]/20 rounded-3xl blur-xl opacity-50" />
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
              <ImageWithFallback 
                src="/images/Boarding%20Pass%20Menu%20Sat%C3%A9%20Lounge.jpg" 
                alt="Menu Saté Lounge" 
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 bg-[#228B22]/10 text-[#228B22] rounded-full text-sm font-medium mb-4">
              Sfeerimpressie
            </span>
            <h2 className="text-4xl font-bold text-[#2D2420]">Impressie</h2>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3]"
              >
                <ImageWithFallback 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-[#228B22]/5 to-[#FFD700]/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2420] mb-6">
              Authentiek Surinaams
            </h2>
            <p className="text-lg text-[#5D4E47] leading-relaxed max-w-2xl mx-auto">
              Bij Saté Lounge draait alles om authentieke Surinaamse smaken. Onze saté wordt 
              dagelijks vers bereid volgens traditionele recepten. De pindasaus is huisgemaakt, 
              net als onze kipkerrie en andere specialiteiten.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Location & Contact */}
      <section id="contact" className="py-20 bg-[#2D2420] text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#228B22]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#FFD700]/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 bg-white/10 text-[#FFD700] rounded-full text-sm font-medium mb-4">
              Bezoek Ons
            </span>
            <h2 className="text-4xl font-bold">Locatie & Contact</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-[#228B22] rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Adres</h3>
                  <p className="text-white/70 leading-relaxed">
                    Markthal Rotterdam<br />
                    Dominee Jan Scharpstraat 298<br />
                    Unit U31, 3011 GZ Rotterdam
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#2D2420]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Openingstijden</h3>
                  <p className="text-white/70 leading-relaxed">
                    <span className="flex justify-between gap-8">
                      <span>Maandag - Woensdag</span>
                      <span className="text-white">10:00 - 20:00</span>
                    </span>
                    <span className="flex justify-between gap-8">
                      <span>Donderdag - Zaterdag</span>
                      <span className="text-white">10:00 - 21:00</span>
                    </span>
                    <span className="flex justify-between gap-8">
                      <span>Zondag</span>
                      <span className="text-white">12:00 - 20:00</span>
                    </span>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-[#DC143C] rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Contact</h3>
                  <a href="mailto:info@satelounge.nl" className="text-white/70 hover:text-[#FFD700] transition-colors">
                    info@satelounge.nl
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="aspect-video bg-white/10 rounded-2xl overflow-hidden shadow-2xl"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2461.082575034268!2d4.486676776762635!3d51.92014747191106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c4335c5e0f8a31%3A0x8c1b8b8b8b8b8b8b!2sMarkthal!5e0!3m2!1snl!2snl!4v1704153600000!5m2!1snl!2snl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1411] text-white/60 py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#228B22] to-[#1a6b1a] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">SL</span>
            </div>
            <span className="font-bold text-white">Saté Lounge</span>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="https://instagram.com/satelounge" target="_blank" rel="noopener noreferrer" 
               className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#228B22] transition-colors"
               aria-label="Instagram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.354.2-6.782 2.618-6.979 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.354 2.618 6.782 6.979 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://facebook.com/satelounge" target="_blank" rel="noopener noreferrer"
               className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#228B22] transition-colors"
               aria-label="Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
          </div>
          
          <p className="text-sm">© 2026 Saté Lounge - Alle rechten voorbehouden</p>
        </div>
      </footer>
    </div>
  );
}

export default App;