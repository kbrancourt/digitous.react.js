import React from "react"
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";


class Cards extends React.Component{
   
    
  render(){
      const{film}= this.props;
      let url = `https://image.tmdb.org/t/p/w300/${film.poster_path}`
    return (
        <>
            
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>{film.title}</h1>
                    </div>
                    <div className="col">
                         {film.release_date}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <img src={url}/>
                    </div>
                    <div className="col">
                    {film.overview}
                    </div>
                
                </div>
                </div>
        </>    
        
        
    );
    }
  
  
}

export default Cards;
