import React from "react";

export default class Etapa1 extends React.Component {
    render() {
        return <div>
            <h2>ETAPA 1 - DADOS GERAIS</h2>
            <p>1. Qual o seu nome?</p>
            <input />
            <p>2. Qual a sua idade?</p>
            <input />
            <p>3. Qual seu e-mail?</p>
            <input />
            <p>4. Qual a sua escolaridade?</p>
            <select>
                <option>Ensino médio incompleto</option>
                <option>Ensino médio completo</option>
                <option>Ensino superior incompleto</option>
                <option>Ensino superior completo</option>
            </select>
        </div>
    }
}