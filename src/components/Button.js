import React from 'react';
import styled, {css, keyframes} from 'styled-components';

const Animation = keyframes`
  100% {
    transform: rotateZ(60deg) translate(11em, -19em);
  }
`;

const StyledButton = styled.button`
  position: relative;
  overflow: hidden;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  font-size: 18px;
  cursor: pointer;
  align-self: ${({align}) => align || "stretch"};
  
  //Приводим в движение анимацию
  &:hover {
    &::after {
      animation: ${Animation} 1s forwards;
    }
  }
  
  &:focus {
    outline: none;
  }
  ${({theme}) => theme && css`
    color: ${({color}) => color || 'black'};
    background: ${props => props.background || 'light-gray'};
 `}
  ${({outlined}) => outlined && css`
    color: ${({color}) => color || 'black'};
    border: 1px solid ${({color}) => color || 'black'};
    background: transparent;
 `}
  //Свечение для анимации
  &:after {
    content: "";
    position: absolute;
    top: -50%;
    right: -50%;
    bottom: -110%;
    left: -110%;
    background: linear-gradient(to bottom, rgba(229, 172, 142, 0), #ffffff80 50%, rgba(229, 172, 142, 0));
    transform: rotateZ(60deg) translate(-5em, 7.5em);
  }
`;

// const LargeButton = styled(StyledButton)`
//   font-size: 32px;
// `;

const Button = (props) => {
    return <StyledButton {...props}/>
};

export default Button;