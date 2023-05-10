import React, {ChangeEvent, useState} from 'react';
import {addOperationAC, OperationsType} from '../../Reducer/allStateReducer';
import {v1} from 'uuid';
import {SuperInput} from '../common/SuperInput';
import {SuperButton} from '../common/SuperButton';
import {SuperSelect} from '../common/SuperSelect';
import {useAppDispatch, useAppSelector} from "../../Hok/useAppSelector";
import styled, {css} from "styled-components";
import {Dispatch} from "redux";
import {onBlurAC} from "../../Reducer/helperReducer";


type OptionsType = {
    id: number
    value: string
}

export const AddOperationForm = () => {
    const stateHelper = useAppSelector(state=> state.helper)
    const statusBtn = stateHelper.statusAddBtn
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
        console.log('ClickSend')
        console.log(newItem)
        if(newItem.type === ''){
            alert("Error! type = ''")
        }else if(newItem.name === ''){
            alert("Error! name = ''")
        }else if(newItem.date === ''){
            alert("Error! date = ''")
        }else{
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

    }

    const formDownClick = ()=> {
        setCollapsedForm(!collapsedForm)
        dispatch(onBlurAC("addBtn"))
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
                <SuperSelect options={options} newItem={newItem} property={'type'} onChangeOption={setNewItem}/>

                <SuperInput placeholder={'Описание'} property={'description'} newItem={newItem} type={'text'}
                            setNewItem={setNewItem}
                            value={newItem.description}/>

                <SuperInput placeholder={'Категория'} property={'category'} newItem={newItem} type={'text'}
                            setNewItem={setNewItem}
                            value={newItem.category}/>

                <SuperButton
                    callBack={onClickHandler}
                    name={'ADD'}
                    bgColor={'linear-gradient(90deg, rgba(255, 255, 255, 0), #312b52, rgba(255, 255, 255, 0))'}
                    height={'30px'}
                    color={'white'}
                    borderRadius={'4px'}
                />
            </ModalOperationForm>

            <BtnAddForm status={statusBtn} onClick={formDownClick} >+</BtnAddForm>
        </div>
    );
};

type ModalType = {
    collapsedForm: boolean
}
const ModalOperationForm = styled.div<ModalType>`
  position: fixed;
  top: -184px;
  left: 50%;
  display: flex;
  flex-direction: column;
  width: 300px;
  transform: translate(-50%, -50%);
  transition: 1s;
  padding: 20px 10px 10px 10px;
  background: #39394B;
  border-radius: 10px;
  box-shadow: 0 2px 10px black;
  z-index: 11;
  ${props => props.collapsedForm && css`
    top: 50%;
  `}
  & input, select{
    background: #222131;
    color: rgb(215,215,215);
    height: 40px;
    //border: 2px outset black;
    box-shadow: inset 2px 2px black;
    margin-bottom: 2px;
    border-radius: 5px;
    
    &::placeholder{
      color: rgb(215,215,215);
    }
  }

`
const BtnAddForm = styled.button<{status:boolean}>`
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  color: white;
  background: radial-gradient(#312b52, rgba(255, 255, 255, 0));
  z-index: 11;
  cursor: pointer;
  font-size: 45px;
  transform: rotate(-0deg);
  transition: 0.5s;
  ${props => props.status && css`
    transform: rotate(-45deg);
  `}
  &:hover{
    background: radial-gradient(red, rgba(255, 255, 255, 0));
  }
`

