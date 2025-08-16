import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, Clock, Shield, Zap } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';

interface FinalOfferProps {
  onCtaClick: () => void;
}

export const FinalOffer: React.FC<FinalOfferProps> = ({ onCtaClick }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const includes = [
    "Ebook Mente Desbloqueada (7 capítulos)",
    "Planner de Execução Diária",
    "Bônus: Frases de Reprogramação",
    "Acesso à Área de Membros",
    "Suporte por 30 dias",
    "Garantia incondicional de 7 dias"
  ];

  const orderBumps = [
    {
      title: "Pack de Criativos \"Start\"",
      description: "Templates e designs prontos para acelerar seus resultados",
      price: 9,
      checked: false
    },
    {
      title: "Copy Motivacional & Desbloqueios",
      description: "Textos e frases poderosas para manter o foco",
      price: 9,
      checked: false
    }
  ];

  return (
    <section ref={ref} className="relative bg-gradient-to-b from-black to-gray-900 py-20 px-4">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#E7C75F]/10 via-transparent to-green-500/10"></div>
      
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-black text-4xl md:text-6xl text-white mb-6 font-['Anton']">
            ÚLTIMA <span className="text-red-500">CHANCE</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 mb-8">
            Ou você continua fingindo que um dia vai mudar...
          </p>
          <p className="text-2xl md:text-3xl text-[#E7C75F] font-bold">
            Ou decide AGORA que não vai morrer preso no mesmo lugar
          </p>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <CountdownTimer minutes={10} />
        </motion.div>

        {/* Main offer box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-sm border-2 border-[#E7C75F]/50 rounded-xl p-8 mb-8"
        >
          {/* Price section */}
          <div className="text-center mb-8">
            <div className="flex justify-center items-center space-x-4 mb-4">
              <span className="text-3xl text-white/50 line-through">R$197</span>
              <motion.span
                animate={{ 
                  scale: [1, 1.1, 1],
                  textShadow: [
                    '0 0 20px rgba(231, 199, 95, 0.5)',
                    '0 0 40px rgba(231, 199, 95, 0.8)',
                    '0 0 20px rgba(231, 199, 95, 0.5)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-6xl md:text-8xl font-black text-[#E7C75F] font-['Anton']"
              >
                R$27
              </motion.span>
            </div>
            <p className="text-xl text-green-400 font-semibold mb-2">HOJE APENAS</p>
            <p className="text-white/60 text-sm">
              Preço promocional para os primeiros 100 alunos desta semana
            </p>
          </div>

          {/* What's included */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {includes.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <CheckCircle className="text-green-500 w-6 h-6 flex-shrink-0" />
                <span className="text-white">{item}</span>
              </motion.div>
            ))}
          </div>

          {/* Order bumps */}
          <div className="space-y-4 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Acelere seus resultados:</h3>
            {orderBumps.map((bump, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-black/50 border border-[#E7C75F]/30 rounded-lg p-4"
              >
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="w-5 h-5 text-[#E7C75F] rounded focus:ring-[#E7C75F] mt-1" 
                  />
                  <div className="flex-1">
                    <p className="text-white font-semibold">
                      {bump.title} <span className="text-[#E7C75F]">(+R${bump.price})</span>
                    </p>
                    <p className="text-white/70 text-sm">{bump.description}</p>
                  </div>
                </label>
              </motion.div>
            ))}
          </div>

          {/* Main CTA */}
          <motion.button
            onClick={onCtaClick}
            className="group relative w-full bg-gradient-to-r from-[#E7C75F] to-[#d4b84a] hover:from-green-600 hover:to-green-700 text-black hover:text-white font-black text-xl md:text-2xl px-8 py-6 rounded-lg transition-all duration-500 transform hover:scale-105 shadow-2xl overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
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
            <span className="relative z-10 flex items-center justify-center space-x-3">
              <Zap className="w-8 h-8" />
              <span>QUERO DESTRAVAR MINHA MENTE AGORA</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          </motion.button>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm">
            <div className="flex items-center space-x-2 text-white/60">
              <Clock className="w-4 h-4" />
              <span>Acesso imediato</span>
            </div>
            <div className="flex items-center space-x-2 text-white/60">
              <Shield className="w-4 h-4" />
              <span>Garantia 7 dias</span>
            </div>
            <div className="flex items-center space-x-2 text-white/60">
              <CheckCircle className="w-4 h-4" />
              <span>Pagamento 100% seguro</span>
            </div>
          </div>
        </motion.div>

        {/* Final push */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <p className="text-white/80 text-lg mb-4">
            Mais de <span className="text-[#E7C75F] font-bold">2.800 pessoas</span> já transformaram suas vidas
          </p>
          <p className="text-red-400 font-bold text-xl">
            Não seja mais uma que fica só assistindo...
          </p>
        </motion.div>
      </div>
    </section>
  );
};