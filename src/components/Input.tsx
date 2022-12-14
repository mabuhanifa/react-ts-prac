import { InputProps } from "../types/types";

export default function Input({ handleClick, value }: InputProps) {
    return (
        <input type='text' onChange={(e) => handleClick(e)} />
    )
}
