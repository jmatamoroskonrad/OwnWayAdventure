import { useContext } from "react";
import { TourContext } from "@/context/TourContext";

export function useTours() {
    const context = useContext(TourContext);
    if (!context) {
        throw new Error("must use a TourProvider")
    }
    return context;
}