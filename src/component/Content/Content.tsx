import React from 'react';
import styled from "styled-components";
import incomeIcon from '../../img/income.svg'
import outcomeIcon from '../../img/outcome.svg'
import pigIcon from '../../img/pig.svg'
import walletIcon from '../../img/wallet.svg'
import {HomePage} from "./Main/Main";

import {JobApplication} from "./JobApplication/JobApplication";
import {ItemType} from "../../Reducer/allStateReducer";

type ContentType = {
    totalIncome: number
    totalOutcome: number
    expenses: ItemType[]
}

export const Content: React.FC<ContentType> = (props) => {
    const {totalIncome, totalOutcome,expenses} = props
    return (
        <StContent>
            <TopAnalyticsCard>
                <JobApplication img={walletIcon} value={totalIncome - totalOutcome} name={"Balance"}/>
                <JobApplication img={incomeIcon} value={totalIncome} name={"income"}/>
                <JobApplication img={outcomeIcon} value={totalOutcome} name={"outcome"}/>
                <JobApplication img={pigIcon} value={10} name={"zanachka"}/>
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
`
const Main = styled.div`

`

