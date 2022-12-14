import { ReactNode } from "react";
type ButtonProps = {
    handleClick: () => void
}

export default function Button({ handleClick, children }: { handleClick: ButtonProps, children: ReactNode }) {
    return (
        <button>{children}</button>
    )
}
