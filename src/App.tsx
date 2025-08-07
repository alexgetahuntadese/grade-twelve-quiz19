
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { Toaster } from "@/components/ui/toaster";
import Index from "./pages/Index";
import AuthPage from "./pages/AuthPage";
import GradeSelection from "./pages/GradeSelection";
import SubjectsPage from "./pages/SubjectsPage";
import ChaptersPage from "./pages/ChaptersPage";
import QuizPage from "./pages/QuizPage";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/grades" element={<ProtectedRoute><GradeSelection /></ProtectedRoute>} />
          <Route path="/grade/:grade/subjects" element={<ProtectedRoute><SubjectsPage /></ProtectedRoute>} />
          <Route path="/grade/:grade/subject/:subject/chapters" element={<ProtectedRoute><ChaptersPage /></ProtectedRoute>} />
          <Route path="/grade/:grade/subject/:subject/chapter/:chapterId/difficulty/:difficulty/quiz" element={<ProtectedRoute><QuizPage /></ProtectedRoute>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
