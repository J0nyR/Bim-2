import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import LessonPlanMarineEngines from "./pages/LessonPlanMarineEngines";
import TeachingMaterialMarineEngines from "./pages/TeachingMaterialMarineEngines";
import WorksheetMarineEngines from "./pages/WorksheetMarineEngines";
import AnswerKeyMarineEngines from "./pages/AnswerKeyMarineEngines";
import RubricMarineEngines from "./pages/RubricMarineEngines";
import LessonPlanNavigation from "./pages/LessonPlanNavigation";
import TeachingMaterialNavigation from "./pages/TeachingMaterialNavigation";
import WorksheetNavigation from "./pages/WorksheetNavigation";
import AnswerKeyNavigation from "./pages/AnswerKeyNavigation";
import RubricNavigation from "./pages/RubricNavigation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          <Route element={<Layout />}>
            {/* Marine Engines Module Routes */}
            <Route path="/lesson-plan-marine-engines" element={<LessonPlanMarineEngines />} />
            <Route path="/teaching-material-marine-engines" element={<TeachingMaterialMarineEngines />} />
            <Route path="/worksheet-marine-engines" element={<WorksheetMarineEngines />} />
            <Route path="/answer-key-marine-engines" element={<AnswerKeyMarineEngines />} />
            <Route path="/rubric-marine-engines" element={<RubricMarineEngines />} />

            {/* Navigation Module Routes */}
            <Route path="/lesson-plan-navigation" element={<LessonPlanNavigation />} />
            <Route path="/teaching-material-navigation" element={<TeachingMaterialNavigation />} />
            <Route path="/worksheet-navigation" element={<WorksheetNavigation />} />
            <Route path="/answer-key-navigation" element={<AnswerKeyNavigation />} />
            <Route path="/rubric-navigation" element={<RubricNavigation />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;