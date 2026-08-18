import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

const navStyles = (isActive: boolean) =>
  cn(
    "rounded-full px-5 py-2 transition-colors",
    isActive
      ? "bg-primary-foreground text-primary-background"
      : "text-primary-foreground",
  );

export function Navbar() {
  return (
    <div>
      <nav className="hidden tablet:flex items-center justify-center gap-0 p-0.75 bg-primary-foreground/5 rounded-full ">
        <NavLink to="/" className={({ isActive }) => navStyles(isActive)}>
          Explore
        </NavLink>
        <NavLink to="ritmo" className={({ isActive }) => navStyles(isActive)}>
          My Ritmo
        </NavLink>
      </nav>
      <button className="flex tablet:hidden justify-center items-center gap-1.5 w-13 h-13 border border-primary-foreground/18 cursor-pointer py-3.5 rounded-2xl">  <Menu size={24} strokeWidth={2} /> </button>
    </div>
  );
}
