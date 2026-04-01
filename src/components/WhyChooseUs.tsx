import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const stats = [
    { number: '2500+', label: 'Successful visa filings across student & visit categories' },
    { number: '1200+', label: 'Students guided toward their overseas Work goals' },
    { number: '25+', label: 'Countries served for study, visit, tourist & work-ready pathways' },
    { number: '98%', label: 'Satisfaction Rate by students, families & working professionals' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
    },
  };

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="py-20 lg:py-28 bg-linear-to-b from-white to-blue-50/50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 text-gold font-semibold text-sm tracking-wider uppercase mb-4"
            >
              <Sparkles className="w-4 h-4" />
              Who We Are
            </motion.div>

            {/* Heading */}
            <motion.h2 
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6"
            >
              <span className="font-serif italic">Excellence</span> in Global Visa Consulting &
              <br />
              <span className="text-navy">Overseas Guidance.</span>
            </motion.h2>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-gray-600 text-base lg:text-lg leading-relaxed mb-10 max-w-lg"
            >
              At Trident Global, we are more than just a visa or abroad consultancy we are a dedicated team of experts committed to turning your international dreams into achievable realities.
              Unlike traditional consultants, our approach is personalized, transparent, and success-driven.

              We ensure every applicant receives expert guidance, accurate documentation, fast processing, and continuous support until the visa is approved.
            </motion.p>

            {/* Stats Grid */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-1 h-12 bg-gold rounded-full shrink-0" />
                  <div>
                    <div className="text-2xl lg:text-3xl font-bold text-navy">{stat.number}</div>
                    <div className="text-gray-500 text-sm">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Modern Attractive Shapes with Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 relative h-[480px] sm:h-[520px] lg:h-[580px] flex items-center justify-center"
          >
            {/* Shape 1 - Top right - Rounded rectangle rotated */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 12 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="absolute top-0 right-0 sm:right-4 lg:right-8 w-32 h-40 sm:w-36 sm:h-44 lg:w-44 lg:h-52 rounded-3xl overflow-hidden shadow-xl"
              style={{ transform: 'rotate(12deg)' }}
            >
              <img
                src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&h=500&fit=crop"
                alt="European Architecture"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-navy/20 to-transparent" />
            </motion.div>

            {/* Shape 2 - Center Left - Large circle with image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="absolute top-20 sm:top-24 lg:top-28 left-0 sm:left-4 lg:left-8 w-44 h-44 sm:w-52 sm:h-52 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-gold/30"
            >
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&h=500&fit=crop"
                alt="Student studying"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-br from-navy/10 to-transparent" />
            </motion.div>

            {/* Shape 3 - Bottom Right - Rounded square */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="absolute bottom-4 sm:bottom-8 lg:bottom-12 right-4 sm:right-8 lg:right-16 w-40 h-36 sm:w-48 sm:h-44 lg:w-56 lg:h-48 rounded-4xl overflow-hidden shadow-xl"
              style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}
            >
              <img
                src="w1.png"
                alt="Graduate student"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-gold/20 to-transparent" />
            </motion.div>

            {/* Decorative floating elements */}
            {/* Gradient circle decoration */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute top-16 right-32 sm:right-40 lg:right-48 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-linear-to-br from-gold to-gold-dark shadow-lg"
            />

            {/* Small navy circle */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="absolute bottom-32 sm:bottom-40 left-36 sm:left-44 lg:left-56 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-linear-to-br from-navy-light to-navy shadow-md"
            />

            {/* Floating ring */}
            <motion.div
              initial={{ opacity: 0, rotate: -180 }}
              animate={isInView ? { opacity: 1, rotate: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute top-40 sm:top-44 lg:top-48 right-8 sm:right-12 lg:right-20 w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-dashed border-gold/50"
            />

            {/* Orange arrow with sparkle */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="absolute top-[52%] right-20 sm:right-28 lg:right-36"
            >
              <div className="relative">
                {/* Sparkle */}
                <svg className="absolute -top-3 -left-2 w-6 h-6 text-orange-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" />
                </svg>
                {/* Arrow */}
                <svg className="w-10 h-8 sm:w-12 sm:h-10" viewBox="0 0 48 40" fill="#F97316">
                  <path d="M0 8 L36 20 L0 32 L8 20 Z" />
                </svg>
              </div>
            </motion.div>

            {/* Dot pattern */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 0.4 } : {}}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="absolute top-4 left-32 sm:left-40 lg:left-52"
            >
              <div className="grid grid-cols-3 gap-2">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-navy/60 rounded-full" />
                ))}
              </div>
            </motion.div>

            {/* Connecting line decoration */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="absolute bottom-20 sm:bottom-24 left-40 sm:left-52 lg:left-64 w-16 sm:w-20 lg:w-24 h-0.5 bg-linear-to-r from-gold to-transparent origin-left"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
