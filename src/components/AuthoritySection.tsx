import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AnimatedCounter } from './AnimatedCounter';
import { Users, TrendingUp, Award, Zap } from 'lucide-react';

interface AuthoritySectionProps {
  onCtaClick: () => void;
}

export const AuthoritySection: React.FC<AuthoritySectionProps> = ({ onCtaClick }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const stats = [
    { icon: Users, number: 2847, suffix: '+', label: 'Alunos transformados' },
    { icon: TrendingUp, number: 97, suffix: '%', label: 'Taxa de sucesso' },
    { icon: Award, number: 7, suffix: ' dias', label: 'Para ver resultados' },
    { icon: Zap, number: 30, suffix: ' min', label: 'Por dia de aplicação' }
  ];

  return (
    <section ref={ref} className="relative bg-gradient-to-b from-gray-900 to-black py-20 px-4">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#E7C75F]/10 via-transparent to-[#E7C75F]/10"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-black text-4xl md:text-6xl text-white mb-6 font-['Anton']">
            OS <span className="text-[#E7C75F]">NÚMEROS</span> NÃO MENTEM
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Mais de 2.800 pessoas já quebraram suas barreiras mentais com este método
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border-2 border-[#E7C75F]/30 rounded-xl p-8 hover:border-[#E7C75F]/60 transition-all duration-300 hover:transform hover:scale-105 shadow-xl"
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#E7C75F] to-[#d4b84a] rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-black" />
                </div>
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#E7C75F]/30 rounded-full blur-lg"
                />
              </div>
              
              <div className="text-5xl font-black text-[#E7C75F] mb-4 font-['Anton']">
                <AnimatedCounter 
                  end={stat.number} 
                  suffix={stat.suffix}
                />
              </div>
              
              <p className="text-white font-semibold text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <motion.button
            onClick={onCtaClick}
            className="group relative bg-gradient-to-r from-[#E7C75F] to-[#d4b84a] hover:from-green-600 hover:to-green-700 text-black hover:text-white font-black text-xl px-12 py-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl overflow-hidden"
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
            <span className="relative z-10">QUERO CONHECER O MÉTODO</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};