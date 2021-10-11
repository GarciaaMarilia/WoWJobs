import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import RoomIcon from '@material-ui/icons/Room';
import { IconButton } from '@material-ui/core';
import Logo from '../Images/logo.jpg';
import { Grid } from '@mui/material';


function CardCompanys(props) {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid xs={6} md={6}>
                    <Card sx={{ width: '90%', height: '90%' }}>
                        <CardMedia
                            component="img"
                            height="200"
                            image={Logo}
                            alt="company logo"
                        />
                        <CardContent sx={{ padding: '10px', alignItems: 'center' }}>
                            <Typography variant="h5">
                                {props.name}
                            </Typography>
                            <Typography sx={{ mb: 1.5, padding: '10px' }} color="text.secondary">
                                {props.area}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                <IconButton>
                                    <RoomIcon />
                                </IconButton>
                                {props.location}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Sobre</Button>
                            <Button size="small">Compartilhar</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default CardCompanys;