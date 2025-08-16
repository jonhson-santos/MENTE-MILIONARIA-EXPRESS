import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface TestimonialsCarouselProps {
  onCtaClick: () => void;
}

export const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({ onCtaClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Carlos M.",
      age: 28,
      location: "São Paulo",
      text: "Em 5 dias já estava executando planos que ficaram meses parados. Minha mente desbloqueou de verdade.",
      result: "Primeiro mês: R$ 3.200 extras",
      avatar: "C",
      salesImage: "https://i.imgur.com/Uz9nFIl.png"
    },
    {
      name: "Marina S.",
      age: 31,
      location: "Rio de Janeiro",
      text: "Parei de me autossabotar. Finalmente consegui focar no que realmente importa e os resultados apareceram.",
      result: "Dobrou a produtividade",
      avatar: "M",
      salesImage: "https://i.imgur.com/BjchGoh.png"
    },
    {
      name: "Rafael L.",
      age: 25,
      location: "Belo Horizonte",
      text: "O método é direto e funciona. Sem enrolação, só técnicas que realmente transformam sua mentalidade.",
      result: "Mudança em 7 dias",
      avatar: "R",
      salesImage: "https://i.imgur.com/tcdr2OR.png"
    },
    {
      name: "Ana P.",
      age: 29,
      location: "Brasília",
      text: "Estava travada há anos. Este método me deu a clareza que eu precisava para sair da zona de conforto.",
      result: "Nova carreira em 30 dias",
      avatar: "A",
      salesImage: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="relative bg-gradient-to-b from-gray-900 to-black py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-black text-4xl md:text-6xl text-white mb-6 font-['Anton']">
            PESSOAS <span className="text-[#E7C75F]">REAIS</span>
          </h2>
          <p className="text-xl text-white/80">
            Que saíram do modo "travado" e transformaram suas vidas
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative h-96 mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <div className="bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur-sm border border-[#E7C75F]/30 rounded-xl p-8 h-full flex flex-col justify-between">
                {/* Sales image */}
                <div className="relative mb-6 rounded-lg overflow-hidden">
                  <img
                    src={testimonials[currentIndex].salesImage}
                    alt="Resultado de vendas"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-green-600/90 text-white px-3 py-1 rounded-lg text-sm font-bold">
                    💰 RESULTADO REAL
                  </div>
                </div>
                
                <div>
                  <Quote className="text-[#E7C75F] w-12 h-12 mb-6" />
                  
                  <p className="text-white text-lg md:text-xl leading-relaxed mb-6 italic">
                    "{testimonials[currentIndex].text}"
                  </p>
                  
                  <div className="bg-green-600/20 border border-green-500/50 rounded-lg p-4 mb-6">
                    <p className="text-green-400 font-bold text-center">
                      ✓ {testimonials[currentIndex].result}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#E7C75F] to-[#d4b84a] rounded-full flex items-center justify-center">
                      <span className="text-black font-black text-xl">
                        {testimonials[currentIndex].avatar}
                      </span>
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg">
                        {testimonials[currentIndex].name}
                      </p>
                      <p className="text-white/60">
                        {testimonials[currentIndex].age} anos • {testimonials[currentIndex].location}
                      </p>
                    </div>
                  </div>

                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#E7C75F] fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="flex justify-center space-x-2 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-[#E7C75F] scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Disclaimer and CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-white/60 text-sm mb-8 italic">
            Aviso: Resultados variam conforme aplicação e dedicação individual.
          </p>
          
          <motion.button
            onClick={onCtaClick}
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-[#E7C75F] hover:to-[#d4b84a] text-white hover:text-black font-black text-lg px-10 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            QUERO TENTAR POR 7 DIAS
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};