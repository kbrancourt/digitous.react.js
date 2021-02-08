import React from "react";

class Id1 extends React.Component {
    render() {
      return (
        <div>
          <p>{this.props.title}</p>
          <p>{this.props.director}</p>
          <p>{this.props.stars}</p>
          <img src={this.props.image}/>
          <p>{this.props.description}</p>
        </div>
      );
    }
  }
  
  export default Id1;