import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AlertTriangle, X, Clock, TrendingDown, Brain, Target } from 'lucide-react';

interface EnhancedPainSectionProps {
  onCtaClick: () => void;
}

export const EnhancedPainSection: React.FC<EnhancedPainSectionProps> = ({ onCtaClick }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const pains = [
    { 
      icon: TrendingDown, 
      text: "Estagnação profissional há anos", 
      color: "text-red-500",
      description: "Vendo colegas passarem na sua frente"
    },
    { 
      icon: AlertTriangle, 
      text: "Falta de clareza total sobre o futuro", 
      color: "text-orange-500",
      description: "Sem saber que direção tomar"
    },
    { 
      icon: X, 
      text: "Autossabotagem constante", 
      color: "text-red-600",
      description: "Você mesmo destruindo suas chances"
    },
    { 
      icon: Clock, 
      text: "Ciclo infinito de promessas vazias", 
      color: "text-yellow-500",
      description: "\"Segunda-feira eu começo\" há meses"
    }
  ];

  return (
    <section ref={ref} className="relative bg-gradient-to-b from-black to-gray-900 py-20 px-4 overflow-hidden">
      {/* Dramatic background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-orange-900/20"></div>
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 30% 40%, rgba(239, 68, 68, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 70% 60%, rgba(239, 68, 68, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 30% 40%, rgba(239, 68, 68, 0.1) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute inset-0"
        />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="font-black text-4xl md:text-6xl text-white mb-8 font-['Anton']"
            animate={inView ? {
              textShadow: [
                '0 0 20px rgba(239, 68, 68, 0.5)',
                '0 0 40px rgba(239, 68, 68, 0.8)',
                '0 0 20px rgba(239, 68, 68, 0.5)'
              ]
            } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          >
            PARE DE <span className="text-red-500">FINGIR</span>
          </motion.h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Que está tudo bem quando você sabe que está <span className="text-red-500 font-bold">PRESO</span> no mesmo lugar há anos...
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Pain points with enhanced visuals */}
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
                className="group bg-black/60 backdrop-blur-sm border border-red-500/30 rounded-xl p-6 hover:border-red-500/60 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="relative">
                    <pain.icon className={`w-8 h-8 ${pain.color} group-hover:scale-110 transition-transform`} />
                    <motion.div
                      animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.7, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                      className={`absolute inset-0 ${pain.color} opacity-30 rounded-full blur-sm`}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white text-lg font-bold mb-2">{pain.text}</h3>
                    <p className="text-white/60 text-sm">{pain.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced confession section with real person image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Background image */}
            <div className="absolute inset-0 rounded-xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Pessoa reflexiva"
                className="w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
            </div>

            <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm border border-[#E7C75F]/30 rounded-xl p-8">
              <div className="text-white/90 text-lg leading-relaxed space-y-6">
                <motion.p 
                  className="font-semibold text-xl text-[#E7C75F]"
                  animate={inView ? { scale: [1, 1.05, 1] } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  "Eu sei exatamente como você se sente..."
                </motion.p>
                
                <p>
                  Você <span className="text-red-400 font-bold">finge</span> que está tudo bem, mas no fundo sabe que está preso no mesmo ciclo há anos.
                </p>
                
                <p>
                  Te venderam <span className="text-orange-400 font-bold">motivação barata</span>, cursos de 400 horas e teoria sem fim... e você continua no mesmo lugar.
                </p>
                
                <motion.div 
                  className="bg-gradient-to-r from-[#E7C75F]/20 to-red-500/20 border-l-4 border-[#E7C75F] p-4 rounded"
                  animate={inView ? {
                    boxShadow: [
                      '0 0 20px rgba(231, 199, 95, 0.3)',
                      '0 0 40px rgba(231, 199, 95, 0.6)',
                      '0 0 20px rgba(231, 199, 95, 0.3)'
                    ]
                  } : {}}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <p className="font-bold text-[#E7C75F] text-xl">
                    A REAL: Tem gente "menos preparada" que você vivendo livre — só porque quebrou a barreira mental ANTES.
                  </p>
                </motion.div>
              </div>
              
              <motion.button
                onClick={onCtaClick}
                className="mt-8 w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-[#E7C75F] hover:to-[#d4b84a] text-white hover:text-black font-black text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 group overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">CHEGA DE RODAR EM FALSO →</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Statistics section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-500/30 rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl font-black text-white mb-6 font-['Anton']">
            VOCÊ NÃO ESTÁ SOZINHO NESSA DOR
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-black text-red-400 mb-2 font-['Anton']">73%</div>
              <p className="text-white/80">Das pessoas se sentem presas na vida</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-orange-400 mb-2 font-['Anton']">5+</div>
              <p className="text-white/80">Anos na mesma situação em média</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-yellow-400 mb-2 font-['Anton']">89%</div>
              <p className="text-white/80">Nunca tentaram um método real</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};