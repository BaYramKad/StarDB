import React from 'react';

export const PlanetComponent = ({ id, name, population, rotationPeriod, diameter }) => {
  return (
    <>
      <div>
        <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
      </div>
      <div className="random-planet__info">
        <h1>{name}</h1>

        <ul>
          <li className="item-group-info">
            <span>Population: </span>
            <span>{population}</span>
          </li>
          <li className="item-group-info">
            <span>Rotation Period: </span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="item-group-info">
            <span>Diameter: </span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </>
  );
};
