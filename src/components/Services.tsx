import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
  Plane,
  GraduationCap,
  CalendarCheck,
  FileEdit,
  BookOpen,
  Wallet,
  Building2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

const Services = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const services = [
     {
      icon: GraduationCap,
      title: 'Student Visas',
      description: 'Complete guidance for study abroad visa applications and requirements.',
      color: 'from-purple-500 to-purple-600',
      bgLight: 'bg-purple-50',
    },
    {
      icon: FileEdit,
      title: 'SOP & LOR Writing',
      description: 'Professional statement of purpose and recommendation letter drafting.',
      color: 'from-orange-500 to-orange-600',
      bgLight: 'bg-orange-50',
    },
    {
      icon: BookOpen,
      title: 'Admission Counseling',
      description: 'Expert guidance on university selection and admission processes.',
      color: 'from-pink-500 to-pink-600',
      bgLight: 'bg-pink-50',
    },
    {
      icon: Wallet,
      title: 'Financial Documentation',
      description: 'Assistance with bank statements, sponsorship letters, and proof of funds.',
      color: 'from-teal-500 to-teal-600',
      bgLight: 'bg-teal-50',
    },
    {
      icon: Plane,
      title: 'Visit / Tourist Visas',
      description: 'Hassle-free tourist visa processing for all major countries worldwide.',
      color: 'from-blue-500 to-blue-600',
      bgLight: 'bg-blue-50',
    },
   
    {
      icon: CalendarCheck,
      title: 'Visa Slot Booking',
      description: 'Fast-track appointment booking for visa interviews at embassies.',
      color: 'from-green-500 to-green-600',
      bgLight: 'bg-green-50',
    },
    {
      icon: Building2,
      title: 'Travel & Accommodation',
      description: 'Support with flight bookings, hotel reservations, and travel insurance.',
      color: 'from-indigo-500 to-indigo-600',
      bgLight: 'bg-indigo-50',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
    },
  };

  return (
    <section id="services" ref={sectionRef} className="py-20 lg:py-28 bg-linear-to-b from-white to-blue-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 text-gold font-semibold text-sm tracking-wider uppercase mb-3"
          >
            <Sparkles className="w-4 h-4" />
            What We Offer
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6">
            Our Premium <span className="italic font-serif">Services</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive visa and immigration services tailored to help you achieve
            your travel and Work goals.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <Link key={index} to="/services">
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`group bg-white p-6 rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 cursor-pointer relative overflow-hidden h-full`}
              >
                {/* Background glow on hover */}
                <div className={`absolute inset-0 ${service.bgLight} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    className={`w-14 h-14 rounded-2xl bg-linear-to-br ${service.color} flex items-center justify-center mb-5 shadow-lg`}
                  >
                    <service.icon className="w-7 h-7 text-white" />
                  </motion.div>

                  {/* Text Content */}
                  <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>

                  {/* Arrow */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="mt-4 flex items-center text-gold"
                  >
                    <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">Learn more</span>
                    <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </motion.div>
                </div>
              </motion.div>
            </Link>
          ))}

          {/* CTA Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-linear-to-br from-navy to-navy-light p-6 rounded-2xl flex flex-col justify-center items-center text-center relative overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/10 rounded-full blur-xl" />
            
            <div className="relative z-10">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="w-12 h-12 border-2 border-gold/30 rounded-full absolute -top-6 -right-6"
              />
              <h3 className="text-xl font-bold text-white mb-3">Need Something Else?</h3>
              <p className="text-white/70 text-sm mb-6">
                We offer custom solutions for unique visa requirements.
              </p>
              <Link to="/services">
                <motion.span
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-gold text-navy px-6 py-3 rounded-full font-semibold hover:bg-gold-dark transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Explore All Services
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
