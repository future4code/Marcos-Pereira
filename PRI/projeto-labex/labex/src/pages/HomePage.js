import React from "react";
import styled from "styled-components";
import img from "../img/spaceship.jpg"

const FundoHome = styled.div`
background-image: url(${img});
min-height: 100vh;
max-width: 100vw;
background-size: cover;
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
`

const HomePage = () => {
    return (
        <FundoHome>
            <Letras>LabeX</Letras>
            <Efeito>
                <Letras>kkkkkkkkkkkkkk</Letras>
                <Letras>kkkkkkkkkkkkkk</Letras>
                <Letras>kkkkkkkkkkkkkk</Letras>
                <Letras>kkkkkkkkkkkkkk</Letras>
                <button>VIAGENS</button>
                <button>LOGIN</button>
            </Efeito>
        </FundoHome>
    )
}

export default HomePage;