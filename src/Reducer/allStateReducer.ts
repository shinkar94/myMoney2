import React from 'react';
import {v1} from "uuid";
import {OperationsTypeObject} from "../component/AddOperationForm/AddOperationForm";


export type OperationsType =
    {
        id: string
        value: number
        type: string
        description: string
        category: string
        date: string
        name: string
        wallet: string
    };


const initialState: OperationsType[] = [
    {
        id: v1(),
        date: "2023-05-14",
        name: "test",
        value: 12500,
        type: "income",
        description: "sdfsdf",
        category: "auto",
        wallet: "cash"
    },
    {
        id: v1(),
        date: "2023-04-11",
        name: "milk",
        value: 12700,
        type: "outcome",
        description: "sdfsdf",
        category: "shop",
        wallet: "cash"
    },
    {
        id: v1(),
        date: "2023-03-17",
        name: "milk",
        value: 11700,
        type: "income",
        description: "sdfsdf",
        category: "shop",
        wallet: "cash"
    },
    {
        id: v1(),
        date: "2023-01-14",
        name: "milk",
        value: 12700,
        type: "outcome",
        description: "sdfsdf",
        category: "shop",
        wallet: "cash"
    },
    {
        id: v1(),
        date: "2023-01-15",
        name: "milk",
        value: 12700,
        type: "income",
        description: "sdfsdf",
        category: "shop",
        wallet: "Wallet"
    },


]
// console.log(new Date("2021-05-14").getTime())
export const allStateReducer = (state: OperationsType[] = initialState, action: ActionType): OperationsType[] => {
    switch (action.type) {
        case "ADD-OPERATION": {
            let newOperation = {...action.newOperation, value: Number(action.newOperation.value)}
            return [...state, newOperation]
        }
        case "SORT-DATE": {
            if (action.payload.value === 'up') {
                return [...state].sort((a, b) => {
                    let newA = new Date(a.date)
                    let newB = new Date(b.date)
                    return newA.getTime() - newB.getTime()
                })
            } else {
                let copyState = [...state]
                return copyState.sort((a, b) => {
                    let newA = new Date(a.date)
                    let newB = new Date(b.date)
                    return newB.getTime() - newA.getTime()
                })
            }
        }
        case "SORT-SUM": {
             if(action.payload.value === 'up'){
               return [...state].sort((a, b) => a.value - b.value)
        }else {
                 return [...state].sort((a, b) => b.value - a.value)
             }
        }
        default:
            return state
    }

}

type ActionType = addOperationACType | sortDateACType | sortSumACType

type addOperationACType = ReturnType<typeof addOperationAC>
type sortDateACType = ReturnType<typeof sortDateAC>
type sortSumACType = ReturnType<typeof sortSumAC>



export const addOperationAC = (newOperation: OperationsTypeObject) => {
    return {
        type: 'ADD-OPERATION',
        newOperation

    } as const
}

export const sortDateAC = (value: string) => {
    return {
        type: 'SORT-DATE',
        payload: {
            value
        }
    } as const
}
export const sortSumAC = (value: string) => {
    return {
        type: 'SORT-SUM',
        payload: {
            value
        }
    } as const
}

// export const filterTypeAC = (value: string) => {
// return{
//     type: 'FILTER-TYPE',
//     payload: {
//         value
//     }
// }as const
// }