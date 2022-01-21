import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Cabeca from "./Cabeca";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 420px;
  height: 80vh;
  border: 1px solid black;
  border-radius: 5px;
`;

const Box2 = styled.div `
overflow: hidden;
width: 400px;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`

function Match() {
  const [fotos, setFotos] = useState({});

  const pegaFotos = async () => {
    await axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Marcos-Munarim/person`
      )
      .then((response) => {
        setFotos(response.data.profile);
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    pegaFotos();
  }, []);



  return (
    <Box>
      <Cabeca />
      <Box2>
        <img src={fotos.photo} />
      </Box2>
        <p>{fotos.bio}</p>
        <p>{fotos.name} , {fotos.age} </p>
        <button>Vô</button>
        <button>Num vô</button>
    </Box>
  );
}


export default Match;