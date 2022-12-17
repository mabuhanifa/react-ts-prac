import { createContext, ReactNode, useContext, useReducer } from "react";
import { MainState } from "../types/types";
import { initialState, stateReducer } from "./UseReducer";

const AppContext = createContext({} as MainState);

export default function UseContext({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(stateReducer, initialState);
    const main = {
        state, dispatch
    }
    return (
        <AppContext.Provider value={main}>
            {
                children
            }
        </AppContext.Provider>
    )
}

export function useApp() {
    return useContext(AppContext);
}