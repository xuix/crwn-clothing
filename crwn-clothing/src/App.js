//import logo from './logo.svg';
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import SignInAndSignupPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = { currentUser: null };
  }

  unsubscribFromAuth = null;

  componentDidMount() {
    this.unsubscribFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // this.setState({ currentUser: user });
      //console.log("###### user =", user);

      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        console.log("returned userref= ", userRef);
  
        userRef.onSnapshot((snapShot) => {
          console.log("snap shot data= ", snapShot.data());
  
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          },()=>{console.log("this.state= ", this.state);
        });
        });
      }
      
      else {

        this.setState({currentUser:userAuth})
      }


     
  }
    )}
  componentWillUnmount() {
    this.unsubscribFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signin" component={SignInAndSignupPage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
