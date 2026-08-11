import type { HTMLAttributes, ReactNode } from "react";

export interface AppContainerProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}