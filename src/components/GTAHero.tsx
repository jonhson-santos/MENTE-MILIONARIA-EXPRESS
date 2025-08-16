import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ParticleBackground } from './ParticleBackground';
import { TypingEffect } from './TypingEffect';
import { CountdownTimer } from './CountdownTimer';
import { Zap, TrendingUp, Target } from 'lucide-react';

interface GTAHeroProps {
  onCtaClick: () => void;
}

export const GTAHero: React.FC<GTAHeroProps> = ({ onCtaClick }) => {
  const [showSubheadline, setShowSubheadline] = useState(false);
  const [showCTA, setShowCTA] = useState(false);

  const scrollToVSL = () => {
    const vslSection = document.getElementById('vsl-section');
    if (vslSection) {
      vslSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-black flex flex-col justify-center items-center px-4 py-20 overflow-hidden">
      <ParticleBackground />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60 z-10"></div>
      <div className="absolute inset-0 bg-gradient-radial from-[#E7C75F]/10 via-transparent to-transparent z-10"></div>
      
      {/* Neon grid background */}
      <div className="absolute inset-0 opacity-20 z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(231, 199, 95, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(231, 199, 95, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-20 text-center max-w-6xl mx-auto">
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-8"
        >
          <h1 className="font-black text-4xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight font-['Anton'] tracking-tight">
            <span className="block text-[#E7C75F] drop-shadow-2xl">
              <TypingEffect 
                text="VOCÊ NÃO ESTÁ TRAVADO"
                speed={80}
                onComplete={() => setShowSubheadline(true)}
              />
            </span>
            {showSubheadline && (
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="block text-white mt-6 drop-shadow-2xl"
              >
                POR FALTA DE INTELIGÊNCIA
              </motion.span>
            )}
          </h1>
          
          {showSubheadline && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              onAnimationComplete={() => setShowCTA(true)}
            >
              <h2 className="font-bold text-3xl md:text-5xl lg:text-6xl text-red-500 mb-12 font-['Anton'] drop-shadow-2xl">
                SUA MENTE FOI PROGRAMADA PRA PERDER
              </h2>
            </motion.div>
          )}
        </motion.div>

        {/* Subheadline Promise */}
        {showCTA && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <p className="text-xl md:text-3xl lg:text-4xl text-white/90 mb-12 max-w-5xl mx-auto leading-relaxed font-medium drop-shadow-lg">
              O método mais <span className="text-[#E7C75F] font-black">RÁPIDO</span> para desbloquear sua mente e começar a ganhar dinheiro de verdade em menos de <span className="text-red-500 font-black">30 dias</span>
            </p>

            {/* Benefits bullets */}
            <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center space-x-4 bg-black/60 backdrop-blur-sm border border-[#E7C75F]/40 rounded-xl p-6 hover:border-[#E7C75F]/70 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="relative">
                  <Zap className="text-[#E7C75F] w-10 h-10 flex-shrink-0" />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-[#E7C75F]/30 rounded-full blur-sm"
                  />
                </div>
                <span className="text-white font-bold text-lg">Desbloqueio em 7 dias</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center space-x-4 bg-black/60 backdrop-blur-sm border border-[#E7C75F]/40 rounded-xl p-6 hover:border-[#E7C75F]/70 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="relative">
                  <TrendingUp className="text-[#E7C75F] w-10 h-10 flex-shrink-0" />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    className="absolute inset-0 bg-[#E7C75F]/30 rounded-full blur-sm"
                  />
                </div>
                <span className="text-white font-bold text-lg">Método comprovado</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex items-center space-x-4 bg-black/60 backdrop-blur-sm border border-[#E7C75F]/40 rounded-xl p-6 hover:border-[#E7C75F]/70 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="relative">
                  <Target className="text-[#E7C75F] w-10 h-10 flex-shrink-0" />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    className="absolute inset-0 bg-[#E7C75F]/30 rounded-full blur-sm"
                  />
                </div>
                <span className="text-white font-bold text-lg">Foco total em resultados</span>
              </motion.div>
            </div>

            {/* Main CTA */}
            <motion.button
              onClick={scrollToVSL}
              className="group relative bg-gradient-to-r from-[#E7C75F] to-[#d4b84a] hover:from-black hover:to-gray-900 text-black hover:text-[#E7C75F] font-black text-xl md:text-3xl px-16 py-8 rounded-xl transition-all duration-500 transform hover:scale-105 shadow-2xl border-2 border-transparent hover:border-[#E7C75F] overflow-hidden mb-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  '0 0 20px rgba(231, 199, 95, 0.3)',
                  '0 0 40px rgba(231, 199, 95, 0.6)',
                  '0 0 20px rgba(231, 199, 95, 0.3)'
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
              <span className="relative z-10">VER COMO FUNCIONA</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </motion.button>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-6 text-base text-white/70">
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span>Acesso imediato</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span>Garantia 7 dias</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span>Pagamento 100% seguro</span>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};