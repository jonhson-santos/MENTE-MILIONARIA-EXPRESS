import React from 'react';

interface PainIdentificationProps {
  onCtaClick: () => void;
}

export const PainIdentification: React.FC<PainIdentificationProps> = ({ onCtaClick }) => {
  return (
    <section className="bg-[#0B0B0B] py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] p-8 md:p-12 rounded-xl border border-[#E7C75F]/20">
          <div className="text-[#E8E5DF] text-lg md:text-xl leading-relaxed space-y-6">
            <p className="font-medium">
              <span className="text-[#E7C75F] font-bold">Você já sentiu vergonha de onde está?</span> Finge que está tudo bem, mas sabe que está travado.
            </p>
            
            <p>
              Te venderam motivação, cursos de 400 horas e teoria sem fim… e você continua no mesmo lugar.
            </p>
            
            <p className="font-semibold text-[#E7C75F]">
              A real: não é inteligência, é desbloqueio. Tem gente "menos preparada" vivendo livre — só porque quebrou a barreira mental antes.
            </p>
          </div>
          
          <div className="mt-8">
            <button 
              onClick={onCtaClick}
              className="text-[#2AE67D] hover:text-[#E7C75F] underline text-lg transition-colors duration-300"
            >
              Chega de rodar em falso → Começar agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};