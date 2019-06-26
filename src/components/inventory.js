import React from 'react';

import fishData from '../helpers/data/fish-data';

class Inventory extends React.Component {
  state = {
    fishes: [],
  }

  componentDidMount() {
    fishData.getFishes()
      .then(fishes => this.setState({ fishes }))
      .catch(error => console.error(error));
  }

  render() {
    return (
      <div className="Inventory col-4">
        <h3>Inventory</h3>
      </div>
    );
  }
}

export default Inventory;
