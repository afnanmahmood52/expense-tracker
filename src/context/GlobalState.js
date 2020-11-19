import React, {createContext, useReducer} from 'react';
import AppReducer from "./AppReducer"

// Initial State
const initialState = {
    transactions:[
        {
            id: 1,
            detail: "Bought Flower",
            amount: -500
        },
        {
            id: 2,
            detail: "Salary Income",
            amount: 25000
        },
        {
            id: 3,
            detail: "Salary Income",
            amount: 25000
        },
        {
            id: 4,
            detail: "Bought Grocery",
            amount: -5000
        }
    ]
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({children})=>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Action
    function deleteTransaction(id){
        dispatch(
            {
                type: "DELETE_TRANSACTION",
                payload: id
            }
        )
    }

    function addTransaction(transaction){
        dispatch(
            {
                type: "ADD_TRANSACTION",
                payload: transaction
            }
        )
    }

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}