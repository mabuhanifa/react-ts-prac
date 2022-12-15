
type CounterAction = {
    type: "ADD" | "REMOVE", payload: number
}
type CartAction = { type: "LOAD", payload: Product };

type Action = CounterAction | CartAction;

type Product = {
    name: string,
    id: number
}
type State = {
    counter: number;
    products: Product[];
    // cart: Product[];
}
export const initialState: State = {
    counter: 0,
    products: [],
    // cart: [],
}
const product = {
    name: "Product",
    id: initialState.products.length + 1
}

export function stateReducer(state: State, action: Action) {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                counter: state.counter + action.payload
            }
        case "REMOVE":
            return {
                ...state,
                counter: state.counter - action.payload
            }
        case "LOAD":
            return {
                ...state,
                products: [...state.products, action.payload]
            }
    }
}


export default function UseReducer() {

    console.log(state)
    return (
        <div>
            <h2>{state.counter}</h2>

            <br />
            <button
                onClick={() => dispatch({
                    type: "ADD",
                    payload: 1
                })}>+</button>

            <br />
            <button
                onClick={() => dispatch({
                    type: "REMOVE",
                    payload: 1
                })}>-</button>
            <br />
            <button
                onClick={() => dispatch({
                    type: "LOAD",
                    payload: product
                })}>-</button>
        </div>
    )
}
