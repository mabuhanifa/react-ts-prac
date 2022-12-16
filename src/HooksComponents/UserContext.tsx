import { createContext, ReactNode, useState } from "react";

export type AuthUser = {
    name: string;
    email: string;
}

export const UserContext = createContext(null)

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<null | AuthUser>(null);
    return <UserContext.Provider value={ }>
        {children}
    </UserContext.Provider>

}