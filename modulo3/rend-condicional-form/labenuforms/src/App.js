import React from 'react';
import Etapa1 from './components/Etapa1';
import styled from 'styled-components';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';

const ContainerPagina = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  `

export default class App extends React.Component {

  state = {
    etapa: 1,
  }
//parei no passo 12, começar do 13

  render() {
    return (
      <div>
        <button>Próxima etapa</button>
      </div>
    );
  }
}