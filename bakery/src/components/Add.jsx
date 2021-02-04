import React from "react";


class Add extends React.Component {
    constructor(){
        super();
          this.state={
            productName: "",
            price: 1
          }
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
      
      click = () => {
        // Dépendant de comment a été déclarer la fonction passé en props
        // On va lui remonter un ou plusieurs arguments

        // this.props.addItem({ name: this.state.productName, price: this.state.price})
        this.props.addItem(this.state.productName, this.state.price)
    }
      

  render() {
    return (
      
        <div className="row">
          <div className="col-12">
             <input type="text" onChange={this.updateProductName}/>
             <button onClick={this.click}>Add</button>
          </div>

          <div clasName="col-12">
             <input type="range" min="1" max="10" value={this.state.price} onChange={this.updatePrice}/>
             <span>{this.state.price}</span>
          </div>
          
          
         
        </div>
      
    );
  }
}

export default Add;