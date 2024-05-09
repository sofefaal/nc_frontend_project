import { createContext } from "react";
import { useState } from "react"

export const UserContext = createContext()

export const UserProvider = ({children}) => {
    const [userLogin, setUserLogin] = useState({
        username: "",
        name: "",
        avatar_url: ""
    });

    const isUserLoggedIn = !!userLogin.username

    return(
        <UserContext.Provider value={{userLogin, setUserLogin, isUserLoggedIn}}>
            {children}
        </UserContext.Provider>
    )
}