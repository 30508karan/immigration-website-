import { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      location: 'Mumbai, India',
      destination: 'USA',
      flag: '🇺🇸',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      rating: 5,
      text: "Got my USA B1/B2 approved with Trident Global — smooth and stress-free.",
      visaType: 'B1/B2 Tourist Visa',
    },
    {
      id: 2,
      name: 'Rahul Verma',
      location: 'Delhi, India',
      destination: 'Germany',
      flag: '🇩🇪',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      rating: 5,
      text: "Germany student visa approved! The SOP was professionally written.",
      visaType: 'Student Visa',
    },
    {
      id: 3,
      name: 'Anita Patel',
      location: 'Ahmedabad, India',
      destination: 'Schengen',
      flag: '🇪🇺',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      rating: 5,
      text: "Super fast Schengen visa filing. Highly recommended!",
      visaType: 'Schengen Tourist Visa',
    },
  ];

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section 
      id="testimonials" 
      ref={sectionRef} 
      className="py-20 lg:py-28 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Static Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight">
              What Our Clients Are Saying
            </h2>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-8 max-w-md">
              We take pride in delivering exceptional solutions that deliver great results. But don't just take our word for it.
            </p>

          </motion.div>

          {/* Right Side - Testimonial Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="min-h-[280px] sm:min-h-[250px]"
                >
                  {/* Quote */}
                  <blockquote className="text-xl sm:text-2xl lg:text-3xl text-navy font-medium leading-relaxed mb-8">
                    "{testimonials[activeIndex].text}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-bold text-navy">
                        {testimonials[activeIndex].name}
                      </h4>
                      <p className="text-gray-500 text-sm">
                        {testimonials[activeIndex].visaType}, {testimonials[activeIndex].destination} {testimonials[activeIndex].flag}
                      </p>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex gap-2">
                      <motion.button
                        onClick={prevSlide}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-300 flex items-center justify-center hover:border-navy hover:bg-navy hover:text-white transition-all duration-300 text-gray-600"
                        aria-label="Previous testimonial"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </motion.button>
                      <motion.button
                        onClick={nextSlide}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-300 flex items-center justify-center hover:border-navy hover:bg-navy hover:text-white transition-all duration-300 text-gray-600"
                        aria-label="Next testimonial"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Progress Indicator */}
              <div className="mt-8 flex gap-2">
                {testimonials.map((_, index) => (
                  <motion.div
                    key={index}
                    className="h-1 rounded-full bg-gray-200 overflow-hidden flex-1 max-w-16"
                  >
                    <motion.div
                      className="h-full bg-navy rounded-full"
                      initial={{ width: '0%' }}
                      animate={{ 
                        width: index === activeIndex ? '100%' : index < activeIndex ? '100%' : '0%'
                      }}
                      transition={{ 
                        duration: index === activeIndex && isAutoPlaying ? 4 : 0.3,
                        ease: 'linear'
                      }}
                    />
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

export default Testimonials;
