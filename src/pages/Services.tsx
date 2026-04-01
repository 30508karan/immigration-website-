import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import {

  Users,
  FileText,
  Plane,
  CalendarCheck,
  Home,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Star,
  Globe,
  Shield,
  Award,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Animation Variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
  },
};

// Services Data
const servicesData = [
  {
    id: 1,
    title: 'Work  Visas',
    icon: CalendarCheck,
    description: 'We assist professionals in securing work visas with complete end-to-end support including:',
    points: [
      'Country-specific work visa guidance',
    'Document eligibility checking',
    'Job offer & employer compliance support',
    'Work  permit application preparation',
    'Medical & PCC assistance',
    'Visa interview and biometrics preparation',
    ],
    gradient: 'from-blue-500 to-indigo-600',
    accentColor: 'blue',
  },
  // {
  //   id: 2,
  //   title: 'SOP & LOR Writing',
  //   icon: PenTool,
  //   description: 'Professional, personalized writing services that strengthen your application:',
  //   points: [
  //     'University-specific SOPs',
  //     'Visa-specific SOPs',
  //     'LORs tailored for academic or professional use',
  //     'Highlighting achievements, goals, and career vision',
  //   ],
  //   gradient: 'from-purple-500 to-pink-500',
  //   accentColor: 'purple',
  // },
  // {
  //   id: 3,
  //   title: 'Admission Counseling',
  //   icon: Users,
  //   description: 'Expert guidance to help you select the right academic path abroad:',
  //   points: [
  //     'Country selection',
  //     'University and course matching',
  //     'Complete application submission support',
  //   ],
  //   gradient: 'from-emerald-500 to-teal-500',
  //   accentColor: 'emerald',
  // },
  {
    id: 4,
    title: 'Financial Documentation',
    icon: FileText,
    description: 'Accurate, embassy-ready documentation support to ensure smooth visa approval:',
    points: [
      'Financial statement guidance',
      'Bank balance requirements',
      'Affidavit of support',
      'Sponsorship documentation',
      'Visa financial profiling',
    ],
    gradient: 'from-amber-500 to-orange-500',
    accentColor: 'amber',
  },
  {
    id: 5,
    title: 'Work  & Visit Visas',
    icon: Plane,
    description: 'We handle your entire travel visa process with end-to-end support:',
    points: [
      'Application filing',
      'Required document checklist',
      'Travel itinerary creation',
      'Hotel & flight guidance',
      'Cover letter writing',
    ],
    gradient: 'from-cyan-500 to-blue-500',
    accentColor: 'cyan',
  },
  {
    id: 6,
    title: 'Visa Slot Booking',
    icon: CalendarCheck,
    description: 'Fast and reliable slot booking service for high-demand countries:',
    points: [
      'Real-time slot tracking',
      'Priority scheduling',
      'Alerts for sudden slot openings',
      'Error-free booking assistance',
    ],
    gradient: 'from-rose-500 to-red-500',
    accentColor: 'rose',
  },
  {
    id: 7,
    title: 'Travel & Accommodation Support',
    icon: Home,
    description: 'Support services for a stress-free transition to your new destination:',
    points: [
      'Housing assistance',
      'Forex guidance',
      'Insurance support',
      'Pre-departure travel checklists',
    ],
    gradient: 'from-violet-500 to-purple-600',
    accentColor: 'violet',
  },
];

// Animated Background Grid
const BackgroundGrid = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 opacity-[0.02]">
      <svg width="100%" height="100%">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#0A1A2F" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  </div>
);

