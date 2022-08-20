import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TableContext from './TableContext';

function TableProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const contextValue = {
    planets,
    setPlanets,
  };

  async function fetchPlanetList() {
    try {
      const link = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const retorno = await fetch(link);
      const tratando = await retorno.json();
      const { results } = tratando;
      console.log(results);
      return results;
    } catch (error) {
      return console.log(error);
    }
  }

  useEffect(() => {
    const getPlanets = async () => setPlanets(await fetchPlanetList());
    getPlanets();
  }, []);

  return (
    <TableContext.Provider value={ contextValue }>
      {children}
    </TableContext.Provider>
  );
}

TableProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TableProvider;
