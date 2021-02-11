import React from "react"
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";


class Cards extends React.Component{
    constructor(){
        super();
            this.state={
                movie:{
                    poster_path:"https://image.tmdb.org/t/p/w300/",
                    title:"",
                    release_date:"",
                    overview:""
                }
            }
    }
  render(){
    return (
        <>
            <img src={this.state.poster_path} alt="Affiche du film"/>
            <h1>{this.state.title}</h1>
            <p>{this.state.release_date}</p>
            <p>{this.state.overview}</p>
        </>
    );
    }
  
  
}

export default Cards;
