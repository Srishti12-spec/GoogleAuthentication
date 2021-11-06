import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SignIn from "./SignIn"
import {firebase} from "./Firebase/firebase"

function App() {
  const [isSignedIn, setIsSignedIn] = useState(true);
  firebase.auth().onAuthStateChanged( user => {
    if (user) {
      return setIsSignedIn(true);
    }
    setIsSignedIn(false);
  })
  if (isSignedIn === true) {
    const signOut = () => {
      firebase.auth().signOut();
    };
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button
            className="App-link"
            onClick={signOut}>
              Sign Out
          </button>
        </header>
      </div>
    );
  } else {
    return (
      <Router>
        <Switch>
          <Route path="/" component={SignIn} />
        </Switch>
      </Router>
    );
  }
}

export default App;


/**
 * return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
 */