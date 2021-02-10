import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom"; // on importe les outils du router
import results from './results'
import Homepage from './Components/Homepage';
import Weekly from './Components/Weekly';
import WeeklyBattle from './Components/Weekly-Battle';
import Popular from './Components/Popular';
import PopularBattle from './Components/Popular-Battle';
import Favorites from './Components/Favorites';

class App extends React.Component{


  render(){
    return (
      <BrowserRouter>
          <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
              {results.map((movie) => {
                return (
                  <span class="navbar-brand mb-0 h1">
                    <Link to={`/results/${results.id}`}>{results.title}</Link>
                  </span>
                );
              })}
            </div>
        </nav>


          <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/weekly" component={Weekly} />
              <Route path="/weeklyBattle" component={WeeklyBattle} />
              <Route path="/popular" component={Popular} />
              <Route path="/popularBattle" component={PopularBattle} />
              <Route path="/favorites" component={Favorites} />
          </Switch>
      </BrowserRouter>
    );
  }
  
}

export default App;
