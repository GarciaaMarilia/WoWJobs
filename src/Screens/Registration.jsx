import React, { useState } from 'react'

import {
    FormControlLabel,
    FormControl,
    RadioGroup,
    Typography,
    TextField,
    FormLabel,
    Button,
    Radio,
    Box
} from '@material-ui/core';

import Space from '../Style/space';

export default function Registration() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conPassword, setConpassword] = useState("");
    const [gender, setGender] = useState("");
    const [conEmail, setConemail] = useState("");

    return (
        <form>
            <Box style={{ margin: 40 }}>

                <Space size={60} />

                <Typography
                    variant="h4"
                    sx={{ flexGrow: 1 }}
                    align="center"
                    fontFamily='Oswald'
                    color='#363636'
                    fontSize='40px'
                >
                    Registre-se
                </Typography>

                <Space size={20} />

                <TextField
                    value={username}
                    onChange={(event) => {
                        setUsername(event.target.value);
                    }}
                    id="Username"
                    label="Nome"
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
                    >
                        Gênero
                    </FormLabel>
                    <RadioGroup
                        row="row"
                        arial-label="Gênero"
                        color="#104E8B">
                        <FormControlLabel
                            onChange={(event) => {
                                setGender(event.target.value);
                            }}
                            value={gender}
                            name="Feminino"
                            control={<Radio style={{ color: "#104E8B" }} />}
                            label="Feminino"

                        />
                        <FormControlLabel
                            onChange={(event) => {
                                setGender(event.target.value);
                            }}
                            value="male"
                            name={gender}
                            control={<Radio style={{ color: "#104E8B" }} />}
                            label="Masculino"
                            color="primary"
                        />
                        <FormControlLabel
                            onChange={(event) => {
                                setGender(event.target.value);
                            }}
                            value={gender}
                            name="Outro"
                            control={<Radio style={{ color: "#104E8B" }} />}
                            label="Outro"
                        />
                    </RadioGroup>
                </FormControl>

                <Space size={20} />

                <Button
                    style={{ backgroundColor: "#104E8B" }}
                    variant="contained"
                    type="button"
                    fullWidth
                >
                    Registrar Cadastro
                </Button>
            </Box>
        </form >
    )
}
