import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import RoomIcon from '@material-ui/icons/Room';
import { IconButton } from '@material-ui/core';


function CardCompanys(props) {

    return (
        <React.Fragment>
            <Card sx={{ minWidth: 275 }}>
                <CardMedia
                    component="img"
                    height="100"
                    image={require('../Images/logo.jpg')}
                    alt="company logo"
                />
                <CardContent sx={{ padding: '10px', alignItems: 'center' }}>
                    <Typography variant="h5" component="div">
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
                    <Button size="small" >Sobre</Button>
                    <Button size="small" >Compartilhar</Button>
                </CardActions>
            </Card>
        </React.Fragment>
    )
}

export default CardCompanys;