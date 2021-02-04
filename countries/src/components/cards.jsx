import React from "react";

class Cards extends React.Component{

    render(){
        return(
            <div className="card">
              {this.props.name}
              {this.props.capital}
              {this.props.flag}
              {this.props.population}
              {this.props.region}
            </div>
        )
    }
}

export default Cards;