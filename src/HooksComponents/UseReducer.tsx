import { useReducer } from "react";
type Action = { type: "ADD" | "REMOVE", payload: number };

type Product = {
    name: string,
    id: number
}
type State = {
    counter: number;
    // products: Product[];
    // cart: Product[];
}
const initialState = {
    counter: 0,
    // products: [],
    // cart: [],
}


function stateReducer(state: State, action: Action) {

}


export default function UseReducer() {
    const [state, dispatch] = useReducer(stateReducer, initialState)

    return (
        <div>UseReducer</div>
    )
}
