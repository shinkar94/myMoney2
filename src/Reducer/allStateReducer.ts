import React from 'react';
import {v1} from "uuid";

export type OperationsType = {
    [key: string]: ItemType[]
}
export type ItemType =
    {
        id: string
        value: number
        type: string
        description: string
        category: string
        date: string
        name: string
    };

export const income = 'income'
export const outcome = 'outcome'
const initialState: OperationsType = {
    [income]: [
        {
            id: v1(),
            date: "14-04-2023",
            name: "",
            value: 12500,
            type: "income",
            description: "sdfsdf",
            category: "sdfsdf"
        },
        {
            id: v1(),
            date: "14-04-2023",
            name: "",
            value: 12700,
            type: "income",
            description: "sdfsdf",
            category: "sdfsdf"
        }
    ],
    [outcome]: [
        {
            id: v1(),
            date: "14-04-2023",
            name: "",
            value: 200,
            type: "outcome",
            description: "sdfsdf",
            category: "sdfsdfsdf"
        },
        {
            id: v1(),
            date: "14-04-2023",
            name: "",
            value: 200,
            type: "outcome",
            description: "sdfsdf",
            category: "sdfsdfsdf"
        }
    ],
}

export const allStateReducer = (state: OperationsType = initialState, action: any):OperationsType => {
switch (action.type) {
    case "XXX": {
        return state
    }
    default: return state
}

}


// type SumACType = ReturnType<typeof sumAC>
//
// export const sumAC = (idOperations: string)=> {
//     return {
//         type: "XXX",
//         payload: {
//             idOperations
//         }
//     }as const
// }