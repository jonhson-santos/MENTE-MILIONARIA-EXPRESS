import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  minutes?: number;
  onExpire?: () => void;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({
  minutes = 15,
  onExpire
}) => {
  const [timeLeft, setTimeLeft] = useState(minutes * 60);

  useEffect(() => {
    if (timeLeft <= 0) {
      onExpire?.();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onExpire]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-red-600/20 border border-red-500/50 rounded-lg px-4 py-2 backdrop-blur-sm">
      <div className="flex items-center space-x-2">
        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
        <span className="text-red-400 font-bold text-sm">
          Oferta expira em: {formatTime(timeLeft)}
        </span>
      </div>
    </div>
  );
};