import React from 'react';
import { Target, Brain, Zap } from 'lucide-react';

interface MechanismProps {
  onCtaClick: () => void;
}

export const Mechanism: React.FC<MechanismProps> = ({ onCtaClick }) => {
  const pillars = [
    {
      icon: Target,
      title: "Clareza brutal",
      description: "corta ruído, define 1 objetivo e 3 ações."
    },
    {
      icon: Brain,
      title: "Reprogramação prática",
      description: "frases guiadas + gatilhos de foco (7 dias)."
    },
    {
      icon: Zap,
      title: "Execução mínima viável",
      description: "rotina de 20–30 min/dia para sair da inércia."
    }
  ];

  return (
    <section className="bg-gradient-to-b from-[#0B0B0B] to-[#1a1a1a] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-[#E8E5DF] mb-4 font-['Anton']">
            O Código de <span className="text-[#E7C75F]">Desbloqueio</span>
          </h2>
          <p className="text-xl text-[#E8E5DF]/80">(o mecanismo por trás do método)</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pillars.map((pillar, index) => (
            <div key={index} className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-8 rounded-xl border border-[#E7C75F]/20 hover:border-[#E7C75F]/40 transition-all duration-300">
              <pillar.icon className="text-[#E7C75F] w-12 h-12 mb-6 mx-auto" />
              <h3 className="text-2xl font-bold text-[#E8E5DF] mb-4 text-center font-['Anton']">
                {pillar.title}
              </h3>
              <p className="text-[#E8E5DF]/80 text-center leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-[#E8E5DF]/60 text-sm mb-8 italic">
            Nota: Resultados variam. Este é um método de mentalidade + execução.
          </p>
          
          <button 
            onClick={onCtaClick}
            className="bg-[#2AE67D] hover:bg-[#25d470] text-[#0B0B0B] font-black text-xl px-12 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Quero destravar
          </button>
        </div>
      </div>
    </section>
  );
};