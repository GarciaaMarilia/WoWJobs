import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
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
        <React.Fragment>
            <Box sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}>
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
                <div align="center">
                    <TextField
                        id="EmpresaAtuacao"
                        label="Empresa"
                        type="text"
                        variant="standard"
                        margin="normal"
                    />
                    <TextField
                        id="TempoAtuacao"
                        label="Tempo de atuação (Anos)"
                        type="number"
                        variant="standard"
                        margin="normal"
                    />
                    <TextField
                        id="AreaAtuacao"
                        select
                        label="Área de atuação"
                        value={area}
                        onChange={areaChange}
                        variant="standard"
                    >
                        {areas.map((option) => (
                            <MenuItem
                                key={option.value}
                                value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
                <div align="center">
                    <TextField
                        id="DetalhesAtuacao"
                        label="Fale um pouco mais sobre essa experiência"
                        multiline
                        rows={10}
                        variant="outlined"
                        margin="normal"
                    />
                </div>
                <div align="center">
                    <Button
                        type="button"
                        variant="contained"
                        style={{ backgroundColor: "#104E8B" }}
                        size="medium"
                    >
                        Registrar Experiência
                    </Button>
                </div>
            </Box>
        </React.Fragment>
    );
}


export default Experience;