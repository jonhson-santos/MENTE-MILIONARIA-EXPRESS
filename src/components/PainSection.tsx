import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AlertTriangle, X, Clock, TrendingDown } from 'lucide-react';

interface PainSectionProps {
  onCtaClick: () => void;
}

export const PainSection: React.FC<PainSectionProps> = ({ onCtaClick }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const pains = [
    { icon: TrendingDown, text: "Estagnação profissional", color: "text-red-500" },
    { icon: AlertTriangle, text: "Falta de clareza total", color: "text-orange-500" },
    { icon: X, text: "Autossabotagem constante", color: "text-red-600" },
    { icon: Clock, text: "Ciclo de promessas vazias", color: "text-yellow-500" }
  ];

  return (
    <section ref={ref} className="relative bg-gradient-to-b from-black to-gray-900 py-20 px-4 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 to-orange-900/10"></div>
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-black text-4xl md:text-6xl text-white mb-8 font-['Anton']">
            PARE DE <span className="text-red-500">FINGIR</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Que está tudo bem quando você sabe que está <span className="text-red-500 font-bold">PRESO</span> no mesmo lugar há anos...
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Pain points */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {pains.map((pain, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="flex items-center space-x-4 bg-black/50 backdrop-blur-sm border border-red-500/30 rounded-lg p-6 hover:border-red-500/60 transition-all duration-300"
              >
                <div className="relative">
                  <pain.icon className={`w-8 h-8 ${pain.color}`} />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    className={`absolute inset-0 ${pain.color} opacity-30 rounded-full blur-sm`}
                  />
                </div>
                <span className="text-white text-lg font-semibold">{pain.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Confession text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-[#E7C75F]/30 rounded-xl p-8"
          >
            <div className="text-white/90 text-lg leading-relaxed space-y-6">
              <p className="font-semibold text-xl text-[#E7C75F]">
                "Eu sei exatamente como você se sente..."
              </p>
              
              <p>
                Você <span className="text-red-400 font-bold">finge</span> que está tudo bem, mas no fundo sabe que está preso no mesmo ciclo há anos.
              </p>
              
              <p>
                Te venderam <span className="text-orange-400 font-bold">motivação barata</span>, cursos de 400 horas e teoria sem fim... e você continua no mesmo lugar.
              </p>
              
              <p className="font-bold text-[#E7C75F] text-xl border-l-4 border-[#E7C75F] pl-4">
                A REAL: Tem gente "menos preparada" que você vivendo livre — só porque quebrou a barreira mental ANTES.
              </p>
            </div>
            
            <motion.button
              onClick={onCtaClick}
              className="mt-8 bg-gradient-to-r from-red-600 to-red-700 hover:from-[#E7C75F] hover:to-[#d4b84a] text-white hover:text-black font-black text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 w-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              CHEGA DE RODAR EM FALSO →
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};