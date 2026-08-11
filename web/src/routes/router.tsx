import { Routes, Route} from "react-router-dom";
import { AppLayout } from "@/layouts/AppLayout/AppLayout";

import HeroPage from "@/pages/HeroPage";

export function AppRouter() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HeroPage />} />
      </Route>
    </Routes>
  );
}
