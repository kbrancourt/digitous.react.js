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

  onHeartChange(value){
    this.setState({
       heartMin: "value"
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
              <Box icon ={ "local_drink"} color={"#3A85FF"} value={"1.5"} unit={"L"}/>,

              {/* steps */}
              <Box icon ={"directions_walk"} color={"black"} value ={"3000"} unit ={"steps"}/>,

              {/* heart */}
              <Box icon={"favorite"} color={"red"} value= {"120"} unit= {"bpm"} />,

              {/* temperature */}
              <Box icon ={"wb_sunny"} color={"yellow"} value= {"-10"}  unit={ "°C"}/>,

              {/* heart */}
              <Box min={"heartMin"} max={"heartMax"} onChange={"onHeartChange"} />,
          </div>
        
      </div>
      
     
      

    );
  }
}



export default App;