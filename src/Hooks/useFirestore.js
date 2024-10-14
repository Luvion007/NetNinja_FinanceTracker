import { useReducer, useEffect, useState } from "react";
import { projectFirestore, timestamp } from "../config/firebase";

let initialState = {
    document: null, 
    isPending: false,
    error: null,
    success: null, 
}

const firestoreReducer = (state, action) => {
    switch (action.type)
    {
        case "IS_PENDING":
            return {isPending: true, document: null, success : false, error: null}
        case "ADD_DOCUMENT":
            return {isPending: false, document : action.payload, success: true, error: null}  
        case "DELETED_DOCUMENT": 
            return {isPending: false, document : null, success: true, error: null}  
        case "ERROR": 
            return {isPending: false, document: null, success: false, error: action.payload }
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

    //only dispatch if not cancelled 
    const dispatchIfNotCancelled = (action) => {
        if (!isCancelled)
        {
            dispatch(action)
        }

    }

    //ref.add() for future usage

    //add boiler plate 
    //doc object
    const addDocument = async (doc) => {
        dispatch({type: "IS_PENDING"})
        
        try{
            //timestamp
            const createdAt = timestamp.fromDate(new Date())
          const addedDocument =  await ref.add({...doc, createdAt})
          dispatchIfNotCancelled({type: 'ADD_DOCUMENT', payload: addedDocument})
        
        }catch(err){
            dispatchIfNotCancelled({type: 'ERROR', payload: err.message})
        }

    }

    const deleteDocument = async (id) => {
        dispatch({type: "IS_PENDING"})

        try{
            await ref.doc(id).delete()
            dispatchIfNotCancelled({type: "DELETED_DOCUMENT"})

        }catch(err)
        {
            dispatchIfNotCancelled({type: "ERROR", payload: "could not delete"})
        }
        

    }

    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return {addDocument, deleteDocument, response}

}
