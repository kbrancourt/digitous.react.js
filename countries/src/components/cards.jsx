import React from "react";

class Cards extends React.Component{

    render(){
        return(
            <div className="card">
              {this.props.flag}
              {this.props.name}
              {this.props.capital}
              {this.props.region}
              {this.props.population}
            </div>
        )
    }
}

export default Cards;