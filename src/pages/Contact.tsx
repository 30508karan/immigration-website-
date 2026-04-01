import { useState, useRef, useEffect, lazy, Suspense } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ExternalLink,
  ChevronDown,
} from 'lucide-react';
import WhatsAppIcon from '../components/icons/WhatsAppIcon';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Form Types
interface FormData {
  name: string;
  mobile: string;
  email: string;
  service: string;
  country: string;
  message: string;
  consent: boolean;
}

interface FormErrors {
  name?: string;
  mobile?: string;
  email?: string;
  service?: string;
  consent?: string;
}

// Constants
const WHATSAPP_NUMBER = '916284784841';
const EMAIL_ADDRESS = 'info@thetridentglobal.in';
const OFFICE_LOCATION = 'Trident Global Advisors 4334, Devi Dasa Pura sector 5, thanesar, kurukshetra, haryana 136118 , India';
const GOOGLE_MAPS_EMBED_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d432.04866361883114!2d76.88456181564575!3d29.968239805984798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e46ce3dfb408d%3A0xf9c0d2d0ebd20ccd!2sDevi%20Dass%20Pura%2C%20Sector%205%2C%20Kurukshetra%2C%20Haryana%20136118%2C%20India!5e0!3m2!1sen!2sca!4v1767684523290!5m2!1sen!2sca%22';
const GOOGLE_MAPS_LINK = "https://www.google.com/maps/place/Devi+Dass+Pura,+Sector+5,+Kurukshetra,+Haryana+136118/@29.9682398,76.8845618,17z";


const SERVICES = [
  'Student Visas',
  'SOP & LOR Writing',
  'Admission Counseling',
  'Financial Documentation',
  'Visit/Tourist Visas',
  'Visa Slot Booking',
  'Travel & Accommodation Support',
];

const COUNTRIES = [
  'USA',
  'UK',
  'Canada',
  'Australia',
  'Germany',
  'France',
  'Italy',
  'Singapore',
  'UAE',
  'Schengen',
  'China',
  'Japan',
  'Other',
];

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
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
  },
};

const fadeRightVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

// Lazy loaded Map component
const MapEmbed = lazy(() => Promise.resolve({
  default: () => (
    <iframe
      src={GOOGLE_MAPS_EMBED_URL}
      width="100%"
      height="400"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Trident Global Office Location - Trident Global Advisors 4334, Devi Dasa Pura sector 5, thanesar, kurukshetra, haryana 136118 , India"
      className="rounded-2xl"
    />
  )
}));

// Paper Plane SVG Component
const PaperPlane = () => (
  <motion.svg
    animate={{
      y: [0, -10, 0],
      rotate: [0, 5, -5, 0],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
    className="w-16 h-16 text-gold"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 2L11 13" />
    <path d="M22 2L15 22L11 13L2 9L22 2Z" />
  </motion.svg>
);

// Floating Dots Component
const FloatingDots = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-gold/30 rounded-full"
        style={{
          left: `${15 + i * 15}%`,
          top: `${20 + (i % 3) * 25}%`,
        }}
        animate={{
          y: [0, -15, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 2 + i * 0.5,
          repeat: Infinity,
          delay: i * 0.3,
        }}
      />
    ))}
  </div>
);

