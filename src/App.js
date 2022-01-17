import React, { useState } from "react";
import Login from './Screens/Login';
import Registration from './Screens/Registration';
import Experience from './Screens/Experience';
import Vacancies from './Screens/JobVacancies';
import './App.css';
import Status from './Components/Status'
import { Container } from '@material-ui/core';
import Space from '././Style/space'
import Companys from "./Screens/Companys";


function App() {
    const [etapaAtual, setEtapaAtual] = useState(4);

    const pages = [
        <Login send={next} />,
        <Registration send={next} />,
        <Experience send={next} />,
        <Vacancies send={next} />,
        <Companys send={send} />
    ];

    function next() {
        setEtapaAtual(etapaAtual + 1);
    }
    function send(dados) {
        console.log(dados)
    }
    return (
        <React.Fragment>
            <Status />,
            <Space size={80} />
            <Container>
                {pages[etapaAtual]}
            </Container>
        </React.Fragment>
    )
}

export default App;