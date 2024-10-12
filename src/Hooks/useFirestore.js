import { useReducer, useEffect, useState } from "react";
import { projectFirestore } from "../config/firebase";

let initialState = {
    document: null, 
    isPending: false,
    error: null,
    success: null, 
}

const firestoreReducer = (state, action) => {
    switch (action.type)
    {


        default: 
            return state 
    }


}

export const useFirestore = (collection) => {
    const [response, dispatch] = useReducer (firestoreReducer, initialState)
    //when switching pages and the request is still processing
    const [isCancelled, setIsCancelled] = useState(false)

    //collection ref
    const ref = projectFirestore.collection(collection)

    //ref.add() for future usage

    //add boiler plate 
    const addDocument = (doc) => {

    }

    const deleteDocument = (id) => {

    }

    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return {addDocument, deleteDocument}

}
