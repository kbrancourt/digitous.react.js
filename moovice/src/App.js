import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom"; // on importe les outils du router
import Homepage from "./Components/Homepage";
import Weekly from "./Components/Weekly";
import WeeklyBattle from "./Components/Weekly-battle";
import Popular from "./Components/Popular";
import PopularBattle from "./Components/popular-battle";
import Favorites from "./Components/Favorites";
import Cards  from "./Components/Cards";

class App extends React.Component {
  
  render() {
    return (
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-items" to="/">
            Home
          </Link>
          <Link className="navbar-items" to="/weekly">
            Weekly
          </Link>
          <Link className="navbar-items" to="/WeeklyBattle">
            Weekly Battle
          </Link>
          <Link className="navbar-items" to="/Popular">
            Popular
          </Link>
          <Link className="navbar-items" to="/PopularBattle">
            Popular Battle
          </Link>
          <Link className="navbar-items" to="/Favorites">
            Favorites
          </Link>
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

