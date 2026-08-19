import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const tagVariants = cva(
  "inline-flex items-center gap-1.5 px-3.25 py-2 rounded-full  text-[13px] font-bold text-primary-text ",
  {
    variants: {
      variant: {
        outline: "bg-primary-foreground/6 border border-primary-foreground/10 text-primary-foreground",
        green: "bg-primary-green",
        blue: "bg-primary-blue",
        brown: "bg-primary-foreground/90",
      },
    },
    defaultVariants: {
      variant: "outline",
    },
  }
);

export interface TagProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof tagVariants> {}

const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(tagVariants({ variant, className }))}
        {...props}
      />
    );
  }
);

Tag.displayName = "Tag";

export { Tag, tagVariants };
