import { useState, useEffect } from "react"
import { projectAuth } from "../config/firebase"
import { useAuthContext } from "./useAuthContext"

export const useSignUp = () => {
    const [isCancel, setIsCancel] = useState(false)
    const [error, setError] = useState(null)
    const [pending, setPending] = useState(false)
    const { dispatch } = useAuthContext()

    const signup = async (Email, Password, DisplayName) => {
        setError(null)
        setPending(true)

        try {
            //signup user
            const res = await projectAuth.createUserWithEmailAndPassword(Email, Password)
            console.log(res.user)

            if (!res){
                throw new Error("could not complete sign up")
            }

              //add display name to user because you need to create the user first before you can add display name
        await res.user.updateProfile({ displayName: DisplayName})

        //dispatch login action
        dispatch({type: 'LOGIN', payload: res.user})
        if(!isCancel)
            {
                setPending(false)
                setError(null)
            }
        }
        catch (err) {
            if(!isCancel)
                {
            console.log(err.message)
            setError(err.message)
            setPending(false)
        }
        } 

    }
    useEffect(() => {
        return () => setIsCancel(true)

    }, [])
    return { error, pending, signup}

}