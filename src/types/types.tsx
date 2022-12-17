import { ReactNode } from "react";

export type Style = {
    styles: React.CSSProperties
}

export type InputProps = {
    handleClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

export type Btn = {
    handleClick: () => void,
    children: ReactNode
}

export type Literals = { status: "loading" | "success" | "failed" };

export type PersonLists = {
    first: string;
    last: string;
}[]

export interface Person {
    name: string;
    age: number;
}

export type State = {
    counter: number;
    products: Product[];
    // cart: Product[];
}

export type MainState = {
    state: State,
    dispatch: React.Dispatch<Action>
}

export type Product = {
    name: string,
    id: number
}

export type CounterAction = {
    type: "ADD" | "REMOVE", payload: number
}
export type CartAction = { type: "LOAD", payload: Product };

export type Action = CounterAction | CartAction;