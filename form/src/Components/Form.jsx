import React from "react";

class Form extends React.Component{
    constructor(){
        super();
        this.state={
            value: ""
        }
        // this.validEmail = this.validEmail.bind(this);
        // this.validPassword = this.validPassword.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);
    };

    
    //email valid
    //si email contient des lettres+chiffres+caractères spéciaux === valide
    //sinon email non valide
    //validEmail(event){
    //    this.setState({
    //
    //    })
    //}


    //password valid
    //validPassword(event){
    //    this.setState({

    //    })
    //}


    // onSubmit(event){
    //     console.log("event", event);
    //     this.setState({

    //     })
    // }

    // validate(){

    //     let input = this.state.input;
    //     let errors = {};
    //     let isValid = true;
  

  
    //     if (!input["email"]) {
    //       isValid = false;
    //       errors["email"] = "Please enter your email Address.";
    //     }
  
    //     if (typeof input["email"] !== "undefined") {
    //       var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
  
    //       if (!pattern.test(input["email"])) {
    //         isValid = false;
    //         errors["email"] = "Please enter valid email address.";
    //       }
    //     }
    
    //     if (!input["password"]) {
    //       isValid = false;
    //       errors["password"] = "Invalid password.";
    //     }
  
    //     this.setState({
    //       errors: errors
    //     });
  
    //     return isValid;
    // }
  
       








    render(){
        return(
        //je créé un forulaire simple
        //un label pour le mail et le password
        //un input pour rentrer des informations
        //une case à cocher pour enregistrer les infos du formulaire
        //un bouton submit pour envoyer les infos
        <form className='form-group'>
            <label>Email address</label>
            <input className="form-control" value="email" type="email" placeholder="Enter email..."/>
            <label>Password</label>
            <input className="form-control" value="password" type="password" placeholder="Enter password..."/>
            <input type="submit" value="submit" className="btn btn-primary"/>
        </form>
        )
    }
}

export default Form;