import React, {ChangeEvent, useState} from 'react';
import {addOperationAC, OperationsType} from '../../Reducer/allStateReducer';
import {v1} from 'uuid';
import {SuperInput} from '../common/SuperInput';
import {SuperButton} from '../common/SuperButton';
import {SuperSelect} from '../common/SuperSelect';
import {useAppDispatch} from "../../Hok/useAppSelector";
import styled, {css} from "styled-components";
import {Dispatch} from "redux";


export const AddOperationForm = () => {

    const dispatch: Dispatch = useAppDispatch()


    const [newItem, setNewItem] = useState<OperationsType>({
        id: v1(),
        date: '',
        name: '',
        value: 0,
        type: '',
        description: '',
        category: ''
    })

    const [collapsedForm, setCollapsedForm] = useState<boolean>(false)

    const options = [
        {id: 1, value: 'income'},
        {id: 2, value: 'outcome'}
    ]
    const onClickHandler = () => {
        // Рома, сделай диспатч
        dispatch(addOperationAC(newItem))
        setNewItem({
            id: v1(),
            date: '',
            name: '',
            value: 0,
            type: '',
            description: '',
            category: ''
        })
    }

    return (
        <div>
            {/*<input type="text" value={newItem.name} onChange={onChangHandler}/>*/}
            <ModalOperationForm collapsedForm={collapsedForm}>

                <SuperInput property={'date'} newItem={newItem} type={'date'} setNewItem={setNewItem}
                            value={newItem.date}/>

                <SuperInput placeholder={'Название покупки'} property={'name'} newItem={newItem} type={'text'}
                            setNewItem={setNewItem}
                            value={newItem.name}/>

                <SuperInput placeholder={'Сумма покупки'} property={'value'} newItem={newItem} type={'number'}
                            setNewItem={setNewItem}
                            value={newItem.value}/>

                {/*<SuperInput property={'type'} newItem={newItem} type={'text'} setNewItem={setNewItem}*/}
                {/*            value={newItem.type}/>*/}
                <SuperSelect options={options} newItem={newItem} property={'type'} onChangeOption={setNewItem}/>

                <SuperInput placeholder={'Описание'} property={'description'} newItem={newItem} type={'text'}
                            setNewItem={setNewItem}
                            value={newItem.description}/>

                <SuperInput placeholder={'Категория'} property={'category'} newItem={newItem} type={'text'}
                            setNewItem={setNewItem}
                            value={newItem.category}/>

                <SuperButton callBack={onClickHandler} name={'ADD'}/>
            </ModalOperationForm>

            <button onClick={() => setCollapsedForm(!collapsedForm)} style={{
                position: 'fixed',
                bottom: '10px',
                right: '10px',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                color: 'white',
                background: 'red',
                zIndex: '2'
            }}>+
            </button>
        </div>
    );
};

type ModalType = {
    collapsedForm: boolean
}
const ModalOperationForm = styled.div<ModalType>`
  position: fixed;
  top: -74px;
  left: 50%;
  display: flex;
  flex-direction: column;
  width: 300px;
  transform: translate(-50%, -50%);
  transition: 1s;
  z-index: 2;
  ${props => props.collapsedForm && css`
    top: 50%;
  `}

`

