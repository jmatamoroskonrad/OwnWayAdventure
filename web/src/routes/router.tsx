import { Routes, Route } from "react-router-dom";
import { AppLayout } from "@/layouts/AppLayout/AppLayout";
import RitmoPage from "@/pages/RitmoPage";
import DetailsPage from "@/pages/DetailsPage";

import HeroPage from "@/pages/HeroPage";

export function AppRouter() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/details/:id" element={<DetailsPage/>}/>
        <Route path="/" element={<HeroPage />} />
        <Route path="/ritmo" element={<RitmoPage />} />
      </Route>
    </Routes>
  );
}
