import React from 'react';
import styled from "styled-components";

export const HomePage = () => {
    return (
        <HomePageWrapper>
            <div className="topContainer">
                <div className="block graf">asdfsadf</div>
                <div className="block analitic">asdfasdf</div>
            </div>
            <div className="bottomContainer">
                <div className="table">
                    <div className="head">
                        <div className="th">date</div>
                        <div className="th">name</div>
                        <div className="th">sum</div>
                        <div className="th">type</div>
                        <div className="th">category</div>
                    </div>
                    <div className="tbody">
                        <div className="tr" style={{display: "flex", gap: "10px"}}>
                            <p>date</p>
                            <p>name</p>
                            <p>sum</p>
                            <p>type</p>
                            <p>category</p>
                        </div>
                    </div>
                </div>
            </div>
        </HomePageWrapper>
    );
};

const HomePageWrapper = styled.div`
  .topContainer {
    display: flex;
    flex-wrap: wrap;
    padding: 0 20px;
    justify-content: space-around;
    gap: 10px;

    .block {
      background: #39394B;
      height: 400px;
      border-radius: 10px;
      color: white;
      padding: 4px;
      min-width: 300px;
    }

    .graf {
      width: 55%;
    }
    .analitic{
      width: 35%;
    }
  }
  .bottomContainer{
    padding: 10px;
    color: white;
    .table{
      background: #222131;
      box-shadow: 0 0 10px black;
      padding: 4px;
      border-radius: 4px;
      .head{
        display: flex;
        border: 1px solid white;
        .th{
          width: 20%;
          border: 1px solid white;
          text-align: center;
        }
      }
      .tbody{
        .tr{
          border: 1px solid white;
          & p{
            border: 1px solid white;
          }
        }
      }
    }
  }
`

