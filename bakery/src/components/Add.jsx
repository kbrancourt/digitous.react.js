import React from "react";


class Add extends React.Component {
    constructor(){
        super();
          this.state={
            productName: "",
            price: 1
          }
      }
    
      updateItemName(){
          this.setState({
            ProductName:this.props.value
          })
        }
      updatePrice(){
          this.setState({
            Price:this.props.value
          })
        }
      
      

  render() {
    return (
      
        <div className="row">
          {/* //créer onglet Add: ajouter nvx produits à la commande*/}
          Add
          <input type="text" onChange={this.props.updateProductName}/>
          <input type="range" min={1} max={10} onChange={this.props.updatePrice}/>
          <button onClick="">Add</button>
        </div>
      
    );
  }
}

export default Add;