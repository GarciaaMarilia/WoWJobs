import React, { useState } from "react";
import { TextField, Button, Switch, FormControlLabel, Typography } from '@material-ui/core';
import Stack from '@mui/material/Stack';


function FormularioLogin() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(true);

    return (
        <form>
            <Typography variant="h5" component="div" align="center">
                Login
            </Typography>
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
            <Stack direction="row" spacing={2}>
                <Button
                    type="button"
                    variant="contained"
                    style={{ backgroundColor: "#000080" }}
                //onClick={onSubmit}
                >
                    Entrar
                </Button>

                <Button
                    type="button"
                    variant="contained"
                    style={{ backgroundColor: "#000080" }}
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
                            style={{ color: "#000080" }}
                        />
                    }
                />
            </Stack>

        </form>
    )
}

export default FormularioLogin;