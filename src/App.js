import React, { useState } from "react";

import { Container } from '@material-ui/core';

import Status from './Components/Status'
import Space from '././Style/space'
import './App.css';

import Registration from './Screens/Registration';
import Vacancies from './Screens/JobVacancies';
import Experience from './Screens/Experience';
import Companys from "./Screens/Companys";
import Login from './Screens/Login';

export default function App() {

    const [etapaAtual, setEtapaAtual] = useState(0);

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