import React from "react";


class Popular extends React.Component{
    constructor(props){
        super(props); 
            this.state={
                movies: [],
                filmsList: "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9bdc573f40963087e0f47872b51195a9"
            }
        }



  render(){
    return (
        <>
          <h1></h1>
        </>
    );
    }
  
  
}

export default Popular;
