import React from 'react';
import styled from "styled-components";
import incomeIcon from '../../img/income.svg'
import outcomeIcon from '../../img/outcome.svg'
import pigIcon from '../../img/pig.svg'
import walletIcon from '../../img/wallet.svg'
import {HomePage} from "./Main/Main";
import {ItemType} from '../../App';

type ContentType = {
    totalIncome: number
    totalOutcome: number
    expenses: ItemType[]
}

export const Content: React.FC<ContentType> = ({totalIncome, totalOutcome,expenses}) => {
    return (
        <StContent>
            <TopAnalyticsCard>
                <div className="JobApplication">
                    <img src={incomeIcon} alt="img"/>
                    <div className="descriptions">
                        <h3>{totalIncome - totalOutcome}</h3>
                        <p>Balance</p>
                    </div>
                </div>
                <div className="JobApplication">
                    <img src={outcomeIcon} alt="img"/>
                    <div className="descriptions">
                        <h3>{totalIncome}</h3>
                        <p>income</p>
                    </div>
                </div>
                <div className="JobApplication">
                    <img src={walletIcon} alt="img"/>
                    <div className="descriptions">
                        <h3>{totalOutcome}</h3>
                        <p>outcome</p>
                    </div>
                </div>
                <div className="JobApplication">
                    <img src={pigIcon} alt="img"/>
                    <div className="descriptions">
                        <h3>10</h3>
                        <p>zanachka</p>
                    </div>
                </div>
            </TopAnalyticsCard>
            <Main>
                {/*тут route*/}
                <HomePage expenses={expenses} totalOutcome={totalOutcome}/>
            </Main>

        </StContent>
    );
};

const StContent = styled.div`
  background: #222131;
`
const TopAnalyticsCard = styled.div`
  color: white;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
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
    & img{
      width: 40px;
    }
  }
  
`
const Main = styled.div`

`

