import { useCallback, useState } from "react";

export type SimpleQuestion = {
  question: string;
  options: string[];
  correct: string;
  explanation?: string;
};

function detectDomain(text: string) {
  const t = text.toLowerCase();
  if (/[0-9][\d\s+\-*/^()=]*=/.test(text) || /[+\-*/^]/.test(text)) return "math" as const;
  if (t.includes("capital") || t.includes("country")) return "geography" as const;
  if (t.includes("photosynthesis") || t.includes("cell") || t.includes("atom") || t.includes("energy")) return "science" as const;
  if (t.includes("year") || t.includes("revolution") || t.includes("war") || t.includes("treaty")) return "history" as const;
  return "general" as const;
}

function composeHint(q: SimpleQuestion, step: number, userAnswer?: string) {
  const domain = detectDomain(q.question);
  const incorrect = userAnswer && userAnswer !== q.correct;

  if (step === 0) {
    return "Focus on what the question is asking. Identify the key terms and restate it in your own words.";
  }

  if (step === 1) {
    switch (domain) {
      case "math":
        return "Try isolating the unknown. What operation undoes addition/multiplication? Apply the same step to both sides.";
      case "geography":
        return "Think of the country's main administrative city. Eliminate options that are not capitals or not in the country mentioned.";
      case "science":
        return "Recall the core definition behind the key term. Which option best matches that definition rather than just an example?";
      case "history":
        return "Place the event on a timeline. Which option aligns with the period and the key figures involved?";
      default:
        return "Use elimination: cross out choices that clearly don’t fit the key terms in the question.";
    }
  }

  if (step === 2) {
    switch (domain) {
      case "math":
        return "Check units and order of operations. Try a simpler version to see the pattern, then apply it here.";
      case "geography":
        return "Link the country with its government seat. Which option corresponds to that city rather than a famous tourist city elsewhere?";
      case "science":
        return "Distinguish cause vs. effect. Which option describes the underlying mechanism rather than a result?";
      case "history":
        return "Match the event to its cause or outcome. Which option best fits that relationship for the era?";
      default:
        return "Look for keywords that strongly pair with one option (definitions, categories, or processes).";
    }
  }

  // Step >= 3
  return incorrect
    ? "Try a simpler approach: remove two options and decide between the remaining ones. What evidence supports your next choice?"
    : "Before locking in your answer, verify it matches the key terms and concepts highlighted in the question.";
}

export function useExaiHints() {
  const [hints, setHints] = useState<string[]>([]);
  const step = hints.length;

  const requestHint = useCallback((q: SimpleQuestion, userAnswer?: string) => {
    const hint = composeHint(q, step, userAnswer);
    setHints((prev) => [...prev, hint]);
  }, [step]);

  const resetHints = useCallback(() => setHints([]), []);

  return { hints, requestHint, resetHints, step };
}
