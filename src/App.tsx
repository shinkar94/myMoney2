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
    };


function App() {
    const income = 'income'
    const outcome = 'outcome'
    const [operations, setOperations] = useState<OperationsType>({
        [income]: [
            {id: v1(), value: 12500, type: "income", description: "sdfsdf", category: "sdfsdf"},
            {id: v1(), value: 12700, type: "income", description: "sdfsdf", category: "sdfsdf"}
        ],
        [outcome]: [
            {id: v1(), value: 200, type: "outcome", description: "sdfsdf", category: "sdfsdfsdf"},
            {id: v1(), value: 200, type: "outcome", description: "sdfsdf", category: "sdfsdfsdf"}
        ],
    })

    const sum = (idOperations: string) => {
        return operations[idOperations].reduce((acc, el) => {
            return acc + el.value
        }, 0)
    }
    return (
        <div className="App">
            <div className="wrapper" style={{width: "92vw", height: "100vh", background: "gray", display: "flex"}}>
                <div className="sideBar" style={{width: "20%", background: "brown"}}>
                    <p>btn</p>
                    <p>btn</p>
                    <p>btn</p>
                    <p>btn</p>
                    <p>btn</p>
                    <p>btn</p>
                    <p>btn</p>
                    <p>btn</p>
                </div>
                <div className="contentWrapper" style={{width: "80%", background: "gray"}}>
                    <div className="header"
                         style={{display: "flex", justifyContent: "space-between", background: "green"}}>
                        <p>logo</p>
                        <button>send</button>
                    </div>
                    <Content totalIncome={sum(income)} totalOutcome={sum(outcome)}/>
                </div>

            </div>
        </div>
    )
}

export default App
