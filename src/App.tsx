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
              {/* Rute untuk modul Teknika 2 akan ditambahkan di sini */}
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;