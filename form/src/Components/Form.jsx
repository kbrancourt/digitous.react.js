import React from "react";

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={
            emailValid: false,
            passwordValid: false,
            password: '',
            email:'',
            rememberMe:false

        }
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    onChangeEmail(event){
      const newEmail= event.target.value;
      const reg = /^\S+@\S+\.\S+$/g;
      const isMail= reg.test(newEmail)

      this.setState({
        email: event.target.value,
        emailValid: isMail
      })
    }

    
    onChangePassword(event){
      let newPasswordValid = false;
      if(event.target.value.length>=6){
        newPasswordValid = true
      }else{
        newPasswordValid = false
      }
      this.setState({
        password: event.target.value,
        passwordValid : newPasswordValid
      })
    }
    
    handleSubmit(event) {
        event.preventDefault();
          this.setState({
            submitClick : true
          })
        }

     
    
    render(){
      // si le clickSubmit est validé
      if(this.state.submitClick === true){
        return (<div>SUBMIT SUCCESS</div>)
      }
      // si le clickSubmit est non validé
        return(
        //je créé un formulaire simple
        //un label pour le mail et le password
        //un input pour rentrer des informations
        //une case à cocher pour enregistrer les infos du formulaire
        //un bouton submit pour envoyer les infos
        <form className='form-group needs-validation container-fluid'>
          <div className="row">
            <div className="col-8"> 
            <label htmlFor="email">Email address</label>
            <input name="email" className={this.state.emailValid ? 'form-control is-valid' : 'form-control is-invalid'}  type="email" required onChange={this.onChangeEmail} placeholder="Enter email..." />
            </div>
          </div>
            
          <div className="row">
            <div className="col-8">
            <label htmlFor="password">Password</label>
            <input
            type="password"
            name="password"
            placeholder="enter password ..."
            className={this.state.passwordValid ? 'form-control is-valid' : 'form-control is-invalid'}
            required
            onChange={this.onChangePassword}/>

            </div>
          </div>
           
          <div className="row">
            <div className="col-8">
              <input type="Checkbox"  className="remember"/>
              <label> Remember me</label>
            </div>
          </div> 

          <div className="col-8">
            <input type="submit" disabled={!this.state.emailValid || !this.state.passwordValid} value="Connexion" className="btn btn-primary" onClick={this.handleSubmit}/>
          </div> 
            
        </form>
        )
    }
}

export default Form;