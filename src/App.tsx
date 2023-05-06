import './App.css'
import {Content} from "./component/Content/Content";
import {useAppDispatch, useAppSelector} from "./Hok/useAppSelector";
import {SideBar} from "./component/SideBar/SideBar";
import styled from "styled-components";
import {AddOperationForm} from "./component/AddOperationForm/AddOperationForm";
import {useState} from "react";


function App() {
    const state = useAppSelector(state => state.allState)

    const sum = (type: string) => {
        return state.filter(item =>
            item.type === type).reduce((acc, el) =>
            acc + el.value, 0)
    }
    return (
        <div className="App">
            <Wrapper>
                <SideBar/>
                <ContentWrapper>
                    <AddOperationForm />
                    <Content totalIncome={sum('income')} totalOutcome={sum('outcome')} />
                </ContentWrapper>
            </Wrapper>
        </div>
    )
}

export default App




const Wrapper = styled.div`
  
  height: 100vh;
  background: red;
  display: flex;
  margin-left: 30px;
  margin-right: 30px;

`
const ContentWrapper = styled.div`
  //margin-left: 30px;
  //margin-right: 30px;
  //width: 50%;
  //padding: 0px 0px 0px 30px;
  //padding: 10px 0px 10px 40px;
  //margin-right: 100px;
`