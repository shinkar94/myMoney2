import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import styled, {css} from "styled-components";

export const SideBar = () => {

    const [navWindow, setNavWindow] = useState<boolean>(false)

    return (
        <Nav navWindow={navWindow}>
            <NavLink to={'/'}> HOME-PAGE </NavLink>
            <NavLink to={'/'}> CALENDAR </NavLink>
            <NavLink to={'/'}> ГРВФИКИ </NavLink>
            <NavLink to={'/'}> КАТЕГОРИИ </NavLink>
            <NavLink to={'/'}> РЕГУЛЯРНЫЕ ПЛАТЕЖИ </NavLink>
            <NavLink to={'/'}> ВАЛЮТА </NavLink>
            <button onClick={()=>setNavWindow(!navWindow)}>{navWindow ? `<<` : `>>` }</button>
            <input type="date"/>
        </Nav>
    );
};

type NavType = {
    navWindow: boolean
}
const Nav = styled.div<NavType>`
  position: fixed;
  top: 0;
  left: -215px;
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 100vh;
  padding: 15px 30px 15px 15px;
  background-color: grey;
  transition: 0.5s;
  z-index: 1;
  ${props => props.navWindow && css`
    left: 0;
  `}
  & button {
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    width: 30px;

  }


`