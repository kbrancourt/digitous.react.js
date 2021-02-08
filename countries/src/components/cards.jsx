import React from "react";

class Cards extends React.Component{

    render(){
        return(
            <div className="card">
              <img className="col-8 offset-2" src={this.props.flag}/>
              <p className="text-center"><b>Name </b>{this.props.name}</p>
              <p className="text-center"><b>Capital:</b> {this.props.capital}</p>
              <p className="text-center"><b>Population:</b> {this.props.population} habitants</p>
              <p className="text-center"><b>Region: </b>{this.props.region}</p>
            </div>
        )
    }
}

export default Cards;