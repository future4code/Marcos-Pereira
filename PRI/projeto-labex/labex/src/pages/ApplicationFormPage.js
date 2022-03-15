import React, {useState} from "react";
import styled from "styled-components";
import img from "../img/galaxia.jpg";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../constants/constants"
import { useForm } from "../hooks/useForm";

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

const ApplicationFormPage = () => {

    const history = useHistory()
    const {form, onChange} = useForm ({nome:"", idade:"", texto:"", profissao:"", pais:""})
    const voltarParaHome = () => {
        history.push("/")
    }

    const enviarInscricao = () => {
        history.push(alert("Candidatura enviada com sucesso!"))
    }

    const [trips, setTrips] = useState({})

    const onSubmitInscricao = (id) => {
        axios.get(`${BASE_URL}/trips/${id}/apply`, {            
        }).then(({ data }) => {
            console.log(data)
            setTrips(data.trips)
        }).catch(res => console.log(res.data))
    }

    const onClickInscricao = (event) => {
        event.preventDefault()
        onSubmitInscricao(form, history)
    }

    return (
        <FundoGeral>
            <Efeito>
            <Letras>Application Form Page</Letras>
            <form onSubmit={onClickInscricao}>
                <input 
                    placeholder={"Nome"} 
                    type={"text"} 
                    name={"nome"} 
                    value={form.nome} 
                    onChange={onChange} 
                    required
                />
                <input 
                    placeholder={"Idade"}
                    type={"number"}
                    name={"idade"}
                    value={form.idade}
                    onChange={onChange}
                    required
                />
                <input 
                    placeholder="Texto de candidatura"
                    type={"text"}
                    name={"texto"}
                    value={form.texto}
                    onChange={onChange}
                    required
                />
                <input
                    placeholder="Profissão"
                    type={"text"}
                    name={"profissao"}
                    value={form.profissao}
                    onChange={onChange}
                    required
                    />
                <input 
                    placeholder="País"
                    type={"text"}
                    name={"pais"}
                    value={form.pais}
                    onChange={onChange}
                    required
                    />
                <button onClick={() => enviarInscricao(history)}>Enviar Inscrição</button>
            </form>
            <button onClick={voltarParaHome}>Voltar Para Home</button>
            </Efeito>
        </FundoGeral>
    )
}

export default ApplicationFormPage;