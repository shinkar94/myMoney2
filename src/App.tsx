import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="wrapper" style={{width: "100vw", height: "100vh", background: "gray", display: "flex"}}>
          <div className="sideBar" style={{width: "20%", background: "brown"}}>
              <p>btn</p>
              <p>btn</p>
              <p>btn</p>
              <p>btn</p>
              <p>btn</p>
          </div>
          <div className="contentWrapper" style={{width: "80%", background: "gray"}}>
              <div className="header" style={{display:"flex", justifyContent: "space-between", background: "green"}}>
                  <p>logo</p>
                  <button>send</button>
              </div>
              <div className="content">
                  <div className="TopAnalyticsCard" style={{background: "skyblue", display: "flex"}}>
                      <div className="JobApplication">
                          <img src="" alt=""/>
                          <h3>120+</h3>
                          <p>Description</p>
                      </div>
                      <div className="JobApplication">
                          <img src="" alt=""/>
                          <h3>120+</h3>
                          <p>Description</p>
                      </div>
                      <div className="JobApplication">
                          <img src="" alt=""/>
                          <h3>120+</h3>
                          <p>Description</p>
                      </div>
                      <div className="JobApplication">
                          <img src="" alt=""/>
                          <h3>120+</h3>
                          <p>Description</p>
                      </div>
                  </div>
                  <div className="bottomContent">
                      <div className="bottomLeft" style={{background: "darkred"}}>
                          <div className="block">asdfsadf</div>
                          <div className="block">asdfasdf</div>
                      </div>
                      <div className="bottomRight" style={{background: "yellowgreen"}}>
                          <div className="block">asdfsadf</div>
                          <div className="block">asdfsadf</div>
                      </div>
                  </div>

              </div>
          </div>

      </div>
    </div>
  )
}
