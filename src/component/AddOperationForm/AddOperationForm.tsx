import React, {ChangeEvent, useState} from 'react';
import {addOperationAC, OperationsType} from '../../Reducer/allStateReducer';
import {v1} from 'uuid';
import {SuperInput} from '../common/SuperInput';
import {SuperButton} from '../common/SuperButton';
import {Dispatch} from 'redux';
import {SuperSelect} from '../common/SuperSelect';

type AddOperationFormType = {
    dispatch: Dispatch
}

export const AddOperationForm: React.FC<AddOperationFormType> = (props) => {

    const [newItem, setNewItem] = useState<OperationsType>({
        id: v1(),
        date: '14-04-2023',
        name: '',
        value: 4000,
        type: 'outcome',
        description: 'sdfsdf',
        category: 'beer'
    })

    const options = [
        {id: 1, value: 'income'},
        {id: 2, value: 'outcome'}
    ]
    const [optionsValue, setOptionsValue] = useState<number>(1)

    const onClickHandler = () => {
        // Рома, сделай диспатч
        props.dispatch(addOperationAC(newItem))
    }

    return (
        <div>
            {/*<input type="text" value={newItem.name} onChange={onChangHandler}/>*/}
            <div>
                <SuperInput property={'date'} newItem={newItem} type={'date'} setNewItem={setNewItem}
                            value={newItem.date}/>
                <SuperInput property={'name'} newItem={newItem} type={'text'} setNewItem={setNewItem}
                            value={newItem.name}/>
                <SuperInput property={'value'} newItem={newItem} type={'number'} setNewItem={setNewItem}
                            value={newItem.value}/>
                {/*<SuperInput property={'type'} newItem={newItem} type={'text'} setNewItem={setNewItem}*/}
                {/*            value={newItem.type}/>*/}
                <SuperSelect options={options} onChangeOption={setOptionsValue}/>
                <SuperInput property={'description'} newItem={newItem} type={'text'} setNewItem={setNewItem}
                            value={newItem.description}/>
                <SuperInput property={'category'} newItem={newItem} type={'text'} setNewItem={setNewItem}
                            value={newItem.category}/>
                <SuperButton callBack={onClickHandler} name={'ADD'}/>
            </div>

            <button style={{
                position: 'fixed',
                bottom: '10px',
                right: '10px',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                color: 'white',
                background: 'red'
            }}>+
            </button>
        </div>
    );
};

