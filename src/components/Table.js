import React, { useContext, useState } from 'react';
import TableContext from '../context/TableContext';

function Table() {
  let { planets } = useContext(TableContext);

  const [name, setName] = useState('');

  const handleChange = () => {
    const teste = planets.filter((i) => i.name.toLowerCase()
      .includes(name.toLowerCase()));
    return teste;
  };
  planets = handleChange();

  return (
    <div>
      <div>
        <input
          data-testid="name-filter"
          name="name"
          type="text"
          value={ name }
          onChange={ (event) => { setName(event.target.value); handleChange(); } }
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        {planets.map((i, a) => (
          <tbody key={ a }>
            <tr>
              <th>{i.name}</th>
              <th>{i.rotation_period}</th>
              <th>{i.orbital_period}</th>
              <th>{i.diameter}</th>
              <th>{i.climate}</th>
              <th>{i.gravity}</th>
              <th>{i.terrain}</th>
              <th>{i.surface_water}</th>
              <th>{i.population}</th>
              <th>{i.films}</th>
              <th>{i.created}</th>
              <th>{i.edited}</th>
              <th>{i.url}</th>
            </tr>
          </tbody>))}
      </table>
    </div>
  );
}

export default Table;
