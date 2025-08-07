import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, CheckCircle, XCircle, Eye } from 'lucide-react';

interface Question {
  id: string;
  question: string;
  options: string[];
  correct: string;
  explanation: string;
}

interface QuestionReviewProps {
  questions: Question[];
  selectedAnswers: { [key: number]: string };
  timedOutQuestions: Set<number>;
  revealedAnswers: Set<number>;
}

const QuestionReview: React.FC<QuestionReviewProps> = ({
  questions,
  selectedAnswers,
  timedOutQuestions,
  revealedAnswers
}) => {
  const getQuestionStatus = (index: number) => {
    if (timedOutQuestions.has(index)) return 'timeout';
    if (revealedAnswers.has(index)) return 'revealed';
    if (selectedAnswers[index] === questions[index].correct) return 'correct';
    if (selectedAnswers[index]) return 'incorrect';
    return 'skipped';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'correct': return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'incorrect': return 'bg-red-500/10 text-red-400 border-red-500/20';
      case 'timeout': return 'bg-orange-500/10 text-orange-400 border-orange-500/20';
      case 'revealed': return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      default: return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'correct': return <CheckCircle className="w-4 h-4" />;
      case 'incorrect': return <XCircle className="w-4 h-4" />;
      case 'timeout': return <Clock className="w-4 h-4" />;
      case 'revealed': return <Eye className="w-4 h-4" />;
      default: return null;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'correct': return 'Correct';
      case 'incorrect': return 'Incorrect';
      case 'timeout': return 'Timed Out';
      case 'revealed': return 'Answer Revealed';
      default: return 'Skipped';
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-foreground mb-4">Question Review</h3>
      
      {questions.map((question, index) => {
        const status = getQuestionStatus(index);
        const userAnswer = selectedAnswers[index];
        
        return (
          <Card key={question.id} className="bg-card border-border">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <CardTitle className="text-base">
                  Question {index + 1}
                </CardTitle>
                <Badge className={`${getStatusColor(status)} flex items-center gap-1`}>
                  {getStatusIcon(status)}
                  {getStatusText(status)}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-foreground">{question.question}</p>
              
              <div className="space-y-2">
                {question.options.map((option, optionIndex) => {
                  const isCorrect = option === question.correct;
                  const isUserAnswer = option === userAnswer;
                  
                  return (
                    <div
                      key={optionIndex}
                      className={`p-2 rounded-lg border ${
                        isCorrect
                          ? 'bg-green-500/10 border-green-500/30 text-green-400'
                          : isUserAnswer
                          ? 'bg-red-500/10 border-red-500/30 text-red-400'
                          : 'bg-secondary border-border text-muted-foreground'
                      }`}
                    >
                      <span className="font-medium mr-2">
                        {String.fromCharCode(65 + optionIndex)}.
                      </span>
                      {option}
                      {isCorrect && <span className="ml-2">✓</span>}
                      {isUserAnswer && !isCorrect && <span className="ml-2">✗</span>}
                    </div>
                  );
                })}
              </div>

              {status === 'timeout' && (
                <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-3">
                  <p className="text-orange-400 text-sm">
                    ⏰ You ran out of time on this question. The correct answer was: <strong>{question.correct}</strong>
                  </p>
                </div>
              )}

              <div className="bg-muted border border-border rounded-lg p-3">
                <p className="text-sm text-muted-foreground">
                  <strong>Explanation:</strong> {question.explanation}
                </p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default QuestionReview;