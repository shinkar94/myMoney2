import './App.css'
import {Content} from "./component/Content/Content";
import {useAppDispatch, useAppSelector} from "./Hok/useAppSelector";
import {SideBar} from "./component/SideBar/SideBar";
import styled from "styled-components";
import {AddOperationForm} from "./component/AddOperationForm/AddOperationForm";


function App() {
    const state = useAppSelector(state => state.allState)
    // const dispatch= useAppDispatch()

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
                    <Content totalIncome={sum('income')} totalOutcome={sum('outcome')} state={state}/>
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

`
const ContentWrapper = styled.div`
  padding-left: 30px;
`