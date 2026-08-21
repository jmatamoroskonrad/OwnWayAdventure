import type { ReactNode } from "react";

import { BrowserRouter } from "react-router-dom";
import { RitmoProvider } from "@/context/RitmoContext";
import { TourProvider } from "@/context/TourContext";

interface AppProvidersProps {
  children: ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <BrowserRouter>
      <TourProvider>
        <RitmoProvider>{children}</RitmoProvider>
      </TourProvider>
    </BrowserRouter>
  );
}