// Floating Orb Component
const FloatingOrb = ({
  size,
  color,
  top,
  left,
  delay = 0,
  blur = 'blur-3xl',
}: {
  size: string;
  color: string;
  top: string;
  left: string;
  delay?: number;
  blur?: string;
}) => (
  <motion.div
    animate={{
      y: [0, -30, 0],
      x: [0, 15, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      delay,
      ease: 'easeInOut',
    }}
    className={`absolute ${size} ${color} rounded-full ${blur} pointer-events-none`}
    style={{ top, left }}
    aria-hidden="true"
  />
);

// Decorative Shapes Component
const DecorativeShapes = () => (
  <>
    {/* Animated circles */}
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        animate={{
          y: [0, -15, 0],
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4 + i * 0.5,
          repeat: Infinity,
          delay: i * 0.3,
        }}
        className="absolute w-2 h-2 bg-gold rounded-full"
        style={{
          top: `${15 + i * 10}%`,
          left: `${5 + i * 12}%`,
        }}
        aria-hidden="true"
      />
    ))}
    
    {/* Navy dots on right */}
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={`navy-${i}`}
        animate={{
          y: [0, 20, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 5 + i * 0.4,
          repeat: Infinity,
          delay: i * 0.4,
        }}
        className="absolute w-1.5 h-1.5 bg-navy rounded-full"
        style={{
          top: `${20 + i * 12}%`,
          right: `${8 + i * 5}%`,
        }}
        aria-hidden="true"
      />
    ))}
  </>
);

