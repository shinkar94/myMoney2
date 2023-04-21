import React, {ChangeEvent} from 'react';
import {OperationsType} from "../../Reducer/allStateReducer";

type InputPropsType = {
    setNewItem: (newItem: OperationsType) => void
    value: string | number
    type: string
    newItem: OperationsType
    property: string
}

export const SuperInput: React.FC<InputPropsType> = (props) => {
    const {setNewItem,value,type,newItem,property } = props
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewItem(type === 'number'
            ? {...newItem, [property]: Number(e.currentTarget.value)}
            : {...newItem, [property]: e.currentTarget.value})
    }
    return (
        <>
            <input type={type} value={value} onChange={onChangeInputHandler}/>
        </>
    );
};