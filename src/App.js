import React, {useState} from 'react';
import styled from 'styled-components';
import Flex from "./components/Flex";
import Console from "./components/Console";
import Button from "./components/Button";
import TitleAdaptive from "./components/TitleAdaptive";
import {GlobalVars} from "./const";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 1rem;
`;

const App = () => {

    const [paths, setPaths] = useState([GlobalVars.defaultPath]);
    const handleClick = () => {
        setPaths([...paths, GlobalVars.defaultPath]);
    }

    return (
        <AppWrapper>
            <Flex justify={"center"}>
                <TitleAdaptive marginBottom={10} color={"gray"}>CMD console</TitleAdaptive>
            </Flex>
            <Flex direction="column">
                <Console paths={paths} setPaths={setPaths}/>
                <Button outlined color={"gray"} align="flex-end" onClick={handleClick}>Выполнить</Button>
            </Flex>
        </AppWrapper>
  );
}

export default App;