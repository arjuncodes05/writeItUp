import { createContext, useEffect, useState } from "react";



export const AuthContext = createContext()

export function AuthProvider({children}){

    const [isUser, setIsUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(isUser))
    }, [isUser])

    return (
        <AuthContext.Provider value={[isUser, setIsUser]} >
            {children}
        </AuthContext.Provider>
    )
}