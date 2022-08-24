async function fetchPlanetList() {
  try {
    const link = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const retorno = await fetch(link);
    const tratando = await retorno.json();
    const { results } = tratando;
    return results;
  } catch (error) {
    return console.log(error);
  }
}

export default fetchPlanetList;
