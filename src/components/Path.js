import React from 'react';
import styled from 'styled-components';

const StyledPath = styled.div`
  font-size: 24px;
  color: ${props => props.color || props.theme.colors.secondary};
`;

const Path = (props) => {
    return <StyledPath {...props}/>
};

export default Path;