import React from 'react';
import styled from "styled-components";
import incomeIcon from '../../img/income.svg'
import outcomeIcon from '../../img/outcome.svg'
import pigIcon from '../../img/pig.svg'
import walletIcon from '../../img/wallet.svg'
import {HomePage} from "./Main/HomePage";


import {JobApplication} from "./JobApplication/JobApplication";
import {OperationsType} from "../../Reducer/allStateReducer";
import {Navigate, Route, Routes} from 'react-router-dom';
import {Error404} from '../common/Error';

type ContentType = {
    totalIncome: number
    totalOutcome: number
    state: OperationsType[]
}

export const Content: React.FC<ContentType> = (props) => {
    const {totalIncome, totalOutcome, state} = props
    return (
        <StContent>
            <TopAnalyticsCard>
                <JobApplication img={walletIcon} value={totalIncome - totalOutcome} name={"Balance"}/>
                <JobApplication img={incomeIcon} value={totalIncome} name={"income"}/>
                <JobApplication img={outcomeIcon} value={totalOutcome} name={"outcome"}/>
                <JobApplication img={pigIcon} value={10} name={"zanachka"}/>
            </TopAnalyticsCard>
            <Main>
                <Routes>
                    {/*тут route*/}
                    <Route path={'/homepage'} element={<HomePage state={state} totalOutcome={totalOutcome}/>}/>
                    <Route path={'/'} element={<Navigate to={'/homepage'}/>}/>
                    <Route path={'/*'} element={<Error404/>}/>
                </Routes>
            </Main>

        </StContent>
    );
};

const StContent = styled.div`
 
  width: calc(100vw - 30px);
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

