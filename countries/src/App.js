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
      region:"",
      isSelected: false
    }

    this.componentDidMount =this.componentDidMount.bind(this);
    this.getCountry =this.getCountry.bind(this);
    
  }

   componentDidMount(){
     fetch("https://restcountries.eu/rest/v2/name/france")
     .then(resultat => resultat.json())
    //  console.log("resultat", resultat)
     .then(name => {
       this.setState({
            name: name[0].name,
            capital:name[0].capital,
            flag: name[0].flag,
            population: name[0].population,
            region:name[0].region
     })
   })
   .catch(error => console.error(error))
  }


  getCountry(country){
    if(country === "france"){this.setState({name: "france"}); this.setState({isSelected:true}); console.log("is selected", this.state.isSelected)}
    if(country === "brazil"){this.setState({name: "brazil"}); this.setState({isSelected:true}); console.log("is selected", this.state.isSelected)}
    if(country === "croatia"){this.setState({name: "croatia"}); this.setState({isSelected:true}); console.log("is selected", this.state.isSelected)}

    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(resultat => resultat.json())
     .then(name => {
       this.setState({
        name: name[0].name,
        capital:name[0].capital,
        flag: name[0].flag,
        population: name[0].population,
        region:name[0].region
     })
   })
   .catch(error => console.error(error))
  }

 

  render(){
     

    return (
      <div className="container">
        <h1>Countries</h1>
          <div className="row">
            <div className="col-3">
              <Button type="button" isSelected={this.state.name === "france"?"form-control btn btn-primary" : "form-control btn btn-light"} onClick={() => this.getCountry("france")}>France</Button>
            </div>
            <div className="col-3">
              <Button type="button" isSelected={this.state.name === "brazil"?"form-control btn btn-primary" : "form-control btn btn-light"} onClick={() => this.getCountry("brazil")}>Brazil</Button>
            </div>
            <div className="col-3">
              <Button type="button" isSelected={this.state.name === "croatia"?"form-control btn btn-primary" : "form-control btn btn-light"} onClick={() => this.getCountry("croatia")}>Croatia</Button>
            </div>
            <div >
              <Cards ></Cards>
            </div>
            <div className="my-5 px-5 mx-auto"  style={{width: '200px'},{heigth: '250px'}}>
              <img className="img-fluid" src={this.state.flag}/>
              <div>{this.state.name}</div>
              <div>{this.state.capital}</div>
              <div>{this.state.population} habitants</div>
              <div>{this.state.region}</div>
            </div>
          </div>
          
          
          
      </div>
    );
  }
}

export default App;