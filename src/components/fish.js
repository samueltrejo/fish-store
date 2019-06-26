import React from 'react';

import format from '../helpers/format';

import fishShape from '../helpers/prop-types/fish-shapes';

class Fish extends React.Component {
  static propTypes = {
    fish: fishShape.fishShape,
  }

  render() {
    const { fish } = this.props;

    // eslint-disable-next-line
    const image = require(`${fish.image}`);
    const isAvailable = fish.status === 'available';
    return (
      <li className="Fish">
        <img src={image} alt={fish.name} />
        <h3 className="name">
          {fish.name}
          <span className="price">{format.formatPrice(fish.price)}</span>
        </h3>
        <p>{fish.desc}</p>
        <button
          disabled={!isAvailable}
        >
          {isAvailable ? 'Add To Order' : 'Sold Out!'}
        </button>
      </li>
    );
  }
}

export default Fish;
