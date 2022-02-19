import React from "react";
import styled from "styled-components";
import img from "../img/galaxia.jpg"

const FundoGeral = styled.div`
background-image: url(${img});
min-height: 100vh;
max-width: 100vw;
background-size: cover;
`

const Letras = styled.h1`
color: white;
`

const CreateTripPage = () => {
    return (
        <FundoGeral>
            <Letras>CreateTripPage</Letras>
        </FundoGeral>
    )
}

export default CreateTripPage;