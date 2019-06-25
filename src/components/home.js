import React from 'react';

import Inventory from './inventory';
import NewOrder from './new-order';
import Orders from './orders';

class Home extends React.Component {
  render() {
    return (
      <div className="Home row">
        <Inventory />
        <NewOrder />
        <Orders />
      </div>
    );
  }
}

export default Home;