// Featured Service Card Component - Student Visas (Special Design)
const FeaturedServiceCard = ({
  service,
}: {
  service: (typeof servicesData)[0];
}) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: '-50px' });
  const Icon = service.icon;

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      whileHover={{
        y: -10,
        transition: { duration: 0.4 },
      }}
      className="group relative md:col-span-2 lg:col-span-2 rounded-3xl overflow-hidden"
    >
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-br from-navy via-navy-light to-navy" />
      
      {/* Animated Mesh Gradient Overlay */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(249, 196, 107, 0.3) 0%, transparent 40%), radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.2) 0%, transparent 40%)',
          backgroundSize: '200% 200%',
        }}
        aria-hidden="true"
      />

      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -30, 0],
            x: [0, 10, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
          }}
          className="absolute w-1.5 h-1.5 bg-gold/60 rounded-full"
          style={{
            top: `${15 + i * 10}%`,
            left: `${10 + i * 10}%`,
          }}
          aria-hidden="true"
        />
      ))}

      {/* Rotating Ring Decorations */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-20 -right-20 w-60 h-60 border border-white/10 rounded-full"
        aria-hidden="true"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="absolute -bottom-16 -left-16 w-48 h-48 border border-gold/20 rounded-full"
        aria-hidden="true"
      />

      {/* Glowing Accent Lines */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-gold to-transparent opacity-60" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-gold via-transparent to-gold opacity-40" />

      {/* Content Container */}
      <div className="relative z-10 p-8 lg:p-10">
        {/* Top Section - Badge & Icon */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
          {/* Left - Badge, Title, Description */}
          <div className="lg:w-1/2">
            {/* Featured Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full px-4 py-2 mb-5"
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-4 h-4 text-gold" aria-hidden="true" />
              </motion.div>
              <span className="text-sm font-bold text-gold">Most Popular Service</span>
              <Star className="w-4 h-4 text-gold fill-gold" aria-hidden="true" />
            </motion.div>

            {/* Icon with Special Effects */}
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="relative w-20 h-20 lg:w-24 lg:h-24 mb-6"
            >
              {/* Outer Glow Ring */}
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-2xl bg-gold/30 blur-xl"
                aria-hidden="true"
              />
              {/* Icon Container */}
              <div className="relative w-full h-full rounded-2xl bg-linear-to-br from-gold via-amber-400 to-gold flex items-center justify-center shadow-2xl shadow-gold/40">
                <Icon className="w-10 h-10 lg:w-12 lg:h-12 text-navy" aria-hidden="true" />
              </div>
              {/* Shine Effect */}
              <motion.div
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute inset-0 rounded-2xl bg-linear-to-r from-transparent via-white/40 to-transparent overflow-hidden"
                style={{ clipPath: 'inset(0)' }}
                aria-hidden="true"
              />
            </motion.div>

            {/* Title */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4"
            >
              {service.title}
            </motion.h3>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-white/70 text-base lg:text-lg leading-relaxed"
            >
              {service.description}
            </motion.p>
          </div>

          {/* Right - Decorative Element */}
          <div className="hidden lg:flex lg:w-1/3 lg:justify-end lg:items-start">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative"
            >
              {/* 3D Card Stack Effect */}
              <div className="relative w-32 h-40">
                <div className="absolute top-4 left-4 w-full h-full rounded-xl bg-white/5 border border-white/10" />
                <div className="absolute top-2 left-2 w-full h-full rounded-xl bg-white/10 border border-white/10" />
                <div className="absolute top-0 left-0 w-full h-full rounded-xl bg-linear-to-br from-gold/20 to-gold/5 border border-gold/30 flex flex-col items-center justify-center gap-3 backdrop-blur-sm">
                  <CheckCircle className="w-12 h-12 text-gold" aria-hidden="true" />
                  <span className="text-xs font-bold text-white/80 uppercase tracking-wider">Work  Abroad</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Points Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {service.points.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.5 + idx * 0.1 }}
              whileHover={{ scale: 1.03, y: -3 }}
              className="group/item relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-gold/30 transition-all duration-300"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-xl bg-gold/5 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
              
              <div className="relative flex items-start gap-3">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-8 h-8 rounded-lg bg-linear-to-br from-gold to-amber-500 flex items-center justify-center shrink-0 shadow-lg shadow-gold/20"
                >
                  <CheckCircle className="w-4 h-4 text-navy" aria-hidden="true" />
                </motion.div>
                <span className="text-white/90 text-sm lg:text-base font-medium group-hover/item:text-gold transition-colors duration-300">
                  {point}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://wa.me/919128789999?text=Hi!%20I%20am%20interested%20in%20Student%20Visa%20services.', '_blank')}
            className="group/btn inline-flex items-center gap-3 bg-gold text-navy px-6 py-3 rounded-full font-bold shadow-lg shadow-gold/30 hover:shadow-xl hover:shadow-gold/40 transition-all duration-300"
          >
            Get Started Today
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </motion.span>
          </motion.button>
          <span className="text-white/50 text-sm flex items-center gap-2">
            <Shield className="w-4 h-4" aria-hidden="true" />
            98% Success Rate
          </span>
        </motion.div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gold/20 rounded-full blur-3xl" />
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
    </motion.div>
  );
};

// Service Card Component - Enhanced (For other services)
const ServiceCard = ({
  service,
  index,
}: {
  service: (typeof servicesData)[0];
  index: number;
}) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: '-50px' });
  const Icon = service.icon;

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ delay: index * 0.1 }}
      whileHover={{
        y: -12,
        transition: { duration: 0.4, ease: 'easeOut' },
      }}
      className="group relative rounded-3xl overflow-hidden h-full"
    >
      {/* Animated Background Gradient */}
      <motion.div
        className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
      />
      
      {/* Card Background */}
      <div className="absolute inset-0 bg-white group-hover:bg-white/95 transition-colors duration-500 rounded-3xl" />
      
      {/* Top Accent Bar */}
      <div className={`absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r ${service.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
      
      {/* Floating Particles */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -15, 0],
            opacity: [0, 0.6, 0],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.4,
          }}
          className={`absolute w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          style={{
            background: `linear-gradient(135deg, ${i % 2 === 0 ? '#F9C46B' : '#0A1A2F'})`,
            top: `${30 + i * 15}%`,
            right: `${10 + i * 8}%`,
          }}
          aria-hidden="true"
        />
      ))}

      {/* Content Container */}
      <div className="relative z-10 p-6 lg:p-8 h-full flex flex-col">
        {/* Top Row - Icon & Badge */}
        <div className="flex items-start justify-between mb-5">
          {/* Icon Container with Enhanced Effects */}
          <motion.div
            whileHover={{ rotate: 10, scale: 1.1 }}
            className="relative"
          >
            {/* Outer Glow */}
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className={`absolute inset-0 rounded-2xl bg-linear-to-br ${service.gradient} blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              aria-hidden="true"
            />
            {/* Icon Box */}
            <div className={`relative w-16 h-16 lg:w-18 lg:h-18 rounded-2xl bg-linear-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500`}>
              <Icon className="w-8 h-8 lg:w-9 lg:h-9 text-white" aria-hidden="true" />
            </div>
            {/* Shine Effect */}
            <motion.div
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="absolute inset-0 rounded-2xl bg-linear-to-r from-transparent via-white/30 to-transparent overflow-hidden opacity-0 group-hover:opacity-100"
              style={{ clipPath: 'inset(0)' }}
              aria-hidden="true"
            />
          </motion.div>

          {/* Service Number Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3 + index * 0.1 }}
            className={`flex items-center gap-1.5 bg-linear-to-r ${service.gradient} bg-opacity-10 rounded-full px-3 py-1.5 border border-current/10`}
            style={{ 
              background: `linear-gradient(135deg, rgba(249, 196, 107, 0.1), rgba(10, 26, 47, 0.05))` 
            }}
          >
            <span className="text-xs font-bold text-navy">0{service.id}</span>
            <motion.div
              animate={{ rotate: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Star className="w-3 h-3 text-gold fill-gold" aria-hidden="true" />
            </motion.div>
          </motion.div>
        </div>

        {/* Title with Gradient on Hover */}
        <motion.h3
          className="text-xl lg:text-2xl font-bold text-navy mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-navy group-hover:via-gold group-hover:to-navy transition-all duration-500"
        >
          {service.title}
        </motion.h3>

        {/* Description */}
        <p className="text-gray-600 mb-6 text-sm lg:text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
          {service.description}
        </p>

        {/* Points with Enhanced Styling */}
        <ul className="space-y-3 grow">
          {service.points.map((point, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + idx * 0.08 }}
              whileHover={{ x: 5 }}
              className="flex items-start gap-3 group/item p-2 -mx-2 rounded-lg hover:bg-gray-50 transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.4 }}
                className={`w-6 h-6 rounded-lg bg-linear-to-br ${service.gradient} flex items-center justify-center shrink-0 shadow-sm group-hover/item:shadow-md transition-shadow duration-300`}
              >
                <CheckCircle className="w-3.5 h-3.5 text-white" aria-hidden="true" />
              </motion.div>
              <span className="text-gray-700 text-sm lg:text-base group-hover/item:text-navy group-hover/item:font-medium transition-all duration-300">
                {point}
              </span>
            </motion.li>
          ))}
        </ul>

        {/* Bottom Action Row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 + index * 0.1 }}
          className="mt-6 pt-4 border-t border-gray-100 group-hover:border-gold/20 transition-colors duration-300"
        >
          <motion.button
            whileHover={{ scale: 1.02, x: 5 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.open(`https://wa.me/919128789999?text=Hi!%20I%20am%20interested%20in%20${encodeURIComponent(service.title)}%20services.`, '_blank')}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl bg-linear-to-r ${service.gradient} bg-opacity-5 hover:bg-opacity-100 text-navy hover:text-white transition-all duration-300 group/btn`}
            style={{
              background: 'linear-gradient(135deg, rgba(249, 196, 107, 0.08), rgba(10, 26, 47, 0.03))',
            }}
          >
            <span className="font-semibold text-sm group-hover/btn:text-white transition-colors duration-300">Learn More</span>
            <motion.div
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-4 h-4 group-hover/btn:text-white transition-colors duration-300" aria-hidden="true" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      {/* Bottom Right Glow */}
      <div className={`absolute -bottom-8 -right-8 w-40 h-40 bg-linear-to-br ${service.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700`} />
      
      {/* Top Left Glow */}
      <div className={`absolute -top-8 -left-8 w-32 h-32 bg-linear-to-br ${service.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700`} />
      
      {/* Corner Decoration */}
      <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-12 -right-12 w-24 h-24 border border-navy/5 rounded-full group-hover:border-gold/20 transition-colors duration-500"
        />
      </div>
      
      {/* Bottom Border Glow */}
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-linear-to-r ${service.gradient} opacity-0 group-hover:opacity-60 blur-sm transition-opacity duration-500`} />
    </motion.div>
  );
};

// Stats Section Component
const StatsSection = () => {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true, margin: '-50px' });

  const stats = [
    { icon: Globe, value: '25+', label: 'Countries Covered' },
    { icon: Users, value: '10K+', label: 'Happy Students' },
    { icon: Award, value: '98%', label: 'Success Rate' },
    { icon: Shield, value: '15+', label: 'Years Experience' },
  ];

  return (
    <section ref={statsRef} className="py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-r from-navy via-navy-light to-navy" />
      
      {/* Animated background elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full"
        aria-hidden="true"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-white/5 rounded-full"
        aria-hidden="true"
      />

      {/* Floating gold particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + i * 0.3,
            repeat: Infinity,
            delay: i * 0.2,
          }}
          className="absolute w-1 h-1 bg-gold rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          aria-hidden="true"
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-white/10 backdrop-blur-sm mb-4 group-hover:bg-gold/20 transition-colors duration-300"
              >
                <stat.icon className="w-7 h-7 lg:w-8 lg:h-8 text-gold" aria-hidden="true" />
              </motion.div>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-white/60 text-sm lg:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Hero Section - Enhanced
const ServicesHero = () => {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true });

  return (
    <section
      ref={heroRef}
      className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Multi-layer Background */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-50 via-white to-gold/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,var(--tw-gradient-stops))] from-navy/5 via-transparent to-transparent" />
      
      {/* Background Grid */}
      <BackgroundGrid />

      {/* Floating Orbs */}
      <FloatingOrb size="w-96 h-96" color="bg-gold/20" top="5%" left="-5%" delay={0} />
      <FloatingOrb size="w-72 h-72" color="bg-navy/10" top="50%" left="85%" delay={1} />
      <FloatingOrb size="w-48 h-48" color="bg-gold/15" top="70%" left="5%" delay={2} />
      <FloatingOrb size="w-64 h-64" color="bg-blue-400/10" top="10%" left="70%" delay={0.5} />
      <FloatingOrb size="w-40 h-40" color="bg-purple-400/10" top="60%" left="40%" delay={1.5} blur="blur-2xl" />

      {/* Decorative Shapes */}
      <DecorativeShapes />
      
      {/* Decorative SVG elements */}
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none"
        viewBox="0 0 1200 800"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="100" cy="100" r="200" stroke="#0A1A2F" strokeWidth="0.5" />
        <circle cx="1100" cy="700" r="300" stroke="#F9C46B" strokeWidth="0.5" />
        <circle cx="600" cy="400" r="400" stroke="#0A1A2F" strokeWidth="0.3" strokeDasharray="10 10" />
        <path
          d="M0 500 Q 400 300, 800 500 T 1600 500"
          stroke="#F9C46B"
          strokeWidth="0.5"
          fill="none"
        />
        <path
          d="M-100 300 Q 300 100, 700 300 T 1500 300"
          stroke="#0A1A2F"
          strokeWidth="0.3"
          fill="none"
        />
      </svg>

      {/* Animated geometric shapes */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute top-20 right-20 w-40 h-40 border border-navy/10 rounded-full hidden lg:block"
        aria-hidden="true"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-32 left-16 w-32 h-32 border border-gold/20 rounded-full hidden lg:block"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-navy/10 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 mb-6 sm:mb-8 lg:mb-10 shadow-lg shadow-navy/5"
        >
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold" aria-hidden="true" />
          </motion.div>
          <span className="text-xs sm:text-sm font-semibold text-navy">Premium Visa & Education Services</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-navy mb-6 sm:mb-8 lg:mb-10 leading-tight px-2 sm:px-0"
        >
          Our{' '}
          <span className="relative inline-block">
            <span className="relative z-10 bg-linear-to-r from-gold via-amber-500 to-gold bg-clip-text text-transparent italic font-serif">
              Services
            </span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute bottom-0 sm:bottom-1 lg:bottom-2 left-0 right-0 h-2 sm:h-3 lg:h-4 bg-gold/20 -z-10 origin-left rounded-full"
            />
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-6 lg:px-0"
        >
          Professional Visa, Admissions & Overseas Support{' '}
          <br className="sm:hidden" />
          <span className="text-navy font-semibold">All in One Place</span>
        </motion.p>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-2 sm:gap-4 mt-12 sm:mt-16 lg:mt-20 px-4"
        >
          <div className="w-8 sm:w-16 h-0.5 bg-linear-to-r from-transparent to-gold rounded-full" />
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gold rounded-full" />
          <div className="w-12 sm:w-24 h-0.5 bg-linear-to-r from-gold via-gold-dark to-gold rounded-full" />
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-navy rounded-full" />
          <div className="w-8 sm:w-16 h-0.5 bg-linear-to-l from-transparent to-navy rounded-full" />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-1 sm:gap-2 text-navy/50"
          >
            <span className="text-[10px] sm:text-xs font-medium tracking-wider uppercase">Explore Services</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 rotate-90" aria-hidden="true" />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          className="w-full h-auto"
          aria-hidden="true"
        >
          <path
            d="M0 120V80C180 40 360 20 540 20C720 20 900 40 1080 60C1260 80 1350 90 1440 80V120H0Z"
            fill="#0A1A2F"
          />
        </svg>
      </div>
    </section>
  );
};

// Services Grid Section - Enhanced
const ServicesGrid = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden bg-slate-50">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-white via-slate-50 to-slate-100" />
      
      {/* Floating background orbs */}
      <FloatingOrb size="w-80 h-80" color="bg-gold/10" top="10%" left="-10%" delay={0} />
      <FloatingOrb size="w-96 h-96" color="bg-navy/5" top="60%" left="90%" delay={1.5} />
      <FloatingOrb size="w-64 h-64" color="bg-blue-400/5" top="30%" left="50%" delay={2} />
      
      {/* Grid Pattern Overlay */}
      <BackgroundGrid />

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-navy/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-navy/5 rounded-full px-4 py-2 mb-6"
          >
            <Award className="w-4 h-4 text-gold" aria-hidden="true" />
            <span className="text-sm font-medium text-navy">Trusted by Thousands</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-5">
            What We{' '}
            <span className="bg-linear-to-r from-gold to-amber-500 bg-clip-text text-transparent">
              Offer
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg lg:text-xl leading-relaxed">
            Comprehensive services designed to make your international journey seamless and successful.
          </p>
        </motion.div>

        {/* Services Grid - Bento-style layout */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {/* Featured Card - Student Visas */}
          <FeaturedServiceCard service={servicesData[0]} />
          
          {/* Other Service Cards */}
          {servicesData.slice(1).map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index + 1} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// CTA Section - Enhanced
const ServicesCTA = () => {
  const ctaRef = useRef(null);
  const isInView = useInView(ctaRef, { once: true, margin: '-100px' });

  const handleWhatsApp = () => {
    window.open(
      'https://wa.me/919128789999?text=Hi!%20I%20need%20help%20choosing%20the%20right%20service.',
      '_blank'
    );
  };

  return (
    <section ref={ctaRef} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Multi-layer Background */}
      <div className="absolute inset-0 bg-linear-to-br from-navy via-navy-light to-navy" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />

      {/* Animated mesh gradient */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(249, 196, 107, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
          backgroundSize: '200% 200%',
        }}
        aria-hidden="true"
      />

      {/* Animated circles */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full"
        aria-hidden="true"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-white/5 rounded-full"
        aria-hidden="true"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-white/5 rounded-full"
        aria-hidden="true"
      />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4 + i * 0.3,
            repeat: Infinity,
            delay: i * 0.2,
          }}
          className="absolute w-1 h-1 bg-gold/50 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          aria-hidden="true"
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 mb-8 shadow-lg"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            >
              <Sparkles className="w-4 h-4 text-gold" aria-hidden="true" />
            </motion.div>
            <span className="text-sm font-semibold text-white">Get Expert Guidance</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto leading-tight"
          >
            Need help choosing the{' '}
            <span className="relative inline-block">
              <span className="bg-linear-to-r from-gold via-amber-400 to-gold bg-clip-text text-transparent italic font-serif">
                right service
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-1 left-0 right-0 h-1 bg-linear-to-r from-gold via-amber-400 to-gold origin-left rounded-full"
              />
            </span>
            ?
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg lg:text-xl text-white/70 max-w-2xl mx-auto mb-12"
          >
            Get expert guidance tailored to your visa or study plan. Our consultants
            are ready to help you every step of the way.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsApp}
              className="group relative inline-flex items-center gap-3 bg-linear-to-r from-gold via-amber-400 to-gold text-navy px-8 py-4 rounded-full font-bold text-lg shadow-2xl shadow-gold/30 hover:shadow-gold/50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gold/50 overflow-hidden"
            >
              {/* Button shine effect */}
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                aria-hidden="true"
              />
              <span className="relative z-10">Enquire About a Service</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="relative z-10"
              >
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </motion.span>
            </motion.button>

            <Link
              to="/"
              className="group text-white/80 hover:text-gold transition-colors duration-300 flex items-center gap-2 font-medium focus:outline-none focus:ring-2 focus:ring-gold/50 rounded-full px-6 py-3 border border-white/20 hover:border-gold/50 backdrop-blur-sm"
            >
              Back to Home
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Main Services Page Component
const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <ServicesHero />
        <StatsSection />
        <ServicesGrid />
        <ServicesCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
