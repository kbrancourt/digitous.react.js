import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom"; // on importe les outils du router
import Cards from './Cards'



class Popular extends React.Component {
  constructor() {
    super();
    this.state = {
      detailsMovie: [],
      title: "",
      release_date: "",
      original_language: "",
      overview: "",
      poster_path: "",
      popularity: "",
    };
  }

  componentDidMount() {
    this.getMovie("Wonder Woman");
  }

  getMovie(movie) {
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
      <BrowserRouter>
        <h1>Popular</h1>

        {this.state.detailsMovie.map((movie) => {
          return (
            <p>
              <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
            </p>
          );
        })}
        
        <Cards>
          <div className="container-fluid">
            <h1>{this.props.title}</h1>
            <img src="https://image.tmdb.org/t/p/w300/" alt="Affiche du film"/>
            <p>{this.props.release_date}</p>
            <p>{this.props.overview}</p>
          </div>
        </Cards>
      </BrowserRouter>
    );
  }
}

export default Popular;
