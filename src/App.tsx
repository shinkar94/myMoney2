import './App.css'
import {Content} from "./component/Content/Content";
import {useAppSelector} from "./Hok/useAppSelector";
import {income, outcome} from "./Reducer/allStateReducer";
import {useSelector} from "react-redux";
import {SideBar} from "./component/SideBar/SideBar";
import styled from "styled-components";


function App() {
    const state = useAppSelector(state => state.allState)

    const sum = (idOperations: string) => {
        return state[idOperations].reduce((acc, el) => {
            return acc + el.value
        }, 0)
    }
    return (
        <div className="App">
            <Wrapper>
                <SideBar />
                <div className="contentWrapper" style={{width: "80vw"}}>
                    <button style={{position: "absolute", bottom: "10px", right: "10px", width: "80px", height: "80px", borderRadius: "50%", color: "white", background: "red"}}>+</button>
                    <Content totalIncome={sum(income)} totalOutcome={sum(outcome)} expenses={state[outcome]}/>
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
