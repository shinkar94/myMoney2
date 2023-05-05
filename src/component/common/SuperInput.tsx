import React, {ChangeEvent} from 'react';
import {OperationsType} from "../../Reducer/allStateReducer";

type InputPropsType = {
    setNewItem: (newItem: OperationsType) => void
    value: string | number
    type: string
    newItem: OperationsType
    property: string
    placeholder?:string
}

export const SuperInput: React.FC<InputPropsType> = (props) => {
    const {setNewItem,value,type,newItem,property,placeholder } = props
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewItem(type === 'number'
            ? {...newItem, [property]: Number(e.currentTarget.value)}
            : {...newItem, [property]: e.currentTarget.value})
    }
    return (
        <>
            <input placeholder={placeholder} type={type} value={value} onChange={onChangeInputHandler}/>
        </>
    );
};