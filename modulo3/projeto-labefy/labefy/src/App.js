import React from 'react';
import axios from 'axios';
import TelaCriarPlaylists from './Components/TelaCriarPlaylists';
import TelaListaPlaylists from './Components/TelaListaPlaylists';
import AdicionarMusica from './Components/AdicionarMusica';

class App extends React.Component {
  state  = {
    mostraPlaylists: false
  }

    mudaCondicionalDeLista =  () => {
      this.state.mostraPlaylists ? this.setState({mostraPlaylists: false}) : this.setState({mostraPlaylists: true})
      }

  render(){

    let mostraLista = <h1>Página de erro</h1> 
    if(this.state.mostraPlaylists){
      mostraLista = <TelaListaPlaylists />
    }else{
      mostraLista= ""
    }

    return (
      <div>
        <TelaCriarPlaylists />
        <br/><hr />
        <br/><button onClick={this.mudaCondicionalDeLista}>Mostrar/Esconder Playlists</button>
        {mostraLista}
        <AdicionarMusica />
      </div>

  );
  }
}

export default App;