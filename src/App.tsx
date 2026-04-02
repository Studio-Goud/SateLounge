import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ImageWithFallback } from './components/ImageWithFallback';
import './index.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <div className="min-h-screen bg-cream text-brown-dark font-body">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-cream/95 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green rounded-full flex items-center justify-center">
              <span className="text-white font-display font-bold text-lg">S</span>
            </div>
            <span className="font-display text-xl font-semibold text-brown-dark">Saté Lounge</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#menu" className="text-brown-medium hover:text-green transition-colors text-sm tracking-wide">Menu</a>
            <a href="#over-ons" className="text-brown-medium hover:text-green transition-colors text-sm tracking-wide">Over Ons</a>
            <a href="#contact" className="text-brown-medium hover:text-green transition-colors text-sm tracking-wide">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-warm to-cream" />
        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <span className="inline-block px-4 py-1.5 bg-green/10 text-green rounded-full text-xs font-medium tracking-wider uppercase mb-6">
                Surinaamse Specialiteiten
              </span>
              
              <h1 className="font-display text-5xl md:text-7xl font-semibold text-brown-dark leading-[1.1] mb-6">
                Authentieke
                <span className="block text-green">Surinaamse Saté</span>
              </h1>
              
              <p className="text-brown-medium text-lg leading-relaxed mb-8 max-w-md">
                Ervaar de rijke smaken van Suriname in de Markthal Rotterdam. 
                Ambachtelijk bereid met traditionele recepten.
              </p>

              <a 
                href="#menu"
                className="inline-flex items-center gap-2 px-8 py-4 bg-green text-white rounded-full font-medium hover:bg-green-dark transition-all hover:shadow-lg hover:shadow-green/25"
              >
                Bekijk Ons Menu
              </a>
            </motion.div>

            <motion.div 
              {...fadeInUp}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                    <ImageWithFallback src="/images/Bami%20Sate.jpeg" alt="Bami Saté" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                    <ImageWithFallback src="/images/Bara%20Kipkerrie.jpeg" alt="Bara" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                    <ImageWithFallback src="/images/Broodje%20Kipkerrie.jpeg" alt="Broodje" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                    <ImageWithFallback src="/images/Nasi%20met%20Fernandes.jpeg" alt="Nasi" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TripAdvisor Badge */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeInUp}>
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-green/5 rounded-2xl mb-6">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#00AF87">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                <circle cx="12" cy="12" r="3" fill="#00AF87"/>
              </svg>
              <div className="text-left">
                <p className="text-xs text-brown-medium uppercase tracking-wider">TripAdvisor</p>
                <p className="font-display text-2xl font-semibold text-green">#1 in Rotterdam</p>
              </div>
            </div>
            
            <p className="text-brown-medium">
              Beoordeeld door honderden tevreden gasten
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-cream">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-gold/20 text-gold-dark rounded-full text-xs font-medium tracking-wider uppercase mb-4">
              Ons Aanbod
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-brown-dark">Menu</h2>
          </motion.div>

          <motion.div 
            {...fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-green/10 via-gold/10 to-green/10 rounded-3xl blur-2xl" />
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden p-2">
              <ImageWithFallback 
                src="/images/Boarding%20Pass%20Menu%20Sat%C3%A9%20Lounge.jpg" 
                alt="Menu Saté Lounge" 
                className="w-full h-auto rounded-xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section id="over-ons" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-green/10 text-green rounded-full text-xs font-medium tracking-wider uppercase mb-4">
              Sfeerimpressie
            </span>
            <h2 className="font-display text-4xl font-semibold text-brown-dark">Impressie</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { src: '/images/Broodjes%20presentatie.jpeg', alt: 'Broodjes' },
              { src: '/images/Drankenpresentatie.jpeg', alt: 'Dranken' },
              { src: '/images/IMG_8604.jpeg', alt: 'Restaurant' },
              { src: '/images/IMG_8658.jpeg', alt: 'Gerechten' },
              { src: '/images/IMG_8661.jpeg', alt: 'Specialiteiten' },
              { src: '/images/IMG_8673.jpeg', alt: 'Sfeer' },
            ].map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group"
              >
                <ImageWithFallback 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section id="contact" className="py-24 bg-brown-dark text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div {...fadeInUp}>
              <span className="inline-block px-4 py-1.5 bg-white/10 text-gold rounded-full text-xs font-medium tracking-wider uppercase mb-6">
                Bezoek Ons
              </span>
              
              <h2 className="font-display text-4xl font-semibold mb-8">Locatie</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
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

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-brown-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Openingstijden</h3>
                    <div className="text-white/70 space-y-1">
                      <p>Ma - Wo: 10:00 - 20:00</p>
                      <p>Do - Za: 10:00 - 21:00</p>
                      <p>Zo: 12:00 - 20:00</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Contact</h3>
                    <a href="mailto:info@satelounge.nl" className="text-white/70 hover:text-gold transition-colors">
                      info@satelounge.nl
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              {...fadeInUp}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2461.082575034268!2d4.486676776762635!3d51.92014747191106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c4335c5e0f8a31%3A0x8c1b8b8b8b8b8b8b!2sMarkthal!5e0!3m2!1snl!2snl!4v1704153600000!5m2!1snl!2snl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-brown-darker text-white/50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm">© 2026 Saté Lounge — Surinaamse Specialiteiten</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
