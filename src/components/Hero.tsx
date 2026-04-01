import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import WhatsAppIcon from './icons/WhatsAppIcon';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const navigate = useNavigate();

  const handleWhatsApp = () => {
    window.open('https://wa.me/916284784841?text=Hi!%20I%20am%20interested%20in%20studying%20abroad.', '_blank');
  };

  const handleEnquire = () => {
    // Navigate to contact page
    navigate('/contact');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
    },
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-linear-to-br from-gray-50 via-white to-gold/10 pt-20 lg:pt-24"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(10, 26, 47, 0.4) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
        
        {/* Decorative shapes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-20 left-10 w-20 h-20 border-2 border-gold/40 rounded-lg rotate-12"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute bottom-40 left-1/4 w-16 h-16 border-2 border-navy/20 rounded-full"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="absolute top-1/3 right-1/4 w-8 h-8 bg-gold/30 rounded-full"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-6rem)]">
          
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="text-left py-12 lg:py-0"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 rounded-full px-4 py-1.5 mb-6">
              <Sparkles className="w-4 h-4 text-gold-dark" />
              <span className="text-navy text-sm font-medium">Go Abroad like a pro</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants} className="mb-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="text-navy">TRIDENT</span>{' '}
                <span className="text-gold-dark">GLOBAL</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mt-3 leading-tight">
                Your Trusted Partner for{' '}
                <span className="text-navy underline decoration-gold decoration-4 underline-offset-4">
                  Worldwide
                </span>{' '}
               Work  & Visit Visas
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p variants={itemVariants} className="text-gray-600 text-lg lg:text-xl leading-relaxed mb-8 max-w-xl">
              We simplify your travel and Work dreams with expert visa guidance, fast slot booking, and personalized support for every country.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleEnquire}
                className="group flex items-center gap-2 bg-linear-to-r from-gold to-gold-dark hover:from-gold-dark hover:to-gold text-navy px-7 py-3.5 rounded-full font-semibold text-base shadow-lg shadow-gold/30 hover:shadow-xl hover:shadow-gold/40 transition-all duration-300"
              >
                Enquire Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleWhatsApp}
                className="group flex items-center gap-2 bg-white hover:bg-gray-50 text-navy px-7 py-3.5 rounded-full font-semibold text-base border-2 border-navy/20 hover:border-gold transition-all duration-300"
              >
                <WhatsAppIcon className="w-5 h-5 text-green-500" />
                WhatsApp Us
              </motion.button>
            </motion.div>

            {/* Trust indicator */}
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-navy to-navy-light border-2 border-white flex items-center justify-center text-white text-xs font-bold">A</div>
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-gold to-gold-dark border-2 border-white flex items-center justify-center text-navy text-xs font-bold">S</div>
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-navy-light to-navy border-2 border-white flex items-center justify-center text-white text-xs font-bold">R</div>
              </div>
              <span className="text-gray-600 text-sm font-medium">
                Trusted by <span className="text-navy font-bold">10,000+</span> learners
              </span>
            </motion.div>
          </motion.div>

          {/* Right Content - Image with decorations */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            {/* Large purple circle background */}
            <div className="relative">
              {/* Outer decorative ring */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -inset-4 rounded-full border-2 border-dashed border-gold/50"
              />
              
              {/* Main navy circle */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-linear-to-br from-navy to-navy-light flex items-center justify-center overflow-hidden shadow-2xl shadow-navy/40"
              >
                {/* Student image placeholder - using a gradient with icon */}
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Decorative elements inside circle */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src="image1.png"
                      alt="Student with globe"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-navy/40 to-transparent" />
                </div>
              </motion.div>

              {/* Floating decorative elements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center"
              >
                <div className="w-10 h-10 rounded-full border-4 border-gold/60 border-dashed animate-spin-slow" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -bottom-2 -left-6 w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center"
              >
                <span className="text-2xl">🌍</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="absolute top-1/4 -left-10 w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center"
              >
                <span className="text-xl">✈️</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                className="absolute bottom-1/4 -right-8 w-10 h-10 bg-gold/40 rounded-lg rotate-45"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#0a1628"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
