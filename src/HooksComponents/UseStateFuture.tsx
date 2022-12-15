import { useState } from "react";
type User = {
    name: string;
    email: string
}
const userinfo = {
    name: "Shourov Ahmed",
    email: "moh.abuhanifa@gmail.com"
}
export default function UseStateFuture() {
    const [user, setUser] = useState<User | null>(null);
    //  const [user, setUser] = useState<User>({} as User);
    const handleLogin = () => {
        setUser(userinfo)
    }
    const handleLogOut = () => {
        setUser(null)
    }
    return (
        <div>
            <div>
                <button onClick={handleLogin}>Log In</button> {"   "}
                <button onClick={handleLogOut}>Log Out</button>
            </div>
            <h4>{user ? "Logged In" : "Logged Out"}</h4>
            <h4>{user?.name}</h4>
            <h4>{user?.email}</h4>

        </div>
    )
}
