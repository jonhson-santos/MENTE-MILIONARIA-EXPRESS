import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

interface ForWhoSectionProps {
  onCtaClick: () => void;
}

export const ForWhoSection: React.FC<ForWhoSectionProps> = ({ onCtaClick }) => {
  const forYou = [
    "está travado",
    "quer disciplina e clareza",
    "topa 20–30 min/dia"
  ];

  const notForYou = [
    "espera milagre",
    "não aplica nada",
    "busca \"ficar rico do dia para a noite\""
  ];

  return (
    <section className="bg-gradient-to-b from-[#0B0B0B] to-[#1a1a1a] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Para você se */}
          <div className="bg-gradient-to-br from-[#2AE67D]/10 to-[#1a1a1a] p-8 rounded-xl border border-[#2AE67D]/30">
            <h3 className="text-2xl font-black text-[#2AE67D] mb-6 font-['Anton']">
              É para você se:
            </h3>
            <ul className="space-y-4">
              {forYou.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="text-[#2AE67D] w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span className="text-[#E8E5DF] text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Não é para você se */}
          <div className="bg-gradient-to-br from-red-500/10 to-[#1a1a1a] p-8 rounded-xl border border-red-500/30">
            <h3 className="text-2xl font-black text-red-400 mb-6 font-['Anton']">
              Não é para você se:
            </h3>
            <ul className="space-y-4">
              {notForYou.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <XCircle className="text-red-400 w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span className="text-[#E8E5DF] text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center">
          <button 
            onClick={onCtaClick}
            className="bg-[#2AE67D] hover:bg-[#25d470] text-[#0B0B0B] font-black text-xl px-12 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Eu topo aplicar
          </button>
        </div>
      </div>
    </section>
  );
};