// Custom Select Component
const CustomSelect = ({
  label,
  value,
  onChange,
  options,
  placeholder,
  error,
  required,
  id,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder: string;
  error?: string;
  required?: boolean;
  id: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={selectRef}>
      <label htmlFor={id} className="block text-sm font-medium text-navy mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <button
        type="button"
        id={id}
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full px-4 py-3 text-left bg-white border-2 rounded-xl transition-all duration-300 flex items-center justify-between ${
          error
            ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200'
            : 'border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 hover:border-gray-300'
        }`}
      >
        <span className={value ? 'text-navy' : 'text-gray-400'}>
          {value || placeholder}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            role="listbox"
            className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 overflow-auto"
          >
            {options.map((option) => (
              <li
                key={option}
                role="option"
                aria-selected={value === option}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className={`px-4 py-3 cursor-pointer transition-colors hover:bg-gold/10 ${
                  value === option ? 'bg-gold/20 text-navy font-medium' : 'text-gray-700'
                }`}
              >
                {option}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {error && (
          <motion.p
            id={`${id}-error`}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="mt-1 text-sm text-red-500 flex items-center gap-1"
            role="alert"
          >
            <AlertCircle className="w-4 h-4" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

// Contact Hero Section
const ContactHero = () => {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true });

  return (
    <section
      ref={heroRef}
      className="relative pt-32 pb-16 bg-[#F5F6F7] overflow-hidden"
    >
      {/* Gold accent blob */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-10 w-48 h-48 bg-gold/5 rounded-full blur-2xl" />
      
      <FloatingDots />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <PaperPlane />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6"
          >
            Get in{' '}
            <span className="text-gradient">Touch</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
          >
            We're here to help you start your global journey. Reach out to us
            for expert guidance on visas, education, and immigration.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

// Contact Details Card
const ContactDetailsCard = () => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: '-50px' });

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        'Hello Trident Global! I would like to know more about your services.'
      )}`,
      '_blank'
    );
  };

  const handleEmail = () => {
    window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(
      'Enquiry - Trident Global Services'
    )}`;
  };

  // const handleViewMap = () => {
  //   const mapSection = document.getElementById('map-section');
  //   if (mapSection) {
  //     mapSection.scrollIntoView({ behavior: 'smooth' });
  //   } else {
  //     window.open(GOOGLE_MAPS_LINK, '_blank');
  //   }
  // };
const handleViewMap = () => {
  window.open(GOOGLE_MAPS_LINK, '_blank');
};

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <motion.div
      ref={cardRef}
      variants={fadeLeftVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="bg-white rounded-3xl shadow-xl p-8 lg:p-10 hover:shadow-2xl transition-shadow duration-300"
    >
      <h2 className="text-2xl font-bold text-navy mb-8">Contact Information</h2>

      <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="space-y-8">
        {/* Phone / WhatsApp */}
        <motion.div variants={fadeUpVariants} className="flex items-start gap-4">
          <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center shrink-0">
            <Phone className="w-6 h-6 text-gold" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-navy mb-1">Phone / WhatsApp</h3>
            <p className="text-gray-600 mb-3">916284784841</p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleWhatsApp}
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-medium hover:bg-green-600 transition-colors"
              aria-label="Chat on WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Chat on WhatsApp
            </motion.button>
          </div>
        </motion.div>

        {/* Email */}
        <motion.div variants={fadeUpVariants} className="flex items-start gap-4">
          <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center shrink-0">
            <Mail className="w-6 h-6 text-gold" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-navy mb-1">Email</h3>
            <p className="text-gray-600 mb-3">{EMAIL_ADDRESS}</p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleEmail}
              className="inline-flex items-center gap-2 px-4 py-2 bg-navy text-white rounded-lg text-sm font-medium hover:bg-navy-light transition-colors"
              aria-label="Send Email"
            >
              <Send className="w-4 h-4" />
              Send Email
            </motion.button>
          </div>
        </motion.div>

        {/* Office Location */}
        <motion.div variants={fadeUpVariants} className="flex items-start gap-4">
          <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center shrink-0">
            <MapPin className="w-6 h-6 text-gold" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-navy mb-1">Office Location</h3>
            <p className="text-gray-600 mb-3">{OFFICE_LOCATION}</p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleViewMap}
              className="inline-flex items-center gap-2 px-4 py-2 border-2 border-navy text-navy rounded-lg text-sm font-medium hover:bg-navy hover:text-white transition-colors"
              aria-label="View on Map"
            >
              <ExternalLink className="w-4 h-4" />
              View on Map
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      {/* Social Links */}
      <div className="mt-10 pt-8 border-t border-gray-100">
        <h3 className="font-semibold text-navy mb-4">Follow Us</h3>
        <div className="flex gap-3">
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gold hover:text-navy transition-colors"
              aria-label={`Follow us on ${social.label}`}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Quick Enquiry Form
const QuickEnquiryForm = () => {
  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true, margin: '-50px' });
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    mobile: '',
    email: '',
    service: '',
    country: '',
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Load draft from localStorage
  useEffect(() => {
    const savedDraft = localStorage.getItem('enquiryDraft');
    if (savedDraft) {
      try {
        const draft = JSON.parse(savedDraft);
        setFormData((prev) => ({ ...prev, ...draft }));
      } catch {
        // Invalid draft, ignore
      }
    }
  }, []);

  // Save draft to localStorage
  useEffect(() => {
    const { consent, ...draftData } = formData;
    if (Object.values(draftData).some((v) => v)) {
      localStorage.setItem('enquiryDraft', JSON.stringify(draftData));
    }
  }, [formData]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Mobile validation
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^\d+$/.test(formData.mobile.replace(/[\s-]/g, ''))) {
      newErrors.mobile = 'Please enter a valid phone number';
    } else if (formData.mobile.replace(/[\s-]/g, '').length < 7) {
      newErrors.mobile = 'Mobile number must be at least 7 digits';
    } else if (formData.mobile.replace(/[\s-]/g, '').length > 15) {
      newErrors.mobile = 'Mobile number must be at most 15 digits';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Service validation
    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    // Consent validation
    if (!formData.consent) {
      newErrors.consent = 'You must agree to be contacted';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const buildWhatsAppMessage = (): string => {
    const template = `Hello Trident Global,

