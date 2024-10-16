import { useEffect, useState } from "react";
import { projectAuth } from "../config/firebase";
import { useAuthContext } from "./useAuthContext";

export const useLogOut = () => {
    const [isCancel, setIsCancel] = useState(false)
    const [error, setError] = useState(null)
    const [pending, setPending] = useState(false)
    const { dispatch } = useAuthContext()

    const logout = async () => {
        setPending(true)
        setError(null)
        
        //sign the user out
        try {
            await projectAuth.signOut()
            //dispatch logout action
            dispatch({type: 'LOGOUT'})
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
    return {logout, error, pending}
}