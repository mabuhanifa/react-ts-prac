import { useUser } from "./UserContext";

export default function User() {
    const { user, setUser } = useUser();
    console.log(user, setUser);
    const handleLogIn = () => { }
    const handleLogOut = () => { }
    return (
        <div>
            <div>
                <button onClick={handleLogIn}>Log In</button>
                <button onClick={handleLogOut}>Log Out</button>
            </div>
            <div>
                <h2>User Name is</h2>
                <h2>User Name is</h2>
            </div>
        </div>
    )
}
