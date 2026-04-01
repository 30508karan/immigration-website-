import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  ArrowRight,
  Send,
} from 'lucide-react';
import WhatsAppIcon from './icons/WhatsAppIcon';

// SVG Flag Components
const FlagUS = () => (
  <svg viewBox="0 0 60 40" className="w-full h-full">
    <rect width="60" height="40" fill="#B22234"/>
    {[0,1,2,3,4,5,6].map(i => <rect key={i} y={i*6.15} width="60" height="3.08" fill={i%2===0?"#B22234":"#fff"} />)}
    <rect width="24" height="21.54" fill="#3C3B6E"/>
    {[...Array(50)].map((_,i) => <circle key={i} cx={2+(i%6)*4} cy={2+(Math.floor(i/6))*4} r="0.8" fill="#fff"/>)}
  </svg>
);

const FlagUK = () => (
  <svg viewBox="0 0 60 40" className="w-full h-full">
    <rect width="60" height="40" fill="#012169"/>
    <path d="M0,0 L60,40 M60,0 L0,40" stroke="#fff" strokeWidth="8"/>
    <path d="M0,0 L60,40 M60,0 L0,40" stroke="#C8102E" strokeWidth="4"/>
    <path d="M30,0 V40 M0,20 H60" stroke="#fff" strokeWidth="12"/>
    <path d="M30,0 V40 M0,20 H60" stroke="#C8102E" strokeWidth="6"/>
  </svg>
);

const FlagCA = () => (
  <svg viewBox="0 0 60 40" className="w-full h-full">
    <rect width="15" height="40" fill="#FF0000"/>
    <rect x="15" width="30" height="40" fill="#fff"/>
    <rect x="45" width="15" height="40" fill="#FF0000"/>
    <path d="M30,8 L32,14 L28,17 L30,16 L27,22 L29,21 L30,32 L31,21 L33,22 L30,16 L32,17 L28,14 Z" fill="#FF0000"/>
  </svg>
);

const FlagAU = () => (
  <svg viewBox="0 0 60 40" className="w-full h-full">
    <rect width="60" height="40" fill="#00008B"/>
    <rect width="30" height="20" fill="#012169"/>
    <path d="M0,0 L30,20 M30,0 L0,20" stroke="#fff" strokeWidth="4"/>
    <path d="M0,0 L30,20 M30,0 L0,20" stroke="#C8102E" strokeWidth="2"/>
    <path d="M15,0 V20 M0,10 H30" stroke="#fff" strokeWidth="6"/>
    <path d="M15,0 V20 M0,10 H30" stroke="#C8102E" strokeWidth="3"/>
    <circle cx="45" cy="28" r="3" fill="#fff"/>
  </svg>
);

const FlagDE = () => (
  <svg viewBox="0 0 60 40" className="w-full h-full">
    <rect width="60" height="13.33" fill="#000"/>
    <rect y="13.33" width="60" height="13.33" fill="#DD0000"/>
    <rect y="26.66" width="60" height="13.34" fill="#FFCC00"/>
  </svg>
);

const FlagEU = () => (
  <svg viewBox="0 0 60 40" className="w-full h-full">
    <rect width="60" height="40" fill="#003399"/>
    {[...Array(12)].map((_, i) => {
      const angle = (i * 30 - 90) * (Math.PI / 180);
      const cx = 30 + 12 * Math.cos(angle);
      const cy = 20 + 12 * Math.sin(angle);
      return (
        <polygon
          key={i}
          points={`${cx},${cy-3} ${cx+1},${cy-1} ${cx+3},${cy-1} ${cx+1.5},${cy+0.5} ${cx+2},${cy+3} ${cx},${cy+1.5} ${cx-2},${cy+3} ${cx-1.5},${cy+0.5} ${cx-3},${cy-1} ${cx-1},${cy-1}`}
          fill="#FFCC00"
        />
      );
    })}
  </svg>
);

