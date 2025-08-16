import React from 'react';
import { FileText, Calendar, Gift, Zap } from 'lucide-react';

interface ValueStackProps {
  onCtaClick: () => void;
}

export const ValueStack: React.FC<ValueStackProps> = ({ onCtaClick }) => {
  const items = [
    {
      icon: FileText,
      title: "Ebook Mente Milionária Express",
      description: "7 capítulos densos, zero enrolação"
    },
    {
      icon: Calendar,
      title: "Planner diário de execução",
      description: "PDF preenchível + printável"
    },
    {
      icon: Gift,
      title: "Bônus: frases de reprogramação",
      description: "+ área de membros premium"
    },
    {
      icon: Zap,
      title: "Acesso imediato",
      description: "vitalício"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-[#1a1a1a] to-[#0B0B0B] py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-[#E8E5DF] mb-4 font-['Anton']">
            O que você <span className="text-[#E7C75F]">recebe</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {items.map((item, index) => (
            <div key={index} className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] p-8 rounded-xl border border-[#E7C75F]/30 hover:border-[#E7C75F]/60 transition-all duration-300">
              <item.icon className="text-[#E7C75F] w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold text-[#E8E5DF] mb-3 font-['Anton']">
                {item.title}
              </h3>
              <p className="text-[#E8E5DF]/80 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mockup visual placeholder */}
        <div className="bg-gradient-to-r from-[#E7C75F]/20 to-[#2AE67D]/20 p-12 rounded-xl mb-12 text-center border border-[#E7C75F]/30">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#E8E5DF] p-6 rounded-lg shadow-lg">
              <div className="h-32 bg-gradient-to-br from-[#E7C75F] to-[#d4b84a] rounded mb-4"></div>
              <p className="text-[#0B0B0B] font-semibold">Ebook PDF</p>
            </div>
            <div className="bg-[#E8E5DF] p-6 rounded-lg shadow-lg">
              <div className="h-32 bg-gradient-to-br from-[#2AE67D] to-[#25d470] rounded mb-4"></div>
              <p className="text-[#0B0B0B] font-semibold">Planner</p>
            </div>
            <div className="bg-[#E8E5DF] p-6 rounded-lg shadow-lg">
              <div className="h-32 bg-gradient-to-br from-[#E7C75F] to-[#2AE67D] rounded mb-4"></div>
              <p className="text-[#0B0B0B] font-semibold">Bônus</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button 
            onClick={onCtaClick}
            className="bg-[#2AE67D] hover:bg-[#25d470] text-[#0B0B0B] font-black text-xl px-12 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full max-w-lg mx-auto block"
          >
            Quero tudo por R$27
          </button>
        </div>
      </div>
    </section>
  );
};