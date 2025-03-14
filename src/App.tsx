import React from 'react';
import { Toaster } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import Notes from "./pages/Notes";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import EasterEggButton from "./components/EasterEggButton";
import EasterEggContent from "./components/EasterEggContent";

// Get the base URL from the environment or use default
const BASE_URL = '/';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter basename={BASE_URL}>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/about" element={<About />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
      <EasterEggButton easterEggContent={<EasterEggContent />} />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
