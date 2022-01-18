import React, { useState } from 'react';

import Typography from '@mui/material/Typography';
import { TextField } from '@material-ui/core';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import BusinessIcon from '@mui/icons-material/Business';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BadgeIcon from '@mui/icons-material/Badge';
import DescriptionIcon from '@mui/icons-material/Description';

import Space from '../Style/space';

function Experience() {

    /*const menu = [
        'Vagas Disponíveis',
        'Empresas Parceiras',
        'Guia de Carreiras',
        'Fale Conosco',
    ];*/
    const areas = [
        {
            value: 'TECNOLOGICA',
            label: 'Tecnológica',
        },
        {
            value: 'ADMINISTRATIVA E/OU FINANCEIRA',
            label: 'Administrativa e/ou Financeira',
        },
        {
            value: 'BIOLOGICA',
            label: 'Biológica',
        },
        {
            value: 'HUMANISTICA',
            label: 'Humanística',
        },
    ];
    const [area, setArea] = useState("");

    const areaChange = (event) => {
        setArea(event.target.value);
    };
    /*const [menu, setMenu] = useState("");

    const menuChange = (event) => {
        setMenu(event.target.value);
    }*/


    return (
        <form>
            <Box style={{ margin: 50 }}>

                <Space size={60} />

                <Typography
                    variant="h5"
                    align="center"
                    fontFamily='Oswald'
                    fontSize='40px'
                    color='#363636'
                >
                    Experiências anteriores
                </Typography>

                <Space size={60} />

                <Stack
                    direction="row"
                    spacing={1}
                >

                    <TextField
                        fullWidth
                        label={
                            <>
                                <BusinessIcon style={{ paddingRight: "6px" }} />
                                Empresa
                            </>
                        }
                        id="empresa"
                    />

                    <TextField
                        fullWidth
                        id="tempoAtuacao"
                        label={
                            <>
                                <AccessTimeIcon style={{ paddingRight: "6px" }} />
                                Tempo de Atuação (Anos)
                            </>
                        }
                        type="number"
                    />

                    <TextField
                        fullWidth
                        id="areaAtuacao"
                        label={
                            <>
                                <BadgeIcon style={{ paddingRight: "6px" }} />
                                Área de Atuação
                            </>
                        }
                        select
                        value={area}
                        onChange={areaChange}
                    >
                        {areas.map((option) => (
                            <MenuItem
                                key={option.value}
                                value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>

                </Stack>

                <Space size={20} />

                <Stack
                    direction="row"
                >

                    <TextField
                        fullWidth
                        label={
                            <>
                                <DescriptionIcon style={{ paddingRight: "6px" }} />
                                Descrição
                            </>
                        }
                        id="descricao"
                        multiline
                        rows={8}
                        sx={{ Width: 200 }}
                    />

                </Stack>

                <Space size={20} />

                <Button
                    fullWidth
                    type="button"
                    variant="contained"
                    style={{ backgroundColor: "#104E8B" }}
                >
                    Registrar Experiência
                </Button>
            </Box>
        </form >
    );
}


export default Experience;