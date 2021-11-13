import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno';
import foto from './components/img/Eu.jpg';
import imgEmail from './components/img/email.png';
import imgGps from './components/img/gps.png';
import atento from './components/img/atento.jpg';
import icesp from './components/img/icesp.jfif';
import styled from 'styled-components';

const BigCardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={foto}
          nome="Marcos Vinicis Munarim Pereira" 
          descricao="Oi, eu sou o Marcos, aluno da Labenu no curso Web Full Stack."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div>
        <CardPequeno 
        imagem={imgEmail}
        nome="E-mail: "
        descricao="marcosvmunarim@gmail.com"
        />
      </div>

      <div>
        <CardPequeno
        imagem={imgGps}
        nome="Endereço: "
        descricao="São Paulo, São Paulo, Brasil"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={atento} 
          nome="Atento Brasil" 
          descricao="Ajudo clientes pessoa jurídica do Bradesco à acessar e navegar nas contas de sua empresa." 
        />
        
        <CardGrande 
          imagem={icesp} 
          nome="Instituto do Câncer do Estado de São Paulo" 
          descricao="Fazia o lançamento no sitema dos medicamentos recebidos pelos pacientes em tratamento de quimioterapia." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
