import { cn } from "@/lib/utils";
import type { AppContainerProps } from "./AppContainer.types";

export function AppContainer({
  children,
  className,
  ...rest
}: AppContainerProps) {
  return (
    <div {...rest} className={cn("mx-auto px-2", className)}>
      {children}
    </div>
  );
}