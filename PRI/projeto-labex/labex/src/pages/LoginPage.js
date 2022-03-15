import React, { useState } from "react";
import styled from "styled-components";
import img from "../img/galaxia.jpg"
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

const LoginPage = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const history = useHistory()
    const {form, onChange} = useForm ({email:"", password:""})
    const voltarParaHome = () => {
        history.push("/")
    }

    const fazLogin = (history) => {
        history.push("/admin/trips/list")
    }
    
    const onSubmitLogin = () => {
        axios.post(`${BASE_URL/LoginPage}`, {
            email,
            password          
        }).then(({ data }) => {
            localStorage.setItem("token", data.token)
            console.log(data)
        }).catch(res => console.log(res.message))
    }
    
    const onClickLogin = (event) => {
        event.preventDefault()
        onSubmitLogin(form, history)
    }
    
    return (
        <FundoGeral>
            <Efeito>
            <Letras>LoginPage</Letras>
            <form onSubmit={onClickLogin}>
            <input
                    placeholder={"E-mail"}
                    type={"email"}
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    required
                />
                <input
                    placeholder={"Senha"}
                    type={"password"}
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    required
                /> 
                <button onClick={() => fazLogin(history)} >Login</button>
            </form>
                <button onClick={voltarParaHome}>Voltar para Home</button>
            </Efeito>
        </FundoGeral>
    )
}

export default LoginPage;