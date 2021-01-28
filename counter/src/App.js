import React from "react";
import './App.css';
import Counter from'./Counter';

export class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      count :0
    }
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
  }
      incrementCount = () =>{
        let result = this.state.count;
        result ++;
        this.setState({count: this.state.count + 1})
      }
      decrementCount = () =>{
        let result = this.state.count;
        if(result === 0){
          return;
        }
        result --;
        this.setState({count: this.state.count - 1})
      }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <Counter count={this.state.count} removeFunction={this.decrementCount} addFunction={this.incrementCount}/>
            
      </div>
    ); 
  }
}

export default App;