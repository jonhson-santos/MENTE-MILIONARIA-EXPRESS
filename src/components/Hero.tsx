import React from 'react';
import { CheckCircle, Clock, Shield } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#0B0B0B] to-[#1a1a1a] flex flex-col justify-center items-center px-4 py-20 overflow-hidden">
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(231,199,95,0.1)_0%,transparent_70%)]"></div>
      </div>
      
      {/* Hero content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Bust Image Placeholder */}
        <div className="mb-8 relative">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-[#E7C75F] to-[#d4b84a] rounded-full flex items-center justify-center relative overflow-hidden">
            <div className="w-28 h-28 bg-[#0B0B0B] rounded-full flex items-center justify-center">
              <div className="w-24 h-24 bg-gradient-to-br from-[#E7C75F] to-[#d4b84a] rounded-full opacity-80"></div>
            </div>
            <div className="absolute inset-0 bg-gradient-radial from-[#E7C75F]/30 to-transparent animate-pulse"></div>
          </div>
        </div>

        <h1 className="font-black text-4xl md:text-6xl lg:text-7xl text-[#E8E5DF] mb-4 leading-tight font-['Anton']">
          Você não está travado<br />
          <span className="text-[#E7C75F]">por falta de conteúdo.</span>
        </h1>
        
        <h2 className="font-bold text-2xl md:text-4xl text-[#E8E5DF] mb-6 font-['Anton']">
          Está travado por falta de <span className="text-[#E7C75F]">desbloqueio mental.</span>
        </h2>
        
        <p className="text-lg md:text-xl text-[#E8E5DF]/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Em até 7 dias, clareza + foco + execução para sair do ciclo 
          <span className="text-[#E7C75F] font-semibold"> "sei o que fazer, mas não faço".</span>
        </p>

        {/* Bullets */}
        <div className="grid md:grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto">
          <div className="flex items-center space-x-2 text-[#E8E5DF]">
            <CheckCircle className="text-[#2AE67D] w-5 h-5 flex-shrink-0" />
            <span className="text-sm md:text-base">Método direto (sem enrolação, 1h de conteúdo)</span>
          </div>
          <div className="flex items-center space-x-2 text-[#E8E5DF]">
            <CheckCircle className="text-[#2AE67D] w-5 h-5 flex-shrink-0" />
            <span className="text-sm md:text-base">Funciona no celular</span>
          </div>
          <div className="flex items-center space-x-2 text-[#E8E5DF]">
            <CheckCircle className="text-[#2AE67D] w-5 h-5 flex-shrink-0" />
            <span className="text-sm md:text-base">Para quem cansou da motivação vazia</span>
          </div>
        </div>

        {/* Main CTA */}
        <button 
          onClick={onCtaClick}
          className="bg-[#2AE67D] hover:bg-[#25d470] text-[#0B0B0B] font-black text-lg md:text-xl px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mb-6 w-full max-w-lg mx-auto block"
        >
          QUERO DESTRAVAR MINHA MENTE POR R$27
        </button>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <div className="flex items-center space-x-1 text-[#E8E5DF]/80">
            <Clock className="w-4 h-4" />
            <span>Acesso imediato</span>
          </div>
          <div className="flex items-center space-x-1 text-[#E8E5DF]/80">
            <Shield className="w-4 h-4" />
            <span>Garantia 7 dias</span>
          </div>
          <div className="flex items-center space-x-1 text-[#E8E5DF]/80">
            <CheckCircle className="w-4 h-4" />
            <span>Pagamento seguro</span>
          </div>
        </div>
      </div>
    </section>
  );
};