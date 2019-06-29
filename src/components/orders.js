import React from 'react';

import PropTypes from 'prop-types';
import orderShapes from '../helpers/prop-types/order-shape';

import OrderRow from './order-row';


class Orders extends React.Component {
  static propTypes = {
    orders: PropTypes.arrayOf(orderShapes.orderShape).isRequired,
    deleteOrder: PropTypes.func.isRequired,
  }

  render() {
    const orderComponents = this.props.orders.map(order => (
      <OrderRow key={order.id} order={order} deleteOrder={this.props.deleteOrder}/>
    ));
    return (
      <div className="Orders col-4">
        <h2>Orders</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Order Name</th>
              <th scope="col">Date</th>
              <th scope="col"># Fish</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {orderComponents}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Orders;
