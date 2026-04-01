import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

const Countries = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  // Row 1 - Moving Left
  const countriesRow1 = [
    { name: 'Melbourne', image: 'https://images.unsplash.com/photo-1514395462725-fb4566210144?w=400&h=400&fit=crop' },
    { name: 'Australia', image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400&h=400&fit=crop' },
    { name: 'Sydney', image: 'https://images.unsplash.com/photo-1524293581917-878a6d017c71?w=400&h=400&fit=crop' },
    { name: 'London', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=400&fit=crop' },
    { name: 'Toronto', image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400&h=400&fit=crop' },
    { name: 'New York', image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=400&h=400&fit=crop' },
    { name: 'Paris', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&h=400&fit=crop' },
  ];

  // Row 2 - Moving Right
  const countriesRow2 = [
    { name: 'Berlin', image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=400&fit=crop' },
    { name: 'Singapore', image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&h=400&fit=crop' },
    { name: 'Dubai', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=400&fit=crop' },
    { name: 'Tokyo', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=400&fit=crop' },
    { name: 'Rome', image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=400&h=400&fit=crop' },
    { name: 'Amsterdam', image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=400&h=400&fit=crop' },
    { name: 'Vancouver', image: 'canada.png' },
    { name: 'Beijing', image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&h=400&fit=crop' },
  ];

  // Duplicate arrays for seamless infinite scroll
  const duplicatedRow1 = [...countriesRow1, ...countriesRow1, ...countriesRow1];
  const duplicatedRow2 = [...countriesRow2, ...countriesRow2, ...countriesRow2];

  return (
    <section 
      id="countries" 
      ref={sectionRef} 
      className="py-20 lg:py-28 bg-linear-to-b from-gray-50 to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 text-gold font-semibold text-sm tracking-wider uppercase mb-3"
          >
            <Sparkles className="w-4 h-4" />
            Destinations
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6">
            Work  & Travel <span className="italic font-serif">Worldwide</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We provide visa assistance for 25+ countries. Choose your dream destination
            and let us handle the rest.
          </p>
        </motion.div>
      </div>

      {/* Carousel Container - Full Width */}
      <div className="relative">
        {/* Row 1 - Moving Left */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 overflow-hidden"
        >
          <motion.div
            animate={{ x: ['0%', '-33.33%'] }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
            className="flex gap-4 sm:gap-6"
          >
            {duplicatedRow1.map((country, index) => (
              <div
                key={`row1-${index}`}
                className="shrink-0 group cursor-pointer"
              >
                <div className="w-36 h-36 sm:w-44 sm:h-44 lg:w-52 lg:h-52 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 relative">
                  <img
                    src={country.image}
                    alt={country.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-all duration-500" />
                </div>
                <p className="text-center mt-3 text-navy font-medium text-sm sm:text-base">
                  {country.name}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Row 2 - Moving Right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="overflow-hidden"
        >
          <motion.div
            animate={{ x: ['-33.33%', '0%'] }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
            className="flex gap-4 sm:gap-6"
          >
            {duplicatedRow2.map((country, index) => (
              <div
                key={`row2-${index}`}
                className="shrink-0 group cursor-pointer"
              >
                <div className="w-36 h-36 sm:w-44 sm:h-44 lg:w-52 lg:h-52 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 relative">
                  <img
                    src={country.image}
                    alt={country.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-all duration-500" />
                </div>
                <p className="text-center mt-3 text-navy font-medium text-sm sm:text-base">
                  {country.name}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Gradient Fades on Edges */}
        <div className="absolute top-0 left-0 h-full w-16 sm:w-24 lg:w-32 bg-linear-to-r from-gray-50 to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 right-0 h-full w-16 sm:w-24 lg:w-32 bg-linear-to-l from-gray-50 to-transparent pointer-events-none z-10" />
      </div>

      {/* View All Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-10 text-center"
      >
        <Link to="/countries">
          <motion.span
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-navy text-white px-8 py-4 rounded-full font-semibold hover:bg-navy-light transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Countries
            <ArrowRight className="w-5 h-5" />
          </motion.span>
        </Link>
      </motion.div>

      {/* Bottom Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 lg:mt-16"
      >
        <div className="flex flex-wrap justify-center gap-8 sm:gap-12 lg:gap-16">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-navy">25+</div>
            <div className="text-gray-500 text-sm sm:text-base">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-navy">500+</div>
            <div className="text-gray-500 text-sm sm:text-base">Universities</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-navy">2500+</div>
            <div className="text-gray-500 text-sm sm:text-base">Students Placed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-navy">98%</div>
            <div className="text-gray-500 text-sm sm:text-base">Success Rate</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Countries;
