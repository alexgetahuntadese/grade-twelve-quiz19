import React from 'react';
import { Clock } from 'lucide-react';

interface TimerBarProps {
  timeLeft: number;
  totalTime: number;
  progressPercentage: number;
  showTimeUp: boolean;
}

const TimerBar: React.FC<TimerBarProps> = ({ 
  timeLeft, 
  totalTime, 
  progressPercentage, 
  showTimeUp
}) => {
  const getTimerColor = () => {
    if (timeLeft <= 5) return 'from-danger to-danger/80';
    if (timeLeft <= 10) return 'from-warning to-warning/80';
    return 'from-success to-success-glow';
  };

  const getTimerGlow = () => {
    if (timeLeft <= 5) return 'shadow-danger';
    if (timeLeft <= 10) return 'shadow-lg shadow-warning/30';
    return 'shadow-success';
  };

  const getContainerClasses = () => {
    if (timeLeft <= 5) return 'animate-timer-warning';
    return '';
  };

  if (showTimeUp) {
    return (
      <div className="text-center animate-scale-in">
        <div className="bg-gradient-danger text-white text-2xl font-bold py-4 px-8 rounded-xl shadow-danger animate-pulse mb-4">
          ⏰ Time's up!
        </div>
      </div>
    );
  }

  return (
    <div className={`space-y-6 ${getContainerClasses()}`}>
      <div className="flex items-center gap-3">
        <div className="p-2 bg-gradient-primary rounded-lg shadow-glow">
          <Clock className="w-5 h-5 text-white" />
        </div>
        <span className="text-lg font-medium text-foreground">Question Timer</span>
      </div>

      <div className="relative p-1 bg-gradient-to-r from-muted to-muted/50 rounded-2xl">
        <div className="relative h-6 bg-background rounded-xl overflow-hidden">
          <div 
            className={`h-full bg-gradient-to-r ${getTimerColor()} transition-all duration-1000 ease-linear relative overflow-hidden ${getTimerGlow()}`}
            style={{ width: `${progressPercentage}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
          </div>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-sm font-bold transition-all duration-300 ${
            timeLeft <= 5 
              ? 'text-white text-base animate-pulse drop-shadow-lg' 
              : timeLeft <= 10 
                ? 'text-foreground font-bold' 
                : 'text-foreground'
          }`}>
            {timeLeft}s
          </span>
        </div>
      </div>

      {timeLeft <= 5 && (
        <div className="h-2 bg-gradient-danger rounded-full animate-pulse shadow-danger" />
      )}
    </div>
  );
};

export default TimerBar;