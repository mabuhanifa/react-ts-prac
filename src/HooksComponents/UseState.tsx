import { useState } from "react";
import { useApp } from "./UseContext";

export default function UseState() {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const { state, dispatch } = useApp();
    const handleLogin = () => {
        setIsLoggedIn(true)
    }
    const handleLogOut = () => {
        setIsLoggedIn(false)
    }
    return (
        <div>
            <div>
                <button onClick={handleLogin}>Log In</button> {"   "}
                <button onClick={handleLogOut}>Log Out</button>
            </div>
            <h4>{isLoggedIn ? "Logged In" : "Logged Out"}</h4>
        </div>
    )
}
