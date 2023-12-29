import React, { Component } from 'react';
import './random-planet.css';

import { SwapiServise } from '../../services/swapi-service';
import { MyLoader } from '../../loader/MyLoader';
import { PlanetComponent } from './PlanetComponent';
import { ErrorComponent } from './ErrorComponent';

export class RandomPlanet extends Component {
  swapiService = new SwapiServise();

  state = {
    planet: {},
    isLoading: true,
    error: false,
  };

  componentDidMount() {
    this.updatePlanet();
    this.timerFunc = setInterval(this.updatePlanet, 7000);
  }

  onPlanetLoaded = (planet) => {
    this.setState({ planet, isLoading: false });
  };

  onError = (err) => {
    this.setState({ error: true, isLoading: false });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25) + 2;
    this.swapiService.getPlanet(id).then(this.onPlanetLoaded).catch(this.onError);
  };

  render() {
    const { isLoading, error, planet } = this.state;
    const hasData = !(error || isLoading);

    const componentLoader = isLoading ? <MyLoader /> : null;
    const componentPlanet = hasData ? <PlanetComponent {...planet} /> : null;
    const componentError = error ? <ErrorComponent /> : null;
    return (
      <div className="random-planet">
        {componentLoader}
        {componentPlanet}
        {componentError}
      </div>
    );
  }
}
