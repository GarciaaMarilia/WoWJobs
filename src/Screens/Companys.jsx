import React from 'react';

import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import CardCompany from '../Components/CardCompanys';
import Space from '../Style/space';



function Companys(props) {
    return (
        <React.Fragment>
            <Box style={{ margin: 40 }}>

                <Space size={60} />
                <Typography
                    variant="h5"
                    align="center"
                    fontFamily='Oswald'
                    fontSize='40px'
                    color='#363636'
                >
                    Empresas Parceiras
                </Typography>
                <Space size={60} />
                <Stack
                    direction="row"
                    spacing={20}
                >
                    <CardCompany
                        name={"Nome da Empresa"}
                        area={"Área de atuação"}
                        location={"Localização"}
                    />
                    <CardCompany
                        name={"Nome da Empresa"}
                        area={"Área de atuação"}
                        location={"Localização"}
                    />
                </Stack>
                <Space size={40} />
                <Stack
                    direction="row"
                    spacing={20}
                >
                    <CardCompany
                        name={"Nome da Empresa"}
                        area={"Área de atuação"}
                        location={"Localização"}
                    />
                    <CardCompany
                        name={"Nome da Empresa"}
                        area={"Área de atuação"}
                        location={"Localização"}
                    />
                </Stack>
                <Space size={40} />
                <Stack
                    direction="row"
                    spacing={20}
                >
                    <CardCompany
                        name={"Nome da Empresa"}
                        area={"Área de atuação"}
                        location={"Localização"}
                    />
                    <CardCompany
                        name={"Nome da Empresa"}
                        area={"Área de atuação"}
                        location={"Localização"}
                    />
                </Stack>
                <Space size={40} />
                <Stack
                    direction="row"
                    spacing={20}
                >
                    <CardCompany
                        name={"Nome da Empresa"}
                        area={"Área de atuação"}
                        location={"Localização"}
                    />
                    <CardCompany
                        name={"Nome da Empresa"}
                        area={"Área de atuação"}
                        location={"Localização"}
                    />
                </Stack>
                <Space size={40} />
            </Box>
        </React.Fragment>
    );
}

export default Companys;