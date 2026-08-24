import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";
const navStyles = (isActive: boolean) =>
  cn(
    "rounded-full px-5 py-2 transition-all duration-200 text-lg font-bold h-16 flex items-center",
    isActive
      ? "bg-primary-foreground text-primary-background shadow-[rgba(33,17,3,0.18)_0px_6px_16px]"
      : "text-primary-foreground/65 hover:text-primary-foreground hover:bg-primary-foreground/8",
  );

const navResponsiveStyles = (isActive: boolean) =>
  cn(
    "rounded-full px-4 py-4 transition-colors text-primary-background font-bricolage mt-4",
    isActive ? "bg-primary-background/14 text-primary-background" : "",
  );

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="hidden  tablet:flex items-center justify-center p-0.75 bg-primary-foreground/5 border border-primary-foreground/10 rounded-full gap-4 ">
        <NavLink to="/" className={({ isActive }) => navStyles(isActive)}>
          Explore
        </NavLink>
        <NavLink to="tours" className={({ isActive }) => navStyles(isActive)}>
          Our Activities
        </NavLink>
        <NavLink to="ritmo" className={({ isActive }) => navStyles(isActive)}>
          My Ritmo
        </NavLink>
      </nav>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex tablet:hidden justify-center items-center gap-1.5 w-13 h-13 border border-primary-foreground/18 cursor-pointer py-3.5 rounded-2xl"
      >
        {" "}
        <Menu size={24} strokeWidth={2} />{" "}
      </button>
      <div
        className={cn(
          "fixed top-2 left-2 right-2 z-50 tablet:hidden bg-primary-foreground transition-all duration-300 ease-in-out flex flex-col p-4 rounded-2xl shadow-lg",
          isOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-2",
        )}
      >
        <div className="flex items-center justify-between shrink-0">
          <span className="text-2xl font-bold text-primary-text">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            className="flex justify-center items-center w-11 h-11 rounded-full bg-primary-text/10 cursor-pointer"
          >
            <X size={20} strokeWidth={2} className="text-primary-text" />
          </button>
        </div>

        <div className="flex flex-col w-full bg-primary-foreground text-primary-text">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              cn(navResponsiveStyles(isActive), " w-full  text-lg font-bold")
            }
          >
            Explore experiences
          </NavLink>

          <NavLink
            to="tours"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              cn(navResponsiveStyles(isActive), " w-full   text-lg font-bold")
            }
          >
            Our Activities
          </NavLink>
          <NavLink
            to="ritmo"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              cn(navResponsiveStyles(isActive), " w-full   text-lg font-bold")
            }
          >
            My Ritmo
          </NavLink>
        </div>
      </div>
    </div>
  );
}
