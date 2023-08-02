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
    const [bgNav, setBgNav] = useState<boolean>(false)

    const onClickHandler = () => {
        setNavWindow(!navWindow)
        setBgNav(!bgNav)
        dispatch(onBlurAC('sideBarBtn'))
    }
    return (
        <Nav navWindow={navWindow} bg={bgNav}>
            <NavLink to={'/'}> HOME-PAGE </NavLink>
            <NavLink to={'/calendar'}> CALENDAR </NavLink>
            <NavLink to={'/'}> ГРВФИКИ </NavLink>
            <NavLink to={'/'}> КАТЕГОРИИ </NavLink>
            <NavLink to={'/'}> РЕГУЛЯРНЫЕ ПЛАТЕЖИ </NavLink>
            <NavLink to={'/'}> ВАЛЮТА </NavLink>

            <button  onClick={onClickHandler}>{navWindow ? `<<` : `>>`}</button>
            {/*<input type="date"/>*/}
        </Nav>
    );
};

type NavType = {
    navWindow: boolean
    bg: boolean
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
  background: none;
  transition: 0.5s;
  z-index: 11;

  ${props => props.navWindow && css`
    left: 0;
  `}
  ${props => props.bg && css`
    background-color: #222131;
  `}
  & button {
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    width: 30px;
    background: linear-gradient(rgba(255, 255, 255, 0), #423B63, rgba(255, 255, 255, 0));
    border: 0;
    cursor: pointer;
    color: white;
    &:hover {
      background: linear-gradient(rgba(255, 255, 255, 0), #e51832, rgba(255, 255, 255, 0));
    }
  }
  & a{
    display: flex;
    align-items: center;
    color: white;
    text-decoration: none;
    height: 30px;
    cursor: pointer;
    &:hover{
      color: #FF6384;
      border-left: 2px solid #FF6384;
      padding-left: 2px;
    }
  }


`