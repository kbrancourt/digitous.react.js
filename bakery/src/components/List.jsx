import React from "react";


class List extends React.Component {
    constructor(){
        super();
          this.state={
            items: "xx",
            price: "xx"
          }
      }
    

      items(){
        this.setState({
          
        })
      }

  render() {
    return (
    
        <div className="row">
          {/* //créer onglet List : obtenir récap des prosuits saisis*/}
          List
          <ul>
              {this.state.items}
          </ul>
        </div>
     
    );
  }
}

export default List;