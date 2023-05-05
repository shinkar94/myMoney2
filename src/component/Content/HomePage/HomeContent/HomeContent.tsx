import React, {FC, memo} from 'react';
import {LineChartWithBoundaries} from "./LeftDiograms/LineChartWithBoundaries";
import {RightDiagrams} from "./RightDiagrams/RightDiagrams";
import {TableOperations} from "./TableOperations/TableOperations";
import styled from "styled-components";
import {AccountWidget} from "./AccountWidget/AccountWidget";

type PropsType = {
    totalOutcome: number
}

export const HomeContent:FC<PropsType> = memo((props) => {
    const {totalOutcome} = props
    return (
        <div>
            <TopContainer>
                <div className="block graf">
                    <LineChartWithBoundaries/>
                </div>
                <div className="block analitic">
                    <RightDiagrams totalOutcome={totalOutcome}/>
                </div>
            </TopContainer>
            <BottomContainer>
                <TableOperations />
                <AccountWidget />
            </BottomContainer>
        </div>
    );
});

const TopContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 10px;
  //padding: 0 50px;

  .block {
    background: #39394B;
    height: 400px;
    border-radius: 10px;
    color: white;
    min-width: 300px;
  }

  .graf {
    width: 60%;
  }

  .analitic {
    width: 35%;
    overflow-y: auto;

    & h3 {
      text-align: center;
    }
  }
`

const BottomContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 10px;
  padding: 20px 0;
  color: white;

`
