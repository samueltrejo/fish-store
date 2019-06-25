import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import fbConnection from '../helpers/data/connection';

import Navbar from '../components/navbar';
import Auth from '../components/auth';
import Home from '../components/home';

fbConnection();

class Fishstore extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;
    const loadComponent = () => {
      if (authed) {
        return <Home />;
      }
      return <Auth />;
    };
    return (
      <div className="text-center">
        <Navbar authed={authed} />
        {loadComponent()}
      </div>
    );
  }
}

export default Fishstore;
