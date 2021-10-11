import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '../Components/CardVacancies.jsx';
import Space from '../Style/space';
import Stack from '@mui/material/Stack'

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
            <Stack
                direction="row"
                spacing={10}
            >
                <Card
                    title={"Título da vaga"}
                    format={"Formato de trabalho (Remoto/Presencial)"}
                    company={"Empresa"}
                    tecnology={"Conhecimentos e tecnologias requeridas"}
                />

                <Card
                    title={"Título da vaga"}
                    format={"Formato de trabalho (Remoto/Presencial)"}
                    company={"Empresa"}
                    tecnology={"Conhecimentos e tecnologias requeridas"}
                />

                <Card
                    title={"Título da vaga"}
                    format={"Formato de trabalho (Remoto/Presencial)"}
                    company={"Empresa"}
                    tecnology={"Conhecimentos e tecnologias requeridas"}
                />
            </Stack>
            <Space size={40} />
            <Stack
                direction="row"
                spacing={10}
            >
                <Card
                    title={"Título da vaga"}
                    format={"Formato de trabalho (Remoto/Presencial)"}
                    company={"Empresa"}
                    tecnology={"Conhecimentos e tecnologias requeridas"}
                />

                <Card
                    title={"Título da vaga"}
                    format={"Formato de trabalho (Remoto/Presencial)"}
                    company={"Empresa"}
                    tecnology={"Conhecimentos e tecnologias requeridas"}
                />

                <Card
                    title={"Título da vaga"}
                    format={"Formato de trabalho (Remoto/Presencial)"}
                    company={"Empresa"}
                    tecnology={"Conhecimentos e tecnologias requeridas"}
                />
            </Stack>
            <Space size={40} />
            <Stack
                direction="row"
                spacing={10}
            >
                <Card
                    title={"Título da vaga"}
                    format={"Formato de trabalho (Remoto/Presencial)"}
                    company={"Empresa"}
                    tecnology={"Conhecimentos e tecnologias requeridas"}
                />

                <Card
                    title={"Título da vaga"}
                    format={"Formato de trabalho (Remoto/Presencial)"}
                    company={"Empresa"}
                    tecnology={"Conhecimentos e tecnologias requeridas"}
                />

                <Card
                    title={"Título da vaga"}
                    format={"Formato de trabalho (Remoto/Presencial)"}
                    company={"Empresa"}
                    tecnology={"Conhecimentos e tecnologias requeridas"}
                />
            </Stack>
            <Space size={40} />
        </React.Fragment>
    );
}

export default Vagas;