import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import Syllabus from "./pages/Syllabus";
import SummativeTest from "./pages/SummativeTest";
import SummativeTestAnswerKey from "./pages/SummativeTestAnswerKey";
import StudentHandbook from "./pages/StudentHandbook";
import GrammarReference from "./pages/GrammarReference";
import { useTheme } from "next-themes";
import React, { useEffect } from "react";

// Import pages for module 2.1
import LessonPlanSteeringDeckControl from "./pages/LessonPlanSteeringDeckControl";
import TeachingMaterialSteeringDeckControl from "./pages/TeachingMaterialSteeringDeckControl";
import WorksheetSteeringDeckControl from "./pages/WorksheetSteeringDeckControl";
import AnswerKeySteeringDeckControl from "./pages/AnswerKeySteeringDeckControl";
import RubricSteeringDeckControl from "./pages/RubricSteeringDeckControl";

const queryClient = new QueryClient();

const App = () => {
  const { theme } = useTheme();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* Course Overview Routes */}
            <Route path="/syllabus" element={<Syllabus />} />
            <Route path="/summative-test" element={<SummativeTest />} />
            <Route path="/summative-test-answer-key" element={<SummativeTestAnswerKey />} />
            <Route path="/student-handbook" element={<StudentHandbook />} />
            <Route path="/grammar-reference" element={<GrammarReference />} />

            <Route element={<Layout />}>
              {/* Routes for Module 2.1 */}
              <Route path="/lesson-plan-steering-deck-control" element={<LessonPlanSteeringDeckControl />} />
              <Route path="/teaching-material-steering-deck-control" element={<TeachingMaterialSteeringDeckControl />} />
              <Route path="/worksheet-steering-deck-control" element={<WorksheetSteeringDeckControl />} />
              <Route path="/answer-key-steering-deck-control" element={<AnswerKeySteeringDeckControl />} />
              <Route path="/rubric-steering-deck-control" element={<RubricSteeringDeckControl />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;