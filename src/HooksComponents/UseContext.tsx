import { createContext, ReactNode, useReducer } from "react";
import { initialState, stateReducer } from "./UseReducer";

const AppContext = createContext({});

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
