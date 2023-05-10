import React from 'react';
import styled, {css} from "styled-components";

type ButtonPropsType = {
    name: string
    callBack: ()=> void
    height?: string
    color?: string
    bgColor?:string
    borderRadius?:string
    border?: string
}



export const SuperButton:React.FC<ButtonPropsType> = (props) => {
    const {name, callBack,...styleProps} = props
    const onButtonHandler = ()=> {
        callBack()
    }
    return (
        <>
            <StButton
                onClick={onButtonHandler}
                height={styleProps.height}
                color={styleProps.color}
                bgColor={styleProps.bgColor}
                border={styleProps.border}
                borderRadius={styleProps.borderRadius}
            >{name}</StButton>
        </>
    );
};

type StButtonType = {
    height?: string
    color?: string
    bgColor?:string
    borderRadius?:string
    border?: string
}
const StButton = styled.button<StButtonType>`
  background: ${({bgColor}) => bgColor};
  color: ${({color}) => color};
  height: ${({height}) => height};
  border: ${({border}) => border};
  border-radius: ${({borderRadius}) => borderRadius};
  cursor: pointer;
`