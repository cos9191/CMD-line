import React, {useEffect, useState} from "react";
import { GlobalVars } from "../const";
import styled from "styled-components";

const StyledTitle = styled.h1`
  @media ${props => props.theme.media.phone} {
    color: red;
  }
  @media ${props => props.theme.media.tablet} {
    color: green;
  }
`;

const TitleAdaptive = (props) => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);

    let AdaptiveText;
    switch(true) {
        case width < GlobalVars.tablet:
            AdaptiveText = "Mobile";
            console.log(1);
            break;
        case width >= GlobalVars.tablet && width < GlobalVars.desktop:
            AdaptiveText = "Tablet";
            break;
        default:
            AdaptiveText = "Desktop";
            break;
    }

    return <StyledTitle {...props}>CMD console {AdaptiveText}</StyledTitle>;
}

export default TitleAdaptive;