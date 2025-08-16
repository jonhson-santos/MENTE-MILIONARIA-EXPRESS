import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B0B0B] border-t border-[#E7C75F]/20 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4">
          <div className="flex justify-center space-x-8 text-[#E8E5DF]/60 text-sm">
            <a href="#" className="hover:text-[#E7C75F] transition-colors">Termos</a>
            <a href="#" className="hover:text-[#E7C75F] transition-colors">Privacidade</a>
            <a href="#" className="hover:text-[#E7C75F] transition-colors">Suporte WhatsApp</a>
            <a href="#" className="hover:text-[#E7C75F] transition-colors">Email</a>
          </div>
          
          <div className="text-[#E8E5DF]/60 text-sm max-w-2xl mx-auto">
            <p className="mb-2">
              Aviso: Conteúdo educacional. Resultados variam conforme esforço e contexto.
            </p>
            <p>
              Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho passado ou potencial de uma estratégia não é, e não deve ser interpretada como uma recomendação ou como garantia de qualquer resultado específico.
            </p>
          </div>

          <div className="pt-8 border-t border-[#E7C75F]/10">
            <p className="text-[#E7C75F] font-bold">
              Mente Desbloqueada © 2025 - Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};