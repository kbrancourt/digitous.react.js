import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom"; // on importe les outils du router
import Cards from './Cards'
import Moment from "moment";



class Weekly extends React.Component {
  constructor() {
    super();
    this.state = {
      detailsMovie: [],
    };
  }

//Remplacez `LAST_WEEK` et `TODAY` par des valeurs que vous calculerez grâce à `moment`

  componentDidMount() {
    fetch(
      "http://api.themoviedb.org/3/discover/movie?primary_release_date.gte={LAST_WEEK}&primary_release_date.lte=${TODAY}&api_key=${9bdc573f40963087e0f47872b51195a9}"
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
        <h1>Weekly</h1>

        {this.state.detailsMovie.map((movie,index) => {
          return (
            <p  key={index}><Cards film={movie}/></p>
            
        )}
        )}
      </div>
        
    
    )}
}

export default Weekly;
