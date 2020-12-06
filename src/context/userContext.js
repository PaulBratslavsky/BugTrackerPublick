import { createContext, useState } from 'react'
import useGetDataHook from '../hooks/useGetDataHook'

export const UserContext = createContext(null)
const urlQuery = "https://api.github.com/users/paulbratslavsky"

export default function UserContextProvider({children}) {
    const { isLoading, data } = useGetDataHook(urlQuery);
    const [user, setUser] = useState(false)

    return <UserContext.Provider value={{data, isLoading, user, setUser}}>
        {children}
    </UserContext.Provider>
}