I would like to enquire about ${formData.service} for ${formData.country || 'Not specified'}.

Name: ${formData.name}
Mobile: ${formData.mobile}
Email: ${formData.email}
Message: ${formData.message || 'N/A'}`;

    return template;
  };

  const handleWhatsAppSubmit = () => {
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate processing
    setTimeout(() => {
      const message = buildWhatsAppMessage();
      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      
      // Clear draft on successful submission
      localStorage.removeItem('enquiryDraft');
      
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Open WhatsApp
      window.open(url, '_blank');

      // Reset success status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 500);
  };

  const handleEmailSubmit = () => {
    if (!validateForm()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const subject = `Enquiry: ${formData.service} - ${formData.name}`;
      const body = buildWhatsAppMessage();
      
      // Clear draft on successful submission
      localStorage.removeItem('enquiryDraft');
      
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Open mail client
      window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      // Reset success status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 500);
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <motion.div
      ref={formRef}
      variants={fadeRightVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="bg-white rounded-3xl shadow-xl p-8 lg:p-10 hover:shadow-2xl transition-shadow duration-300"
    >
      <h2 className="text-2xl font-bold text-navy mb-2">Quick Enquiry</h2>
      <p className="text-gray-600 mb-8">Fill out the form and we'll get back to you shortly.</p>

      <form onSubmit={(e) => e.preventDefault()} className="space-y-6" noValidate>
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 outline-none ${
              errors.name
                ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200'
                : 'border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 hover:border-gray-300'
            }`}
            placeholder="Your full name"
          />
          <AnimatePresence>
            {errors.name && (
              <motion.p
                id="name-error"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="mt-1 text-sm text-red-500 flex items-center gap-1"
                role="alert"
              >
                <AlertCircle className="w-4 h-4" />
                {errors.name}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Field */}
        <div>
          <label htmlFor="mobile" className="block text-sm font-medium text-navy mb-2">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="mobile"
            value={formData.mobile}
            onChange={(e) => handleInputChange('mobile', e.target.value)}
            aria-invalid={!!errors.mobile}
            aria-describedby={errors.mobile ? 'mobile-error' : undefined}
            className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 outline-none ${
              errors.mobile
                ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200'
                : 'border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 hover:border-gray-300'
            }`}
            placeholder="916284784841"
          />
          <AnimatePresence>
            {errors.mobile && (
              <motion.p
                id="mobile-error"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="mt-1 text-sm text-red-500 flex items-center gap-1"
                role="alert"
              >
                <AlertCircle className="w-4 h-4" />
                {errors.mobile}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 outline-none ${
              errors.email
                ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200'
                : 'border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 hover:border-gray-300'
            }`}
            placeholder="you@example.com"
          />
          <AnimatePresence>
            {errors.email && (
              <motion.p
                id="email-error"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="mt-1 text-sm text-red-500 flex items-center gap-1"
                role="alert"
              >
                <AlertCircle className="w-4 h-4" />
                {errors.email}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Service Select */}
        <CustomSelect
          label="Select Service"
          id="service"
          value={formData.service}
          onChange={(value) => handleInputChange('service', value)}
          options={SERVICES}
          placeholder="Choose a service"
          error={errors.service}
          required
        />

        {/* Country Select */}
        <CustomSelect
          label="Select Country"
          id="country"
          value={formData.country}
          onChange={(value) => handleInputChange('country', value)}
          options={COUNTRIES}
          placeholder="Choose a country (optional)"
        />

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
            Message <span className="text-gray-400 font-normal">(Optional)</span>
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value.slice(0, 1000))}
            rows={4}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl transition-all duration-300 outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 hover:border-gray-300 resize-none"
            placeholder="Tell us more about your requirements..."
          />
          <p className="mt-1 text-sm text-gray-400 text-right">
            {formData.message.length}/1000
          </p>
        </div>

        {/* Consent Checkbox */}
        <div>
          <label className="flex items-start gap-3 cursor-pointer group">
            <div className="relative mt-0.5">
              <input
                type="checkbox"
                checked={formData.consent}
                onChange={(e) => handleInputChange('consent', e.target.checked)}
                className="sr-only"
                aria-invalid={!!errors.consent}
                aria-describedby={errors.consent ? 'consent-error' : undefined}
              />
              <div
                className={`w-5 h-5 border-2 rounded transition-all duration-200 flex items-center justify-center ${
                  formData.consent
                    ? 'bg-gold border-gold'
                    : errors.consent
                    ? 'border-red-400'
                    : 'border-gray-300 group-hover:border-gray-400'
                }`}
              >
                {formData.consent && <CheckCircle className="w-3.5 h-3.5 text-navy" />}
              </div>
            </div>
            <span className="text-sm text-gray-600">
              I agree to be contacted by Trident Global regarding my enquiry.{' '}
              <span className="text-red-500">*</span>
            </span>
          </label>
          <AnimatePresence>
            {errors.consent && (
              <motion.p
                id="consent-error"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="mt-1 ml-8 text-sm text-red-500 flex items-center gap-1"
                role="alert"
              >
                <AlertCircle className="w-4 h-4" />
                {errors.consent}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Submit Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <motion.button
            whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(249, 196, 107, 0.3)' }}
            whileTap={{ scale: 0.98 }}
            onClick={handleWhatsAppSubmit}
            disabled={isSubmitting}
            className="flex-1 py-4 px-6 bg-gold text-navy font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:bg-gold-dark disabled:opacity-70 disabled:cursor-not-allowed"
            aria-live="polite"
          >
            {isSubmitting ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                <WhatsAppIcon className="w-5 h-5" />
                Send via WhatsApp
              </>
            )}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleEmailSubmit}
            disabled={isSubmitting}
            className="flex-1 py-4 px-6 bg-navy text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:bg-navy-light disabled:opacity-70 disabled:cursor-not-allowed"
            aria-live="polite"
          >
            {isSubmitting ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                <Send className="w-5 h-5" />
                Send via Email
              </>
            )}
          </motion.button>
        </div>

        {/* Success Message */}
        <AnimatePresence>
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-2 p-4 bg-green-50 text-green-700 rounded-xl"
              role="alert"
            >
              <CheckCircle className="w-5 h-5" />
              <span>Your enquiry is being sent. Please complete the action in the opened window.</span>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </motion.div>
  );
};

