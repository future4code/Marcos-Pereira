import React from "react";
import styled from "styled-components";
import img from "../img/spaceship.jpg"
import { useHistory } from "react-router-dom";

const FundoHome = styled.div`
background-image: url(${img});
min-height: 100vh;
max-width: 100vw;
background-size: cover;
`

const Letras = styled.h1`
color: white;
display: flex;
justify-content: center;
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

const HomePage = () => {

    const history = useHistory()
    const paginaListaViagens = () => {
        history.push("/trips/list")
    }

    const paginaLogin = () => {
        history.push("/login")
    }


    return (
        <FundoHome>
            <Letras>LabeX</Letras>
            <Efeito>
                <Letras>Viagens intergalácticas</Letras>
                <Letras>Apertem os cintos e apreciem a vista</Letras>
                <button onClick={paginaListaViagens}>VIAGENS</button>
                <button onClick={paginaLogin}>LOGIN</button>
            </Efeito>
        </FundoHome>
    )
}

export default HomePage;