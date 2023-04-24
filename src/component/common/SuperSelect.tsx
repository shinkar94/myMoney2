import React, {
    SelectHTMLAttributes,
    DetailedHTMLProps,
    ChangeEvent,
} from 'react'
import s from './SuperSelect.module.css'
import {OperationsType} from "../../Reducer/allStateReducer";


type SuperSelectPropsType = {
    options: any[]
    onChangeOption: (option: any) => void
    property:string
    newItem: OperationsType
}

export const SuperSelect: React.FC<SuperSelectPropsType> = (props) => {
    const {options, onChangeOption, property,newItem} = props

    const mappedOptions= options.map((o) => (
        <option key={o.id} value={o.value}>
            {o.value}
        </option>
    ))

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChangeOption({...newItem, [property]: e.currentTarget.value})
    }

    return (
        <select onChange={onChangeCallback}>
            {mappedOptions}
        </select>
    )
}
