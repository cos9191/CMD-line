import React from 'react';
import styled from 'styled-components';
import Flex from "./Flex";
import Path from "./Path";
import { GlobalVars } from "../const";

const StyledConsole = styled.textarea`
  width: 100%;
  height: 70vh;
  font-size: 24px;
  border: none;
  resize: none;
  color: ${props => props.color || props.theme.colors.secondary};
  &:focus {
    outline: none;
  }
`;

const Console = ({ color, paths, setPaths }) => {

    const onKeyPress = evt => {
        if (evt.key === 'Enter') {
            setPaths([...paths, GlobalVars.defaultPath])
        }
    };

    return (
        <Flex>
            <Flex direction={"column"} margin="0 10px 0 0">
                {paths.map((path, index) =>
                    <Path color={color} key={index}>{path}</Path>
                )}
            </Flex>
            <StyledConsole onKeyDown={onKeyPress} color={color}/>
        </Flex>
    )
};

export default Console;