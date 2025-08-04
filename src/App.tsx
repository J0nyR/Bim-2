import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout"; // Import Layout
import LessonPlanMarineEngines from "./pages/LessonPlanMarineEngines";
import TeachingMaterialMarineEngines from "./pages/TeachingMaterialMarineEngines";
import WorksheetMarineEngines from "./pages/WorksheetMarineEngines";
import AnswerKeyMarineEngines from "./pages/AnswerKeyMarineEngines";
import RubricMarineEngines from "./pages/RubricMarineEngines";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Teaching Material Routes with Sidebar Layout */}
          <Route element={<Layout />}>
            <Route path="/lesson-plan-marine-engines" element={<LessonPlanMarineEngines />} />
            <Route path="/teaching-material-marine-engines" element={<TeachingMaterialMarineEngines />} />
            <Route path="/worksheet-marine-engines" element={<WorksheetMarineEngines />} />
            <Route path="/answer-key-marine-engines" element={<AnswerKeyMarineEngines />} />
            <Route path="/rubric-marine-engines" element={<RubricMarineEngines />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;