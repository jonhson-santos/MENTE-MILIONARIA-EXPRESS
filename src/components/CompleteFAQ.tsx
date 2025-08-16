import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Shield, Clock, CheckCircle, HelpCircle } from 'lucide-react';

interface CompleteFAQProps {
  onCtaClick: () => void;
}

export const CompleteFAQ: React.FC<CompleteFAQProps> = ({ onCtaClick }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      icon: HelpCircle,
      question: "E se não funcionar comigo?",
      answer: "Garantia incondicional de 7 dias. Se você não sentir nenhum avanço ou mudança na sua mentalidade, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia. Você fica no controle total.",
      color: "text-green-500"
    },
    {
      icon: Clock,
      question: "Não tenho tempo para mais um curso...",
      answer: "Este NÃO é um curso! São apenas 20-30 minutos por dia durante 7 dias. Menos tempo que você gasta vendo um episódio de série. O método é direto, sem enrolação, focado apenas no essencial para destravar sua mente.",
      color: "text-blue-500"
    },
    {
      icon: Shield,
      question: "R$27? Deve ser conteúdo fraco...",
      answer: "Preço baixo = alcance máximo. Queremos que o máximo de pessoas tenham acesso. O conteúdo é denso, testado e aprovado por mais de 2.800 alunos. Não julgue pela embalagem, julgue pelos resultados.",
      color: "text-purple-500"
    },
    {
      icon: CheckCircle,
      question: "Já tentei de tudo e nada funciona...",
      answer: "Exato! Você tentou motivação, cursos longos, teorias complexas... Aqui é diferente. Você para de acumular informação e começa a EXECUTAR o essencial. É ação, não mais teoria.",
      color: "text-orange-500"
    },
    {
      icon: HelpCircle,
      question: "Como sei que vou receber o material?",
      answer: "Acesso 100% automático. Assim que o pagamento for aprovado, você recebe por email o link para a área de membros com todo o conteúdo. Funciona 24h por dia, 7 dias por semana.",
      color: "text-cyan-500"
    },
    {
      icon: Clock,
      question: "Preciso de computador ou celular serve?",
      answer: "Celular serve perfeitamente! Todo o material foi pensado para ser consumido no seu smartphone. Você pode estudar no ônibus, no intervalo do trabalho, em qualquer lugar.",
      color: "text-pink-500"
    },
    {
      icon: Shield,
      question: "E se eu não souber por onde começar?",
      answer: "Tudo é passo a passo! Você recebe um planner de execução que te guia dia por dia. Não tem como se perder. É só seguir a sequência que já está pronta.",
      color: "text-red-500"
    },
    {
      icon: CheckCircle,
      question: "Isso funciona para qualquer idade?",
      answer: "Sim! Temos alunos de 18 a 65 anos. O método funciona para qualquer pessoa que esteja disposta a dedicar 20-30 minutos por dia para mudar sua mentalidade.",
      color: "text-yellow-500"
    },
    {
      icon: HelpCircle,
      question: "Vou ter suporte se tiver dúvidas?",
      answer: "Sim! Você tem 30 dias de suporte direto comigo via WhatsApp. Qualquer dúvida sobre o método, é só chamar. Estou aqui para garantir seu sucesso.",
      color: "text-indigo-500"
    },
    {
      icon: Clock,
      question: "Por que só R$27? Qual é a pegadinha?",
      answer: "Não tem pegadinha. É estratégia de alcance. Prefiro vender para 1000 pessoas a R$27 do que para 10 pessoas a R$270. Mais pessoas transformadas = mais depoimentos = mais credibilidade.",
      color: "text-teal-500"
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-black to-gray-900 py-20 px-4 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 25% 25%, rgba(231, 199, 95, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 75% 75%, rgba(231, 199, 95, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 25% 25%, rgba(231, 199, 95, 0.1) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute inset-0"
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-black text-4xl md:text-6xl text-white mb-6 font-['Anton']">
            DÚVIDAS <span className="text-[#E7C75F]">FREQUENTES</span>
          </h2>
          <p className="text-xl text-white/80">
            As perguntas que todo mundo faz antes de destravar a mente
          </p>
        </motion.div>

        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-black/80 to-gray-900/80 backdrop-blur-sm border border-[#E7C75F]/20 rounded-xl overflow-hidden hover:border-[#E7C75F]/40 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <faq.icon className={`w-6 h-6 ${faq.color}`} />
                  <h3 className="text-lg font-bold text-white">
                    {faq.question}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-[#E7C75F]" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="border-l-4 border-[#E7C75F] pl-4">
                        <p className="text-white/90 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still have doubts section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#E7C75F]/10 to-green-500/10 border border-[#E7C75F]/30 rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl font-black text-white mb-4 font-['Anton']">
            Ainda tem dúvidas?
          </h3>
          <p className="text-white/80 mb-6">
            Lembre-se: você tem 7 dias de garantia total. Teste sem risco!
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <motion.button
              onClick={onCtaClick}
              className="bg-gradient-to-r from-[#E7C75F] to-[#d4b84a] hover:from-green-600 hover:to-green-700 text-black hover:text-white font-black text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              QUERO TESTAR POR 7 DIAS
            </motion.button>
            
            <a
              href="https://www.instagram.com/mente.expressofc/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>📱</span>
              <span>SEGUIR NO INSTAGRAM</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};