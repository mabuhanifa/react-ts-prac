import { useUser } from "./UserContext";

export default function User() {
    const { user, setUser } = useUser();
    const handleLogIn = () => {
        setUser({
            name: "Shourov",
            email: "shourov@gmail.com"
        })
    }
    const handleLogOut = () => {
        setUser(null)
    }
    return (
        <div>
            <div>
                <button onClick={handleLogIn}>Log In</button>
                <button onClick={handleLogOut}>Log Out</button>
            </div>
            <div>
                <h2>User Name is {user?.name}</h2>
                <h2>User Name is {user?.email}</h2>
            </div>
        </div>
    )
}
