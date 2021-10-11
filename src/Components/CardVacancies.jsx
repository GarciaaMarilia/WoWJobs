import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function CardVacancy(props) {

    return (
        <React.Fragment>
            <Card sx={{ minWidth: 275 }}>
                <CardContent sx={{
                    padding: '20px',
                    alignItems: 'center'
                }}
                >
                    <Typography variant="h5">
                        {props.title}
                    </Typography>
                    <Typography
                        sx={{ mb: 1.5 }}
                        color="text.secondary"
                    >
                        {props.format}
                    </Typography>
                    <Typography
                        sx={{ mb: 1.5 }}
                        color="text.secondary"
                    >
                        {props.company}
                    </Typography>
                    <Typography>
                        {props.tecnology}
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton>
                        <ExpandMoreIcon />
                    </IconButton>
                    <IconButton>
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </React.Fragment>
    )
}

export default CardVacancy;