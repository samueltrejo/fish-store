import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import ordersData from '../helpers/data/orders-data';
import fishData from '../helpers/data/fish-data';

import Inventory from './inventory';
import NewOrder from './new-order';
import Orders from './orders';

class Home extends React.Component {
  state = {
    orders: [],
    fishes: [],
    fishOrder: {},
  }

  getOrders = () => {
    ordersData.getMyOrders(firebase.auth().currentUser.uid)
      .then(orders => this.setState({ orders }))
      .catch(error => console.error(error));
  };

  getFishes = () => {
    fishData.getFishes()
      .then(fishes => this.setState({ fishes }))
      .catch(error => console.error(error));
  }

  componentDidMount() {
    this.getOrders();
    this.getFishes();
  }

  deleteOrder = (orderId) => {
    ordersData.deleteOrder(orderId)
      .then(() => this.getOrders())
      .catch(error => console.error(error));
  }

  addFishToOrder = (fishId) => {
    const fishOrderCopy = { ...this.state.fishOrder };
    fishOrderCopy[fishId] = fishOrderCopy[fishId] + 1 || 1;
    this.setState({ fishOrder: fishOrderCopy });
  }

  render() {
    const { fishes, orders, fishOrder } = this.state;
    return (
      <div className="Home row">
        <Inventory fishes={fishes} addFishToOrder={this.addFishToOrder}/>
        <NewOrder fishes={fishes} fishOrder={fishOrder} />
        <Orders orders={orders} deleteOrder={this.deleteOrder} />
      </div>
    );
  }
}

export default Home;
