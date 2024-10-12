import { useEffect, useState } from "react";
import { projectAuth } from "../config/firebase";
import { useAuthContext } from "./useAuthContext";

export const useLogIn = () => {
    const [isCancel, setIsCancel] = useState(false)
    const [error, setError] = useState(null)
    const [pending, setPending] = useState(false)
    const { dispatch } = useAuthContext()

    const login = async (Email, Password) => {
        setPending(true)
        setError(null)
        
        //sign the user out
        try {
            const res = await projectAuth.signInWithEmailAndPassword(Email, Password)
            //dispatch logout action
            dispatch({type: 'LOGIN', payload: res.user })
            setPending(null)
            setError(null)

            //update staate
            if(!isCancel)
            {
                setPending(false)
                setError(null)
            }

        }catch(err)
        {
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
    return {login, error, pending}
}