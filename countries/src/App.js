import React from "react";
import './App.css';
import Button from './components/button';
import Cards from './components/cards';


export class App extends React.Component {
  constructor(){
    super();
    this.state={
      name: "",
      capital:"",
      flag: "",
      population: "",
      region:""
    }

    this.componentDidMount =this.componentDidMount.bind(this);
    this.getCountry =this.getCountry.bind(this);
    this.selectedFrance=this.selectedFrance.bind(this);
      this.selectedBrazil=this.selectedBrazil.bind(this);
      this.selectedCroatia=this.selectedCroatia.bind(this);
  }

   componentDidMount(){
     fetch("https://restcountries.eu/rest/v2/name/france")
     .then(resultat => resultat.json())
    //  console.log("resultat", resultat)
     .then(name => {
       this.setState={
            name: name[0].name,
            capital:name[0].capital,
            flag: name[0].flag,
            population: name[0].population,
            region:name[0].region
     }
   })
   .catch(error => console.error(error))
  }


  getCountry(country){
    fetch("https://restcountries.eu/rest/v2/name", country)
    .then(resultat => resultat.json())
     .then(name => {
       this.setState={
        name: name[0].name,
        capital:name[0].capital,
        flag: name[0].flag,
        population: name[0].population,
        region:name[0].region
     }
   })
   .catch(error => console.error(error))
  }

  selectedFrance(){
    this.setState({
      name: "france"
    })
  } 

  selectedBrazil(){
    this.setState({
      name: "brazil"
    })
  }
  
  selectedCroatia(){
    this.setState({
      name: "croatia"
    })
  }

  render(){
     

    return (
      <div className="container">
        <h1>Countries</h1>
          <div className="row">
            <div className="col-3">
              <Button type="button" isSelected={this.state.name === "france"?"form-control btn btn-primary" : "form-control btn btn-light"} onClick={this.selectedFrance}>France</Button>
            </div>
            <div className="col-3">
              <Button type="button" isSelected={this.state.name === "brazil"?"form-control btn btn-primary" : "form-control btn btn-light"} onClick={this.selectedBrazil}>Brazil</Button>
            </div>
            <div className="col-3">
              <Button type="button" isSelected={this.state.name === "croatia"?"form-control btn btn-primary" : "form-control btn btn-light"} onClick={this.selectedCroatia}>Croatia</Button>
            </div>
          </div>
        <Cards></Cards>
      </div>
    );
  }
}

export default App;