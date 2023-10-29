import { createContext } from "react";

type CoditionalRenderingContextType = {
    renderServicies: boolean,
    setRenderServicies: (render: boolean) => void
}

export const ConditionalRenderingContext = createContext<CoditionalRenderingContextType>({
    renderServicies: true,
    setRenderServicies: () => { }
});