import React, { useState } from 'react'
import { TextField, Button, FormControlLabel, Radio, RadioGroup, FormLabel, FormControl, Typography } from '@material-ui/core';

function Registration() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conPassword, setConpassword] = useState("");
    const [gender, setGender] = useState("");
    const [conEmail, setConemail] = useState("");

    return (
        <form>
                <Typography
                    variant="h4" component="div"
                    sx={{ flexGrow: 1 }}
                    align="center">
                    Registre-se
                </Typography>
            <TextField
                value={username}
                onChange={(event) => {
                    setUsername(event.target.value);
                }}
                id="Username"
                label="Username"
                required
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <TextField
                value={email}
                onChange={(event) => {
                    setEmail(event.target.value);
                }}
                id="email"
                label="Email"
                required
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <TextField
                value={conEmail}
                onChange={(event) => {
                    setConemail(event.target.value);
                }}
                id="conEmail"
                label="Confirme e-mail"
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
                type="password"
                id="Password"
                label="Senha"
                required
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <TextField
                value={conPassword}
                onChange={(event) => {
                    setConpassword(event.target.value);
                }}
                type="password"
                id="conPassword"
                label="Confirme senha"
                required
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <FormControl
                component="fieldset"
                margin="normal">
                <FormLabel
                    component="legend"
                    style={{ color: "#000080" }}>
                    Gênero
                </FormLabel>
                <RadioGroup
                    row = "row"
                    arial-label="Gênero"
                    color="primary">
                    <FormControlLabel value={gender}
                        onChange={(event) => {
                            setGender(event.target.value);
                        }}
                        value="female"
                        name="Feminino"
                        control={<Radio style={{ color: "#000080" }}/>}
                        label="Feminino"
                        color="primary"
                    />
                    <FormControlLabel value={gender}
                        onChange={(event) => {
                            setGender(event.target.value);
                        }}
                        value="male"
                        name="Masculino"
                        control={<Radio style={{ color: "#000080" }}/>}
                        label="Masculino"
                        color="primary"
                    />
                    <FormControlLabel value={gender}
                        onChange={(event) => {
                            setGender(event.target.value);
                        }}
                        value="other"
                        name="Outro"
                        control={<Radio  style={{ color: "#000080" }}/>}
                        label="Outro"
                    />
                </RadioGroup>
            </FormControl>

            <Button
                type="button"
                variant="contained"
                style={{ backgroundColor: "#000080" }}
                fullWidth
                >
                Registrar Cadastro
            </Button>

        </form >
    )
}

export default Registration;