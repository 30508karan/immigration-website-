import { motion } from 'framer-motion';

interface PageLoaderProps {
  onLoadingComplete: () => void;
}

const PageLoader = ({ onLoadingComplete }: PageLoaderProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-navy"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      onAnimationComplete={(definition) => {
        if (definition === 'exit') {
          onLoadingComplete();
        }
      }}
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-gold/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-gold/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Logo Container */}
      <motion.div
        className="relative z-10 flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {/* Logo */}
        {/* <motion.img
          src="/INFINITI.png"
          alt="Trident Global"
          className="h-32 md:h-40 w-auto object-contain mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        /> */}

        {/* Loader */}
        <div className="relative">
          {/* Spinning ring */}
          <motion.div
            className="w-16 h-16 border-4 border-gold/20 border-t-gold rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
          
          {/* Inner pulsing dot */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ scale: 0.8, opacity: 0.5 }}
            animate={{ scale: 1.2, opacity: 1 }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          >
            <div className="w-3 h-3 bg-gold rounded-full" />
          </motion.div>
        </div>

        {/* Loading text */}
        <motion.p
          className="mt-6 text-gold/80 text-sm tracking-widest uppercase font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.span
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
             Trident Global Loading
          </motion.span>
          <motion.span
            className="inline-block"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0 }}
          >
            .
          </motion.span>
          <motion.span
            className="inline-block"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
          >
            .
          </motion.span>
          <motion.span
            className="inline-block"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
          >
            .
          </motion.span>
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default PageLoader;
