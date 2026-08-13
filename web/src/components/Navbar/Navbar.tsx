import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const navStyles = (isActive: boolean) =>
  cn(
    "rounded-full px-5 py-2 transition-colors",
    isActive
      ? "bg-primary-foreground text-primary-background"
      : "text-primary-foreground",
  );

export function Navbar() {
  return (
    <nav className="flex items-center justify-center gap-2">
      <NavLink to="/" className={({ isActive }) => navStyles(isActive)}>
        Explore
      </NavLink>
      <NavLink to="ritmo" className={({ isActive }) => navStyles(isActive)}>
        My Ritmo
      </NavLink>
    </nav>
  );
}
