import React, {
    SelectHTMLAttributes,
    DetailedHTMLProps,
    ChangeEvent,
} from 'react'
import s from './SuperSelect.module.css'


type SuperSelectPropsType = {
    options: any[]
    onChangeOption: (option: any) => void
}

export const SuperSelect: React.FC<SuperSelectPropsType> = (props) => {
    const {options, onChangeOption} = props

    const mappedOptions= options.map((o) => (
        <option key={o.id} value={o.id}>
            {o.value}
        </option>
    ))

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChangeOption(+(e.currentTarget.value))
    }

    return (
        <select onChange={onChangeCallback}>
            {mappedOptions}
        </select>
    )
}
