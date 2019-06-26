import React from 'react';

import fishData from '../helpers/data/fish-data';

import Fish from './fish';

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
    const fishComponents = this.state.fishes.map(fish => (
      <Fish key={fish.id} fish={fish}/>
    ));
    return (
      <div className="Inventory col-4">
        <h2>Inventory</h2>
        <ul className="fishes pl-0">
          {fishComponents}
        </ul>
      </div>
    );
  }
}

export default Inventory;
