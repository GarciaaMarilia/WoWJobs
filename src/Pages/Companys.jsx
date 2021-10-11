import React from 'react';
import Typography from '@mui/material/Typography';
import CardCompany from '../Components/CardCompanys';
import Space from '../Style/space';
import Stack from '@mui/material/Stack';


function Companys(props) {
    return (
        <React.Fragment>
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
                spacing={20}>
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
        </React.Fragment>
    );
}

export default Companys;