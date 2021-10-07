import React from 'react';
import Slider from "react-slick";
import Typography from '@mui/material/Typography';
import CardCompany from '../Components/CardCompanys';
import Space from '../Style/space';
import DetailsCompany from '../Components/DetailsCompany';


function Companys(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Slider {...settings}>
            <React.Fragment>
                <Typography variant="h5" component="div" align="center" color='#000080' fontFamily='Oswald' fontSize='80px'>
                    Empresas Parceiras
                </Typography>
                <Space size={40} />
                <CardCompany name={"Nome da Empresa"} area={"Área de atuação"} location={"Localização"} />
                <Space size={40} />
                <CardCompany name={"Nome da Empresa"} area={"Área de atuação"} location={"Localização"} />
                <Space size={40} />
                <CardCompany name={"Nome da Empresa"} area={"Área de atuação"} location={"Localização"} />
                <Space size={40} />
            </React.Fragment>
        </Slider>
    );
}

export default Companys;