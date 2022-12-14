import { Btn } from "../types/types";


export default function Button({ handleClick, children }: Btn) {
    return (
        <button onClick={handleClick}>{children}</button>
    )
}
