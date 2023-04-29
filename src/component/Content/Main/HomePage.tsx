import React from 'react';
import styled from 'styled-components';
import {LineChartWithBoundaries} from "./LeftDiograms/LineChartWithBoundaries";
import {TableOperations} from "./TableOperations/TableOperations";
import {RightDiagrams} from "./RightDiagrams/RightDiagrams";
import {useAppSelector} from "../../../Hok/useAppSelector";


type HomePageType = {
    totalOutcome: number
}

export const HomePage: React.FC<HomePageType> = ({totalOutcome}) => {
    const helper = useAppSelector(state=> state.helper)
    console.log(helper)
    return (
        <HomePageWrapper>
            <div className="topContainer">
                <div className="block graf">
                    <LineChartWithBoundaries/>
                </div>
                <div className="block analitic">
                    <RightDiagrams totalOutcome={totalOutcome}/>
                </div>
            </div>
            <div className="bottomContainer">
                <TableOperations/>
            </div>
            {(helper.statusAddBtn || helper.statusBarBtn) && <div className="shadowBlock"></div> }
        </HomePageWrapper>
    );
};

const HomePageWrapper = styled.div`
  padding: 20px 10px 20px 10px;

  .topContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
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

    .analitic {
      width: 35%;
      overflow-y: auto;

      & h3 {
        text-align: center;
      }
    }
  }

  .bottomContainer {
    padding: 10px 0;
    color: white;
    height: 400px;
    overflow: auto;
  }

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

