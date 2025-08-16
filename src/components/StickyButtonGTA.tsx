import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

interface StickyButtonGTAProps {
  onCtaClick: () => void;
}

export const StickyButtonGTA: React.FC<StickyButtonGTAProps> = ({ onCtaClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Aparece após 2 minutos (120000ms)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 120000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Botão fixo no canto inferior direito */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: isVisible ? 1 : 0, 
          scale: isVisible ? 1 : 0 
        }}
        transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.button 
          onClick={onCtaClick}
          className="group relative bg-gradient-to-r from-[#E7C75F] to-[#d4b84a] hover:from-green-600 hover:to-green-700 text-black hover:text-white font-black text-lg px-6 py-4 rounded-full shadow-2xl overflow-hidden border-2 border-white/20"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            boxShadow: [
              '0 0 20px rgba(231, 199, 95, 0.5)',
              '0 0 40px rgba(231, 199, 95, 0.8)',
              '0 0 20px rgba(231, 199, 95, 0.5)'
            ]
          }}
          transition={{
            boxShadow: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <span className="relative z-10 flex items-center space-x-2">
            <Zap className="w-5 h-5" />
            <span className="hidden sm:inline">DESTRAVAR</span>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
        </motion.button>
      </motion.div>
    </>
  );
};