import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '../Components/CardVacancies.jsx';
import Space from '../Style/space'

function Vagas() {
    return (
        <React.Fragment>
            <Typography
                variant="h5"
                align="center"
                fontFamily='Oswald'
                fontSize='40px'
                color='#363636'
            >
                Vagas Abertas
            </Typography>
            <Space size={40} />
            <Card
                title={"Desenvolvedor FrontEnd ReactJS"}
                format={"Remoto"}
                company={"Logique"}
                tecnology={"ReactJS, React Native, JavaScript, TypeScript."}
            />
            <Space size={80} />
            <Card
                title={"Título da vaga"}
                format={"Formato de trabalho (Remoto/Presencial)"}
                company={"Empresa"}
                tecnology={"Conhecimentos e tecnologias requeridas"}
            />
            <Space size={80} />
            <Card
                title={"Título da vaga"}
                format={"Formato de trabalho (Remoto/Presencial)"}
                company={"Empresa"}
                tecnology={"Conhecimentos e tecnologias requeridas"}
            />
            <Space size={80} />
            <Card
                title={"Título da vaga"}
                format={"Formato de trabalho (Remoto/Presencial)"}
                company={"Empresa"}
                tecnology={"Conhecimentos e tecnologias requeridas"}
            />
            <Space size={80} />
            <Card
                title={"Título da vaga"}
                format={"Formato de trabalho (Remoto/Presencial)"}
                company={"Empresa"}
                tecnology={"Conhecimentos e tecnologias requeridas"}
            />
            <Space size={80} />
        </React.Fragment>
    );
}

export default Vagas;