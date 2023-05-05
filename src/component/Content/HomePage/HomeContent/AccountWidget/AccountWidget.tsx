import React from 'react';
import {useAppSelector} from "../../../../../Hok/useAppSelector";
import styled from "styled-components";

export const AccountWidget = () => {
    const wallets = useAppSelector(state=> state.wallets)
    const mappedWallets = wallets.map(el=> {
        return (
            <div key={el.idCard} >
                <div>{el.name}</div>
                <div>{el.type}</div>
                <div>{el.nameCard}</div>
                <div>{el.numberCard}</div>
                <div>{el.sumCard}</div>
                <div>{el.currency}</div>
            </div>
        )
            })

    return (
        <AccountWidgetWrapper>
            {mappedWallets}
        </AccountWidgetWrapper>
    );
};

const AccountWidgetWrapper = styled.table`
  width: 35%;
  background: #39394B;
  height: 350px;
  border-radius: 10px;
  color: white;
  padding: 4px;
  min-width: 300px;
`

