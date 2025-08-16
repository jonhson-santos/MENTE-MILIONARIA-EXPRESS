import React from 'react';
import { Clock, CheckCircle } from 'lucide-react';

interface OfferProps {
  onCtaClick: () => void;
}

export const Offer: React.FC<OfferProps> = ({ onCtaClick }) => {
  return (
    <section className="bg-gradient-to-b from-[#0B0B0B] to-[#1a1a1a] py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-[#2a2a2a] to-[#1a1a1a] p-12 rounded-xl border-2 border-[#E7C75F]/50 mb-8">
          
          {/* Price Anchoring */}
          <div className="mb-8">
            <div className="flex justify-center items-center space-x-4 mb-4">
              <span className="text-3xl text-[#E8E5DF]/50 line-through">R$97</span>
              <span className="text-6xl font-black text-[#E7C75F] font-['Anton']">R$27</span>
            </div>
            <p className="text-xl text-[#2AE67D] font-semibold">hoje apenas</p>
          </div>

          {/* What's included */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-[#E8E5DF] mb-6">Inclui:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-[#2AE67D] w-6 h-6 flex-shrink-0" />
                <span className="text-[#E8E5DF]">Ebook completo</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-[#2AE67D] w-6 h-6 flex-shrink-0" />
                <span className="text-[#E8E5DF]">Planner de execução</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-[#2AE67D] w-6 h-6 flex-shrink-0" />
                <span className="text-[#E8E5DF]">Bônus exclusivos</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-[#2AE67D] w-6 h-6 flex-shrink-0" />
                <span className="text-[#E8E5DF]">Acesso vitalício</span>
              </div>
            </div>
          </div>

          {/* Urgency */}
          <div className="bg-[#E7C75F]/10 border border-[#E7C75F]/30 p-4 rounded-lg mb-8">
            <div className="flex items-center justify-center space-x-2 text-[#E7C75F]">
              <Clock className="w-5 h-5" />
              <p className="text-sm font-semibold">
                Preço promocional para os primeiros novos alunos desta semana (pode encerrar sem aviso)
              </p>
            </div>
          </div>

          {/* Main CTA */}
          <button 
            onClick={onCtaClick}
            className="bg-[#2AE67D] hover:bg-[#25d470] text-[#0B0B0B] font-black text-2xl px-16 py-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl w-full max-w-2xl mx-auto block mb-8"
          >
            QUERO DESTRAVAR MINHA MENTE POR R$27
          </button>

          {/* Order Bumps */}
          <div className="max-w-lg mx-auto space-y-4 text-left">
            <div className="bg-[#1a1a1a] border border-[#E7C75F]/20 p-4 rounded-lg">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 text-[#2AE67D] rounded focus:ring-[#2AE67D]" />
                <div>
                  <p className="text-[#E8E5DF] font-semibold">Pack de Criativos "Start" (+R$9)</p>
                  <p className="text-[#E8E5DF]/70 text-sm">Templates e designs prontos</p>
                </div>
              </label>
            </div>
            
            <div className="bg-[#1a1a1a] border border-[#E7C75F]/20 p-4 rounded-lg">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 text-[#2AE67D] rounded focus:ring-[#2AE67D]" />
                <div>
                  <p className="text-[#E8E5DF] font-semibold">Copy Motivacional & Desbloqueios (+R$9)</p>
                  <p className="text-[#E8E5DF]/70 text-sm">Textos e frases poderosas</p>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};