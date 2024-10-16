import { createContext, useEffect,  useReducer } from "react";
import { projectAuth } from "../config/firebase";

export const AuthContext = createContext()

export const authReducer = (state, action) => {
    switch(action.type){
        case "LOGIN":
            return{...state, user: action.payload}
        case "LOGOUT": 
            return{...state, user: null}
        case "AUTH_IS_READY": 
            return {...state, user: action.payload, authIsReady : true}
        default: 
            return state

    }
}

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null,
        authIsReady: false,
 
      
    })


    //to let the website remember that user is login
    useEffect(()=> {
        const unsub = projectAuth.onAuthStateChanged((user) => {
            dispatch({type: 'AUTH_IS_READY', payload: user})
            //make this function only works once
            unsub()
        })

    }, [])

    console.log("AuthContext: ", state)
    return (

        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}