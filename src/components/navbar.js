import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import PropTypes from 'prop-types';

class Navbar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool.isRequired,
  }

  logoutClickEvent = (event) => {
    event.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { authed } = this.props;
    return (
      <div className="Navbar">
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <span className="navbar-brand typewriter">Fishstore</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                {authed ? (
                  <button id="navToBio" className="btn btn-dark" onClick={this.logoutClickEvent}>Logout</button>
                ) : ('')}
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
