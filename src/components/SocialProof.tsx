import React from 'react';
import { Star } from 'lucide-react';

interface SocialProofProps {
  onCtaClick: () => void;
}

export const SocialProof: React.FC<SocialProofProps> = ({ onCtaClick }) => {
  const testimonials = [
    {
      name: "Larissa, 23",
      text: "Parar de me sabotar em 3 dias já pagou a compra.",
      avatar: "L"
    },
    {
      name: "Miguel, 29",
      text: "Finalmente consegui focar no que importa. Mudou minha rotina.",
      avatar: "M"
    },
    {
      name: "Ana, 34",
      text: "Método direto que funciona. Sem enrolação, só resultado.",
      avatar: "A"
    },
    {
      name: "Carlos, 27",
      text: "Em uma semana já estava executando planos que ficaram meses parados.",
      avatar: "C"
    }
  ];

  return (
    <section className="bg-[#0B0B0B] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-[#E8E5DF] mb-4 font-['Anton']">
            Gente comum que saiu do <span className="text-[#E7C75F]">modo "travado"</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-6 rounded-xl border border-[#E7C75F]/20">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#E7C75F] rounded-full flex items-center justify-center text-[#0B0B0B] font-black text-lg mr-3">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-[#E8E5DF] font-semibold">{testimonial.name}</p>
                  <div className="flex text-[#E7C75F] text-xs">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-[#E8E5DF]/90 text-sm leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-[#E8E5DF]/60 text-sm mb-8 italic">
            Aviso: Resultados variam conforme aplicação.
          </p>
          
          <button 
            onClick={onCtaClick}
            className="bg-[#2AE67D] hover:bg-[#25d470] text-[#0B0B0B] font-black text-lg px-10 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Quero tentar por 7 dias
          </button>
        </div>
      </div>
    </section>
  );
};