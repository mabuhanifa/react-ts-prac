import { ReactNode } from "react";
type Btn = {
    handleClick: () => void,
    children: ReactNode
}

export default function Button({ handleClick, children }: Btn) {
    return (
        <button onClick={handleClick}>{children}</button>
    )
}
