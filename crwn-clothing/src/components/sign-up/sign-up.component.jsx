import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up.styles.scss";

class SignUp extends Component {
  constructor(props) {
    super(props);


    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    const { displayName, email, password, confirmPassword } = this.state;

    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords do not match") ;
      return;
    }
    try {
        const{user} = await auth.createUserWithEmailAndPassword(email,password);
        createUserProfileDocument(user,{displayName})
        
    } catch (error) {
        console.log('Error creating user with email and password',error)
        
    }
    this.setState({ displayName: "", email: "", password: "" ,confirmPassword:''});
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {

    return (
      <div className="sign-in">
        <h2>Create a new account</h2>
        <span>Sign Up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={this.state.displayName}
            label="Display Name"
            required
            handleChange={this.handleChange}
          />
          <FormInput
            type="text"
            name="email"
            value={this.state.email}
            label="email"
            required
            handleChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            label="password"
            required
            handleChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={this.state.confirmPassword}
            label="Confirm Password"
            required
            handleChange={this.handleChange}
          />
          <div className="buttons">
            <CustomButton type="submit">SIGN UP</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
export default SignUp;
