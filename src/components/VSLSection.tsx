import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';

interface VSLSectionProps {
  onCtaClick: () => void;
}

export const VSLSection: React.FC<VSLSectionProps> = ({ onCtaClick }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showCTA, setShowCTA] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCTA(true);
    }, 90000); // 1 minuto e 30 segundos (90000ms)

    return () => clearTimeout(timer);
  }, []);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      const progress = (video.currentTime / video.duration) * 100;
      setProgress(progress);
    };

    video.addEventListener('timeupdate', updateProgress);
    return () => video.removeEventListener('timeupdate', updateProgress);
  }, []);

  return (
    <section id="vsl-section" className="relative bg-gradient-to-b from-black via-gray-900 to-black py-20 px-4 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#E7C75F]/5 via-transparent to-red-500/5"></div>
        <motion.div
          animate={{
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-r from-[#E7C75F]/10 via-transparent to-red-500/10"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-black text-4xl md:text-6xl text-white mb-6 font-['Anton']">
            <span className="text-red-500">ATENÇÃO:</span> ASSISTA ISSO
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Como pessoas comuns estão <span className="text-[#E7C75F] font-bold">desbloqueando suas mentes</span> e transformando suas vidas em apenas 7 dias
          </p>
        </motion.div>

        {/* VSL Player */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto mb-12"
        >
          <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl border-2 border-[#E7C75F]/50 hover:border-[#E7C75F]/80 transition-all duration-300">
            {/* Video placeholder with thumbnail */}
            <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
              <iframe 
                src="https://fast.wistia.net/embed/iframe/pdl1zzcr2j"
                title="Vídeo Mente Desbloqueada"
                allow="autoplay; fullscreen"
                allowFullScreen
                className="w-full h-full"
              ></iframe>

              {/* Video duration */}
              <div className="absolute bottom-4 right-4 bg-red-600/90 text-white px-3 py-2 rounded-lg text-sm font-bold">
                🔥 URGENTE: 03:47
              </div>
            </div>

          </div>

          {/* Floating elements */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
          >
            ✓ MÉTODO COMPROVADO
          </motion.div>
          
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
            className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
          >
            🔥 RESULTADOS REAIS
          </motion.div>
        </motion.div>

        {/* CTA after video */}
        {showCTA && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="text-white/80 text-lg mb-6">
              Viu como é simples? <span className="text-[#E7C75F] font-bold">Agora é sua vez de destravar!</span>
            </p>
            
            <motion.button
              onClick={onCtaClick}
              className="group relative bg-gradient-to-r from-[#E7C75F] to-[#d4b84a] hover:from-green-600 hover:to-green-700 text-black hover:text-white font-black text-xl px-12 py-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  '0 0 30px rgba(231, 199, 95, 0.5)',
                  '0 0 60px rgba(231, 199, 95, 0.8)',
                  '0 0 30px rgba(231, 199, 95, 0.5)'
                ]
              }}
              transition={{
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <span className="relative z-10">QUERO COMEÇAR AGORA</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};