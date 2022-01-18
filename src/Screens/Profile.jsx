import React from "react";

import { Typography } from '@material-ui/core';
import Box from '@mui/material/Box'

import Space from '../Style/space';

export default function Profile() {

    return (
        <Box style={{ margin: 50 }}>

            <Space size={60} />

            <Typography
                variant="h5"
                align="center"
                fontFamily='Oswald'
                fontSize='40px'
                color='#363636'
            >
                Perfil
            </Typography>
        </Box>
    )
}
