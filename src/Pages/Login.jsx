import React, { useState } from "react";
import { TextField, Button, Switch, FormControlLabel, Typography } from '@material-ui/core';
import Stack from '@mui/material/Stack';
import Space from "../Style/space";


function FormularioLogin() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(true);

    return (
        <form>
            <Typography
                variant="h5"
                align="center"
                fontFamily='Oswald'
                fontSize='40px'
                color='#363636'
            >
                Login
            </Typography>
            <Space size={80} />
            <TextField
                value={login}
                onChange={(event) => {
                    setLogin(event.target.value);
                }}
                id="Login"
                label="Login"
                required
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <TextField
                value={password}
                onChange={(event) => {
                    setPassword(event.target.value);
                }}
                id="Password"
                label="Password"
                type="password"
                required
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
                    style={{ backgroundColor: "#104E8B" }}
                //onClick={onSubmit}
                >
                    Entrar
                </Button>

                <Button
                    type="button"
                    variant="contained"
                    style={{ backgroundColor: "#104E8B" }}
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

        </form>
    )
}

export default FormularioLogin;