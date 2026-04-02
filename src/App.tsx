import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, ChevronDown, Star, UtensilsCrossed, Users } from 'lucide-react';
import './App.css';

// Menu items data
const menuCategories = [
  {
    name: 'Saté',
    items: [
      { name: 'Saté Kip', description: '5 stokjes kipsaté met pindasaus, komkommer en brood', price: '€12,50' },
      { name: 'Saté Varken', description: '5 stokjes varkenssaté met pindasaus, komkommer en brood', price: '€13,50' },
      { name: 'Saté Mix', description: '3 stokjes kip + 3 stokjes varken met pindasaus', price: '€14,50' },
    ]
  },
  {
    name: 'Broodjes',
    items: [
      { name: 'Broodje Kipkerrie', description: 'Warm broodje met romige kipkerrie', price: '€8,50' },
      { name: 'Broodje Bara', description: 'Traditionele Surinaamse bara met kipkerrie', price: '€7,50' },
      { name: 'Broodje Saté', description: 'Broodje met 3 stokjes kipsaté en pindasaus', price: '€9,50' },
    ]
  },
  {
    name: 'Maaltijden',
    items: [
      { name: 'Nasi Saté', description: 'Surinaamse nasi met 3 stokjes kipsaté en ei', price: '€14,50' },
      { name: 'Bami Saté', description: 'Surinaamse bami met 3 stokjes kipsaté', price: '€14,50' },
      { name: 'Nasi/Bami Mix', description: 'Combinatie van nasi en bami met saté', price: '€15,50' },
    ]
  },
  {
    name: 'Dranken',
    items: [
      { name: 'Fernandes', description: 'Surinaams frisdrank - diverse smaken', price: '€3,50' },
      { name: 'Dawet', description: 'Traditionele zoete drank', price: '€4,00' },
      { name: 'Frisdrank', description: 'Coca-Cola, Sprite, Fanta', price: '€3,00' },
    ]
  }
];

// Opening hours
const openingHours = [
  { day: 'Maandag - Woensdag', hours: '10:00 - 20:00' },
  { day: 'Donderdag - Zaterdag', hours: '10:00 - 21:00' },
  { day: 'Zondag', hours: '12:00 - 20:00' },
];

