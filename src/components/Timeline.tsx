import React from 'react';

interface TimelineProps {
  onCtaClick: () => void;
}

export const Timeline: React.FC<TimelineProps> = ({ onCtaClick }) => {
  const days = [
    {
      day: "Dia 1–2",
      title: "Quebra de crenças + plano simples de ação"
    },
    {
      day: "Dia 3–4",
      title: "Foco e anti-procrastinação (gatilhos de ambiente)"
    },
    {
      day: "Dia 5",
      title: "Primeira micro-vitória financeira ou de disciplina"
    },
    {
      day: "Dia 6",
      title: "Rotina de manutenção (como não regredir)"
    },
    {
      day: "Dia 7",
      title: "Revisão + \"modo continuidade\""
    }
  ];

  return (
    <section className="bg-[#0B0B0B] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-[#E8E5DF] mb-4 font-['Anton']">
            O que acontece nos <span className="text-[#E7C75F]">próximos 7 dias</span>
          </h2>
        </div>

        <div className="space-y-6 mb-12">
          {days.map((item, index) => (
            <div key={index} className="flex items-start space-x-6 bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] p-6 rounded-xl border border-[#E7C75F]/20">
              <div className="bg-[#E7C75F] text-[#0B0B0B] font-black text-lg px-4 py-2 rounded-lg flex-shrink-0 min-w-[100px] text-center">
                {item.day}
              </div>
              <div className="flex-1">
                <p className="text-[#E8E5DF] text-lg leading-relaxed">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button 
            onClick={onCtaClick}
            className="bg-[#2AE67D] hover:bg-[#25d470] text-[#0B0B0B] font-black text-xl px-12 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Começar meu dia 1 agora
          </button>
        </div>
      </div>
    </section>
  );
};