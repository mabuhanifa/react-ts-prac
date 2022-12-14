export type Style = {
    styles: React.CSSProperties
}
export type InputProps = {
    handleClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}
import { ReactNode } from "react";
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