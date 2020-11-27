import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle,auth,createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    const {email,password} = this.state;
    event.preventDefault();
    try {
      const{user} = await auth.signInWithEmailAndPassword(email,password);
      this.setState({  email: "", password: "" });      
  } catch (error) {
      alert('Error creating user with email and password',error)
      
  }
};





   

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password or Google Account</span>
        <form onSubmit={this.handleSubmit}>
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
          <div className="buttons">
            <CustomButton>SIGN IN</CustomButton>
            <CustomButton isGoogleSignIn={true} onClick={signInWithGoogle}>
              SIGN IN WITH GOOGLE
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;
