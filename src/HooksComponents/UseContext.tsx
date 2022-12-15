import { createContext, ReactNode, useContext, useReducer } from "react";
import { Action, initialState, State, stateReducer } from "./UseReducer";

type MainState = {
    state: State,
    dispatch: React.Dispatch<Action>
}
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