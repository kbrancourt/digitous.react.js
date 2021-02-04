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



  render(){
      <div>
        <Button onClick="">France</Button>
        <Button onClick="">Brazil</Button>
        <Button onClick="">Croatia</Button>
      </div>

    return (
      <div>
        <h1 className="text-primary">Countries</h1>
        <Cards></Cards>
      </div>
    );
  }
}

export default App;