import React from "react";


class Add extends React.Component {
    constructor(){
        super();
          this.state={
            productName: "",
            price: 1
          }
          this.update = this.update.bind(this);
          this.updateProductName = this.updateProductName.bind(this);
          this.updatePrice = this.updatePrice.bind(this);
      }
    

      updateProductName = (e) => {
        console.log("result", e)

        this.setState({ 
          productName: e.target.value 
        });
        
      };
        

      updatePrice = (e) =>{
        this.setState({ 
          price: e.target.value 
        });
      }
      
      update(){
        this.props.addItem(
          this.state.productName,
          this.state.price,
        )
      }
      

  render() {
    return (
      
        <div className="row">
          {/* //créer onglet Add: ajouter nvx produits à la commande*/}
          Add
          <input type="text" onChange={this.updateProductName}/>
          <input type="range" min={1} max={10} onChange={this.updatePrice}/>
          <button onClick={this.update}>Add</button>
        </div>
      
    );
  }
}

export default Add;