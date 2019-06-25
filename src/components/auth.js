import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

class Auth extends React.Component {
  loginClickEvent = (event) => {
    event.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  render() {
    return (
      <div className="Auth">
        <h2>Auth</h2>
        <button className="btn btn-dark" onClick={this.loginClickEvent}>Google Login</button>
      </div>
    );
  }
}

export default Auth;
