import React from 'react';
import styled from "styled-components";

type ContentType = {
    totalIncome: number
    totalOutcome: number
}

export const Content: React.FC<ContentType> = ({totalIncome, totalOutcome}) => {
    return (
        <StContent>
            <TopAnalyticsCard>
                <div className="JobApplication">
                    <img src="" alt="img"/>
                    <div className="descriptions">
                        <h3>{totalIncome - totalOutcome}</h3>
                        <p>Balance</p>
                    </div>
                </div>
                <div className="JobApplication">
                    <img src="" alt="img"/>
                    <div className="descriptions">
                        <h3>{totalIncome}</h3>
                        <p>income</p>
                    </div>
                </div>
                <div className="JobApplication">
                    <img src="" alt="img"/>
                    <div className="descriptions">
                        <h3>{totalOutcome}</h3>
                        <p>outcome</p>
                    </div>
                </div>
                <div className="JobApplication">
                    <img src="#" alt="img"/>
                    <div className="descriptions">
                        <h3>10</h3>
                        <p>zanachka</p>
                    </div>
                </div>
            </TopAnalyticsCard>
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

        </StContent>
    );
};

const StContent = styled.div`
  background: #222131;
`
const TopAnalyticsCard = styled.div`
  color: white;
  display: flex;
  justify-content: space-around;
  padding: 20px 0;

  .JobApplication {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 300px;
    height: 100px;
    background: #39394B;
    border-radius: 10px;
    .descriptions{
      p, h3{
        margin: 0;
      }
    }
  }
  
`

