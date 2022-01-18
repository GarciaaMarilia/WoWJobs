import React, { useState } from "react";

import {
    TextField,
    Button,
    Switch,
    FormControlLabel,
    Typography
} from '@material-ui/core';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import Space from "../Style/space";


export default function FormularioLogin() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);


    return (
        <form>
            <Box style={{ margin: 50 }}>

                <Space size={60} />

                <Typography
                    variant="h5"
                    align="center"
                    fontFamily='Oswald'
                    fontSize='40px'
                    color='#363636'
                >
                    Entrar
                </Typography>

                <Space size={60} />

                <TextField
                    value={login}
                    onChange={(event) => {
                        setLogin(event.target.value);
                    }}
                    id="login"
                    label={
                        <>
                            <AccountCircleIcon style={{ paddingRight: "6px" }} />
                            Usuário
                        </>
                    }
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />

                <TextField
                    value={password}
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}
                    id="password"
                    label={
                        <>
                            <LockIcon style={{ paddingRight: "6px" }} />
                            Senha
                        </>
                    }
                    type="password"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />

                <Space size={20} />

                <Stack
                    direction="row"
                    spacing={2}
                >
                    <Button
                        type="button"
                        variant="contained"
                        style={{ backgroundColor: '#104E8B' }}
                    //onClick={onSubmit}
                    >
                        Entrar
                    </Button>

                    <Button
                        type="button"
                        variant="contained"
                        style={{ backgroundColor: '#104E8B' }}
                    //onClick={onSubmit}
                    >
                        Cadastre-se
                    </Button>

                    <FormControlLabel
                        label="Lembrar-me"
                        control={
                            <Switch
                                checked={remember}
                                onChange={(event) => {
                                    setRemember(event.target.checked);
                                }}
                                name="remember"
                                style={{ color: "#104E8B" }}
                            />
                        }
                    />
                </Stack>
            </Box>

        </form>
    )
}
