import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Globe } from 'lucide-react';

const countries = [
  { name: 'USA', code: 'US' },
  { name: 'UK', code: 'GB' },
  { name: 'Canada', code: 'CA' },
  { name: 'Australia', code: 'AU' },
  { name: 'Germany', code: 'DE' },
  { name: 'France', code: 'FR' },
  { name: 'Italy', code: 'IT' },
  { name: 'Singapore', code: 'SG' },
  { name: 'UAE', code: 'AE' },
  { name: 'Schengen', code: 'EU' },
  { name: 'China', code: 'CN' },
  { name: 'Japan', code: 'JP' },
];

const getFlagUrl = (countryCode: string) =>
  `https://flagcdn.com/24x18/${countryCode.toLowerCase()}.png`;

const CountriesShowcase = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' });

  return (
    <section ref={sectionRef} className="py-16 md:py-20 bg-linear-to-b from-[#0a1628] to-[#0d1e36]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 text-gold mb-4">
            <Globe className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Global Destinations</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
            We Help You Get Work  In
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-2xl mx-auto">
            Explore opportunities in top Work  destinations worldwide
          </p>
        </motion.div>

        {/* Countries Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 md:gap-4"
        >
          {countries.map((country, index) => (
            <motion.div
              key={country.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + index * 0.05 }}
              whileHover={{
                scale: 1.08,
                y: -3,
                boxShadow: '0 10px 40px -10px rgba(249, 196, 107, 0.3)',
              }}
              className="group inline-flex items-center gap-2.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2.5 text-white text-sm font-medium cursor-pointer hover:bg-white/8 hover:border-gold/30 transition-all duration-300"
            >
              <img
                src={getFlagUrl(country.code)}
                alt={`${country.name} flag`}
                className="w-6 h-4 object-cover rounded-sm shadow-sm group-hover:shadow-md transition-shadow"
              />
              <span className="group-hover:text-gold transition-colors">{country.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"
        />
      </div>
    </section>
  );
};

export default CountriesShowcase;
