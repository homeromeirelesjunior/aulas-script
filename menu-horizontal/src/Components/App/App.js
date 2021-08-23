import React from 'react'
import './App.css';
import { Route, Switch} from 'react-router'

import Header from '../Header/Header';
import Home from '../Home/Home';

function App() {
  return (   
    <div>
      <Header />

      <main>
        <Switch>
          <Route exact path="/" render={(props) => <Home />}>

          </Route>

        </Switch>
      </main>

    </div>
    
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