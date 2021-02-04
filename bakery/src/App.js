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
      this.renderContent=this.renderContent.bind(this);
      this.addItem=this.addItem.bind(this);
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

  addItem(name, price) {
    const obj = {
      name: name,
      price: price
    }
    const newList = this.state.items
    newList.push(obj)
    this.setState({
      items: newList
    })
  }
    renderContent(){
      if(this.state.activeTab === "add"){
        return <Add addItem={this.addItem} />
      }
      if(this.state.activeTab === "list"){
        return <List listItems={this.state.items}></List>
      }
      if(this.state.activeTab === "pay"){
        return <Pay></Pay>
      }
    }


  render() {
    return (
      <div border="secondary" style={{ width: '18rem' }}>
        <h1 className="text-dark">Bakery</h1>
        <div className="row" >
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
        {this.renderContent()}
      </div>
    );
  }
}

export default App;