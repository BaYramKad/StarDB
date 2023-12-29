import React, { Component } from 'react';

import './item-list.css';
import { SwapiServise } from '../../services/swapi-service';

export class ItemList extends Component {
  swapiService = new SwapiServise();

  state = {
    peopleList: [],
  };

  componentDidMount() {
    this.swapiService.getAllPeople().then((peopleList) => {
      this.setState({
        peopleList,
      });
    });
  }
  renderItems = (list) => {
    return list.map((item) => {
      return (
        <li className="person-item" key={item.id} onClick={() => this.props.onSelectItem(item.id)}>
          {item.name}
        </li>
      );
    });
  };

  render() {
    const { peopleList } = this.state;
    const items = this.renderItems(peopleList);
    return <ul className="list">{items}</ul>;
  }
}
