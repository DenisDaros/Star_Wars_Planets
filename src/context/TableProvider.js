import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TableContext from './TableContext';
import fetchPlanetList from '../helpers/API';

function TableProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  const contextValue = {
    planets,
    setPlanets,
  };

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