const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: '-100px' });

  const quickLinks = [
    { name: 'About Us', href: '/about', isRoute: true },
    { name: 'Services', href: '/services', isRoute: true },
    { name: 'Countries', href: '/countries', isRoute: true },
    { name: 'Testimonials', href: '/#testimonials', isRoute: false },
    { name: 'Contact Us', href: '/contact', isRoute: true },
  ];

  const services = [
    { name: 'Student Visas', href: '/services' },
    // { name: 'SOP & LOR Writing', href: '/services' },
    // { name: 'Admission Counseling', href: '/services' },
    { name: 'Financial Documentation', href: '/services' },
    { name: 'Visit / Tourist Visas', href: '/services' },
    { name: 'Visa Slot Booking', href: '/services' },
    { name: 'Travel & Accommodation Support', href: '/services' },
  ];

  const countries = [
    { name: 'USA', href: '/countries', Flag: FlagUS },
    { name: 'UK', href: '/countries', Flag: FlagUK },
    { name: 'Canada', href: '/countries', Flag: FlagCA },
    { name: 'Australia', href: '/countries', Flag: FlagAU },
    { name: 'Germany', href: '/countries', Flag: FlagDE },
    { name: 'Schengen', href: '/countries', Flag: FlagEU },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/916284784841?text=Hi!%20I%20am%20interested%20in%20studying%20abroad.', '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer id="contact" ref={footerRef} className="bg-navy text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      {/* Newsletter Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="border-b border-white/10 relative z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-white/60">
                Subscribe to our newsletter for visa updates and travel tips.
              </p>
            </div>
            <div className="flex w-full lg:w-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-80 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                aria-label="Email for newsletter"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gold text-navy px-6 py-3 rounded-full font-semibold hover:bg-gold-dark transition-colors flex items-center gap-2 shadow-lg shadow-gold/20"
              >
                <Send className="w-4 h-4" />
                <span className="hidden sm:inline">Subscribe</span>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <img
              src="/INFINITI.png"
              alt="Trident Global"
              className="h-14 w-auto mb-6"
            />
            <p className="text-white/70 mb-6 max-w-md leading-relaxed">
              Your trusted partner for worldwide visit and study visas. We simplify your travel
              and Work dreams with expert guidance and personalized support.
            </p>
            <div className="space-y-3">
              <motion.a
                href="tel:916284784841"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors"
                aria-label="Call us"
              >
                <Phone className="w-5 h-5 text-gold" />
                <span>916284784841</span>
              </motion.a>
              <motion.a
                href="mailto:info@thetridentglobal.in"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors"
                aria-label="Email us"
              >
                <Mail className="w-5 h-5 text-gold" />
                <span>info@thetridentglobal.in</span>
              </motion.a>
              <motion.button
                onClick={handleWhatsApp}
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-white/70 hover:text-green-400 transition-colors"
                aria-label="Chat on WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5 text-green-400" />
                <span>Chat on WhatsApp</span>
              </motion.button>
              <div className="flex items-start gap-3 text-white/70">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span>Trident Global Advisors 4334, Devi Dasa Pura sector 5, thanesar, kurukshetra, haryana 136118 , India</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.isRoute ? (
                    <motion.div whileHover={{ x: 5 }}>
                      <Link
                        to={link.href}
                        className="text-white/70 hover:text-gold transition-colors flex items-center gap-2 group"
                      >
                        <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                        {link.name}
                      </Link>
                    </motion.div>
                  ) : (
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-white/70 hover:text-gold transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.name}
                    </motion.a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <motion.a
                    href={service.href}
                    whileHover={{ x: 5 }}
                    className="text-white/70 hover:text-gold transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {service.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Countries */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-6">Top Countries</h4>
            <ul className="space-y-3">
              {countries.map((country) => (
                <li key={country.name}>
                  <motion.a
                    href={country.href}
                    whileHover={{ x: 5 }}
                    className="text-white/70 hover:text-gold transition-colors flex items-center gap-2 group"
                  >
                    <div className="w-5 h-4 rounded-sm overflow-hidden">
                      <country.Flag />
                    </div>
                    {country.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <p className="text-white/50 text-sm">
            © 2025 Trident Global. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
          <div className="flex items-center gap-6 text-sm text-white/50">
            <a href="#" className="hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating WhatsApp Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleWhatsApp}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:bg-green-600 transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7 text-white" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
      </motion.button>
    </footer>
  );
};

export default Footer;
