import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {v1} from "uuid";
import {Content} from "./component/Content/Content";

export type OperationsType = {
    [key: string]: ItemType[]
}
export type ItemType =
    {
        id: string
        value: number
        type: string
        description: string
        category: string
        date: string
        name: string
    };


function App() {
    const income = 'income'
    const outcome = 'outcome'
    const [operations, setOperations] = useState<OperationsType>({
        [income]: [
            {id: v1(),date: "14-04-2023", name: "", value: 12500, type: "income", description: "sdfsdf", category: "sdfsdf"},
            {id: v1(),date: "14-04-2023", name: "", value: 12700, type: "income", description: "sdfsdf", category: "sdfsdf"}
        ],
        [outcome]: [
            {id: v1(),date: "14-04-2023", name: "", value: 200, type: "outcome", description: "sdfsdf", category: "sdfsdfsdf"},
            {id: v1(),date: "14-04-2023", name: "", value: 200, type: "outcome", description: "sdfsdf", category: "sdfsdfsdf"}
        ],
    })
    const sum = (idOperations: string) => {
        return operations[idOperations].reduce((acc, el) => {
            return acc + el.value
        }, 0)
    }
    return (
        <div className="App">
            <div className="wrapper" style={{width: "100vw", height: "100vh", background: "gray", display: "flex"}}>
                <div className="sideBar" style={{width: "20vw", background: "brown"}}>
                    <p>btn</p>
                    <p>btn</p>
                    <p>btn</p>
                    <p>btn</p>
                    <p>btn</p>
                    <p>btn</p>
                    <p>btn</p>
                    <p>btn</p>
                    <input type="date"/>
                </div>
                <div className="contentWrapper" style={{width: "80vw"}}>
                    <button style={{position: "absolute", bottom: "10px", right: "10px", width: "80px", height: "80px", borderRadius: "50%", color: "white", background: "red"}}>+</button>
                    <Content totalIncome={sum(income)} totalOutcome={sum(outcome)} expenses={operations[outcome]}/>
                </div>

            </div>
        </div>
    )
}

export default App
