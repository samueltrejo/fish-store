import React from 'react';

import PropTypes from 'prop-types';
import fishShapes from '../helpers/prop-types/fish-shapes';

import Fish from './fish';

class Inventory extends React.Component {
  static propTypes = {
    fishes: PropTypes.arrayOf(fishShapes.fishShape),
  }

  render() {
    const fishComponents = this.props.fishes.map(fish => (
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
