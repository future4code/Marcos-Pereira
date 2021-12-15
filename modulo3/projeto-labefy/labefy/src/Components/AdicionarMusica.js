import React from "react";
import axios from "axios";
import styled from "styled-components";

class AdicionarMusica extends React.Component {
    state={
        nomeDaMusica: "",
        nomeDoArtista: "",
        urlMusica: "",
        listaMusicas: []
    }

    mudaMusicaInput = (event) => {
        this.setState({nomeDaMusica: event.target.value})
        console.log(this.state.nomeDaMusica)
    }

    mudaArtistaInput = (event) => {
        this.setState({nomeDoArtista: event.target.value})
        console.log(this.state.nomeDoArtista)
    }

    mudaUrlInput = (event) => {
        this.setState({urlMusica: event.target.value})
        console.log(this.state.urlMusica)
    }


    AdicionarMusica = (id) => {
        let URL = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
    
        let body = {
            "name": this.state.nomeDaMusica,
            "artist": this.state.nomeDoArtista,
            "url": this.state.urlMusica
        }
        let autorizacao = {
          headers: {
            Authorization: "marcos-munarim-joy"
          }
        }
    
        axios.post(URL, body, autorizacao)
        .then((response) => {
          this.setState({nomeDaMusica:"", nomeDoArtista:"", urlMusica:""})
          alert("Música adicionada com sucesso!")
        })
        .catch((error) => {alert(error)})
      }

    render() {

        // let musicaMap = this.state.listaMusicas.map((musica)=>{
        //     return <p> <strong> Nome:</strong> {listaMusicas.name} {listaMusicas.artist} {listaMusicas.url} <button onClick={() => this.AdicionarMusica(musica.id)}></button> <br /> 
        //     </p>
        // })

        return (
            <div>
        <h3>Adiciona Música</h3>
        <div>
            <input placeholder="Nome da música" value={this.state.nomeDaMusica} onChange={this.mudaMusicaInput} />
            <input placeholder="Nome do artista" value={this.state.nomeDoArtista} onChange={this.mudaArtistaInput} />
            <input placeholder="Link da música" value={this.state.urlMusica} onChange={this.mudaUrlInput} />
            <button onClick={this.AdicionarMusica}>Adicionar</button>
        </div>
      </div>
        )


    }
}

export default AdicionarMusica