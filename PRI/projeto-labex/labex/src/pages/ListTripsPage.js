import React, { useState, useEffect } from "react";
import styled from "styled-components";
import img from "../img/galaxia.jpg";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../constants/constants"

const FundoGeral = styled.div`
background-image: url(${img});
min-height: 100vh;
max-width: 100vw;
background-size: cover;
padding: 50px;
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

const ListTripsPage = () => {

    const history = useHistory()
    const voltarParaHome = () => {
        history.push("/")
    }

    const [trips, setTrips] = useState([])

    const inscricao = () => {
        history.push("/trips/application")
    }

    const ListaDeViagens = () => {
        axios.get(`${BASE_URL}/trips`, {
        }).then(({ data }) => {
            console.log(data)
            setTrips(data.trips)
        }).catch(res => console.log(res.data))
    }

    useEffect(() => {
        ListaDeViagens()
    }, [])

    const viagensListadas = trips.map((trip)=>{
        return (
            <div key={trip.id}>
                <p>Nome: {trip.name}</p>
                <p>Descrição: {trip.description}</p>
                <p>Planeta: {trip.planet}</p>
                <p>Tempo de viagem: {trip.durationInDays}</p>
                <p>Data: {trip.date}</p>
            </div>
        )
    })
    console.log(viagensListadas)

    return (
        <FundoGeral>
            <Efeito>
            <Letras>ListTripsPage</Letras>
            {viagensListadas}
            <button onClick={voltarParaHome}>Voltar para Home</button>
            <button onClick={inscricao}>Inscreva-se</button>
            </Efeito>
        </FundoGeral>
    )
}

export default ListTripsPage;