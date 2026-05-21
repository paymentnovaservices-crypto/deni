import React from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";
import StarField from "@/components/StarField";
import NotificationPopup from "@/components/NotificationPopup";
import StatusPill from "@/components/StatusPill";
import FloatingHeart from "@/components/FloatingHeart";
import SoundToggle from "@/components/SoundToggle";

import Hero from "@/components/sections/Hero";
import ClockSection from "@/components/sections/ClockSection";
import MusicPlayer from "@/components/sections/MusicPlayer";
import LetterSection from "@/components/sections/LetterSection";
import AdoreSection from "@/components/sections/AdoreSection";
import MemoriesSection from "@/components/sections/MemoriesSection";
import ChatSection from "@/components/sections/ChatSection";
import TimelineSection from "@/components/sections/TimelineSection";
import FinalSection from "@/components/sections/FinalSection";
import Footer from "@/components/sections/Footer";

const queryClient = new QueryClient();

function MainSite() {
  return (
    <div className="min-h-screen bg-background relative text-foreground">
      <StarField />
      <CustomCursor />
      <NotificationPopup />
      <StatusPill />
      <FloatingHeart />
      <SoundToggle />

      <LoadingScreen />

      <main className="relative z-10 w-full max-w-4xl mx-auto px-4 md:px-8 pt-20 pb-32 flex flex-col items-center">
        <Hero />
        <ClockSection />
        <MusicPlayer />
        <LetterSection />
        <AdoreSection />
        <MemoriesSection />
        <ChatSection />
        <TimelineSection />
        <FinalSection />
      </main>
      
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={MainSite} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
