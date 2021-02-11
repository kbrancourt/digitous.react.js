import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom"; // on importe les outils du router
import Homepage from './Components/Homepage';
import Weekly from './Components/Weekly';
import WeeklyBattle from './Components/Weekly-Battle';
import Popular from './Components/Popular';
import PopularBattle from './Components/Popular-Battle';
import Favorites from './Components/Favorites';

class App extends React.Component{
  constructor(){
    super();
      this.state={
        detailsMovie:[],
        title: "",
        release_date:"",
        original_language:"",
        overview:"",
        poster_path:"",
        popularity:""
      }

  }

  componentDidMount(){
    this.getMovie("Wonder Woman");
  }

  getMovie(movie){

    fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9bdc573f40963087e0f47872b51195a9")
    .then((response) => response.json())
     .then((response) => {
       console.log("result", response)
       this.setState({
        detailsMovie: response.results
     })
   })
   .catch(error => console.error(error))
  }

  render(){
    return (
      <BrowserRouter>
          <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
              {this.state.detailsMovie.map((movie) => {
                return (
                  <span class="navbar-brand mb-0 h1">
                    <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
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
