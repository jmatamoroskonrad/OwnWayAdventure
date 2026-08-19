import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center border-0 text-[rgb(237,234,208)] text-xl font-extrabold min-h-16 shadow-[rgba(191,26,47,0.4)_0px_14px_30px] transition-all duration-200 ease-in-out",
  {
    variants: {
      variant: {
        primary: "bg-primary-red text-primary-text",
        success: "bg-success-button",
        outline:
          "border border-primary-text text-primary-text hover:text-white bg-transparent shadow-none",
      },
      size: {
        default: "p-[19px_28px] rounded-3xl",
        sm: "rounded-3xl p-[19px_36px] ",
        lg: "p-[19px_36px] rounded-3xl w-full tablet:w-auto",
        icon: "h-10 w-10 rounded-xl ",
      },
      effect: {
        none: "",
        glow: "hover:-translate-y-[3px] hover:shadow-[0_8px_20px_rgba(255,0,0,0.6)] active:scale-[0.985] active:shadow-[0_4px_10px_rgba(255,0,0,0.8)]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
      effect: "none",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, effect, asChild = false, children, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, effect, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };