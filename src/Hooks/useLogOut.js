import { useState } from "react";
import { projectAuth } from "../config/firebase";
import { useAuthContext } from "./useAuthContext";

const useLogOut = () => {
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

        }catch(err)
        {
            console.log(err.message)
            setError(err.message)
            setPending(false)
        }
    }
    return {logout, error, pending}
}