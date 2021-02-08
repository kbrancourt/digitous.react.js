import React from "react";
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Id1 from "./components/id1";
import Id2 from "./components/id2";
import Id3 from "./components/id3";
import Id4 from "./components/id4";
import Id5 from "./components/id5";
import Id6 from "./components/id6";
import Id7 from "./components/id7";
import Id8 from "./components/id8";


// - Lorsqu'on arrive sur la page d'accueil, une liste de tous les titres de film
// - Chaque titre est un lien qui nous emmène sur la page du film (route dynamique) le paramètre de l'url est l'id du film
// - Quand on arrive sur la page d'un film, on peut y trouver le titre, le réalisateur, les acteurs, l'affiche et la description
// - Vous ne devez utiliser que deux routes dans votre router : `/` et une route dynamique de votre choix
// - Le catalogue sera le contenu du fichier JSON ci-dessous, stockez-le dans un endroit stratégique 😉


class App extends React.Component {
  constructor(){
    super();
    this.state={
      title: "",
      director:"",
      stars: "",
      image: "",
      description:"",
      
    }
  }



renderContent = ()=> {
  return (
    <Switch>
      <Route path="/"></Route>
      <Route path="/"></Route>
    </Switch>
  )
}

  render() {
    return (
      <BrowserRouter>
        <h1 className="text-primary">Home Page</h1>
        <Link to="/id1"> A Wrinkle in Time </Link>
        <Link to="/id2"> The Strangers: Prey at Night </Link>
        <Link to="/id3"> The Hurricane Heist </Link>
        <Link to="/id4"> Gringo </Link>
        <Link to="/id5"> Thoroughbreds </Link>
        <Link to="/id6"> The Leisure Seeker </Link>
        <Link to="/id7"> Black Panther </Link>
        <Link to="/id8"> Red Sparrow </Link>
        {this.renderContent()}
      </BrowserRouter>
    );
  }
}

export default App;
