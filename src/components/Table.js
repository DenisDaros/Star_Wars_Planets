import React, { useContext, useState } from 'react';
import TableContext from '../context/TableContext';

function Table() {
  let { planets } = useContext(TableContext);
  const { setPlanets } = useContext(TableContext);
  // console.log(planets);
  const [name, setName] = useState('');
  const [colums, setColums] = useState('population');
  const [number, setNumber] = useState(0);
  const [operador, setOperador] = useState('maior que');

  const handleChange = () => {
    const teste = planets.filter((i) => i.name.toLowerCase()
      .includes(name.toLowerCase()));
    return teste;
  };

  planets = handleChange();

  const filterNumber = () => {
    // let infoFilter = '';
    if (operador === 'maior que') {
      return setPlanets(planets.filter((i) => Number(i[colums]) > number));
      // console.log(planets);
      // console.log(infoFilter);
      // console.log(colums);
      // console.log(Number[colums]);
    }
    if (operador === 'menor que') {
      return setPlanets(planets.filter((i) => Number(i[colums]) < number));
    }
    if (operador === 'igual a') {
      return setPlanets(planets.filter((i) => i[colums] === number));
    }
  };

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
      <div>
        <select
          name="colums"
          type="select"
          value={ colums }
          onChange={ (ev) => setColums(ev.target.value) }
          data-testid="column-filter"
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select
          name="operador"
          type="select"
          value={ operador }
          onChange={ (ev) => setOperador(ev.target.value) }
          data-testid="comparison-filter"
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          data-testid="value-filter"
          name="name"
          type="number"
          value={ number }
          onChange={ (ev) => setNumber(ev.target.value) }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => filterNumber() }
        >
          Filtrar
        </button>
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
