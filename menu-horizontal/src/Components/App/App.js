import React from 'react'
import { Route, Switch} from 'react-router-dom'

import './App.css';

import Header from '../Header/Header.js';
import Home from '../Home/Home.js';
import Cursos from '../Cursos/Cursos.js';
import Contatos from '../Contatos/Contatos.js';
import Parceiros from '../Parceiros/Parceiros.js';
import Missao from '../Missao/Missao.js';
import Sobre from '../Sobre/Sobre.js';

function App(props) {
  return (   
    <>
      <Header />

      <main>
        <Switch>
          <Route exact path="/" render={(props) => <Home />}></Route>
          <Route exact path="/cursos" render={(props) => <Cursos />}></Route>
          <Route exact path="/contatos" render={(props) => <Contatos />}></Route>
          <Route exact path="/parceiros" render={(props) => <Parceiros />}></Route>
          <Route exact path="/missao" render={(props) => <Missao />}></Route>
          <Route exact path="/sobre" render={(props) => <Sobre />}></Route>
        </Switch>
      </main>

    </>
    
  );
}

export default App;


/* Seções:
1 - inicio/header
2 - cursos
3 - contatos
4 - parceiros
5 - missão
6 - rodapé/footer
*/