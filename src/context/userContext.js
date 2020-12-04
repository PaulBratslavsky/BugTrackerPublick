import { createContext } from 'react'
import useGetDataHook from '../hooks/useGetDataHook'

export const UserContext = createContext(null)
const urlQuery = "https://api.github.com/users/paulbratslavsky"

export default function UserContextProvider({children}) {
    const { isLoading, data } = useGetDataHook(urlQuery);

    return <UserContext.Provider value={{data, isLoading}}>
        {children}
    </UserContext.Provider>
}
