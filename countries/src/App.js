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

    this.getCountry =this.getCountry.bind(this);
    
  }

   componentDidMount(){
    this.getCountrytCountry("france");
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
        <h1 className="text-center">Countries</h1>
          <div className="row">
            <div className="col-4">
              <Button type="button" isSelected={this.state.isSelected===true?"form-control btn btn-primary" : "form-control btn btn-light"} onClick={() => this.getCountry("france")}>France</Button>
            </div>
            <div className="col-4">
              <Button type="button" isSelected={this.state.isSelected===true?"form-control btn btn-primary" : "form-control btn btn-light"} onClick={() => this.getCountry("brazil")}>Brazil</Button>
            </div>
            <div className="col-4">
              <Button type="button" isSelected={this.state.isSelected===true?"form-control btn btn-primary" : "form-control btn btn-light"} onClick={() => this.getCountry("croatia")}>Croatia</Button>
            </div>
            <div >
              {/* <Cards {...this.state}/> autre méthode */}
              <Cards
                Flag= {this.state.flag}
                Name={this.state.name}
                Capital={this.props.capital}
                Population={this.props.population}
                Region= {this.props.region}
              />
            </div>   
          </div>
          
      </div>
    );
  }
}

export default App;