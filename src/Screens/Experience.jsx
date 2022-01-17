import React, { useState } from 'react';

import Typography from '@mui/material/Typography';
import { TextField } from '@material-ui/core';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


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
                    label="Empresa"
                    id="empresa"
                />

                <TextField
                    fullWidth
                    id="tempoAtuacao"
                    label="Tempo de atuação (Anos)"
                    type="number"
                />

                <TextField
                    fullWidth
                    id="areaAtuacao"
                    label="Área de atuação"
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
                    label="Descrição"
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

        </form >
    );
}


export default Experience;