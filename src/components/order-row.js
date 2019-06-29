import React from 'react';
import moment from 'moment';

import orderShapes from '../helpers/prop-types/order-shape';

class OrderRow extends React.Component {
  static propTypes = {
    order: orderShapes.orderShape,
  }

  render() {
    const { order } = this.props;
    // reduce(currentTerm, previousValue)
    const numFish = Object.values(order.fishes).reduce((a, b) => a + b);
    return (
      <tr>
        <th>{order.name}</th>
        <td>{moment(order.dateTime).format('LLL')}</td>
        <td>{numFish}</td>
        <td><button className="btn btn-dark">x</button></td>
      </tr>
    );
  }
}

export default OrderRow;
