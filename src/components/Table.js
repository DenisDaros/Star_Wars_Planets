import React, { useContext, useState } from 'react';
import TableContext from '../context/TableContext';

function Table() {
  let { planets } = useContext(TableContext);
  const { setPlanets } = useContext(TableContext);
  const [name, setName] = useState('');
  const [colums, setColums] = useState('population');
  const [number, setNumber] = useState(0);
  const [operador, setOperador] = useState('maior que');
  const [optionColums] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const handleChange = () => {
    const teste = planets.filter((i) => i.name.toLowerCase()
      .includes(name.toLowerCase()));
    return teste;
  };

  planets = handleChange();

  const filterNumber = () => {
    if (operador === 'maior que') {
      return setPlanets(planets.filter((i) => Number(i[colums]) > number));
    }
    if (operador === 'menor que') {
      return setPlanets(planets.filter((i) => Number(i[colums]) < number));
    }
    if (operador === 'igual a') {
      return setPlanets(planets.filter((i) => i[colums] === number));
    }
  };

  const removeFilter = (option) => {
    const index = optionColums.indexOf(option);
    console.log(index);
    optionColums.splice(index, 1);
    setColums(optionColums[0]);
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
          {optionColums.map((i) => (<option key={ i }>{i}</option>))}
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
          onClick={ () => {
            filterNumber();
            removeFilter(colums);
          } }
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
