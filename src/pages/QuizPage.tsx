import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { grade12Mathematics } from '@/data/grade12Mathematics';
import { grade12PhysicsQuestions } from '@/data/grade12PhysicsQuestions';
import { grade12ChemistryQuestions } from '@/data/grade12ChemistryQuestions';
import { grade12BiologyQuestions } from '@/data/grade12BiologyQuestions';
import { grade12EnglishQuestions } from '@/data/grade12EnglishQuestions';
import { grade12CivicsQuestions } from '@/data/grade12CivicsQuestions';
import { grade12HistoryQuestions } from '@/data/grade12HistoryQuestions';
import { grade12ITQuestions } from '@/data/grade12ITQuestions';
import { grade12AgricultureQuestions } from '@/data/grade12AgricultureQuestions';
import { getGrade12GeographyQuestions } from '@/data/grade12GeographyQuestions';
import { getGrade11MathQuestions } from '@/data/grade11Mathematics';
import { getGrade11BiologyQuestions } from '@/data/grade11Biology';
import { getGrade11PhysicsQuestions } from '@/data/grade11Physics';
import { getGrade11ChemistryQuestions } from '@/data/grade11Chemistry';
import { getGrade11AgricultureQuestions } from '@/data/grade11AgricultureQuestions';
import QuestionCard from '@/components/QuestionCard';
import Results from '@/components/Results';
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, Eye } from 'lucide-react';

interface Question {
  id: string;
  question: string;
  options: string[];
  correct: string;
  explanation: string;
}

