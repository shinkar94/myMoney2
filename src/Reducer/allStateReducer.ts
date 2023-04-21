import React from 'react';
import {v1} from "uuid";


export type OperationsType =
    {
        id: string
        value: number
        type: string
        description: string
        category: string
        date: string
        name: string
    };


const initialState: OperationsType[] = [
    {
        id: v1(),
        date: "14-04-2023",
        name: "",
        value: 12500,
        type: "income",
        description: "sdfsdf",
        category: "auto"
    },
    {
        id: v1(),
        date: "14-04-2023",
        name: "",
        value: 12700,
        type: "income",
        description: "sdfsdf",
        category: "shop"
    },
    {
        id: v1(),
        date: "14-04-2023",
        name: "",
        value: 123000,
        type: "outcome",
        description: "sdfsdf",
        category: "shmotki"
    },
    {
        id: v1(),
        date: "14-04-2023",
        name: "",
        value: 4000,
        type: "outcome",
        description: "sdfsdf",
        category: "beer"
    }
]

export const allStateReducer = (state: OperationsType[] = initialState, action: ActionType): OperationsType[] => {
    switch (action.type) {
        case "ADD-OPERATION": {
            return [...state, action.newOperation]
        }
        default:
            return state
    }

}

type ActionType = addOperationAC

type addOperationAC = ReturnType<typeof addOperationAC>
// export const addOperationAC = (date:string, name: string, value:number,type: string,description:string,category: string  )=> {
//     return {
//         type: 'ADD-OPERATION',
//         payload: {
//             newOperation: {
//                 id: v1(),
//                 date: date,
//                 name: name,
//                 value: value,
//                 type: type,
//                 description: description,
//                 category: category
//             },
//         }
//     }as const
// }

export const addOperationAC = ( newOperation: OperationsType)=> {
    return {
        type: 'ADD-OPERATION',
        newOperation

    }as const
}