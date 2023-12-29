import React, { Component } from 'react';

import './details.css';
import { SwapiServise } from '../../services/swapi-service';

export class Details extends Component {
  swapiService = new SwapiServise();

  state = {
    itemDitails: {},
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem = () => {
    const { itemId } = this.props;
    this.swapiService.getPerson(itemId).then((itemDitails) => {
      this.setState({ itemDitails });
    });
  };

  render() {
    const { name, id, gender, birthYear, eyeColor } = this.state.itemDitails;

    return (
      <div className="details">
        <div>
          <img
            className="details-img"
            src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          />
        </div>
        <div className="random-planet__info">
          <h1>{name}</h1>

          <ul>
            <li className="item-group-info">
              <span>Gender: </span>
              <span>{gender}</span>
            </li>
            <li className="item-group-info">
              <span>birth year: </span>
              <span>{birthYear}</span>
            </li>
            <li className="item-group-info">
              <span>Color eye: </span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
