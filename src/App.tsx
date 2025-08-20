import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ShootingStars from "./components/ShootingStars";
// Added page imports
import AboutUs from "./pages/AboutUs";
import Training from "./pages/Training";
import ContactPage from "./pages/ContactPage";
import ClubHandbook from "./pages/ClubHandbook";
import PartneredClubs from "./pages/PartneredClubs";

// ✅ Import your individual club pages
import MAA from "./pages/clubs/MAA";
// import Physics from "./pages/clubs/Physics";
// import Rocketry from "./pages/clubs/Rocketry";
// import STEMRacing from "./pages/clubs/STEMRacing";
// import Astronomy from "./pages/clubs/Astronomy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ShootingStars />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Main pages */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/training" element={<Training />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/handbook" element={<ClubHandbook />} />
          <Route path="/partner" element={<PartneredClubs />} />

          {/* ✅ Club-specific routes */}
          <Route path="/clubs/MAA" element={<MAA />} />
          {/* Add more as you create them:
          <Route path="/clubs/Physics" element={<Physics />} />
          <Route path="/clubs/Rocketry" element={<Rocketry />} />
          <Route path="/clubs/STEMRacing" element={<STEMRacing />} />
          <Route path="/clubs/Astronomy" element={<Astronomy />} />
          */}

          {/* Catch-all 404 route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
