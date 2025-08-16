import React, { useState, useEffect } from 'react';

interface StickyButtonProps {
  onCtaClick: () => void;
}

export const StickyButton: React.FC<StickyButtonProps> = ({ onCtaClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > window.innerHeight * 0.3) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {/* Mobile sticky bottom */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B] to-transparent">
        <button 
          onClick={onCtaClick}
          className="bg-[#2AE67D] hover:bg-[#25d470] text-[#0B0B0B] font-black text-lg px-6 py-4 rounded-lg transition-all duration-300 w-full shadow-xl"
        >
          QUERO DESTRAVAR POR R$27
        </button>
      </div>

      {/* Desktop sticky top (after scroll) */}
      <div className={`hidden md:block fixed top-0 left-0 right-0 z-50 bg-[#0B0B0B]/95 backdrop-blur-sm border-b border-[#E7C75F]/20 transition-all duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-[#E8E5DF] font-bold">
            Mente Desbloqueada - <span className="text-[#E7C75F]">R$27</span>
          </div>
          <button 
            onClick={onCtaClick}
            className="bg-[#2AE67D] hover:bg-[#25d470] text-[#0B0B0B] font-black text-lg px-8 py-2 rounded-lg transition-all duration-300"
          >
            QUERO DESTRAVAR
          </button>
        </div>
      </div>
    </>
  );
};