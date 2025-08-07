import { useState, useEffect, useCallback } from 'react';

interface UseQuizTimerProps {
  initialTime: number;
  onTimeUp: () => void;
  onLastFiveSeconds: () => void;
  isActive: boolean;
}

export const useQuizTimer = ({ 
  initialTime, 
  onTimeUp, 
  onLastFiveSeconds, 
  isActive 
}: UseQuizTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [hasTriggeredLastFive, setHasTriggeredLastFive] = useState(false);

  const resetTimer = useCallback((newTime: number = initialTime) => {
    setTimeLeft(newTime);
    setHasTriggeredLastFive(false);
  }, [initialTime]);

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          onTimeUp();
          return 0;
        }
        
        if (prev <= 5 && !hasTriggeredLastFive) {
          setHasTriggeredLastFive(true);
          onLastFiveSeconds();
        }
        
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, onTimeUp, onLastFiveSeconds, hasTriggeredLastFive]);

  const getProgressPercentage = () => (timeLeft / initialTime) * 100;

  return {
    timeLeft,
    resetTimer,
    getProgressPercentage
  };
};