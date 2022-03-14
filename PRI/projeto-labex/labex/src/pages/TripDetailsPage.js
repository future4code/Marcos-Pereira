import React from "react";
import styled from "styled-components";
import img from "../img/galaxia.jpg"

const FundoGeral = styled.div`
background-image: url(${img});
min-height: 100vh;
max-width: 100vw;
background-size: cover;
padding: 50px;
`

const Letras = styled.h1`
color: white;
`

const Efeito = styled.span`
background: rgba(255, 255, 255, 0.4);
display: flex;
flex-direction: column;
height: 60vh;
border-radius: 20px;
margin: 50px;
padding: 20px;
justify-content: space-around;
`

const TripDetailsPage = () => {
    return (
        <FundoGeral>
            <Efeito>
            <Letras>TripDetailsPage</Letras>
            </Efeito>
        </FundoGeral>
    )
}

export default TripDetailsPage;