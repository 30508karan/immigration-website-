import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, ArrowRight, Sparkles, MapPin, Plane, GraduationCap, Users, Star } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Flag URL helper
const getFlagUrl = (countryCode: string, size: number = 48) => 
  `https://flagcdn.com/w${size}/${countryCode.toLowerCase()}.png`;

// Animation Variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
  },
};

// Countries Data with country codes for flags
const countriesData = [
  {
    id: 1,
    name: 'United States',
    code: 'us',
    visas: ['F1 Student Visa', 'B1/B2 Visit Visa'],
    description: 'Top universities and global career opportunities.',
    image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800&h=500&fit=crop',
    highlights: ['Ivy League', '1M+ Int\'l Students', 'OPT Work '],
  },
  {
    id: 2,
    name: 'United Kingdom',
    code: 'gb',
    visas: ['Student Route Visa', 'Visitor Visa'],
    description: 'World-class education, scholarships & 2-year PSW.',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=500&fit=crop',
    highlights: ['Oxford & Cambridge', '2-Year PSW', 'Scholarships'],
  },
  {
    id: 3,
    name: 'Canada',
    code: 'ca',
    visas: ['Work  Permit', 'Visitor Visa'],
    description: 'High visa acceptance and PR pathways.',
    image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&h=500&fit=crop',
    highlights: ['PR Pathways', '90% Visa Rate', 'PGWP'],
  },
  {
    id: 4,
    name: 'Australia',
    code: 'au',
    visas: ['Student Visa Subclass 500', 'Visitor Visa'],
    description: 'Safe, multicultural, and high-quality education.',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&h=500&fit=crop',
    highlights: ['Group of 8', 'Work  Rights', 'Quality Life'],
  },
  {
    id: 5,
    name: 'Germany',
    code: 'de',
    visas: ['Student Applicant Visa', 'Work -Ready Pathways'],
    description: 'Affordable Work & top engineering programs.',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&h=500&fit=crop',
    highlights: ['Free Tuition', 'Engineering Hub', '18-Month Stay'],
  },
  {
    id: 6,
    name: 'Schengen Region',
    code: 'eu',
    visas: ['Tourist Visa', 'Family Visit'],
    description: 'Travel freely across Europe with 1 visa.',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=500&fit=crop',
    highlights: ['26 Countries', 'Multi-Entry', 'Easy Travel'],
  },
];

// Additional countries with codes
const additionalCountries = [
  { name: 'Italy', code: 'it' },
  { name: 'France', code: 'fr' },
  { name: 'Spain', code: 'es' },
  { name: 'Netherlands', code: 'nl' },
  { name: 'Ireland', code: 'ie' },
  { name: 'Singapore', code: 'sg' },
  { name: 'Malaysia', code: 'my' },
  { name: 'Turkey', code: 'tr' },
  { name: 'New Zealand', code: 'nz' },
  { name: 'Switzerland', code: 'ch' },
  { name: 'Portugal', code: 'pt' },
  { name: 'Austria', code: 'at' },
];

