import React from 'react';
import './App.css';
import Box from './components/Box'
import './styles/global.css'

const tempMin = -20; 
const tempMax = 40;
const heartMin = 80; 
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;


export class App extends React.Component {

  constructor(){
    super();
    this.state={
      water : 0,
      heart :120,
      temperature : -10,
      steps: 3000
    };

    this.onHeartChange= this.onHeartChange.bind(this);
  }
  //Créez la méthode onHeartChange qui reçoit un paramètre value
  //La méthode change le state de `this.state.heart` avec la valeur `value`
  onHeartChange(value){
    this.setState({
       heart: value
    });
  }




  render() {
  
    return (
      

      <div className="container-fluid">
          <h1 className="text-primary">Hello !</h1>
          <div className="row">
              <p>Heart : {heartMin}</p>
              <p>Température : {tempMin}</p>
              <p>Steps: {stepsMin}</p>
          </div>
          <div className="row">
                  {/* water */}
              <Box name={"water"} icon ={ "local_drink"} color={"#3A85FF"} value={"1.5"} unit={"L"}/>,

              {/* steps */}
              <Box name={"steps"} icon ={"directions_walk"} color={"black"} value ={"3000"} unit ={"steps"} min={stepMin} max={steptMax} onChange={this.onHeartChange}/>,


              {/* Envoyez les props suivantes au composant Box correspondant à Heart :
              //- `min` avec la valeur `heartMin`
              // `max` avec la valeur `heartMax`
              -// `onChange` avec la reference de `onHeartChange`
              - //Modifiez l’attribut `heart` pour passer le state `heart`, à la place de `heartMin` */}
              {/* heart */}
              <Box name={"heart"} icon={"favorite"} color={"red"} value= {"120"} unit= {"bpm"} min={heartMin} max={heartMax} onChange={this.onHeartChange}/>,

              {/* temperature */}
              <Box name={"temperature"} icon ={"wb_sunny"} color={"yellow"} value= {"-10"}  unit={ "°C"} min={temptMin} max={tempMax} onChange={this.onHeartChange}/>,

          </div>
        
      </div>
      
     
      

    );
  }
}



export default App;