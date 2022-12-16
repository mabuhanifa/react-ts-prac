import { createContext, ReactNode, useContext, useState } from "react";

export type AuthUser = {
    name: string;
    email: string;
};

type UserContextType = { user: (AuthUser | null), setUser: React.Dispatch<React.SetStateAction<AuthUser | null>> };

export const UserContext = createContext({} as UserContextType);

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<null | AuthUser>({ name: "", email: "" });
    const context = { user, setUser };
    return <UserContext.Provider value={context}>
        {
            children
        }
    </UserContext.Provider>

}

export const useUser = () => {
    return useContext(UserContext);
};