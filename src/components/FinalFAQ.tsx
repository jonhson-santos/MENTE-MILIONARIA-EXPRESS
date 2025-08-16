import React from 'react';

interface FinalFAQProps {
  onCtaClick: () => void;
}

export const FinalFAQ: React.FC<FinalFAQProps> = ({ onCtaClick }) => {
  const faqs = [
    {
      question: "Quanto tempo para acessar?",
      answer: "Imediato por e-mail."
    },
    {
      question: "Precisa de PC?",
      answer: "Não. Tudo pelo celular."
    },
    {
      question: "Posso pedir reembolso?",
      answer: "Sim, 7 dias direto na plataforma."
    },
    {
      question: "Por onde começo?",
      answer: "Dia 1 do método + Planner."
    }
  ];

  return (
    <section className="bg-[#0B0B0B] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-[#E8E5DF] mb-4 font-['Anton']">
            FAQ
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] p-6 rounded-xl border border-[#E7C75F]/20">
              <h3 className="text-lg font-bold text-[#E7C75F] mb-2">
                {faq.question}
              </h3>
              <p className="text-[#E8E5DF]">
                → {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button 
            onClick={onCtaClick}
            className="bg-[#2AE67D] hover:bg-[#25d470] text-[#0B0B0B] font-black text-xl px-12 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Começar meu Dia 1 agora
          </button>
        </div>
      </div>
    </section>
  );
};