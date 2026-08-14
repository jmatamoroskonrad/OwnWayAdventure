import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center  rounded-xl transition-all text-sm font-semibold  text-primary-foreground duration-200 ease-out gap-2 shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-2 focus-visible:ring-primary-button/50 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        primary:
        "bg-primary-button ",
        success:
        "bg-success-button ",
        outline:
        "border border-primary-foreground bg-transparent hover:bg-primary-text"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
      effect: {
        none: "",
        glow: "hover:-translate-y-[3px] hover:shadow-[0_8px_20px_rgba(255,0,0,0.6)] active:scale-[0.985] active:shadow-[0_4px_10px_rgba(255,0,0,0.8)] transition-all duration-200 ease-in-out"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      effect: "none"
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}


const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({className, variant, size, effect,  asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
            className={cn(buttonVariants({variant, size, effect,  className}))}
            ref={ref}
            {...props}
            />
        );
    },
);

Button.displayName = "Button";

export {Button, buttonVariants}