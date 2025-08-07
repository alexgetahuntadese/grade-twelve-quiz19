import React from 'react';
import { Clock, Zap } from 'lucide-react';

interface TimerBarProps {
  timeLeft: number;
  totalTime: number;
  progressPercentage: number;
  showTimeUp: boolean;
  powerUps: number;
  onUsePowerUp: () => void;
}

const TimerBar: React.FC<TimerBarProps> = ({ 
  timeLeft, 
  totalTime, 
  progressPercentage, 
  showTimeUp,
  powerUps,
  onUsePowerUp
}) => {
  const getTimerColor = () => {
    if (timeLeft <= 5) return 'bg-red-500';
    if (timeLeft <= 10) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getTimerGlow = () => {
    if (timeLeft <= 5) return 'shadow-red-500/50';
    if (timeLeft <= 10) return 'shadow-yellow-500/50';
    return 'shadow-green-500/50';
  };

  if (showTimeUp) {
    return (
      <div className="text-center animate-scale-in">
        <div className="text-red-400 text-2xl font-bold animate-pulse mb-2">
          ⏰ Time's up!
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-primary" />
          <span className="text-sm text-muted-foreground">Question Timer</span>
        </div>
        
        {powerUps > 0 && (
          <button
            onClick={onUsePowerUp}
            className="flex items-center gap-1 px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded-lg transition-colors"
          >
            <Zap className="w-4 h-4" />
            +10s ({powerUps})
          </button>
        )}
      </div>

      <div className="relative">
        <div className="w-full h-4 bg-secondary rounded-full overflow-hidden">
          <div 
            className={`h-full transition-all duration-1000 ease-linear ${getTimerColor()} ${
              timeLeft <= 5 ? 'animate-pulse' : ''
            }`}
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-xs font-bold ${
            timeLeft <= 5 ? 'text-white animate-pulse' : 'text-foreground'
          }`}>
            {timeLeft}s
          </span>
        </div>
      </div>

      {timeLeft <= 5 && (
        <div className={`w-full h-1 bg-red-500 rounded-full animate-pulse shadow-lg ${getTimerGlow()}`} />
      )}
    </div>
  );
};

export default TimerBar;