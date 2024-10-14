import { useEffect, useRef, useState } from "react"
import { projectFirestore } from "../config/firebase"


export const useCollection = (collection, _query, _orderBy) => {
    const [document, setDocument] = useState(null)
    const [error, setError] = useState(null) 

    //Break out of infinite loop when using reference type as a dependency of useEffect
    //_query is an array, so it would be recognized as "different" on every function call
    //use useRef it make the value the same
    //remember when an array is used in a dependency, you need to use ref to specify it
    const query = useRef(_query).current
    const orderBy = useRef(_orderBy).current
    useEffect(() => {
        let ref = projectFirestore.collection(collection)


        //make it appear based on the user
        if(query)
        {
            ref = ref.where(...query)
        }
        if (orderBy)
        {
            ref = ref.orderBy(...orderBy)
        }


        const unsubscribe = ref.onSnapshot(snapshot => {
            let results = []
            //doc represent array of document in that snapshot object
            snapshot.docs.forEach((doc) => {
                results.push({...doc.data(), id: doc.id})
        })
            setDocument(results)
            setError(null)
        }, (error) => {
            console.log(error)
            setError("could not fetch data")
        }
    )

    //when moving out of the page, the event listener will stop  on unmount
    return () => {unsubscribe()}
    }, [collection, query])

    return {document, error}

}