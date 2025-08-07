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

// Import pages for module 2.2
import LessonPlanFluidPumpingSeparation from "./pages/LessonPlanFluidPumpingSeparation";
import TeachingMaterialFluidPumpingSeparation from "./pages/TeachingMaterialFluidPumpingSeparation";
import WorksheetFluidPumpingSeparation from "./pages/WorksheetFluidPumpingSeparation";
import AnswerKeyFluidPumpingSeparation from "./pages/AnswerKeyFluidPumpingSeparation";
import RubricFluidPumpingSeparation from "./pages/RubricFluidPumpingSeparation";

// Import pages for module 2.3
import LessonPlanElectricalElectronic from "./pages/LessonPlanElectricalElectronic";
import TeachingMaterialElectricalElectronic from "./pages/TeachingMaterialElectricalElectronic";
import WorksheetElectricalElectronic from "./pages/WorksheetElectricalElectronic";
import AnswerKeyElectricalElectronic from "./pages/AnswerKeyElectricalElectronic";
import RubricElectricalElectronic from "./pages/RubricElectricalElectronic";

// Import pages for module 2.4
import LessonPlanTechnicalPublications from "./pages/LessonPlanTechnicalPublications";
import TeachingMaterialTechnicalPublications from "./pages/TeachingMaterialTechnicalPublications";
import WorksheetTechnicalPublications from "./pages/WorksheetTechnicalPublications";
import AnswerKeyTechnicalPublications from "./pages/AnswerKeyTechnicalPublications";
import RubricTechnicalPublications from "./pages/RubricTechnicalPublications";

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

              {/* Routes for Module 2.2 */}
              <Route path="/lesson-plan-fluid-pumping-separation" element={<LessonPlanFluidPumpingSeparation />} />
              <Route path="/teaching-material-fluid-pumping-separation" element={<TeachingMaterialFluidPumpingSeparation />} />
              <Route path="/worksheet-fluid-pumping-separation" element={<WorksheetFluidPumpingSeparation />} />
              <Route path="/answer-key-fluid-pumping-separation" element={<AnswerKeyFluidPumpingSeparation />} />
              <Route path="/rubric-fluid-pumping-separation" element={<RubricFluidPumpingSeparation />} />

              {/* Routes for Module 2.3 */}
              <Route path="/lesson-plan-electrical-electronic" element={<LessonPlanElectricalElectronic />} />
              <Route path="/teaching-material-electrical-electronic" element={<TeachingMaterialElectricalElectronic />} />
              <Route path="/worksheet-electrical-electronic" element={<WorksheetElectricalElectronic />} />
              <Route path="/answer-key-electrical-electronic" element={<AnswerKeyElectricalElectronic />} />
              <Route path="/rubric-electrical-electronic" element={<RubricElectricalElectronic />} />

              {/* Routes for Module 2.4 */}
              <Route path="/lesson-plan-technical-publications" element={<LessonPlanTechnicalPublications />} />
              <Route path="/teaching-material-technical-publications" element={<TeachingMaterialTechnicalPublications />} />
              <Route path="/worksheet-technical-publications" element={<WorksheetTechnicalPublications />} />
              <Route path="/answer-key-technical-publications" element={<AnswerKeyTechnicalPublications />} />
              <Route path="/rubric-technical-publications" element={<RubricTechnicalPublications />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;