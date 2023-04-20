import React from 'react';
import {v1} from "uuid";
import {OperationsType} from "../App";

const income = 'income'
const outcome = 'outcome'
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

export const allStateReducer = (state: OperationsType = initialState, action: SumACType) => {
switch (action.type) {
    case "SUM": {
        return state[action.payload.idOperations].reduce((acc, el) => {
            return acc + el.value
        }, 0)
    }default: return state
}

}


type SumACType = ReturnType<typeof sumAC>

export const sumAC = (idOperations: string)=> {
    return {
        type: "SUM",
        payload: {
            idOperations
        }
    }as const
}