const Countries = () => {
  const heroRef = useRef(null);
  const gridRef = useRef(null);
  const additionalRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: '-50px' });
  const gridInView = useInView(gridRef, { once: true, margin: '-100px' });
  const additionalInView = useInView(additionalRef, { once: true, margin: '-50px' });
  const ctaInView = useInView(ctaRef, { once: true, margin: '-50px' });

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-linear-to-br from-[#F8F9FA] via-white to-[#F5F6F7] overflow-hidden"
      >
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-[0.02]">
          <Globe className="w-full h-full text-navy" />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, #0A1A2F 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

        {/* Floating dots */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-40 right-1/4 w-3 h-3 bg-gold rounded-full opacity-60"
        />
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-32 left-1/4 w-2 h-2 bg-navy rounded-full opacity-40"
        />
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute top-1/3 left-20 w-2.5 h-2.5 bg-gold rounded-full opacity-50"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Floating Country Flags */}
          <div className="absolute inset-0 pointer-events-none hidden lg:block">
            <motion.img
              src={getFlagUrl('us', 80)}
              alt="US Flag"
              animate={{ y: [0, -15, 0], rotate: [-5, 5, -5] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-10 left-[10%] w-12 h-8 rounded shadow-lg object-cover"
            />
            <motion.img
              src={getFlagUrl('gb', 80)}
              alt="UK Flag"
              animate={{ y: [0, 12, 0], rotate: [5, -5, 5] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute top-20 right-[12%] w-12 h-8 rounded shadow-lg object-cover"
            />
            <motion.img
              src={getFlagUrl('ca', 80)}
              alt="Canada Flag"
              animate={{ y: [0, -10, 0], rotate: [-3, 3, -3] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-24 left-[15%] w-10 h-7 rounded shadow-lg object-cover"
            />
            <motion.img
              src={getFlagUrl('au', 80)}
              alt="Australia Flag"
              animate={{ y: [0, 15, 0], rotate: [3, -3, 3] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
              className="absolute bottom-32 right-[18%] w-10 h-7 rounded shadow-lg object-cover"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md border border-gold/40 rounded-full px-6 py-2.5 mb-8 shadow-sm"
          >
            <div className="flex -space-x-2">
              <img src={getFlagUrl('us', 40)} alt="US" className="w-6 h-4 rounded-sm object-cover ring-2 ring-white" />
              <img src={getFlagUrl('gb', 40)} alt="UK" className="w-6 h-4 rounded-sm object-cover ring-2 ring-white" />
              <img src={getFlagUrl('ca', 40)} alt="CA" className="w-6 h-4 rounded-sm object-cover ring-2 ring-white" />
              <img src={getFlagUrl('au', 40)} alt="AU" className="w-6 h-4 rounded-sm object-cover ring-2 ring-white" />
            </div>
            <span className="w-px h-4 bg-gray-300" />
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-navy font-semibold text-sm">6+ Countries</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-navy mb-6 leading-tight"
          >
            Work  & Travel
            <br />
            <span className="relative inline-block">
              <span className="italic font-serif text-gold">Destinations</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={heroInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -bottom-2 left-0 w-full h-1 bg-gold/30 rounded-full origin-left"
              />
            </span>
            {' '}We Serve
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto mb-10"
          >
            Explore visa pathways for top countries around the world. Your gateway to global Work and travel opportunities.
          </motion.p>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8 lg:gap-12"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-navy" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-navy">500+</p>
                <p className="text-gray-500 text-sm">Universities</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-gold" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-navy">10K+</p>
                <p className="text-gray-500 text-sm">Students Placed</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center">
                <Star className="w-6 h-6 text-navy" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-navy">98%</p>
                <p className="text-gray-500 text-sm">Success Rate</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Countries Grid Section */}
      <section ref={gridRef} className="py-24 lg:py-32 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-navy/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={gridInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 text-gold font-semibold text-sm tracking-wider uppercase mb-4">
              <Globe className="w-4 h-4" />
              Featured Destinations
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">
              Top Countries for <span className="italic font-serif text-gold">Your Journey</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Expert visa assistance for the world's most sought-after study and travel destinations
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={gridInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {countriesData.map((country) => (
              <motion.div
                key={country.id}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  boxShadow: '0 30px 60px -15px rgba(249, 196, 107, 0.3)',
                }}
                className="group relative bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden transition-all duration-500 hover:border-gold/50"
              >
                {/* Country Image with Overlay */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={country.image}
                    alt={`${country.name} destination`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient overlays */}
                  <div className="absolute inset-0 bg-linear-to-t from-navy via-navy/40 to-transparent opacity-80" />
                  <div className="absolute inset-0 bg-linear-to-br from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Flag Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-full pl-1 pr-4 py-1 shadow-lg">
                    <img
                      src={getFlagUrl(country.code, 80)}
                      alt={`${country.name} flag`}
                      className="w-8 h-6 rounded object-cover shadow-sm"
                    />
                    <span className="text-navy font-bold text-sm">{country.code.toUpperCase()}</span>
                  </div>

                  {/* Country Name Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2">{country.name}</h3>
                    {/* Highlights Pills */}
                    <div className="flex flex-wrap gap-2">
                      {country.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-medium text-white/90 bg-white/20 backdrop-blur-sm rounded-full px-2.5 py-1"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Visa Types */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {country.visas.map((visa, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-1.5 bg-linear-to-r from-navy/5 to-navy/10 text-navy text-xs font-semibold px-3 py-2 rounded-lg border border-navy/10"
                      >
                        <MapPin className="w-3.5 h-3.5 text-gold" />
                        {visa}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">{country.description}</p>

                  {/* Learn More Button */}
                  <Link to="/#contact">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-2 bg-navy text-white font-semibold py-3.5 px-5 rounded-xl group-hover:bg-gold group-hover:text-navy transition-all duration-300 shadow-sm hover:shadow-lg"
                    >
                      <span>Explore {country.code.toUpperCase()}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                </div>

                {/* Premium corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-bl from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Countries Section */}
      <section ref={additionalRef} className="py-20 lg:py-24 bg-linear-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={additionalInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 text-gold font-semibold text-sm tracking-wider uppercase mb-4">
              <Plane className="w-4 h-4" />
              More Options
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-4">
              You can also apply for:
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">More destinations to explore for your journey abroad</p>
          </motion.div>

          {/* Scrollable Pills Container */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={additionalInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Gradient fade edges for mobile */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-linear-to-r from-gray-50 to-transparent z-10 pointer-events-none md:hidden" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-linear-to-l from-gray-50 to-transparent z-10 pointer-events-none md:hidden" />

            <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-4 overflow-x-auto pb-4 md:pb-0 scrollbar-hide px-4 md:px-0 -mx-4 md:mx-0">
              {additionalCountries.map((country, index) => (
                <motion.div
                  key={country.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={additionalInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  whileHover={{
                    scale: 1.08,
                    y: -5,
                    boxShadow: '0 15px 40px -10px rgba(249, 196, 107, 0.35)',
                  }}
                  className="shrink-0 inline-flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-5 py-3 text-navy font-medium cursor-pointer hover:bg-navy hover:text-white hover:border-navy transition-all duration-300 shadow-sm group"
                >
                  <img
                    src={getFlagUrl(country.code, 40)}
                    alt={`${country.name} flag`}
                    className="w-7 h-5 rounded object-cover shadow-sm ring-1 ring-gray-200 group-hover:ring-0"
                  />
                  <span>{country.name}</span>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={additionalInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + additionalCountries.length * 0.05 }}
                whileHover={{
                  scale: 1.08,
                  y: -5,
                }}
                className="shrink-0 inline-flex items-center gap-2 bg-gold border border-gold rounded-2xl px-6 py-3 text-navy font-bold cursor-pointer hover:bg-navy hover:text-gold hover:border-navy transition-all duration-300 shadow-md"
              >
                <Globe className="w-5 h-5" />
                <span>& 15+ more</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-24 lg:py-32 bg-navy relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #F9C46B 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        {/* Floating World Icon */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 right-10 lg:right-32 -translate-y-1/2 opacity-10"
        >
          <Globe className="w-48 h-48 lg:w-72 lg:h-72 text-gold" />
        </motion.div>

        {/* Floating Flags */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block">
          <motion.img
            src={getFlagUrl('de', 80)}
            alt="DE Flag"
            animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-20 left-[20%] w-10 h-7 rounded shadow-xl object-cover opacity-40"
          />
          <motion.img
            src={getFlagUrl('fr', 80)}
            alt="FR Flag"
            animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute bottom-32 left-[15%] w-8 h-5 rounded shadow-xl object-cover opacity-30"
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={ctaInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-10"
            >
              <div className="flex -space-x-2">
                <img src={getFlagUrl('us', 40)} alt="US" className="w-6 h-4 rounded-sm object-cover ring-2 ring-white/30" />
                <img src={getFlagUrl('gb', 40)} alt="UK" className="w-6 h-4 rounded-sm object-cover ring-2 ring-white/30" />
                <img src={getFlagUrl('ca', 40)} alt="CA" className="w-6 h-4 rounded-sm object-cover ring-2 ring-white/30" />
              </div>
              <span className="w-px h-4 bg-white/30" />
              <Globe className="w-4 h-4 text-gold" />
              <span className="text-white/90 font-medium text-sm">Expert Country Guidance</span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Need help choosing
              <br />
              <span className="text-gold italic font-serif">the right country?</span>
            </h2>

            <p className="text-white/70 text-lg sm:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Get personalized country and visa recommendations tailored to your profile, budget, and career goals.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/#contact">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 25px 50px -15px rgba(249, 196, 107, 0.5)',
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 bg-gold text-navy font-bold text-lg px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <span>Get Country Guidance</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </motion.button>
              </Link>
              <Link to="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 text-white/80 font-medium hover:text-gold transition-colors"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Countries;
