import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import styled, {css} from "styled-components";
import {useAppDispatch, useAppSelector} from "../../Hok/useAppSelector";
import {useDispatch} from "react-redux";
import {onBlurAC} from "../../Reducer/helperReducer";


export const SideBar = () => {
    const stateOnBlur = useAppSelector(state=> state.helper)
    const dispatch = useDispatch()

    const [navWindow, setNavWindow] = useState<boolean>(false)

    const onClickHandler = () => {
        setNavWindow(!navWindow)
        dispatch(onBlurAC('sideBarBtn'))
    }
    return (
        <Nav navWindow={navWindow}>
            <NavLink to={'/'}> HOME-PAGE </NavLink>
            <NavLink to={'/calendar'}> CALENDAR </NavLink>
            <NavLink to={'/'}> ГРВФИКИ </NavLink>
            <NavLink to={'/'}> КАТЕГОРИИ </NavLink>
            <NavLink to={'/'}> РЕГУЛЯРНЫЕ ПЛАТЕЖИ </NavLink>
            <NavLink to={'/'}> ВАЛЮТА </NavLink>

            <button  onClick={onClickHandler}>{navWindow ? `<<` : `>>`}</button>

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
  z-index: 2;

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