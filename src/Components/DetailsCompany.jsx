import React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box';
import RoomIcon from '@material-ui/icons/Room';

function DetailsCompany(props) {
    return (
        <Box sx={{ width: 'auto', height: '80%', borderRadius: 2, margin: 2}}>
            <CardContent sx={{ padding: '10px', alignItems: 'center' }}>
                <Typography variant="h5" component="div">
                    {props.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    <IconButton>
                        <RoomIcon />
                    </IconButton>
                    {props.location}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {props.description}
                </Typography>
            </CardContent>
        </Box>
    )
}

export default DetailsCompany;