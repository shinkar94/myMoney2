import React, {ChangeEvent, useState} from 'react';
import {addOperationAC, OperationsType} from "../../Reducer/allStateReducer";
import {v1} from "uuid";
import {SuperInput} from "../common/SuperInput";
import {SuperButton} from "../common/SuperButton";
import {Dispatch} from "redux";

type AddOperationFormType = {
    dispatch: Dispatch
}

export const AddOperationForm: React.FC<AddOperationFormType> = (props) => {
    const [newItem, setNewItem] = useState<OperationsType>({
        id: v1(),
        date: "14-04-2023",
        name: "",
        value: 4000,
        type: "outcome",
        description: "sdfsdf",
        category: "beer"
    })
    console.log(newItem)


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
                <SuperInput property={'type'} newItem={newItem} type={'text'} setNewItem={setNewItem}
                            value={newItem.type}/>
                <SuperInput property={'description'} newItem={newItem} type={'text'} setNewItem={setNewItem}
                            value={newItem.description}/>
                <SuperInput property={'category'} newItem={newItem} type={'text'} setNewItem={setNewItem}
                            value={newItem.category}/>
                <SuperButton callBack={onClickHandler} name={'ADD'}/>
            </div>

            <button style={{
                position: "fixed",
                bottom: "10px",
                right: "10px",
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                color: "white",
                background: "red"
            }}>+
            </button>
        </div>
    );
};

