import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle'
import Badge from '@mui/material/Badge';
import MailIcon from '@material-ui/icons/Mail';
import GTranslateIcon from '@material-ui/icons/GTranslate';


function Status() {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="absolute"
                style={{
                    backgroundColor: "#104E8B"
                }}
            >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        sx={{ flexGrow: 1 }}
                    >
                        WoWJobs
                    </Typography>
                    <IconButton
                        size="large"
                        aria-label="show 1 new mails"
                        color="inherit">
                        <Badge
                            variant="dot"
                            color="error">
                            <MailIcon />
                        </Badge>
                    </IconButton>
                    <IconButton
                        size="large"
                        color="inherit">
                        <GTranslateIcon fontSize="medium" />
                    </IconButton>
                    <Tooltip title="Configurações da Conta">
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="primary-search-account-menu"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>
        </Box>
    )
}


export default Status;