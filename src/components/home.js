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

  removeFromOrder = (fishId) => {
    const fishOrderCopy = { ...this.state.fishOrder };
    delete fishOrderCopy[fishId];
    this.setState({ fishOrder: fishOrderCopy });
  }

  saveNewOrder = (orderName) => {
    const newOrder = {
      fishes: { ...this.state.fishOrder },
      name: orderName,
      dateTime: Date.now(),
      uid: firebase.auth().currentUser.uid,
    };
    ordersData.postOrder(newOrder)
      .then(() => {
        this.setState({ fishOrder: {} });
        this.getOrders();
      })
      .catch(error => console.error(error));
  }

  render() {
    const { fishes, orders, fishOrder } = this.state;
    return (
      <div className="Home row">
        <Inventory fishes={fishes} addFishToOrder={this.addFishToOrder}/>
        <NewOrder
          fishes={fishes}
          fishOrder={fishOrder}
          removeFromOrder={this.removeFromOrder}
          saveNewOrder={this.saveNewOrder}
        />
        <Orders orders={orders} deleteOrder={this.deleteOrder} />
      </div>
    );
  }
}

export default Home;
