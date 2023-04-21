import {v1} from "uuid";
import {allStateReducer, OperationsType} from './allStateReducer';
import {addOperationAC} from './allStateReducer';
import { beforeEach, test, expect } from 'vitest'

let startState: OperationsType[]

beforeEach(() => {

    startState = [
        {
            id: v1(),
            date: "14-04-2023",
            name: "",
            value: 12500,
            type: "income",
            description: "sdfsdf",
            category: "auto"
        },
    ]
})


test('add new operation', () => {
    const date = '21-04-2023';
    const name = 'Example';
    const value = 500;
    const type = 'income';
    const description = 'An example operation';
    const category = 'misc';

    const newOperation = {
        id: v1(),
        date: date,
        name: name,
        value: value,
        type: type,
        description: description,
        category: category
    }

    const newState = allStateReducer(startState,
        addOperationAC(newOperation))

    expect(newState.length).toBe(2);
});