// Map Section
const MapSection = () => {
  const mapRef = useRef(null);
  const isInView = useInView(mapRef, { once: true, margin: '-100px' });

  return (
    <section id="map-section" ref={mapRef} className="py-16 bg-[#F5F6F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-navy mb-4">Find Us Here</h2>
          <p className="text-gray-600">Visit our office at Trident Global Advisors 4334, Devi Dasa Pura sector 5, thanesar, kurukshetra, haryana 136118 , India</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-4 rounded-3xl shadow-xl"
        >
          <Suspense
  fallback={
    <div className="w-full h-[400px] bg-gray-100 rounded-2xl animate-pulse flex items-center justify-center">
      <Loader2 className="w-8 h-8 text-gray-400 animate-spin" />
    </div>
  }
>
  <div
    className="relative cursor-pointer group"
    onClick={() => window.open(GOOGLE_MAPS_LINK, "_blank")}
  >
    <MapEmbed />

    {/* Transparent click layer */}
    <div className="absolute inset-0" />
  </div>
</Suspense>


          <div className="mt-4 text-center">
            <motion.a
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white rounded-xl font-medium hover:bg-navy-light transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              Open in Google Maps
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Main Contact Page
const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ContactHero />

      {/* Main Contact Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <ContactDetailsCard />
            <QuickEnquiryForm />
          </div>
        </div>
      </section>

      <MapSection />
      <Footer />
    </div>
  );
};

export default Contact;
