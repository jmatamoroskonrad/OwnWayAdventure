import type { ReactNode } from "react";

export type OverlayProps = {
    open: boolean;
    onClose: () => void;
    children: ReactNode;
}