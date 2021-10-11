import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import RoomIcon from '@material-ui/icons/Room';
import { IconButton } from '@material-ui/core';
import Logo from '../Images/logo.jpg';



function CardCompanys(props) {

    return (
        <Card sx={{ width: '90%', height: '90%' }}>
            <CardMedia
                component="img"
                height="200"
                image={Logo}
                alt="company logo"
            />
            <CardContent sx={{
                padding: '10px',
                alignItems: 'center'
            }}
            >
                <Typography variant="h5">
                    {props.name}
                </Typography>
                <Typography sx={{
                    mb: 1.5,
                    padding: '10px'
                }}
                    color="text.secondary"
                >
                    {props.area}
                </Typography>
                <Typography
                    sx={{ mb: 1.5 }}
                    color="text.secondary"
                >
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
    )
}

export default CardCompanys;