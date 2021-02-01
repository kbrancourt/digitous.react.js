import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Form from './Components/Form'

export class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className="text-primary">Login</h1>
        <Form/>
      </div>
    );
  }
}

export default App;