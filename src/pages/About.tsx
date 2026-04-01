import { useRef, useState, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Shield,
  Target,
  Heart,
  Award,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Globe,
  Users,
  FileCheck,
  Clock,
  PenTool,
  Star,
  MapPin,
  Phone,
  Plane,
  GraduationCap,
  Building2,
  TrendingUp,
  Zap,
  Quote,
  ChevronRight,
  MessageCircle,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Animation Variants
const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
  },
};

const fadeLeftVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
  },
};

const fadeRightVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const scaleUpVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
  },
};

// Animated Counter Component
const AnimatedCounter = ({ target, suffix = '', duration = 2 }: { target: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = target;
      const incrementTime = (duration * 1000) / end;
      const timer = setInterval(() => {
        start += Math.ceil(end / 50);
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime);
      return () => clearInterval(timer);
    }
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

// ===========================
// 1. ABOUT HERO SECTION
// ===========================
const AboutHero = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-linear-to-b from-[#F5F6F7] via-white to-[#F5F6F7]"
    >
      {/* Parallax Background Pattern */}
      <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(10,26,47,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(10,26,47,0.03)_1px,transparent_1px)] bg-size-[60px_60px]" />
        
        {/* Animated gradient orbs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 0.15, scale: 1 } : {}}
          transition={{ duration: 1.2 }}
          className="absolute -top-32 -right-32 w-[700px] h-[700px] bg-linear-to-br from-gold via-gold-dark to-orange-400 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 0.1, scale: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="absolute -bottom-48 -left-48 w-[600px] h-[600px] bg-navy rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.08 } : {}}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-linear-to-tr from-blue-400 to-cyan-300 rounded-full blur-3xl"
        />

        {/* Curved decorative wave */}
        <svg
          className="absolute bottom-0 left-0 w-full h-40 text-white"
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
        >
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 2, delay: 0.5 }}
            d="M0,64 C320,140 640,20 960,80 C1280,140 1440,40 1440,40 L1440,160 L0,160 Z"
            fill="currentColor"
          />
        </svg>
      </motion.div>

      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-24 left-[8%] w-20 h-20 bg-linear-to-br from-gold/30 to-gold/10 rounded-2xl backdrop-blur-sm border border-gold/40 flex items-center justify-center shadow-lg"
      >
        <Plane className="w-8 h-8 text-gold" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 25, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-40 right-[12%] w-16 h-16 bg-linear-to-br from-navy/20 to-navy/5 rounded-full backdrop-blur-sm border border-navy/30 flex items-center justify-center"
      >
        <Globe className="w-7 h-7 text-navy" />
      </motion.div>
      <motion.div
        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute top-1/3 right-[6%] w-14 h-14 bg-linear-to-br from-gold/40 to-orange-300/30 rounded-xl shadow-lg flex items-center justify-center"
      >
        <GraduationCap className="w-6 h-6 text-gold-dark" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 18, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-1/3 left-[15%] w-10 h-10 bg-navy/10 rounded-lg border border-navy/20"
      />
      
      {/* Floating icons trail */}
      {[Plane, MapPin, Star, Globe, GraduationCap].map((Icon, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { 
            opacity: [0.2, 0.5, 0.2], 
            y: [0, -30, 0],
            x: [0, i % 2 === 0 ? 10 : -10, 0]
          } : {}}
          transition={{ 
            duration: 4 + i, 
            repeat: Infinity, 
            delay: i * 0.8,
            ease: 'easeInOut'
          }}
          className="absolute hidden lg:block"
          style={{
            top: `${25 + (i * 12)}%`,
            left: `${85 + (i % 3) * 3}%`,
          }}
        >
          <Icon className="w-5 h-5 text-gold/40" />
        </motion.div>
      ))}

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="text-center lg:text-left"
          >
            <motion.div
              variants={fadeUpVariants}
              className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md border border-gold/40 rounded-full px-5 py-2.5 mb-8 shadow-lg shadow-gold/10"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              >
                <Sparkles className="w-4 h-4 text-gold" />
              </motion.div>
              <span className="text-sm font-semibold text-navy">About Trident Global</span>
            </motion.div>

            <motion.h1
              variants={fadeUpVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-navy mb-8 leading-tight"
            >
              Who{' '}
              <span className="relative inline-block">
                <span className="font-serif italic text-transparent bg-clip-text bg-linear-to-r from-gold via-gold-dark to-gold">
                  We Are
                </span>
                <motion.span
                  initial={{ width: 0 }}
                  animate={isInView ? { width: '100%' } : {}}
                  transition={{ duration: 1, delay: 1 }}
                  className="absolute -bottom-2 left-0 h-1.5 bg-linear-to-r from-gold via-gold-dark to-gold rounded-full"
                />
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.5 }}
                  className="absolute -bottom-4 right-0 w-2 h-2 bg-gold rounded-full"
                />
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUpVariants}
              className="text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Excellence in Global Visa Consulting & Overseas Guidance for{' '}
              <span className="text-navy font-semibold">Students</span>,{' '}
              <span className="text-navy font-semibold">Professionals</span> &{' '}
              <span className="text-navy font-semibold">Travelers</span>
            </motion.p>

            {/* Quick Stats Row */}
            <motion.div
              variants={fadeUpVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-6 mt-10"
            >
              {[
                { value: '10+', label: 'Years Experience' },
                { value: '25+', label: 'Countries' },
                { value: '2500+', label: 'Happy Clients' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-xl px-5 py-3 shadow-lg border border-gray-100"
                >
                  <div className="text-2xl lg:text-3xl font-bold text-gold">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 2 }}
              className="hidden lg:flex items-center gap-2 mt-16 text-gray-400"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2"
              >
                <motion.div className="w-1.5 h-1.5 bg-gold rounded-full" />
              </motion.div>
              <span className="text-sm">Scroll to explore</span>
            </motion.div>
          </motion.div>

          {/* Right - Enhanced Logo/Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            {/* Outer rotating rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute w-72 h-72 lg:w-96 lg:h-96 border-2 border-dashed border-gold/20 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              className="absolute w-56 h-56 lg:w-72 lg:h-72 border border-navy/15 rounded-full"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute w-80 h-80 lg:w-[420px] lg:h-[420px]"
            >
              {/* Orbiting dots */}
              {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-gold rounded-full shadow-lg"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `rotate(${deg}deg) translateX(${i % 2 === 0 ? 160 : 200}px) translateY(-50%)`,
                  }}
                />
              ))}
            </motion.div>

            {/* Center logo card */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gold/20 rounded-3xl blur-2xl transform scale-110" />
              
              <div className="relative bg-white rounded-3xl p-10 shadow-2xl shadow-navy/15 border border-gray-100">
                <img
                  src="/infiniti.svg"
                  alt="Trident Global"
                  className="w-36 h-36 lg:w-44 lg:h-44 object-contain"
                />
                
                {/* Floating badges around logo */}
                <motion.div
                  animate={{ y: [0, 5, 0], x: [0, -3, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-3 -left-3 bg-navy text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1"
                >
                  <Star className="w-3 h-3 text-gold" fill="currentColor" />
                  Trusted
                </motion.div>
              </div>
            </motion.div>

            {/* Service icons floating around */}
            <motion.div
              animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-10 right-10 lg:top-5 lg:right-0 bg-white rounded-2xl p-4 shadow-xl border border-gray-100"
            >
              <GraduationCap className="w-8 h-8 text-navy" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-10 left-5 lg:bottom-5 lg:-left-5 bg-white rounded-2xl p-4 shadow-xl border border-gray-100"
            >
              <Plane className="w-8 h-8 text-gold" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

// ===========================
// 2. COMPANY INTRODUCTION
// ===========================
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

const FlagNZ = () => (
  <svg viewBox="0 0 60 40" className="w-full h-full">
    <rect width="60" height="40" fill="#00247D"/>
    <rect width="30" height="20" fill="#012169"/>
    <path d="M0,0 L30,20 M30,0 L0,20" stroke="#fff" strokeWidth="4"/>
    <path d="M0,0 L30,20 M30,0 L0,20" stroke="#C8102E" strokeWidth="2"/>
    <path d="M15,0 V20 M0,10 H30" stroke="#fff" strokeWidth="6"/>
    <path d="M15,0 V20 M0,10 H30" stroke="#C8102E" strokeWidth="3"/>
    <circle cx="42" cy="12" r="2" fill="#C8102E"/>
    <circle cx="50" cy="20" r="2" fill="#C8102E"/>
    <circle cx="48" cy="28" r="2" fill="#C8102E"/>
    <circle cx="40" cy="24" r="2" fill="#C8102E"/>
  </svg>
);

const countryFlags = [
  { name: 'USA', Flag: FlagUS },
  { name: 'UK', Flag: FlagUK },
  { name: 'Canada', Flag: FlagCA },
  { name: 'Australia', Flag: FlagAU },
  { name: 'Germany', Flag: FlagDE },
  { name: 'New Zealand', Flag: FlagNZ },
];

const CompanyIntroduction = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const highlights = [
    { icon: Users, text: 'Expert Visa Consultants', desc: 'Team of certified professionals' },
    { icon: FileCheck, text: 'Complete Documentation', desc: '100% accurate file preparation' },
    { icon: Globe, text: '25+ Countries Covered', desc: 'Global reach & expertise' },
    { icon: Clock, text: 'Fast Processing', desc: 'Quick turnaround times' },
    { icon: Shield, text: 'Secure & Confidential', desc: 'Your data is protected' },
    { icon: TrendingUp, text: '98% Success Rate', desc: 'Proven track record' },
  ];

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Enhanced Background decorations */}
      <div className="absolute top-0 right-0 w-1/2 lg:w-1/3 h-full bg-linear-to-l from-gold/5 to-transparent" />
      <div className="absolute bottom-20 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-navy/5 rounded-full blur-3xl" />
      
      {/* Additional floating elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 right-[10%] w-16 h-16 bg-gold/10 rounded-2xl hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-32 right-[20%] w-10 h-10 bg-navy/10 rounded-full hidden lg:block"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-1/3 left-[5%] w-32 h-32 bg-gold/10 rounded-full blur-2xl hidden md:block"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-24 items-center">
          {/* Left Content */}
          <motion.div
            variants={fadeLeftVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-gold font-semibold text-sm tracking-wider uppercase mb-4 sm:mb-6"
            >
              <div className="w-6 sm:w-8 h-0.5 bg-gold" />
              <Globe className="w-4 h-4" />
              About Our Company
            </motion.div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-navy mb-6 sm:mb-8 leading-tight">
              Your Trusted Partner for{' '}
              <span className="font-serif italic text-transparent bg-clip-text bg-linear-to-r from-gold via-gold-dark to-gold">
                Global Dreams
              </span>
            </h2>
            
            <div className="space-y-4 sm:space-y-6 text-gray-600 text-base sm:text-lg leading-relaxed">
              <p>
                <span className="text-navy font-semibold">Trident Global</span> is a premier visa and overseas consulting company dedicated to transforming your international aspirations into reality. We specialize in helping students, tourists, and professionals secure visas for <span className="text-gold font-semibold">25+ countries</span> with confidence and ease.
              </p>
              <p>
                Our comprehensive approach covers everything from selecting the ideal destination and program to meticulously preparing your application file. With our team of seasoned experts, every step of your journey is handled with <span className="text-navy font-medium">precision, care, and unwavering dedication</span>.
              </p>
            </div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="mt-6 sm:mt-10 flex flex-wrap gap-2 sm:gap-4"
            >
              {['Govt. Registered', 'ISO Certified', 'Member AIESC'].map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 sm:gap-2 bg-gray-50 border border-gray-200 rounded-full px-3 sm:px-4 py-1.5 sm:py-2"
                >
                  <CheckCircle className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-green-500" />
                  <span className="text-xs sm:text-sm font-medium text-gray-700">{badge}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Enhanced Visual Cards */}
          <motion.div
            variants={fadeRightVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="relative order-1 lg:order-2"
          >
            {/* Main card container */}
            <div className="relative bg-linear-to-br from-navy via-navy-light to-navy rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-10 shadow-2xl overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-gold/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-24 sm:w-32 h-24 sm:h-32 bg-white/10 rounded-full blur-2xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 h-48 sm:h-64 border border-white/5 rounded-full" />

              <div className="relative z-10 grid grid-cols-2 gap-2 sm:gap-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    whileHover={{ scale: 1.03, backgroundColor: 'rgba(255,255,255,0.15)' }}
                    className="group bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-5 border border-white/10 transition-all duration-300 cursor-pointer"
                  >
                    <div className="w-9 sm:w-12 h-9 sm:h-12 bg-gold rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-4 sm:w-6 h-4 sm:h-6 text-navy" />
                    </div>
                    <h4 className="text-white font-semibold text-xs sm:text-base mb-0.5 sm:mb-1">{item.text}</h4>
                    <p className="text-white/60 text-[10px] sm:text-sm leading-tight">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ===========================
// 3. OUR MISSION & VISION SECTION
// ===========================
const OurMission = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 lg:py-32 bg-[#F5F6F7] relative overflow-hidden">
      {/* Enhanced Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(249,196,107,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(10,26,47,0.05),transparent_50%)]" />
      
      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [0, -25, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-16 right-[8%] w-20 h-20 bg-linear-to-br from-gold/20 to-gold/5 rounded-full blur-sm hidden md:block"
      />
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-24 left-[5%] w-14 h-14 bg-navy/10 rounded-2xl hidden md:block"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-1/2 right-[3%] w-40 h-40 bg-gold/10 rounded-full blur-3xl hidden lg:block"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 40, x: -20 }}
            animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-linear-to-br from-gold/20 to-transparent rounded-3xl transform group-hover:scale-105 transition-transform duration-500" />
            <div className="relative bg-white rounded-3xl p-8 lg:p-12 shadow-xl shadow-navy/5 border border-gold/20 overflow-hidden h-full">
              {/* Decorative corner */}
              <div className="absolute top-0 left-0 w-40 h-40 bg-gold/10 rounded-br-full" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-navy/5 rounded-tl-full" />

              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, rotate: -10 }}
                  animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-flex items-center justify-center w-20 h-20 bg-linear-to-br from-gold to-gold-dark rounded-2xl mb-8 shadow-lg shadow-gold/30"
                >
                  <Target className="w-10 h-10 text-navy" />
                </motion.div>

                <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
                  Our <span className="font-serif italic text-gold">Mission</span>
                </h2>

                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  To make global travel and Work <span className="text-navy font-semibold">accessible, simple, and stress-free</span> for everyone by offering transparent, reliable, and expert visa support.
                </p>

                <ul className="space-y-3">
                  {['Simplify visa processes', 'Provide honest guidance', 'Ensure client success'].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-gold" />
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 40, x: 20 }}
            animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-linear-to-br from-navy/10 to-transparent rounded-3xl transform group-hover:scale-105 transition-transform duration-500" />
            <div className="relative bg-linear-to-br from-navy via-navy-light to-navy rounded-3xl p-8 lg:p-12 shadow-xl overflow-hidden h-full">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gold/10 rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-tr-full" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/5 rounded-full"
              />

              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, rotate: 10 }}
                  animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl mb-8 shadow-lg"
                >
                  <Zap className="w-10 h-10 text-gold" />
                </motion.div>

                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Our <span className="font-serif italic text-gold">Vision</span>
                </h2>

                <p className="text-lg text-white/80 leading-relaxed mb-6">
                  To become the <span className="text-gold font-semibold">most trusted name</span> in visa consulting across India, known for our integrity, expertise, and unwavering commitment to client success.
                </p>

                <ul className="space-y-3">
                  {['Lead with innovation', 'Expand global reach', 'Empower every dreamer'].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center">
                        <Star className="w-3 h-3 text-navy" fill="currentColor" />
                      </div>
                      <span className="text-white/90 font-medium">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ===========================
// 4. OUR VALUES SECTION
// ===========================
const OurValues = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: '100% honest and transparent guidance at every step',
      color: 'from-blue-500 to-blue-600',
      lightColor: 'bg-blue-50',
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Accurate documentation and meticulous profiling',
      color: 'from-purple-500 to-purple-600',
      lightColor: 'bg-purple-50',
    },
    {
      icon: Heart,
      title: 'Commitment',
      description: 'Dedicated support until you receive your visa',
      color: 'from-rose-500 to-rose-600',
      lightColor: 'bg-rose-50',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Delivering the best service at every step',
      color: 'from-amber-500 to-amber-600',
      lightColor: 'bg-amber-50',
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Enhanced Background decorations */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-linear-to-b from-gray-50/50 to-transparent" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
        className="absolute -right-64 top-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-gray-100 rounded-full opacity-50"
      />
      
      {/* Additional floating elements */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-24 left-[5%] w-24 h-24 bg-gold/5 rounded-full hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 25, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-32 left-[15%] w-16 h-16 bg-navy/5 rounded-2xl hidden lg:block"
      />
      <motion.div
        animate={{ scale: [1, 1.4, 1], opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-1/4 right-[10%] w-48 h-48 bg-gold/10 rounded-full blur-3xl hidden md:block"
      />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-1/3 right-[5%] w-8 h-8 bg-gold/20 rounded-lg hidden lg:block"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: 'spring' }}
            className="inline-flex items-center gap-2 bg-gold/10 text-gold font-semibold text-sm tracking-wider uppercase px-5 py-2 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4" />
            What Drives Us
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6">
            Our Core <span className="font-serif italic text-transparent bg-clip-text bg-linear-to-r from-gold via-gold-dark to-gold">Values</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            These principles guide everything we do and define who we are as a company
          </p>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={fadeUpVariants}
              whileHover={{ y: -12, rotateY: 5 }}
              className="group relative"
              style={{ perspective: '1000px' }}
            >
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-linear-to-br from-gold/20 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              
              <div className="relative bg-white rounded-3xl p-8 border border-gray-100 shadow-lg shadow-gray-100/50 hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 overflow-hidden h-full">
                {/* Background pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-gray-50 to-transparent rounded-bl-full opacity-50" />
                
                {/* Icon container */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`relative w-16 h-16 ${value.lightColor} rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300`}
                >
                  <div className={`absolute inset-0 bg-linear-to-br ${value.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <value.icon className="relative z-10 w-8 h-8 text-navy group-hover:text-white transition-colors duration-300" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>

                {/* Bottom accent line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-gold via-gold-dark to-gold origin-left"
                />

                {/* Corner decoration */}
                <div className="absolute bottom-4 right-4 text-4xl font-bold text-gray-100 group-hover:text-gold/20 transition-colors duration-300">
                  0{index + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// ===========================
// 5. WHY PEOPLE TRUST US
// ===========================
const WhyPeopleTrustUs = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const trustPoints = [
    { icon: TrendingUp, text: 'High approval success rate', highlight: '98%' },
    { icon: Building2, text: 'Strong understanding of embassy rules', highlight: 'Expert' },
    { icon: PenTool, text: 'Personalized visa file creation', highlight: 'Custom' },
    { icon: Clock, text: 'Quick slot booking for high-demand countries', highlight: 'Fast' },
    { icon: GraduationCap, text: 'Experts in student counseling & SOP writing', highlight: 'Pro' },
    { icon: MessageCircle, text: '24/7 support throughout the process', highlight: 'Always' },
  ];

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 lg:py-32 bg-linear-to-b from-[#F5F6F7] to-white relative overflow-hidden">
      {/* Enhanced Background elements */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-[radial-gradient(circle_at_0%_50%,rgba(249,196,107,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(10,26,47,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(10,26,47,0.02)_1px,transparent_1px)] bg-size-[40px_40px]" />
      
      {/* Floating elements */}
      <motion.div
        animate={{ y: [0, -25, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 right-[8%] w-16 h-16 bg-gold/10 rounded-2xl hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-32 right-[20%] w-12 h-12 bg-navy/5 rounded-full hidden lg:block"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-1/3 left-[3%] w-32 h-32 bg-gold/10 rounded-full blur-2xl hidden md:block"
      />
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-20 left-[10%] w-6 h-6 bg-gold/30 rounded-lg hidden lg:block"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Enhanced Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Multiple layered shapes */}
              <motion.div
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 bg-linear-to-br from-gold/30 to-gold/5 rounded-3xl transform rotate-6"
              />
              <motion.div
                animate={{ rotate: [0, -3, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute inset-0 bg-linear-to-tr from-navy/10 to-transparent rounded-3xl transform -rotate-3"
              />
              
              <div className="relative bg-white rounded-3xl p-10 lg:p-14 shadow-2xl border border-gray-100">
                {/* Main trust badge */}
                <div className="flex flex-col items-center">
                  <motion.div
                    animate={{ scale: [1, 1.03, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="relative mb-8"
                  >
                    {/* Outer ring */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      className="absolute inset-0 w-56 h-56 lg:w-64 lg:h-64"
                    >
                      <svg className="w-full h-full" viewBox="0 0 100 100">
                        <circle
                          cx="50"
                          cy="50"
                          r="48"
                          fill="none"
                          stroke="url(#gradient)"
                          strokeWidth="2"
                          strokeDasharray="8 4"
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#F9C46B" />
                            <stop offset="100%" stopColor="#e5a84a" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </motion.div>

                    {/* Main circle */}
                    <div className="w-56 h-56 lg:w-64 lg:h-64 bg-linear-to-br from-navy via-navy-light to-navy rounded-full flex items-center justify-center shadow-2xl">
                      <div className="text-center">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.5, delay: 0.5 }}
                          className="text-5xl lg:text-6xl font-bold text-gold"
                        >
                          <AnimatedCounter target={98} suffix="%" />
                        </motion.div>
                        <div className="text-white/80 text-sm mt-2 font-medium">Satisfaction Rate</div>
                      </div>
                    </div>

                    {/* Orbiting elements */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                      className="absolute inset-0"
                    >
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-10 bg-gold rounded-full flex items-center justify-center shadow-lg">
                        <CheckCircle className="w-5 h-5 text-navy" />
                      </div>
                    </motion.div>
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                      className="absolute inset-0"
                    >
                      <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border border-gold/30">
                        <Star className="w-4 h-4 text-gold" fill="currentColor" />
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Trust stats row */}
                  <div className="grid grid-cols-3 gap-6 w-full mt-4">
                    {[
                      { value: '2500+', label: 'Visas' },
                      { value: '1200+', label: 'Students' },
                      { value: '25+', label: 'Countries' },
                    ].map((stat, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.8 + i * 0.1 }}
                        className="text-center"
                      >
                        <div className="text-2xl font-bold text-navy">{stat.value}</div>
                        <div className="text-sm text-gray-500">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating testimonial card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 bg-white rounded-2xl p-5 shadow-xl border border-gray-100 max-w-[200px]"
            >
              <Quote className="w-6 h-6 text-gold mb-2" />
              <p className="text-sm text-gray-600 italic">"Best visa consultants I've ever worked with!"</p>
              <div className="flex items-center gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-gold" fill="currentColor" />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="order-1 lg:order-2"
          >
            <motion.div
              variants={fadeUpVariants}
              className="inline-flex items-center gap-2 mb-6"
            >
              <div className="w-8 h-0.5 bg-gold" />
              <Shield className="w-4 h-4 text-gold" />
              <span className="text-gold font-semibold text-sm tracking-wider uppercase">Built on Trust</span>
            </motion.div>

            <motion.h2
              variants={fadeUpVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight"
            >
              Why People{' '}
              <span className="font-serif italic text-transparent bg-clip-text bg-linear-to-r from-gold via-gold-dark to-gold">
                Trust Us
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUpVariants}
              className="text-gray-600 text-lg mb-10"
            >
              Our proven track record and dedication to excellence have earned us the trust of thousands of clients worldwide.
            </motion.p>

            <div className="space-y-4">
              {trustPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ x: 5, backgroundColor: '#fefefe' }}
                  className="group flex items-center gap-4 bg-white rounded-xl p-5 shadow-md border border-gray-100 hover:shadow-lg hover:border-gold/30 transition-all duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
                    <point.icon className="w-6 h-6 text-gold group-hover:text-navy transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <span className="text-navy font-medium text-lg group-hover:text-gold transition-colors duration-300">
                      {point.text}
                    </span>
                  </div>
                  <div className="bg-navy/5 px-3 py-1 rounded-full">
                    <span className="text-navy font-bold text-sm">{point.highlight}</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-gold group-hover:translate-x-1 transition-all duration-300" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ===========================
// 6. OUR PROMISE SECTION
// ===========================
const OurPromise = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Enhanced Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,196,107,0.05),transparent_70%)]" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-gray-100 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold/10 rounded-full"
      />
      
      {/* Additional floating elements */}
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-24 left-[8%] w-14 h-14 bg-gold/10 rounded-xl hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 25, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute bottom-24 right-[10%] w-20 h-20 bg-navy/5 rounded-full hidden lg:block"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-1/4 right-[5%] w-36 h-36 bg-gold/10 rounded-full blur-2xl hidden md:block"
      />
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-1/3 left-[12%] w-8 h-8 bg-gold/20 rounded-lg hidden lg:block"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: 'spring' }}
            className="inline-flex items-center gap-2 bg-linear-to-r from-gold/20 to-gold/10 text-gold font-semibold text-sm tracking-wider uppercase px-5 py-2 rounded-full mb-8"
          >
            <Heart className="w-4 h-4" />
            Our Commitment
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-12">
            Our <span className="font-serif italic text-transparent bg-clip-text bg-linear-to-r from-gold via-gold-dark to-gold">Promise</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          {/* Large decorative quote marks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 0.1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute -top-16 left-1/2 -translate-x-1/2 text-[150px] text-gold font-serif leading-none select-none"
          >
            "
          </motion.div>

          <div className="relative bg-linear-to-br from-gray-50 to-white rounded-3xl p-10 lg:p-16 shadow-xl border border-gray-100">
            {/* Decorative corners */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-gold/30 rounded-tl-lg" />
            <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-gold/30 rounded-tr-lg" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-gold/30 rounded-bl-lg" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-gold/30 rounded-br-lg" />

            <div className="space-y-6 py-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-2xl lg:text-3xl xl:text-4xl font-medium text-navy"
              >
                You bring the <span className="text-gold font-semibold">dream</span>.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-2xl lg:text-3xl xl:text-4xl font-medium text-navy"
              >
                We handle the <span className="text-gold font-semibold">process</span>.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-2xl lg:text-3xl xl:text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-gold via-gold-dark to-gold font-serif italic"
              >
                Together — we make it happen.
              </motion.p>
            </div>

            {/* Gold accent line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-10 mx-auto w-48 h-1.5 bg-linear-to-r from-transparent via-gold to-transparent rounded-full"
            />

            {/* Additional promise points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 }}
              className="mt-10 flex flex-wrap justify-center gap-4"
            >
              {['Transparent Process', 'No Hidden Fees', 'Personal Attention', 'Expert Guidance'].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-white border border-gold/30 rounded-full px-4 py-2 shadow-sm"
                >
                  <CheckCircle className="w-4 h-4 text-gold" />
                  <span className="text-sm font-medium text-navy">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ===========================
// 7. METRICS SECTION
// ===========================
const MetricsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const metrics = [
    { number: 2500, suffix: '+', label: 'Successful Visa Filings', icon: FileCheck, color: 'from-blue-500 to-blue-600' },
    { number: 1200, suffix: '+', label: 'Students Guided', icon: GraduationCap, color: 'from-purple-500 to-purple-600' },
    { number: 25, suffix: '+', label: 'Countries Served', icon: Globe, color: 'from-emerald-500 to-emerald-600' },
    { number: 98, suffix: '%', label: 'Satisfaction Rate', icon: Award, color: 'from-amber-500 to-amber-600' },
  ];

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 lg:py-32 bg-linear-to-b from-[#F5F6F7] to-white relative overflow-hidden">
      {/* Enhanced Background decorations */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-[radial-gradient(ellipse_at_top,rgba(249,196,107,0.1),transparent_50%)]" />
      
      {/* Additional floating elements */}
      <motion.div
        animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-16 left-[8%] w-20 h-20 bg-gold/10 rounded-2xl hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 25, 0], x: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-24 left-[15%] w-14 h-14 bg-navy/5 rounded-full hidden lg:block"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-1/3 right-[5%] w-40 h-40 bg-gold/10 rounded-full blur-3xl hidden md:block"
      />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-1/4 right-[12%] w-10 h-10 bg-gold/20 rounded-xl hidden lg:block"
      />
      
      {/* Floating small decorative elements */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
          className="absolute w-3 h-3 bg-gold/20 rounded-full hidden lg:block"
          style={{
            top: `${10 + (i * 10)}%`,
            left: `${5 + (i * 12)}%`,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: 'spring' }}
            className="inline-flex items-center gap-2 bg-gold/10 text-gold font-semibold text-sm tracking-wider uppercase px-5 py-2 rounded-full mb-6"
          >
            <TrendingUp className="w-4 h-4" />
            Our Impact
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6">
            Numbers That <span className="font-serif italic text-transparent bg-clip-text bg-linear-to-r from-gold via-gold-dark to-gold">Speak</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our track record speaks for itself — thousands of successful applications and satisfied clients worldwide
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={scaleUpVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-linear-to-br from-gold/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              
              <div className="relative bg-white rounded-3xl p-8 lg:p-10 text-center shadow-xl shadow-gray-100/50 border border-gray-100 group-hover:border-gold/30 transition-all duration-500 overflow-hidden h-full">
                {/* Background pattern */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-gray-50 to-transparent rounded-bl-full" />
                
                {/* Animated background glow */}
                <motion.div
                  animate={isInView ? {
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                  } : {}}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-linear-to-br ${metric.color} rounded-full blur-3xl opacity-10`}
                />

                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1, type: 'spring' }}
                    className={`w-16 h-16 mx-auto bg-linear-to-br ${metric.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <metric.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="text-4xl lg:text-5xl xl:text-6xl font-bold text-navy mb-3"
                  >
                    <AnimatedCounter target={metric.number} suffix={metric.suffix} />
                  </motion.div>

                  <p className="text-gray-600 font-medium text-lg">{metric.label}</p>
                </div>

                {/* Corner number */}
                <div className="absolute bottom-4 right-4 text-5xl font-bold text-gray-100 group-hover:text-gold/20 transition-colors duration-300">
                  {index + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional info row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 bg-linear-to-r from-navy via-navy-light to-navy rounded-2xl p-8 lg:p-10"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                Join Our Growing Community
              </h3>
              <p className="text-white/70">
                Be part of thousands who achieved their dreams with Trident Global
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full bg-linear-to-br from-gold to-gold-dark border-2 border-navy flex items-center justify-center text-navy font-bold text-sm"
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full bg-white border-2 border-navy flex items-center justify-center text-navy font-bold text-sm">
                  +2K
                </div>
              </div>
              <Link to="/#contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gold text-navy px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-gold-dark transition-colors"
                >
                  Join Now
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ===========================
// 8. PAGE CTA SECTION
// ===========================
const AboutCTA = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const ctaFeatures = [
    { icon: Clock, text: 'Free 30-min Consultation' },
    { icon: FileCheck, text: 'Expert Document Review' },
    { icon: Shield, text: 'No Hidden Fees' },
  ];

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-navy via-navy-light to-navy" />

      {/* Animated mesh gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(249,196,107,0.1),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.1),transparent_50%)]" />

      {/* Decorative Elements */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"
      />

      {/* Animated circular decorations */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-white/5 rounded-full"
      />

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
          }}
          className="absolute w-2 h-2 bg-gold/40 rounded-full hidden md:block"
          style={{
            top: `${10 + (i * 7)}%`,
            left: `${5 + (i * 8)}%`,
          }}
        />
      ))}

      {/* Globe icon decoration */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 0.1, scale: 1 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute right-10 top-20 hidden lg:block"
      >
        <Globe className="w-32 h-32 text-gold" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 0.1, scale: 1 } : {}}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute left-10 bottom-20 hidden lg:block"
      >
        <Plane className="w-24 h-24 text-white transform rotate-12" />
      </motion.div>

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
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 mb-8"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4 text-gold" />
            </motion.div>
            <span className="text-sm font-medium text-white/90">Let's Get Started</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto leading-tight"
          >
            Ready to begin your{' '}
            <span className="relative inline-block">
              <span className="italic font-serif text-transparent bg-clip-text bg-linear-to-r from-gold via-yellow-300 to-gold">global journey</span>
              <motion.svg
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1, delay: 0.8 }}
                viewBox="0 0 200 20"
                className="absolute -bottom-2 left-0 w-full h-4"
              >
                <motion.path
                  d="M0,10 Q50,0 100,10 T200,10"
                  fill="none"
                  stroke="#F9C46B"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </motion.svg>
            </span>?
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg lg:text-xl text-white/70 max-w-2xl mx-auto mb-10"
          >
            Your dream destination awaits. Let our experts guide you every step of the way to make your international aspirations a reality.
          </motion.p>

          {/* CTA Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap justify-center gap-4 lg:gap-8 mb-10"
          >
            {ctaFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex items-center gap-2 text-white/80"
              >
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                  <feature.icon className="w-4 h-4 text-gold" />
                </div>
                <span className="text-sm lg:text-base">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/#contact">
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-3 bg-gold text-navy px-8 py-4 rounded-full font-bold text-lg overflow-hidden shadow-lg shadow-gold/30"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Start Your Application
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-gold-dark to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </Link>
            
            <motion.a
              href="tel:916284784841"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </motion.a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-14 pt-10 border-t border-white/10"
          >
            <p className="text-white/50 text-sm mb-6">Trusted by clients worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8">
              {/* Country flags with SVG icons */}
              {countryFlags.map(({ name, Flag }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  whileHover={{ scale: 1.15, y: -5 }}
                  className="group cursor-pointer"
                >
                  <div className="w-12 h-8 sm:w-14 sm:h-10 rounded-md overflow-hidden shadow-lg border border-white/20 group-hover:shadow-xl transition-all duration-300">
                    <Flag />
                  </div>
                  <p className="text-center text-white/50 text-[10px] sm:text-xs mt-1.5 group-hover:text-white/80 transition-colors">{name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// ===========================
// MAIN ABOUT PAGE COMPONENT
// ===========================
const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <AboutHero />
      <CompanyIntroduction />
      <OurMission />
      <OurValues />
      <WhyPeopleTrustUs />
      <OurPromise />
      <MetricsSection />
      <AboutCTA />
      <Footer />
    </div>
  );
};

export default About;
