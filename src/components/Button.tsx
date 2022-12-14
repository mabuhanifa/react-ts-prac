import { ReactNode } from "react";

export default function Button({ handleClick, children }: { handleClick: () => void, children: ReactNode }) {
    return (
        <button onClick={handleClick}>{children}</button>
    )
}
