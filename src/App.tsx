import './App.css'
import {Content} from "./component/Content/Content";
import {useAppDispatch, useAppSelector} from "./Hok/useAppSelector";
import {SideBar} from "./component/SideBar/SideBar";
import styled from "styled-components";
import {AddOperationForm} from "./component/AddOperationForm/AddOperationForm";


function App() {
    const state = useAppSelector(state => state.allState)
    const dispatch= useAppDispatch()

    const sum = (type: string) => {
        return state.filter(item =>
            item.type === type).reduce((acc, el) =>
            acc + el.value, 0)
    }
    return (
        <div className="App">
            <Wrapper>
                <SideBar/>
                <div className="contentWrapper" style={{width: "80vw"}}>
                    <AddOperationForm dispatch={dispatch}/>
                    <Content totalIncome={sum('income')} totalOutcome={sum('outcome')} state={state}/>
                </div>
            </Wrapper>
        </div>
    )
}

export default App


const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: gray;
  display: flex;

`
