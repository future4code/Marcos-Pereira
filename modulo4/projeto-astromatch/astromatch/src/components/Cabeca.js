import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  
  button {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    cursor: pointer;
  }
`;
const Imagem = styled.img`
  width: 200px;
    
`;
const Carinhas = styled.img`
  width: 35px;
`;

const CardContainer = styled.div`
width: 100%;

`
function Cabeca() {
  const [mudaTela, setmudaTela] = useState(false);

  return (
    <CardContainer>
    
      <Container>

        <Imagem src="/img/astromatch.jpeg" /> 
        <Carinhas src="/img/carinhas.jpeg" />

      </Container>

      
    </CardContainer>
  );
}

export default Cabeca;