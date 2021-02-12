import React from "react";


class Favorites extends React.Component{
    constructor(){
      super();
        this.state={
          movies : [],
          favIDs: getStorage()
        }
    }

    //Dans un componentDidMount, parcourez l'array favIDs et pour chaque item, lancez la méthode getMovie puis remplissez le state movies avec le résultat (attention, tous les films doivent être dans movies !)


   componentDidMount(){
     this.state.favIDs.map((getMovie) => {
       this.setState({
         movies:""
       })
     }
 }

 //Créez la méthode getStorage qui va retourner votre array d’ID sauvegardés
 //localStorage.getItem(key)


// getStorage(){
//     const idList = this.state.movies;
//       idList.push()
// }
  


  getMovie = (id) => {
    fetch(`http://api.themoviedb.org/3/movie/${id}?api_key=9bdc573f40963087e0f47872b51195a9`)
    .then((response) => response.json())
      .then((response) => {
        console.log("result", response);
        
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
