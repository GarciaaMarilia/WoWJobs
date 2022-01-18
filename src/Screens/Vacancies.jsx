import React from 'react';

import Typography from '@mui/material/Typography';
import Card from '../Components/CardVacancies.jsx';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import Space from '../Style/space';

export default function Vacancies() {
    return (
        <React.Fragment>
            <Box style={{ margin: 50 }}>

                <Space size={60} />

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

            </Box>
        </React.Fragment>
    );
}