const getQuestionsForSubject = (subject: string, chapter: string, difficulty: string, grade: string, count: number = 10): Question[] => {
  let allQuestions: any[] = [];
  
  console.log('Getting questions for:', { subject, chapter, difficulty, grade });
  
  try {
    // Handle Grade 11 subjects
    if (grade === '11') {
      const difficultyLevel = difficulty.toLowerCase() as 'easy' | 'medium' | 'hard';
      
      switch (subject) {
        case 'Mathematics':
          const grade11MathQuestions = getGrade11MathQuestions(chapter, difficultyLevel, count);
          return grade11MathQuestions.map(q => ({
            id: q.id,
            question: q.question,
            options: q.options,
            correct: q.correct,
            explanation: q.explanation
          }));
          
        case 'Biology':
          const grade11BioQuestions = getGrade11BiologyQuestions(chapter, difficultyLevel, count);
          return grade11BioQuestions.map(q => ({
            id: q.id,
            question: q.question,
            options: q.options,
            correct: q.correct,
            explanation: q.explanation
          }));
          
        case 'Physics':
          const grade11PhyQuestions = getGrade11PhysicsQuestions(chapter, difficultyLevel, count);
          return grade11PhyQuestions.map(q => ({
            id: q.id,
            question: q.question,
            options: q.options,
            correct: q.correct,
            explanation: q.explanation
          }));
          
        case 'Chemistry':
          const grade11ChemQuestions = getGrade11ChemistryQuestions(chapter, difficultyLevel, count);
          return grade11ChemQuestions.map(q => ({
            id: q.id,
            question: q.question,
            options: q.options,
            correct: q.correct,
            explanation: q.explanation
          }));
          
        case 'Agriculture':
          const grade11AgriQuestions = getGrade11AgricultureQuestions(chapter, difficultyLevel, count);
          return grade11AgriQuestions.map(q => ({
            id: q.id,
            question: q.question,
            options: q.options,
            correct: q.correct,
            explanation: q.explanation
          }));
          
        default:
          console.warn('Grade 11 subject not implemented:', subject);
          return [];
      }
    }
    
    // Handle Grade 12 subjects (existing logic)
    switch (subject) {
      case 'Mathematics':
        const mathData = grade12Mathematics[chapter];
        allQuestions = Array.isArray(mathData) ? mathData : [];
        break;
      case 'Physics':
        const physicsData = grade12PhysicsQuestions[chapter];
        allQuestions = Array.isArray(physicsData) ? physicsData : [];
        break;
      case 'Chemistry':
        const chemData = grade12ChemistryQuestions[chapter];
        allQuestions = Array.isArray(chemData) ? chemData : [];
        break;
      case 'Biology':
        const bioData = grade12BiologyQuestions[chapter];
        allQuestions = Array.isArray(bioData) ? bioData : [];
        break;
      case 'English':
        const engData = grade12EnglishQuestions[chapter];
        allQuestions = Array.isArray(engData) ? engData : [];
        break;
      case 'Civics':
      case 'Civic Education':
        const civicsData = grade12CivicsQuestions[chapter];
        allQuestions = Array.isArray(civicsData) ? civicsData : [];
        break;
      case 'History':
        const histData = grade12HistoryQuestions[chapter];
        allQuestions = Array.isArray(histData) ? histData : [];
        break;
      case 'IT':
      case 'Information Technology':
        const itData = grade12ITQuestions[chapter];
        allQuestions = Array.isArray(itData) ? itData : [];
        break;
      case 'Agriculture':
        const agriData = grade12AgricultureQuestions[chapter];
        allQuestions = Array.isArray(agriData) ? agriData : [];
        break;
      case 'Geography':
        return getGrade12GeographyQuestions(chapter, difficulty.toLowerCase() as 'easy' | 'medium' | 'hard', count);
      default:
        console.warn('Unknown subject:', subject);
        return [];
    }

    console.log('Raw questions found:', allQuestions.length);

    // Filter by difficulty if the questions have difficulty property
    const filteredQuestions = allQuestions.filter(q => {
      if (q.difficulty) {
        return q.difficulty.toLowerCase() === difficulty.toLowerCase();
      }
      return true;
    });

    console.log('Filtered questions by difficulty:', filteredQuestions.length);

    // Convert to standard Question format
    const convertedQuestions = filteredQuestions.map((q, index) => ({
      id: q.id?.toString() || `question-${index}-${Math.random().toString(36).substr(2, 9)}`,
      question: q.question || 'Question not available',
      options: Array.isArray(q.options) ? q.options : [],
      correct: q.correct || '',
      explanation: q.explanation || "No explanation provided."
    }));

    // Filter out invalid questions
    const validQuestions = convertedQuestions.filter(q => 
      q.question !== 'Question not available' && 
      q.options.length >= 2 && 
      q.correct && 
      q.options.includes(q.correct)
    );

    console.log('Valid questions:', validQuestions.length);

    // Shuffle and return requested count
    const shuffled = validQuestions.sort(() => Math.random() - 0.5);
    const finalQuestions = shuffled.slice(0, Math.min(count, shuffled.length));
    
    console.log('Final questions to return:', finalQuestions.length);
    
    return finalQuestions;
  } catch (error) {
    console.error('Error fetching questions:', error);
    return [];
  }
};

const QuizPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const subject = params.subject;
  const chapterId = params.chapterId ? decodeURIComponent(params.chapterId) : null;
  const difficulty = params.difficulty;
  const grade = params.grade;
  
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState<boolean>(false);
  const [startTime, setStartTime] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showAnswerForQuestion, setShowAnswerForQuestion] = useState<number | null>(null);
  const [revealedAnswers, setRevealedAnswers] = useState<Set<number>>(new Set());
  const [questionTimer, setQuestionTimer] = useState<number>(20);
  const [timedOutQuestions, setTimedOutQuestions] = useState<Set<number>>(new Set());
  const [showTimeUp, setShowTimeUp] = useState<boolean>(false);

  const initializeQuestions = () => {
    console.log('Initializing questions with params:', { subject, chapterId, difficulty, grade });
    
    if (!subject || !chapterId || !difficulty || !grade) {
      setError('Missing required quiz parameters');
      setIsLoading(false);
      return;
    }
    
    try {
      const fetchedQuestions = getQuestionsForSubject(subject, chapterId, difficulty, grade, 10);
      
      if (fetchedQuestions.length > 0) {
        console.log('Questions loaded successfully:', fetchedQuestions.length);
        setQuestions(fetchedQuestions);
        setCurrentQuestionIndex(0);
        setSelectedAnswers({});
        setShowResults(false);
        setStartTime(Date.now());
        setError(null);
        setQuestionTimer(20);
        setTimedOutQuestions(new Set());
        setShowTimeUp(false);
      } else {
        console.error('No questions found for:', { subject, chapter: chapterId, difficulty, grade });
        setError(`No questions available for Grade ${grade} ${subject} - ${chapterId} (${difficulty} level)`);
        setQuestions([]);
      }
    } catch (err) {
      console.error('Error initializing questions:', err);
      setError('Failed to load quiz questions. Please try again.');
      setQuestions([]);
    }
    
    setIsLoading(false);
  };

  useEffect(() => {
    initializeQuestions();
  }, [subject, chapterId, difficulty]);

  // Question timer countdown effect
  useEffect(() => {
    let questionTimerInterval: NodeJS.Timeout;

    if (!showResults && !isLoading && questions.length > 0 && !revealedAnswers.has(currentQuestionIndex) && !selectedAnswers[currentQuestionIndex]) {
      questionTimerInterval = setInterval(() => {
        setQuestionTimer(prev => {
          if (prev <= 1) {
            // Time's up!
            setShowTimeUp(true);
            setTimedOutQuestions(prev => new Set([...prev, currentQuestionIndex]));
            
            // Auto advance after showing "Time's up!" for 1.5 seconds
            setTimeout(() => {
              setShowTimeUp(false);
              if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setQuestionTimer(20);
                setShowAnswerForQuestion(null);
              } else {
                setShowResults(true);
              }
            }, 1500);
            
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (questionTimerInterval) clearInterval(questionTimerInterval);
    };
  }, [currentQuestionIndex, showResults, isLoading, questions.length, revealedAnswers, selectedAnswers]);


  // Reset question timer when question changes
  useEffect(() => {
    if (!showResults && questions.length > 0) {
      setQuestionTimer(20);
      setShowTimeUp(false);
    }
  }, [currentQuestionIndex, showResults]);

  const handleAnswerSelect = (answer: string) => {
    console.log('Answer selected:', answer, 'for question index:', currentQuestionIndex);
    setSelectedAnswers({ ...selectedAnswers, [currentQuestionIndex]: answer });
  };

  const handleShowAnswer = () => {
    console.log('Show answer clicked for question index:', currentQuestionIndex);
    setShowAnswerForQuestion(currentQuestionIndex);
    setRevealedAnswers(prev => new Set([...prev, currentQuestionIndex]));
  };

  const handleNextQuestion = () => {
    console.log('Next question clicked, current index:', currentQuestionIndex, 'total:', questions.length);
    setShowAnswerForQuestion(null); // Hide explanation when moving to next question
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = (): number => {
    let correctAnswersCount = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correct) {
        correctAnswersCount++;
      }
    });
    return correctAnswersCount;
  };


  const handleRetakeQuiz = () => {
    setShowAnswerForQuestion(null);
    setRevealedAnswers(new Set());
    initializeQuestions();
  };

  const handleBackToChapters = () => {
    if (grade && subject) {
      navigate(`/grade/${grade}/subject/${subject}/chapters`);
    } else {
      navigate(-1);
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto p-4 min-h-screen bg-slate-900">
        <div className="flex items-center mb-6">
          <Button
            variant="ghost"
            onClick={handleBackToChapters}
            className="text-white hover:bg-slate-800 mr-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <h2 className="text-2xl font-semibold text-white">
            Loading Quiz...
          </h2>
        </div>
        <div className="space-y-4">
          <Skeleton className="h-4 w-[250px] bg-slate-700" />
          <Skeleton className="h-4 w-[400px] bg-slate-700" />
          <Skeleton className="h-10 bg-slate-700" />
          <Skeleton className="h-10 bg-slate-700" />
          <Skeleton className="h-10 bg-slate-700" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-4 min-h-screen bg-slate-900">
        <div className="flex items-center mb-6">
          <Button
            variant="ghost"
            onClick={handleBackToChapters}
            className="text-white hover:bg-slate-800 mr-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <h2 className="text-2xl font-semibold text-white">
            Quiz Error
          </h2>
        </div>
        <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
          <p className="text-red-400 text-lg mb-4">{error}</p>
          <div className="space-x-4">
            <Button 
              onClick={initializeQuestions}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Try Again
            </Button>
            <Button 
              variant="outline"
              onClick={handleBackToChapters}
              className="border-white/20 text-white hover:bg-white/10"
            >
              Go Back
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (!subject || !chapterId || !difficulty) {
    return (
      <div className="container mx-auto p-4 min-h-screen bg-slate-900">
        <div className="flex items-center mb-6">
          <Button
            variant="ghost"
            onClick={handleBackToChapters}
            className="text-white hover:bg-slate-800 mr-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <h2 className="text-2xl font-semibold text-white">
            Invalid Quiz Parameters
          </h2>
        </div>
        <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6">
          <p className="text-yellow-400">Missing required parameters. Please navigate from the subjects page.</p>
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="container mx-auto p-4 min-h-screen bg-slate-900">
        <div className="flex items-center mb-6">
          <Button
            variant="ghost"
            onClick={handleBackToChapters}
            className="text-white hover:bg-slate-800 mr-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <h2 className="text-2xl font-semibold text-white">
            {subject} - {chapterId} ({difficulty})
          </h2>
        </div>
        <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
          <p className="text-blue-400 text-lg mb-4">No questions available for this chapter and difficulty level.</p>
          <Button 
            variant="outline"
            onClick={handleBackToChapters}
            className="border-white/20 text-white hover:bg-white/10"
          >
            Choose Different Chapter
          </Button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) {
    return (
      <div className="container mx-auto p-4 min-h-screen bg-slate-900">
        <div className="flex items-center mb-6">
          <Button
            variant="ghost"
            onClick={handleBackToChapters}
            className="text-white hover:bg-slate-800 mr-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <h2 className="text-2xl font-semibold text-white">
            Quiz Error
          </h2>
        </div>
        <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
          <p className="text-red-400">Unable to load the current question. Please try refreshing the page.</p>
          <Button 
            onClick={initializeQuestions}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white"
          >
            Retry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 min-h-screen bg-slate-900">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Button
            variant="ghost"
            onClick={handleBackToChapters}
            className="text-white hover:bg-slate-800 mr-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <h2 className="text-2xl font-semibold text-white">
            Grade {grade} {subject} - {chapterId} ({difficulty})
          </h2>
        </div>
      </div>

      {showResults ? (
        <Results 
          score={calculateScore()} 
          totalQuestions={questions.length} 
          timeTaken="Quiz completed"
          onRetakeQuiz={handleRetakeQuiz}
          questions={questions}
          selectedAnswers={selectedAnswers}
        />
      ) : (
        <div className="space-y-6">
          <div className="flex justify-center items-center mb-4">
            <div className="text-center">
              {showTimeUp ? (
                <div className="text-red-400 text-xl font-bold animate-pulse">
                  ⏰ Time's up!
                </div>
              ) : (
                <div className="text-center">
                  <div className="text-sm text-gray-400 mb-1">Question Timer</div>
                  <div className={`text-2xl font-bold ${
                    questionTimer <= 5 ? 'text-red-400 animate-pulse' : 
                    questionTimer <= 10 ? 'text-yellow-400' : 'text-green-400'
                  }`}>
                    {questionTimer}s
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <QuestionCard
            question={currentQuestion}
            selectedAnswer={selectedAnswers[currentQuestionIndex]}
            onAnswerSelect={handleAnswerSelect}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={questions.length}
            showAnswer={showAnswerForQuestion === currentQuestionIndex}
            userAnswer={selectedAnswers[currentQuestionIndex]}
          />
          
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-400">
              Question {currentQuestionIndex + 1} of {questions.length}
            </div>
            <div className="flex gap-3">
              {!revealedAnswers.has(currentQuestionIndex) && (
                <Button
                  onClick={handleShowAnswer}
                  variant="outline"
                  className="border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10 hover:border-yellow-400"
                >
                  <Eye className="mr-2 h-4 w-4" />
                  Show Answer
                </Button>
              )}
              <Button 
                onClick={handleNextQuestion} 
                disabled={!selectedAnswers[currentQuestionIndex] && !revealedAnswers.has(currentQuestionIndex)}
                className="bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50"
              >
                {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next Question'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
