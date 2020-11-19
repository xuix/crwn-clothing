//import logo from './logo.svg';
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/header/header.component";
import SignInAndSignupPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { Component } from "react";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

class App extends Component {
  unsubscribFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // this.setState({ currentUser: user });
      //console.log("###### user =", user);

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        console.log("returned userref= ", userRef);

        userRef.onSnapshot((snapShot) => {
          console.log("snap shot data= ", snapShot.data());

          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.unsubscribFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignupPage />
              )
            }
          />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({ currentUser: user.currentUser });

const mapDispathToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispathToProps)(App);
