import { useState, useEffect } from "react";

export default function useLoginUserHook(username, password) {
    const [user, setUser] = useState(null) 
    const [isLoading, setIsLoading] = useState(null) 

    useEffect(() => {

        if (!username || !password) return null

        setIsLoading(true)
        setTimeout(() => {
            setUser(true)
            setIsLoading(false)
        },3000)

    },[user, username, password, setUser])

    return { isLoading, user, setUser };


}