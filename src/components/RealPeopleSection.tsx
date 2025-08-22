import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, TrendingUp, DollarSign, Target, ChevronLeft, ChevronRight } from 'lucide-react';

interface RealPeopleSectionProps {
  onCtaClick: () => void;
}

export const RealPeopleSection: React.FC<RealPeopleSectionProps> = ({ onCtaClick }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselImages = [
    "https://i.imgur.com/Tk0h0UW.png",
    "https://i.imgur.com/ZgKIGca.png",
    "https://i.imgur.com/WPJYR24.png"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [carouselImages.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <section ref={ref} className="relative bg-gradient-to-b from-gray-900 to-black py-12 md:py-20 px-4 overflow-hidden min-h-screen">
      {/* Background effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 20%, rgba(231, 199, 95, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 80%, rgba(42, 230, 125, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 20%, rgba(231, 199, 95, 0.1) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="font-black text-3xl md:text-4xl lg:text-6xl text-white mb-4 md:mb-6 font-['Anton'] leading-tight px-2">
            PESSOAS <span className="text-[#E7C75F]">REAIS</span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto px-4">
            Que saíram do modo "travado" e transformaram suas vidas
          </p>
        </motion.div>

        {/* Image Carousel - Mobile optimized */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-4xl mx-auto mb-8 md:mb-16"
        >
          <div className="relative bg-black/50 backdrop-blur-sm border border-[#E7C75F]/30 rounded-xl overflow-hidden shadow-2xl mx-2">
            <div className="relative h-64 md:h-96 lg:h-[500px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={carouselImages[currentIndex]}
                  alt={`Resultado ${currentIndex + 1}`}
                  className="w-full h-full object-contain bg-black"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  loading="lazy"
                />
              </AnimatePresence>

              {/* Navigation buttons - Mobile optimized */}
              <button
                onClick={prevSlide}
                className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
              >
                <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
              >
                <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
              </button>

              {/* Indicators - Mobile optimized */}
              <div className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 md:space-x-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-[#E7C75F] scale-125' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>

              {/* Badge - Mobile optimized */}
              <div className="absolute top-2 md:top-4 right-2 md:right-4 bg-green-600/90 text-white px-2 md:px-4 py-1 md:py-2 rounded-lg text-xs md:text-sm font-bold">
                💰 RESULTADOS REAIS
              </div>
            </div>
          </div>
        </motion.div>

        {/* Social proof numbers - Mobile optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-[#E7C75F]/10 to-green-500/10 border border-[#E7C75F]/30 rounded-xl p-4 md:p-8 text-center mb-8 md:mb-12 mx-2"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div>
              <div className="text-3xl md:text-4xl font-black text-[#E7C75F] mb-1 md:mb-2 font-['Anton']">2.847+</div>
              <p className="text-white/80 text-sm md:text-base">Pessoas transformadas</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-green-400 mb-1 md:mb-2 font-['Anton']">97%</div>
              <p className="text-white/80 text-sm md:text-base">Taxa de satisfação</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-blue-400 mb-1 md:mb-2 font-['Anton']">7</div>
              <p className="text-white/80 text-sm md:text-base">Dias para ver resultados</p>
            </div>
          </div>
        </motion.div>

        {/* CTA - Mobile optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center px-4"
        >
          <p className="text-white/80 text-base md:text-lg mb-4 md:mb-6">
            Você pode ser o próximo depoimento de sucesso
          </p>
          
          <motion.button
            onClick={onCtaClick}
            className="group relative bg-gradient-to-r from-[#E7C75F] to-[#d4b84a] hover:from-green-600 hover:to-green-700 text-black hover:text-white font-black text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl overflow-hidden w-full max-w-md md:max-w-none md:w-auto mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                '0 0 30px rgba(231, 199, 95, 0.4)',
                '0 0 60px rgba(231, 199, 95, 0.7)',
                '0 0 30px rgba(231, 199, 95, 0.4)'
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
            <span className="relative z-10">QUERO SER O PRÓXIMO SUCESSO</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};