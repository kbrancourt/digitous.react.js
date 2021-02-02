import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './components/Button.jsx';
import Add from './components/Add';
import List from './components/List';
import Pay from './components/Pay';


export class App extends React.Component {
  constructor(){
    super();
      this.state={
        activeTab:"add",
        items: []
      }
      this.selectedAdd=this.selectedAdd.bind(this);
      this.selectedList=this.selectedList.bind(this);
      this.selectedPay=this.selectedPay.bind(this);
  }

 

  selectedAdd(){
      this.setState({
        activeTab: "add"
      })
  }
  selectedList(){
      this.setState({
        activeTab: "list"
      })
  }
  selectedPay(){
      this.setState({
        activeTab: "pay"
      })
  }

  addItem(name,price){
      this.setState({
        items:{
          name : "xx",
          price: "xx",
        }
      })
      console.log(items);
  }

  render() {
    return (
      <div>
        <h1 className="text-primary">Bakery</h1>
        <div className="row">
          <div className="col-3 "> 
            <Button type="button" isSelected={this.state.activeTab === "add"?"form-control btn btn-primary" : "form-control btn btn-light"} onClick={this.selectedAdd}>Add</Button>
          </div>
          <div className="col-3"> 
            <Button type="button" isSelected={this.state.activeTab === "list"?"form-control btn btn-primary" : "form-control btn btn-light"} onClick={this.selectedList}>List</Button>
          </div>
          <div className="col-3"> 
            <Button type="button" isSelected={this.state.activeTab === "pay"?"form-control btn btn-primary" : "form-control btn btn-light"} onClick={this.selectedPay}>Pay</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;