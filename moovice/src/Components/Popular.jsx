import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom"; // on importe les outils du router
import Cards from './Cards'



class Popular extends React.Component {
  constructor() {
    super();
    this.state = {
      detailsMovie: [],
    };
  }


  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9bdc573f40963087e0f47872b51195a9"
    )
      .then((response) => response.json())
      .then((response) => {
        console.log("result", response);
        this.setState({
          detailsMovie: response.results,
        });
      })
      .catch((error) => console.error(error));
  }

  render() {
    return (
      <div>
        <h1>Popular</h1>

        {this.state.detailsMovie.map((movie,index) => {
          return (
            <p key={index}><Cards film={movie}/></p>
            
        )}
        )}
      </div>
        
    
    )}
}

export default Popular;
