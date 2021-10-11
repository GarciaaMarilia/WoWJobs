import React from 'react';
import Slider from "react-slick";
import Typography from '@mui/material/Typography';
import CardCompany from '../Components/CardCompanys';
import Space from '../Style/space';


function Companys(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <React.Fragment>
            <Typography
                variant="h5"
                align="center"
                fontFamily='Oswald'
                fontSize='40px'
                color='#363636'
            >
                Empresas Parceiras
            </Typography>
            <Space size={60} />
            <CardCompany name={"Nome da Empresa"} area={"Área de atuação"} location={"Localização"} />
            <Space size={40} />
            <CardCompany name={"Nome da Empresa"} area={"Área de atuação"} location={"Localização"} />
            <Space size={40} />
            <CardCompany name={"Nome da Empresa"} area={"Área de atuação"} location={"Localização"} />
            <Space size={40} />
        </React.Fragment>
    );
}

export default Companys;