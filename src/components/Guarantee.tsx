import React from 'react';
import { Shield, CheckCircle } from 'lucide-react';

interface GuaranteeProps {
  onCtaClick: () => void;
}

export const Guarantee: React.FC<GuaranteeProps> = ({ onCtaClick }) => {
  return (
    <section className="bg-gradient-to-b from-[#1a1a1a] to-[#0B0B0B] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-[#2AE67D]/20 to-[#E7C75F]/20 p-12 rounded-xl border-2 border-[#2AE67D]/50">
          <div className="text-center">
            <Shield className="w-20 h-20 text-[#2AE67D] mx-auto mb-6" />
            
            <h2 className="text-4xl md:text-5xl font-black text-[#E8E5DF] mb-4 font-['Anton']">
              Teste por <span className="text-[#2AE67D]">7 dias</span>
            </h2>
            
            <p className="text-2xl text-[#E8E5DF] mb-6">
              Se não sentir avanço, <span className="text-[#E7C75F] font-bold">devolvemos.</span>
            </p>
            
            <p className="text-lg text-[#E8E5DF]/80 mb-8">
              Sem perguntas, sem burocracia. Você no controle.
            </p>

            <div className="flex justify-center items-center space-x-4 mb-10">
              <div className="bg-[#2AE67D] text-[#0B0B0B] px-6 py-2 rounded-full font-bold">
                Garantia total
              </div>
              <div className="bg-[#E7C75F] text-[#0B0B0B] px-6 py-2 rounded-full font-bold">
                Compra segura
              </div>
            </div>

            <button 
              onClick={onCtaClick}
              className="bg-[#2AE67D] hover:bg-[#25d470] text-[#0B0B0B] font-black text-xl px-12 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Começar sem risco
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};