import React from 'react';
import moment from 'moment';

import PropTypes from 'prop-types';

import orderShapes from '../helpers/prop-types/order-shape';

class OrderRow extends React.Component {
  static propTypes = {
    order: orderShapes.orderShape,
    deleteOrder: PropTypes.func.isRequired,
  }

  deleteOrderEvent = (event) => {
    const { order, deleteOrder } = this.props;
    event.preventDefault();
    deleteOrder(order.id);
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
        <td><button className="btn btn-dark" onClick={this.deleteOrderEvent}>x</button></td>
      </tr>
    );
  }
}

export default OrderRow;
