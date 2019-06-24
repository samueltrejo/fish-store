import React from 'react';

import Auth from './components/auth';
import Home from './components/home';

class Fishstore extends React.Component {
  render() {
    return (
      <div className="text-center">
        <Auth />
        <Home />
      </div>
    );
  }
}

export default Fishstore;
