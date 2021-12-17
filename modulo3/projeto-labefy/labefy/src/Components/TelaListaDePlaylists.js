import React from 'react';
import axios from 'axios'
import styled from 'styled-components'
import DetalhesPlay from './DetalhesPlay';
import AdicionaMusica from './AdicionaMusica';

class TelaListaDePlaylists extends React.Component {

    state = {
        idPlaylist: '',
        mostraLista: false,
        mostraDetalhe: false
    }

       deletePlay = (id) => {

        axios.delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
          {
            headers:{
              Authorization: "marcos-munarim-joy"
            }
          }
        )
        .then(() => {
          alert("Playlist apagada com sucesso!");
          this.pegaPlaylists();
        })
        .catch((err) => {
          // console.log(err.response.data)
        })
      }

    addMusica = (id) => {
      this.state.mostraLista 
      ? this.setState({mostraLista:false})
      : this.setState({mostraLista:true})
      this.setState({idPlaylist:id})
    }
    detalhesDaPlay = (id) => {
      this.state.mostraDetalhe
      ? this.setState({mostraDetalhe:false})
      : this.setState({mostraDetalhe:true})
    }

    render() {
        
    let mostraLista = <h1>Página de erro</h1> 
    if(this.state.mostraLista){
      mostraLista = <AdicionaMusica idPlaylist = {this.state.idPlaylist} />
    }else{
      mostraLista= ""
    }
    let mostraDetalhe = <h1>Página de erro</h1> 
    if(this.state.mostraDetalhe){
      mostraDetalhe = <DetalhesPlay />
    }else{
      mostraDetalhe= ""
    }

        let playListsMap = this.props.playlists.map((playlist)=>{
            return <p> <strong> Nome:</strong> {playlist.name} <button onClick={() => this.deletePlay(playlist.id)}>APAGAR</button><br /> 
              <button onClick={this.detalhesDaPlay}>Detalhes da Playlist</button> 
              <button onClick={() => this.addMusica(playlist.id)}>Adicionar Música</button>
             
               
            </p>
        })

        return(

            <div key={playListsMap.id}>
                <h2>Quantidade de playlists: {playListsMap.length}</h2>
                 <p> {playListsMap} </p>
                 <div>{mostraLista}{mostraDetalhe}</div>
            </div>
        )
    }

}
export default  TelaListaDePlaylists