import React from 'react'; 


class Box extends React.Component {
    //2ème méthode : on déclare ma fonction en dehors de render
    // slider(){
    //     if(this.props.name !== water){
    //         return <input type="range" min={this.props.min}  max={this.props.max} value={this.props.value} onchange={this.props.onChange}></input>
    //     }
    // }
    render(){
        const {name, color, icon, value, unit} = this.props;
       if(this.props.name !== "water"){
        return(
            <div className=" box col-sm-3 col-6">
                <span className="material-icons" style={{fontSize: 100, color :color}}>{icon}</span>
                <p> {value} {unit}</p>
                <input type="range" min={""}  max={""} value={""} oninput={""}></input>

            </div>
        )}else{
            return(
                <div className=" box col-sm-3 col-6">
                    <span className="material-icons" style={{fontSize: 100, color :color}}>{icon}</span>
                    <p> {value} {unit}</p>
                </div>
            )
            
        }
      
     }
    }




export default Box;