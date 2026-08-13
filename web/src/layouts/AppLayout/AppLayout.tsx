import { Outlet } from "react-router-dom";

import { AppContainer } from "@/components/AppContainer";
import { AppHeader } from "@/components/AppHeader";
import { ScrollTop } from "@/routes/ScrollTop";

export function AppLayout() {
  return (
    <div className="wave-background min-h-screen">
      <ScrollTop />
      <AppHeader />
      <main>
        <AppContainer>
          <Outlet />
        </AppContainer>
      </main>
    </div>
  );
}
