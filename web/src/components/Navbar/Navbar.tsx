import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";
const navStyles = (isActive: boolean) =>
  cn(
    "rounded-full px-5 py-2 transition-colors",
    isActive
      ? "bg-primary-foreground text-primary-background"
      : "text-primary-foreground",
  );
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="hidden tablet:flex items-center justify-center gap-0 p-0.75 bg-primary-foreground/5 rounded-full ">
        <NavLink to="/" className={({ isActive }) => navStyles(isActive)}>
          Explore
        </NavLink>
        <NavLink to="ritmo" className={({ isActive }) => navStyles(isActive)}>
          My Ritmo
        </NavLink>  g
      </nav>
      <button onClick={() => setIsOpen(!isOpen)} className="flex tablet:hidden justify-center items-center gap-1.5 w-13 h-13 border border-primary-foreground/18 cursor-pointer py-3.5 rounded-2xl">  <Menu size={24} strokeWidth={2} /> </button>
      <div className={cn(
        "fixed inset-0 z-50 tablet:hidden bg-primary-background transition-opacity duration-300 ease-in-out flex flex-col p-5",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
      )}>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary-foreground">Menu</span>
          <button onClick={() => setIsOpen(false)} className="flex justify-center items-center w-11 h-11 rounded-full bg-primary-foreground/18 cursor-pointer">
            <X size={20} strokeWidth={2} className="text-primary-foreground" />
          </button>
        </div>
        <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => cn(navStyles(isActive), "mt-6 w-full text-center text-lg font-bold bg-primary-foreground/18")}>
          Explore experiences
        </NavLink>
        <NavLink to="ritmo" onClick={() => setIsOpen(false)} className={({ isActive }) => cn(navStyles(isActive), "mt-6 w-full text-left text-lg font-bold")}>
          My Ritmo
        </NavLink>
      </div>
    </div>
  );
}