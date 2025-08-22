import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Target, Zap, TrendingUp, ArrowRight, Lock, Unlock, Lightbulb, DollarSign } from 'lucide-react';

interface EnhancedMechanismSectionProps {
  onCtaClick: () => void;
}

export const EnhancedMechanismSection: React.FC<EnhancedMechanismSectionProps> = ({ onCtaClick }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const beforeAfter = [
    {
      before: "Mente travada por crenças limitantes",
      after: "Mente livre para criar e executar",
      icon: Lock,
      unlockIcon: Unlock
    },
    {
      before: "Procrastinação e autossabotagem",
      after: "Ação imediata e consistente",
      icon: Target,
      unlockIcon: Zap
    },
    {
      before: "Confusão e falta de direção",
      after: "Clareza total nos objetivos",
      icon: Brain,
      unlockIcon: Lightbulb
    }
  ];

  const steps = [
    {
      icon: DollarSign,
      title: "SUA GRANA",
      subtitle: "Desbloqueie seu potencial financeiro",
      description: "Veja como quebrar as barreiras mentais que impedem você de ganhar mais dinheiro",
      video: "https://i.imgur.com/ZyurRR1.mp4"
    },
    {
      icon: Unlock,
      title: "SUA LIBERDADE",
      subtitle: "Liberte-se das limitações",
      description: "Conquiste a liberdade mental e emocional para viver a vida que você sempre quis",
      video: "https://i.imgur.com/6ifnXSF.mp4"
    },
    {
      icon: TrendingUp,
      title: "SEU SUCESSO",
      subtitle: "Alcance seus objetivos",
      description: "Transforme sua mentalidade e execute com foco total para conquistar o sucesso que merece",
      video: "https://i.imgur.com/oC9cq5h.mp4"
    }
  ];

  return (
    <section ref={ref} className="relative bg-gradient-to-b from-black to-gray-900 py-12 md:py-20 px-4 overflow-hidden min-h-screen">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#E7C75F]/5 via-transparent to-blue-500/5"></div>
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 25% 25%, rgba(231, 199, 95, 0.1) 0%, transparent 70%)',
              'radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
              'radial-gradient(circle at 25% 25%, rgba(231, 199, 95, 0.1) 0%, transparent 70%)'
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
          <h2 className="font-black text-3xl md:text-4xl lg:text-6xl text-white mb-4 md:mb-6 font-['Anton'] leading-tight">
            O <span className="text-[#E7C75F]">DESBLOQUEIO</span> MENTAL
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed px-4">
            O mecanismo científico por trás da transformação que vai <span className="text-[#E7C75F] font-bold">LIBERAR</span> todo seu potencial
          </p>
        </motion.div>

        {/* Enhanced Before vs After with mobile optimization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 md:mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-black text-center text-white mb-6 md:mb-12 font-['Anton'] px-4">
            A TRANSFORMAÇÃO ACONTECE ASSIM:
          </h3>
          
          <div className="space-y-4 md:space-y-8">
            {beforeAfter.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                className="bg-gradient-to-r from-black/80 to-gray-900/80 backdrop-blur-sm border border-[#E7C75F]/30 rounded-xl p-4 md:p-8 hover:border-[#E7C75F]/60 transition-all duration-300 mx-2"
              >
                {/* Mobile layout - stacked */}
                <div className="flex flex-col md:hidden space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="relative flex-shrink-0">
                      <item.icon className="w-6 h-6 text-red-500" />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                        className="absolute inset-0 bg-red-500/30 rounded-full blur-sm"
                      />
                    </div>
                    <span className="text-white/80 text-sm">{item.before}</span>
                  </div>
                  
                  <div className="flex justify-center">
                    <motion.div
                      animate={{ y: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="rotate-90"
                    >
                      <ArrowRight className="w-6 h-6 text-[#E7C75F]" />
                    </motion.div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="relative flex-shrink-0">
                      <item.unlockIcon className="w-6 h-6 text-green-500" />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 + 1 }}
                        className="absolute inset-0 bg-green-500/30 rounded-full blur-sm"
                      />
                    </div>
                    <span className="text-white font-semibold text-sm">{item.after}</span>
                  </div>
                </div>

                {/* Desktop layout - horizontal */}
                <div className="hidden md:flex items-center justify-between">
                  <div className="flex items-center space-x-4 flex-1">
                    <div className="relative">
                      <item.icon className="w-8 h-8 text-red-500" />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                        className="absolute inset-0 bg-red-500/30 rounded-full blur-sm"
                      />
                    </div>
                    <span className="text-white/80">{item.before}</span>
                  </div>
                  
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="mx-8"
                  >
                    <ArrowRight className="w-8 h-8 text-[#E7C75F]" />
                  </motion.div>
                  
                  <div className="flex items-center space-x-4 flex-1">
                    <div className="relative">
                      <item.unlockIcon className="w-8 h-8 text-green-500" />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 + 1 }}
                        className="absolute inset-0 bg-green-500/30 rounded-full blur-sm"
                      />
                    </div>
                    <span className="text-white font-semibold">{item.after}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Process Steps with mobile optimization */}
        <div className="relative mb-8 md:mb-16">
          {/* Connection lines - only on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#E7C75F] via-blue-500 to-green-500 transform -translate-y-1/2 z-0 rounded-full">
            <motion.div
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="h-full w-20 bg-white/50 rounded-full blur-sm"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                className="text-center group"
              >
                <div className="bg-black/80 backdrop-blur-sm border border-[#E7C75F]/30 rounded-xl overflow-hidden hover:border-[#E7C75F]/60 transition-all duration-300 mb-4 group-hover:transform group-hover:scale-105">
                  {/* Video */}
                  <div className="relative h-32 md:h-48 overflow-hidden">
                    <video
                      src={step.video}
                      alt={step.title}
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                    
                    {/* Icon overlay */}
                    <div className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#E7C75F] to-[#d4b84a] rounded-full flex items-center justify-center">
                        <step.icon className="w-6 h-6 md:w-8 md:h-8 text-black" />
                      </div>
                      <motion.div
                        animate={{ 
                          scale: [1, 1.3, 1],
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
                  </div>
                  
                  <div className="p-4 md:p-6">
                    <h3 className="text-xl md:text-2xl font-black text-[#E7C75F] mb-2 font-['Anton']">
                      {step.title}
                    </h3>
                    
                    <p className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">
                      {step.subtitle}
                    </p>
                    
                    <p className="text-sm md:text-base text-white/80 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Step number */}
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#E7C75F] to-[#d4b84a] rounded-full flex items-center justify-center mx-auto border-2 md:border-4 border-white/20"
                >
                  <span className="text-black font-black text-lg md:text-xl">{index + 1}</span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scientific backing - mobile optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-xl p-4 md:p-8 mb-8 md:mb-12 mx-2"
        >
          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-black text-white mb-3 md:mb-4 font-['Anton']">
              BASE CIENTÍFICA COMPROVADA
            </h3>
            <p className="text-sm md:text-base text-white/80 mb-4 md:mb-6 max-w-3xl mx-auto leading-relaxed">
              Nosso método combina neuroplasticidade, psicologia cognitiva e técnicas de reprogramação mental validadas por mais de 2.800 casos de sucesso.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-black text-blue-400 mb-1 md:mb-2 font-['Anton']">21</div>
                <p className="text-xs md:text-sm text-white/80">Dias para formar novos hábitos</p>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-black text-purple-400 mb-1 md:mb-2 font-['Anton']">7</div>
                <p className="text-xs md:text-sm text-white/80">Dias para ver mudanças mentais</p>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-black text-green-400 mb-1 md:mb-2 font-['Anton']">97%</div>
                <p className="text-xs md:text-sm text-white/80">Eficácia comprovada</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced CTA - mobile optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center px-4"
        >
          <p className="text-xs md:text-sm text-white/60 mb-6 md:mb-8 italic max-w-2xl mx-auto">
            Nota: Este é um método científico de reprogramação mental. Resultados dependem da aplicação consistente.
          </p>
          
          <motion.button
            onClick={onCtaClick}
            className="group relative bg-gradient-to-r from-[#E7C75F] to-[#d4b84a] hover:from-black hover:to-gray-900 text-black hover:text-[#E7C75F] font-black text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 rounded-lg transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-[#E7C75F] flex items-center justify-center space-x-2 md:space-x-3 mx-auto overflow-hidden w-full max-w-md md:max-w-none md:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                '0 0 20px rgba(231, 199, 95, 0.4)',
                '0 0 40px rgba(231, 199, 95, 0.7)',
                '0 0 20px rgba(231, 199, 95, 0.4)'
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
            <span className="relative z-10 text-center">QUERO DESTRAVAR MINHA MENTE</span>
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform relative z-10 flex-shrink-0" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};