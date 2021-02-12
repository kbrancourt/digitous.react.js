import React from "react";
import Cards from './Cards';

class PopularBattle extends React.Component{
  constructor() {
    super();
    this.state = {
      detailsMovie: [],
      currentBattle:0,
      idMovies: localStorage.getItem("favorites"),
      
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

  nextCard(n){
    //console.log("next", n)
    let indice = n+2;
    this.setState({
      currentBattle: indice
    })
    //console.log("current", this.state.currentBattle)
    
  }

  {detailsMovie.filter((movie)=>{
    return movie.id === parseInt(this.props.match.params.id)
  })}
  
  // localStorage.setItem("favorites", this.state.detailsMovie.id)
  //   console.log("favorite", this.state.detailsMovie[0].id)



  render() {
    return (
      <div >
        <h1>Popular Battle</h1>

        {this.state.detailsMovie.slice(this.state.currentBattle,this.state.currentBattle +2).map((movie,index) => {
          return ( 
          <button onClick= {()=> this.nextCard(this.state.currentBattle)}><p key={index}><Cards film={movie}/></p></button>
            
            
        )}
        )}
      </div>
        
    
    )}
  
  
}

export default PopularBattle;
