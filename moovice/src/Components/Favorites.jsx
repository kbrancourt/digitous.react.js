import React from "react";


class Favorites extends React.Component{
    constructor(){
      super();
        this.state={
          movies : [],
          favIDs: {}
        }
    }

  // componentDidMount(){
  //   favIDs.map((getMovie) => {
  //     this.setState({
  //       movies:""
  //     })
  //   }
  // }



  getStorage


  getMovie = (id) => {
    fetch(`http://api.themoviedb.org/3/movie/${id}?api_key=9bdc573f40963087e0f47872b51195a9`)
    .then((response) => response.json())
      .then((response) => {
        console.log("result", response);
        const idList = this.state.movies;
        idList.push()
        this.setState({
          movies: response.results,
        });
      })
      .catch((error) => console.error(error));
  }


  render(){
    return (
        <>
          <h1>Favorites</h1>
        </>
    );
    
    }
  
}

export default Favorites;
