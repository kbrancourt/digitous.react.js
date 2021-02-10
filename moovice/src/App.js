import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom"; // on importe les outils du router
import Homepage from './Components/Homepage';
import Weekly from './Components/Weekly';
import WeeklyBattle from './Components/WeeklyBattle';
import Popular from './Components/Popular';
import PopularBattle from '/Components/PopularBattle';
import Favorites from './Components/Favorites';

class App extends React.Component{
  render(){
    return (
      <BrowserRouter>
        <h1>Homepage</h1>



          <Switch>
              <Route path="/" />
          </Switch>
      </BrowserRouter>
    );
  }
  
}

export default App;
