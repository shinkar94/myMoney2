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
        name: "test",
        value: 12500,
        type: "income",
        description: "sdfsdf",
        category: "auto"
    },
    {
        id: v1(),
        date: "14-04-2023",
        name: "milk",
        value: 12700,
        type: "income",
        description: "sdfsdf",
        category: "shop"
    },
    {
        id: v1(),
        date: "14-04-2023",
        name: "milk",
        value: 12700,
        type: "income",
        description: "sdfsdf",
        category: "shop"
    },
    {
        id: v1(),
        date: "14-01-2023",
        name: "bread",
        value: 0,
        type: "outcome",
        description: "sdfsdf",
        category: "shmotki"
    },
    {
        id: v1(),
        date: "14-02-2023",
        name: "bread",
        value: 600,
        type: "outcome",
        description: "sdfsdf",
        category: "shmotki"
    },
    {
        id: v1(),
        date: "14-03-2023",
        name: "bread",
        value: 1000,
        type: "outcome",
        description: "sdfsdf",
        category: "shmotki"
    },
    {
        id: v1(),
        date: "14-04-2023",
        name: "ages",
        value: 600,
        type: "outcome",
        description: "sdfsdf",
        category: "beer"
    },
    {
        id: v1(),
        date: "14-05-2023",
        name: "ages",
        value: 500,
        type: "outcome",
        description: "sdfsdf",
        category: "beer"
    },
    {
        id: v1(),
        date: "14-06-2023",
        name: "ages",
        value: 600,
        type: "outcome",
        description: "sdfsdf",
        category: "beer"
    },{
        id: v1(),
        date: "14-07-2023",
        name: "ages",
        value: 400,
        type: "outcome",
        description: "sdfsdf",
        category: "beer"
    },
    {
        id: v1(),
        date: "14-08-2023",
        name: "ages",
        value: 300,
        type: "outcome",
        description: "sdfsdf",
        category: "beer"
    },
    {
        id: v1(),
        date: "14-09-2023",
        name: "ages",
        value: 400,
        type: "outcome",
        description: "sdfsdf",
        category: "beer"
    },
    {
        id: v1(),
        date: "14-10-2023",
        name: "ages",
        value: 500,
        type: "outcome",
        description: "sdfsdf",
        category: "beer"
    },
    {
        id: v1(),
        date: "14-11-2023",
        name: "ages",
        value: 600,
        type: "outcome",
        description: "sdfsdf",
        category: "beer"
    },
    {
        id: v1(),
        date: "14-12-2023",
        name: "ages",
        value: 700,
        type: "outcome",
        description: "sdfsdf",
        category: "beer"
    },
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