import React, { useEffect, useState } from 'react'
import { useFirestore } from '../../Hooks/useFirestore'


export default function Transactionform({uid}) {
    const [transName, setTransName] = useState("")
    const [amount, setAmount] = useState("")
    const { addDocument, response } = useFirestore('transactions')

    const handleSubmit = (e) => {
        e.preventDefault()
        addDocument({
            uid,
            transName,
            amount
        })
       
    }

    //reset the field
    useEffect(()=> {
        if(response.success)
        {
            setTransName("")
            setAmount("")
        }
    }, [response.success])

  return (
    <>
    <h3>Add Transaction</h3>
    <form onSubmit={handleSubmit}>
        <label>
            <span>Transanction Name: </span>
            <input
            type='text'
            required
            onChange={(e) => setTransName(e.target.value)}
            value={transName}
            >
            </input>
        </label>
        <label>
            <span>Transanction Amount: </span>
            <input
            type='number'
            required
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            >
            </input>
        </label>
        <button>add Transaction</button>

    </form>
      
    </>
  )
}
