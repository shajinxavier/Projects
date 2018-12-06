import React, { Component } from 'react';
import { Form, Button, Message } from "semantic-ui-react";
import PropTypes from "prop-types";
import { ReCaptcha } from 'react-recaptcha-google';
import Validator from "validator";
import InlineError from "../messages/InlineError";
import { Redirect } from 'react-router-dom'
import { Route } from "react-router-dom";
import '../css/App.css';

import {
	withRouter
} from 'react-router-dom';

class LoginForm extends Component {
	
	 constructor(props){
    super(props);

    this.state = {
      fields: {},
      errors: {}
    }
  }


  
  
  handleValidation(){
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name
    if(!fields["name"]){
      formIsValid = false;
      errors["name"] = "Cannot be empty";
    }

    if(typeof fields["name"] !== "undefined"){
      if(!fields["name"].match(/^[a-zA-Z]+$/)){
        formIsValid = false;
        errors["name"] = "Only letters";
      }      	
    }

    //Email
    if(!fields["email"]){
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }

    if(typeof fields["email"] !== "undefined"){
      let lastAtPos = fields["email"].lastIndexOf('@');
      let lastDotPos = fields["email"].lastIndexOf('.');

      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }



    this.setState({errors: errors});
    return formIsValid;
  }

  contactSubmit(e){

	
    if(this.handleValidation()){
     // alert("Form submitted");
	  //
	this.props.history.push('/CustomerHome');
    }else{
     // alert("Form has errors.")
	  e.preventDefault();
    }
	    

  }

  handleChange(field, e){    		
    let fields = this.state.fields;
    fields[field] = e.target.value;        
    this.setState({fields});
  }


/*submitForm (e) {
		e.preventDefault()
		this.props.history.push('/CustomerHome');
	}
*/
	render() {
		return (
			<div>
			
				
				<form name="contactform" className="contactform" onSubmit= {this.contactSubmit.bind(this)}> 
         
           
			 <label htmlFor="userid">UserID</label>
              <input refs="email" type="email" size="30" placeholder="example@example.com" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}/>
              <span className="error">{this.state.errors["email"]}</span>
              <br/>
			 <label htmlFor="password">Password</label>
              <input ref="name" type="password" size="30" placeholder="password" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]}/>
              <span className="error">{this.state.errors["name"]}</span>
              <br/>    
             
			  <Button primary>Login</Button>
            
        
          
        </form>
		
		
			</div>
		)

	}
	
	
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default withRouter(LoginForm);