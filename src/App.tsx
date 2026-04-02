import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageWithFallback } from './components/ImageWithFallback';
import './index.css';

type Language = 'nl' | 'en' | 'de' | 'fr';

const translations = {
  nl: {
    tagline: 'Surinaamse Specialiteiten',
    heroTitle: 'Ervaar Surinaams Streetfood',
    heroSubtitle: 'in de Markthal',
    heroDesc: 'Proef de authentieke smaken van Suriname. Ambachtelijk bereid met traditionele recepten in het hart van Rotterdam.',
    ctaMenu: 'Bekijk Ons Menu',
    tripadvisor: '#1 op TripAdvisor',
    tripadvisorSub: 'Beoordeeld door duizenden tevreden gasten',
    menuTitle: 'Menu',
    galleryTitle: 'Impressie',
    aboutTitle: 'Over Ons',
    aboutText: 'Bij Saté Lounge draait alles om authentieke Surinaamse smaken. Onze saté wordt dagelijks vers bereid volgens traditionele recepten. De pindasaus is huisgemaakt, net als onze kipkerrie en andere specialiteiten.',
    locationTitle: 'Locatie',
    address: 'Markthal Rotterdam',
    street: 'Dominee Jan Scharpstraat 298',
    unit: 'Unit U31, 3011 GZ Rotterdam',
    hours: 'Openingstijden',
    contact: 'Contact',
    popupTitle: 'Nummer 1 op TripAdvisor!',
    popupText: 'We zijn trots om de hoogst gewaardeerde Surinaamse restaurant in Rotterdam te zijn.',
    popupCta: 'Bekijk onze reviews',
  },
  en: {
    tagline: 'Surinamese Specialties',
    heroTitle: 'Experience Surinamese Streetfood',
    heroSubtitle: 'in the Markthal',
    heroDesc: 'Taste the authentic flavors of Suriname. Crafted with traditional recipes in the heart of Rotterdam.',
    ctaMenu: 'View Our Menu',
    tripadvisor: '#1 on TripAdvisor',
    tripadvisorSub: 'Rated by thousands of satisfied guests',
    menuTitle: 'Menu',
    galleryTitle: 'Gallery',
    aboutTitle: 'About Us',
    aboutText: 'At Saté Lounge, it\'s all about authentic Surinamese flavors. Our saté is freshly prepared daily according to traditional recipes. The peanut sauce is homemade, as are our chicken curry and other specialties.',
    locationTitle: 'Location',
    address: 'Markthal Rotterdam',
    street: 'Dominee Jan Scharpstraat 298',
    unit: 'Unit U31, 3011 GZ Rotterdam',
    hours: 'Opening Hours',
    contact: 'Contact',
    popupTitle: 'Number 1 on TripAdvisor!',
    popupText: 'We are proud to be the highest-rated Surinamese restaurant in Rotterdam.',
    popupCta: 'View our reviews',
  },
  de: {
    tagline: 'Surinamische Spezialitäten',
    heroTitle: 'Erleben Sie Surinamisches Streetfood',
    heroSubtitle: 'im Markthal',
    heroDesc: 'Probieren Sie die authentischen Aromen von Suriname. Mit traditionellen Rezepten im Herzen von Rotterdam zubereitet.',
    ctaMenu: 'Unser Menü Ansehen',
    tripadvisor: '#1 auf TripAdvisor',
    tripadvisorSub: 'Bewertet von Tausenden zufriedenen Gästen',
    menuTitle: 'Menü',
    galleryTitle: 'Galerie',
    aboutTitle: 'Über Uns',
    aboutText: 'Bei Saté Lounge dreht sich alles um authentische surinamische Aromen. Unser Saté wird täglich frisch nach traditionellen Rezepten zubereitet. Die Erdnusssauce ist hausgemacht, ebenso wie unser Hähnchencurry und andere Spezialitäten.',
    locationTitle: 'Standort',
    address: 'Markthal Rotterdam',
    street: 'Dominee Jan Scharpstraat 298',
    unit: 'Unit U31, 3011 GZ Rotterdam',
    hours: 'Öffnungszeiten',
    contact: 'Kontakt',
    popupTitle: 'Nummer 1 auf TripAdvisor!',
    popupText: 'Wir sind stolz, das höchstbewertete surinamische Restaurant in Rotterdam zu sein.',
    popupCta: 'Bewertungen ansehen',
  },
  fr: {
    tagline: 'Spécialités Surinamaises',
    heroTitle: 'Découvrez la Streetfood Surinamaise',
    heroSubtitle: 'au Markthal',
    heroDesc: 'Goûtez les saveurs authentiques du Suriname. Préparé avec des recettes traditionnelles au cœur de Rotterdam.',
    ctaMenu: 'Voir Notre Menu',
    tripadvisor: '#1 sur TripAdvisor',
    tripadvisorSub: 'Noté par des milliers de clients satisfaits',
    menuTitle: 'Menu',
    galleryTitle: 'Galerie',
    aboutTitle: 'À Propos',
    aboutText: 'Chez Saté Lounge, tout tourne autour des saveurs surinamaises authentiques. Notre saté est préparé frais quotidiennement selon des recettes traditionnelles. La sauce aux arachides est maison, tout comme notre curry de poulet et autres spécialités.',
    locationTitle: 'Emplacement',
    address: 'Markthal Rotterdam',
    street: 'Dominee Jan Scharpstraat 298',
    unit: 'Unit U31, 3011 GZ Rotterdam',
    hours: 'Heures d\'Ouverture',
    contact: 'Contact',
    popupTitle: 'Numéro 1 sur TripAdvisor!',
    popupText: 'Nous sommes fiers d\'être le restaurant surinamais le mieux noté de Rotterdam.',
    popupCta: 'Voir nos avis',
  },
};

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<Language>('nl');
  const [showPopup, setShowPopup] = useState(true);

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Show popup after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  const LanguageSwitcher = () => (
    <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm rounded-full p-1">
      {(['nl', 'en', 'de', 'fr'] as Language[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
            lang === l
              ? 'bg-white text-brown-dark'
              : 'text-white/70 hover:text-white'
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-cream text-brown-dark font-body">
      {/* TripAdvisor Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            className="fixed bottom-6 right-6 z-50 max-w-sm"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-6 border-2 border-gold/30">
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-3 right-3 text-brown-medium hover:text-brown-dark"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="#00AF87">
                  <circle cx="12" cy="12" r="10" fill="#00AF87"/>
                  <circle cx="12" cy="12" r="4" fill="white"/>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#00AF87"/>
                </svg>
                <div>
                  <p className="font-display text-xl font-semibold text-green">{t.popupTitle}</p>
                  <div className="flex items-center gap-1">
                    <span className="text-gold">★★★★★</span>
                    <span className="text-sm text-brown-medium">5.0</span>
                  </div>
                </div>
              </div>
              
              <p className="text-brown-medium text-sm mb-4">{t.popupText}</p>
              
              <a
                href="https://www.tripadvisor.nl/Restaurant_Review-g188632-d14095706-Reviews-Sate_Lounge-Rotterdam_South_Holland_Province.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-green text-white rounded-full text-sm font-medium hover:bg-green-dark transition-colors"
              >
                {t.popupCta}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? 'bg-cream/95 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <ImageWithFallback 
              src="/images/Instagram%20Logo%20Sat%C3%A9Lounge.png" 
              alt="Saté Lounge" 
              className="h-12 w-auto"
            />
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#menu" className="text-brown-medium hover:text-green transition-colors text-sm tracking-wide">{t.menuTitle}</a>
            <a href="#over-ons" className="text-brown-medium hover:text-green transition-colors text-sm tracking-wide">{t.aboutTitle}</a>
            <a href="#contact" className="text-brown-medium hover:text-green transition-colors text-sm tracking-wide">{t.locationTitle}</a>
            <LanguageSwitcher />
          </div>
          
          {/* Mobile Language Switcher */}
          <div className="md:hidden">
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      {/* Hero Section with Surinamese Flag Gradient */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated gradient background representing Surinamese flag colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-green via-cream to-red opacity-20" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
        
        {/* Surinamese flag color accents */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green via-white via-red via-white to-gold" />
        
        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <span className="inline-block px-4 py-1.5 bg-green/10 text-green rounded-full text-xs font-medium tracking-wider uppercase mb-6">
                {t.tagline}
              </span>
              
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-brown-dark leading-[1.1] mb-4">
                {t.heroTitle}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green via-gold to-red">
                  {t.heroSubtitle}
                </span>
              </h1>
              
              <p className="text-brown-medium text-lg leading-relaxed mb-8 max-w-md">
                {t.heroDesc}
              </p>

              <a 
                href="#menu"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green to-green-dark text-white rounded-full font-medium hover:shadow-lg hover:shadow-green/25 transition-all"
              >
                {t.ctaMenu}
              </a>
            </motion.div>

            <motion.div 
              {...fadeInUp}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl ring-2 ring-gold/20">
                    <ImageWithFallback src="/images/Bami%20Sate.jpeg" alt="Bami Saté" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-xl ring-2 ring-green/20">
                    <ImageWithFallback src="/images/Bara%20Kipkerrie.jpeg" alt="Bara" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-xl ring-2 ring-red/20">
                    <ImageWithFallback src="/images/Broodje%20Kipkerrie.jpeg" alt="Broodje" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl ring-2 ring-gold/20">
                    <ImageWithFallback src="/images/Nasi%20met%20Fernandes.jpeg" alt="Nasi" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TripAdvisor Badge */}
      <section className="py-16 bg-gradient-to-r from-green/5 via-gold/10 to-red/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeInUp}>
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-white rounded-2xl shadow-lg border border-gold/20">
              <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#00AF87">
                <circle cx="12" cy="12" r="10" fill="#00AF87"/>
                <circle cx="12" cy="12" r="4" fill="white"/>
              </svg>
              <div className="text-left">
                <p className="text-xs text-brown-medium uppercase tracking-wider">TripAdvisor</p>
                <p className="font-display text-2xl font-semibold text-green">{t.tripadvisor}</p>
                <p className="text-sm text-brown-medium">{t.tripadvisorSub}</p>
              </div>
              <div className="flex text-gold text-2xl">★★★★★</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-cream">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-gold/20 text-gold-dark rounded-full text-xs font-medium tracking-wider uppercase mb-4">
              {t.menuTitle}
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-brown-dark">{t.menuTitle}</h2>
          </motion.div>

          <motion.div 
            {...fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-green/10 via-gold/10 to-red/10 rounded-3xl blur-2xl" />
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden p-2 border border-gold/20">
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
              {t.galleryTitle}
            </span>
            <h2 className="font-display text-4xl font-semibold text-brown-dark">{t.galleryTitle}</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { src: '/images/Broodjes%20presentatie.jpeg', alt: 'Broodjes', color: 'gold' },
              { src: '/images/Drankenpresentatie.jpeg', alt: 'Dranken', color: 'green' },
              { src: '/images/IMG_8604.jpeg', alt: 'Restaurant', color: 'red' },
              { src: '/images/IMG_8658.jpeg', alt: 'Gerechten', color: 'gold' },
              { src: '/images/IMG_8661.jpeg', alt: 'Specialiteiten', color: 'green' },
              { src: '/images/IMG_8673.jpeg', alt: 'Sfeer', color: 'red' },
            ].map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group ring-2 ring-${img.color}/20`}
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

      {/* About with Surinamese colors */}
      <section className="py-24 bg-gradient-to-br from-green/5 via-cream to-red/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeInUp}>
            <span className="inline-block px-4 py-1.5 bg-gold/20 text-gold-dark rounded-full text-xs font-medium tracking-wider uppercase mb-4">
              {t.aboutTitle}
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-brown-dark mb-6">{t.aboutTitle}</h2>
            <p className="text-lg text-brown-medium leading-relaxed max-w-2xl mx-auto">
              {t.aboutText}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Location & Contact */}
      <section id="contact" className="py-24 bg-brown-dark text-white relative overflow-hidden">
        {/* Surinamese flag colors as decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green via-white via-red via-white to-gold" />
        <div className="absolute top-20 right-10 w-32 h-32 bg-green/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-red/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-gold/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div {...fadeInUp}>
              <span className="inline-block px-4 py-1.5 bg-white/10 text-gold rounded-full text-xs font-medium tracking-wider uppercase mb-6">
                {t.contact}
              </span>
              
              <h2 className="font-display text-4xl font-semibold mb-8">{t.locationTitle}</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green to-green-dark rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{t.address}</h3>
                    <p className="text-white/70 leading-relaxed">{t.street}<br/>{t.unit}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold/80 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-brown-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{t.hours}</h3>
                    <div className="text-white/70 space-y-1">
                      <p>Ma - Wo: 10:00 - 20:00</p>
                      <p>Do - Za: 10:00 - 21:00</p>
                      <p>Zo: 12:00 - 20:00</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red to-red/80 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{t.contact}</h3>
                    <a href="mailto:info@satelounge.nl" className="text-white/70 hover:text-gold transition-colors">info@satelounge.nl</a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              {...fadeInUp}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-2 ring-gold/30"
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
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ImageWithFallback 
              src="/images/Instagram%20Logo%20Sat%C3%A9Lounge.png" 
              alt="Saté Lounge" 
              className="h-8 w-auto opacity-80"
            />
          </div>
          <p className="text-sm">© 2026 Saté Lounge — {t.tagline}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;