function App() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-warm">
      {/* Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">SL</span>
              </div>
              <div>
                <h1 className="font-display text-2xl font-bold text-brown-dark">Saté Lounge</h1>
                <p className="text-xs text-yellow-600 font-medium tracking-wider">SURINAAMSE SPECIALITEITEN</p>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {['Menu', 'Over Ons', 'Locatie', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-brown-dark hover:text-green-600 font-medium transition-colors"
                >
                  {item}
                </button>
              ))}
            </nav>

            {/* CTA */}
            <a
              href="https://www.markthal.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all"
            >
              <MapPin className="w-4 h-4" />
              Route
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-warm via-cream to-warm opacity-50" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNDQjkzMTkiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2NGgtNHpNMjAgMjBoNHY0aC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-green-500/20 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-6">
                <Star className="w-4 h-4 text-green-600 fill-current" />
                <span className="text-sm font-medium text-green-700">Surinaamse specialiteiten</span>
              </div>
              
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-brown-dark leading-tight mb-6">
                Authentieke
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-yellow-500">
                  Surinaamse Saté
                </span>
              </h2>
              
              <p className="text-lg text-brown-medium mb-8 max-w-lg mx-auto lg:mx-0">
                Ervaar de rijke smaken van Suriname in de Markthal Rotterdam. 
                Ambachtelijk bereide saté, kipkerrie en meer.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection('menu')}
                  className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2"
                >
                  <UtensilsCrossed className="w-5 h-5" />
                  Bekijk Menu
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 bg-white text-brown-dark border-2 border-brown-dark/20 rounded-full font-semibold hover:border-green-600 hover:text-green-600 transition-all"
                >
                  Contact
                </button>
              </div>

              {/* Quick Info */}
              <div className="mt-12 flex flex-wrap gap-6 justify-center lg:justify-start">
                <div className="flex items-center gap-2 text-brown-medium">
                  <MapPin className="w-5 h-5 text-green-600" />
                  <span className="text-sm">Markthal Rotterdam</span>
                </div>
                <div className="flex items-center gap-2 text-brown-medium">
                  <Clock className="w-5 h-5 text-green-600" />
                  <span className="text-sm">Open vandaag tot 20:00</span>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Decorative Circle */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-yellow-100 rounded-full -rotate-6" />
                <div className="absolute inset-4 bg-gradient-to-br from-warm to-cream rounded-full" />
                
                {/* Main Image Container */}
                <div className="absolute inset-8 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src="/images/hero-sate.jpg"
                    alt="Surinaamse Saté"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Star className="w-6 h-6 text-green-600 fill-current" />
                    </div>
                    <div>
                      <p className="font-bold text-brown-dark">4.8/5</p>
                      <p className="text-sm text-brown-medium">Beoordeling</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-brown-medium cursor-pointer"
            onClick={() => scrollToSection('menu')}
          >
            <span className="text-sm">Scroll naar menu</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium mb-4"
            >
              Ons Menu
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold text-brown-dark mb-4"
            >
              Surinaamse Specialiteiten
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-brown-medium max-w-2xl mx-auto"
            >
              Authentieke gerechten bereid met traditionele Surinaamse recepten en specerijen
            </motion.p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {menuCategories.map((category, index) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeCategory === index
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-gray-100 text-brown-medium hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl mx-auto"
            >
              <div className="space-y-4">
                {menuCategories[activeCategory].items.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-6 bg-warm rounded-2xl hover:shadow-lg transition-shadow group"
                  >
                    <div className="flex-1">
                      <h3 className="font-semibold text-brown-dark text-lg group-hover:text-green-600 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-brown-medium text-sm mt-1">{item.description}</p>
                    </div>
                    <span className="font-display text-xl font-bold text-green-600 ml-4">
                      {item.price}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* About Section */}
      <section id="over-ons" className="py-24 bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
                Over Saté Lounge
              </span>
              <h2 className="font-display text-4xl font-bold text-brown-dark mb-6">
                Passie voor Authentieke Surinaamse Smaken
              </h2>
              <div className="space-y-4 text-brown-medium">
                <p>
                  Saté Lounge is ontstaan uit liefde voor de Surinaamse keuken. Ricardo van Rijn, 
                  eigenaar en kok, brengt met trots de authentieke smaken van Suriname naar Rotterdam.
                </p>
                <p>
                  Onze saté wordt dagelijks vers bereid volgens traditionele recepten. 
                  De pindasaus is huisgemaakt, evenals onze kipkerrie en andere specialiteiten.
                </p>
                <p>
                  In de Markthal Rotterdam kun je ons vinden op stand U31, waar we je verwelkomen 
                  met warme gastvrijheid en heerlijk eten.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg bg-warm" />
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-lg bg-warm" />
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-lg bg-warm" />
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg bg-warm" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="locatie" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium mb-4">
              Locatie
            </span>
            <h2 className="font-display text-4xl font-bold text-brown-dark mb-4">
              Vind Ons in de Markthal
            </h2>
            <p className="text-brown-medium max-w-2xl mx-auto">
              Centraal gelegen in Rotterdam, makkelijk bereikbaar met OV en auto
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map / Location Info */}
            <div className="space-y-6">
              <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2461.0!2d4.487!3d51.92!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c4335c5e0f8a31%3A0x7a86c8c8c8c8c8c8!2sMarkthal!5e0!3m2!1snl!2snl!4v1234567890!5m2!1snl!2snl"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-6 bg-warm rounded-2xl">
                  <MapPin className="w-8 h-8 text-green-600 mb-3" />
                  <h3 className="font-semibold text-brown-dark mb-2">Adres</h3>
                  <p className="text-brown-medium text-sm">
                    Markthal Rotterdam<br />
                    Dominee Jan Scharpstraat 298<br />
                    Unit U31, 3011 GZ Rotterdam
                  </p>
                </div>
                <div className="p-6 bg-warm rounded-2xl">
                  <Clock className="w-8 h-8 text-green-600 mb-3" />
                  <h3 className="font-semibold text-brown-dark mb-2">Openingstijden</h3>
                  <div className="text-brown-medium text-sm space-y-1">
                    {openingHours.map((item) => (
                      <div key={item.day} className="flex justify-between">
                        <span>{item.day}</span>
                        <span className="font-medium">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 bg-gradient-to-br from-green-50 to-yellow-50 rounded-3xl">
              <h3 className="font-display text-2xl font-bold text-brown-dark mb-6">
                Neem Contact Op
              </h3>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-brown-dark mb-2">Naam</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                      placeholder="Je naam"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brown-dark mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                      placeholder="je@email.nl"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-brown-dark mb-2">Bericht</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all resize-none"
                    placeholder="Je bericht..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] transition-all"
                >
                  Verstuur Bericht
                </button>
              </form>

              {/* Apply Button */}
              <div className="mt-8 pt-8 border-t border-green-200">
                <p className="text-sm text-brown-medium mb-4">
                  Wil je bij ons komen werken?
                </p>
                <a
                  href="mailto:info@satelounge.nl?subject=Sollicitatie Saté Lounge"
                  className="w-full py-4 bg-brown-dark text-white rounded-xl font-semibold hover:bg-brown-medium transition-colors flex items-center justify-center gap-2"
                >
                  <Users className="w-5 h-5" />
                  Solliciteren
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown-dark py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">SL</span>
              </div>
              <span className="font-display text-xl font-bold text-white">Saté Lounge</span>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://instagram.com/satelounge"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a
                href="https://facebook.com/satelounge"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Saté Lounge. Alle rechten voorbehouden.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;