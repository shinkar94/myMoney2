import React from 'react';
import styled from 'styled-components';
import {LineChartWithBoundaries} from "./HomeContent/LeftDiograms/LineChartWithBoundaries";
import {TableOperations} from "./HomeContent/TableOperations/TableOperations";
import {RightDiagrams} from "./HomeContent/RightDiagrams/RightDiagrams";
import {useAppSelector} from "../../../Hok/useAppSelector";
import {HomeContent} from "./HomeContent/HomeContent";


type HomePageType = {
    totalOutcome: number
}

export const HomePage: React.FC<HomePageType> = ({totalOutcome}) => {
    const helper = useAppSelector(state=> state.helper)
    console.log(helper)
    return (
        <HomePageWrapper>
            <HomeContent totalOutcome={totalOutcome}/>
            {(helper.statusAddBtn || helper.statusBarBtn) && <div className="shadowBlock"></div> }
        </HomePageWrapper>
    );
};

const HomePageWrapper = styled.div`
  padding: 20px 0;
  .shadowBlock {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.36); 
    backdrop-filter: blur(2px);
  }
`

