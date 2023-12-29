import React, { Component } from 'react';

import { Details } from '../details/Details';
import { Header } from '../header/Header';
import { ItemList } from '../item-list/ItemList';
import { RandomPlanet } from '../random-planet/RandomPlanet';
import './app.css';

export class App extends Component {
  state = {
    itemId: 1,
  };
  onSelectItem = (id) => {
    this.setState({ itemId: id });
  };
  render() {
    const { itemId } = this.state;
    return (
      <div className="app">
        <Header />
        <RandomPlanet />
        <div className="details-info">
          <ItemList onSelectItem={this.onSelectItem} />
          <Details itemId={itemId} />
        </div>
      </div>
    );
  }
}
