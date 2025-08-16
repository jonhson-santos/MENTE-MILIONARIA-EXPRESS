import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Target, Zap, TrendingUp, ArrowRight } from 'lucide-react';

interface MechanismSectionProps {
  onCtaClick: () => void;
}

export const MechanismSection: React.FC<MechanismSectionProps> = ({ onCtaClick }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const steps = [
    {
      icon: Brain,
      title: "IDENTIFICAÇÃO",
      subtitle: "Mapeamos seus bloqueios",
      description: "Descobrimos exatamente o que está travando sua mente e impedindo seus resultados"
    },
    {
      icon: Target,
      title: "REPROGRAMAÇÃO",
      subtitle: "Quebramos as barreiras",
      description: "Técnicas específicas para eliminar crenças limitantes e instalar novos padrões mentais"
    },
    {
      icon: Zap,
      title: "ATIVAÇÃO",
      subtitle: "Liberamos seu potencial",
      description: "Você executa com clareza total e foco laser nos resultados que realmente importam"
    }
  ];

  return (
    <section ref={ref} className="relative bg-gradient-to-b from-black to-gray-900 py-20 px-4 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#E7C75F]/5 via-transparent to-blue-500/5"></div>
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-black text-4xl md:text-6xl text-white mb-6 font-['Anton']">
            O <span className="text-[#E7C75F]">DESBLOQUEIO</span> MENTAL
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            O mecanismo científico por trás da transformação que vai <span className="text-[#E7C75F] font-bold">LIBERAR</span> todo seu potencial
          </p>
        </motion.div>

        {/* Before vs After Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {/* Before */}
          <div className="bg-gradient-to-br from-red-900/30 to-black/80 backdrop-blur-sm border border-red-500/30 rounded-xl p-8">
            <h3 className="text-2xl font-black text-red-400 mb-6 font-['Anton']">ANTES (MENTE TRAVADA)</h3>
            <ul className="space-y-4 text-white/80">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span>Procrastinação constante</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span>Falta de clareza nos objetivos</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span>Autossabotagem inconsciente</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span>Ciclo de tentativas frustradas</span>
              </li>
            </ul>
          </div>

          {/* After */}
          <div className="bg-gradient-to-br from-green-900/30 to-black/80 backdrop-blur-sm border border-green-500/30 rounded-xl p-8">
            <h3 className="text-2xl font-black text-green-400 mb-6 font-['Anton']">DEPOIS (MENTE DESBLOQUEADA)</h3>
            <ul className="space-y-4 text-white/80">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Execução imediata e consistente</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Foco laser nos resultados</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Confiança inabalável</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Crescimento acelerado</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection lines */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#E7C75F] via-blue-500 to-green-500 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                className="text-center"
              >
                <div className="bg-black/80 backdrop-blur-sm border border-[#E7C75F]/30 rounded-xl p-8 hover:border-[#E7C75F]/60 transition-all duration-300 mb-4">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#E7C75F] to-[#d4b84a] rounded-full flex items-center justify-center mx-auto">
                      <step.icon className="w-10 h-10 text-black" />
                    </div>
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        delay: index * 0.5 
                      }}
                      className="absolute inset-0 bg-[#E7C75F]/30 rounded-full blur-xl"
                    />
                  </div>
                  
                  <h3 className="text-2xl font-black text-[#E7C75F] mb-2 font-['Anton']">
                    {step.title}
                  </h3>
                  
                  <p className="text-lg font-semibold text-white mb-4">
                    {step.subtitle}
                  </p>
                  
                  <p className="text-white/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Step number */}
                <div className="w-12 h-12 bg-gradient-to-br from-[#E7C75F] to-[#d4b84a] rounded-full flex items-center justify-center mx-auto">
                  <span className="text-black font-black text-xl">{index + 1}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-white/60 text-sm mb-8 italic max-w-2xl mx-auto">
            Nota: Este é um método científico de reprogramação mental. Resultados dependem da aplicação consistente.
          </p>
          
          <motion.button
            onClick={onCtaClick}
            className="group bg-gradient-to-r from-[#E7C75F] to-[#d4b84a] hover:from-black hover:to-gray-900 text-black hover:text-[#E7C75F] font-black text-xl px-12 py-6 rounded-lg transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-[#E7C75F] flex items-center space-x-3 mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>QUERO DESTRAVAR MINHA MENTE</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};