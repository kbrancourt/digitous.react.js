import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Add'
import './components/List'
import './components/Pay'
import './components/Button'

export class App extends React.Component {
  constructor(){
    super();
      this.state={
        activeTab: add,
        item: []
      }
      this.isSelected=this.isSelected.bind(this);
      this.selectedAdd=this.selectedAdd.bind(this);
      this.selectedList=this.selectedList.bind(this);
      this.selectedPay=this.selectedPay.bind(this);
  }

  isSelected(){
  if(this.state.activeTab === this.state.children){
    //  le bouton passe au bleu=> 
      this.props.className="form-control btn btn-primary"
   }else{
// sinon le bouton reste blanc else => 
      this.props.className="form-control btn btn-light"
   }
  }
  
  selectedAdd(){
      this.setState={
        activeTab: "add"
      }
  }
  selectedList(){
      this.setState={
        activeTab: "list"
      }
  }
  selectedPay(){
      this.setState={
        activeTab: "pay"
      }
  }

  render() {
    return (
      <div>
        <h1 className="text-primary">Bakery</h1>
        <div className="row">
          <div className="col-8"> 
            <Button type="button" isSelected={this.state.activeTab === "add"?"form-control btn btn-primary" : "form-control btn btn-light"} onClick={this.selectedAdd}>Add</Button>
          </div>
          <div className="col-8"> 
            <Button type="button" isSelected={this.state.activeTab === "list"?"form-control btn btn-primary" : "form-control btn btn-light"} onClick={this.selectedList}>List</Button>
          </div>
          <div className="col-8"> 
            <Button type="button" isSelected={this.state.activeTab === "pay"?"form-control btn btn-primary" : "form-control btn btn-light"} onClick={this.selectedPay}>Pay</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;