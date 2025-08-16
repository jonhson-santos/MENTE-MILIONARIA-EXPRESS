import React from 'react';

interface FAQProps {
  onCtaClick: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ onCtaClick }) => {
  const faqs = [
    {
      question: "E se não funcionar comigo?",
      answer: "Garantia incondicional de 7 dias. Teste sem risco."
    },
    {
      question: "Não tenho tempo.",
      answer: "20–30 min/dia. Menos que 1 episódio de série."
    },
    {
      question: "R$27? Deve ser fraco.",
      answer: "Preço de alcance. Conteúdo objetivo."
    },
    {
      question: "Já tentei de tudo.",
      answer: "Aqui você para de acumular teoria e executa o essencial."
    }
  ];

  return (
    <section className="bg-[#0B0B0B] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-[#E8E5DF] mb-4 font-['Anton']">
            Principais <span className="text-[#E7C75F]">dúvidas</span>
          </h2>
        </div>

        <div className="space-y-6 mb-12">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] p-6 rounded-xl border border-[#E7C75F]/20">
              <h3 className="text-xl font-bold text-[#E7C75F] mb-3">
                "{faq.question}"
              </h3>
              <p className="text-[#E8E5DF] text-lg">
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
            Quero testar agora
          </button>
        </div>
      </div>
    </section>
  );
};