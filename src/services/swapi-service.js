export class SwapiServise {
  _defaultUrl = 'https://swapi.dev/api';
  async getResourse(url) {
    const data = await fetch(`${this._defaultUrl}${url}`);

    if (!data.ok) {
      throw new Error(`Could not fetch ${url}, received ${data.status}`);
    }
    return await data.json();
  }

  async getAllPeople() {
    const { results } = await this.getResourse('/people/');
    return results.map(this._transformPerson);
  }
  async getPerson(id) {
    const person = await this.getResourse(`/people/${id}`);
    return this._transformPerson(person);
  }

  async getAllStarships() {
    const { results } = await this.getResourse('/starships/');
    return results;
  }
  getStarship(id) {
    return this.getResourse(`/starships/${id}`);
  }
  async getAllPlanets() {
    const { results } = await this.getResourse('/planets/');
    return results;
  }
  async getPlanet(id) {
    const planet = await this.getResourse(`/planets/${id}`);

    return this._transformPlanet(planet);
  }

  _extractId(item) {
    const regExpId = /\/([0-9]*)\/$/;
    return item.url.match(regExpId)[1];
  }

  _transformPlanet = (planet) => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      diameter: planet.diameter,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
    };
  };
  _transformStarship = (starship) => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      birthYear: starship.birth_year,
      eyeColor: starship.eye_color,
      gender: starship.gender,
    };
  };
  _transformPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
      gender: person.gender,
    };
  };
}
