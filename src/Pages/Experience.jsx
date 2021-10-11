import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Space from '../Style/space';
import Stack from '@mui/material/Stack';


function Experience() {

    /*const menu = [
        'Vagas Disponíveis',
        'Empresas Parceiras',
        'Guia de Carreiras',
        'Fale Conosco',
    ];*/
    const areas = [
        {
            value: 'TECNOLOGIA',
            label: 'Tecnologia',
        },
        {
            value: 'ADMINISTRACAO',
            label: 'Administração',
        },
        {
            value: 'BIOLOGICA',
            label: 'Biológica',
        },
        {
            value: 'HUMANIDADE',
            label: 'Humanidade',
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
            <Space size={40} />
            <Stack
                direction="row"
                spacing={1}
            >
                <TextField
                    label="Empresa"
                    id="empresa"
                    sx={{ minWidth: '40%' }}
                />
                <TextField
                    id="TempoAtuacao"
                    label="Tempo de atuação (Anos)"
                    type="number"
                    sx={{ minWidth: '20%' }}
                />
                <TextField
                    id="AreaAtuacao"
                    label="Área de atuação"
                    select
                    value={area}
                    onChange={areaChange}
                    sx={{ minWidth: '20%' }}
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
            <Space size={10} />
            <Stack
                direction="row"
            >
                <TextField
                    fullWidth
                    label="Descrição"
                    id="descricao"
                    sx={{ maxWidth: '80%' }}
                />
            </Stack>
            <Space size={20} />
            <Button
                type="button"
                variant="contained"
                style={{ backgroundColor: "#104E8B" }}
                size="small"
            >
                Registrar Experiência
            </Button>

        </form >
    );
}


export default Experience;