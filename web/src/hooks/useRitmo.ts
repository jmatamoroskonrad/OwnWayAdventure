import { useContext } from "react";
import { RitmoContext } from "@/context/RitmoContext";

export function useRitmo() {
    const context = useContext(RitmoContext);
     if (!context) {
        throw new Error("must use a RitmoProvider")
    }
    return context;
}