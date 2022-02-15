import react from "react";
import { CharacterDetailPage } from "./CharacterDetailPage/CharacterDetailPage";
import { CharacterListPage } from "./CharacterListPage/CharacterListPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>

      <Route exact path={"/"}>
          <CharacterListPage />
          </Route>
          
        <Route exact path={"/character-detail"}>
          <CharacterDetailPage />
          </Route>
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
