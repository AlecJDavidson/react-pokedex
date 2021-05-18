import React, { useEffect, useState } from 'react'; // Uses the state hook inside of the application
import PokemonList from './PokemonList';
import Pagination from './Pagination';
import axios from 'axios';

function App() {

  const apiUrl = "https://pokeapi.co/api/v2/pokemon";
  //     current  next
  const [pokemon, setPokemon] = useState([]); // There is no inital state. Returns two variables. Will be destructuring the array. Empty array by default.
  // Variable to track state and paginate
  const [currentPageUrl, setCurrentPageUrl] = useState(apiUrl);
  const [nextPageUrl, setNextPageUrl] = useState(apiUrl);
  const [prevPageUrl, setPrevPageUrl] = useState(apiUrl);
  const [loading, setLoading] = useState(true); // So the user doesn't just see a white page while loading

  // useEffect to make something happen and then re-render the application when it does happen.
  // Set to re-render with currentPageUrl value.
  useEffect(() => {
    setLoading(true); // Sets loading to true while re-rendering.
    let cancel; // Defaults to nothing for cancel request.
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => { // Returns the data from the api.
      setLoading(false); // Sets loading to false after render.
      setNextPageUrl(res.data.next); // Returns the next pokemon from the api.
      setPrevPageUrl(res.data.previous); // Returns the previous pokemon from the api.
      setPokemon(res.data.results.map(p => p.name));
    });

    return () => {
      cancel(); // Cancels the previous request when a new request is submitted.
    } // Function that gets called when useEffect is called. 
  }, [currentPageUrl]);

  const goToNextPage = () => {
    setCurrentPageUrl(nextPageUrl);
  };

  const goToPrevPage = () => {
    setCurrentPageUrl(prevPageUrl);
  };

  if (loading) return "Loading..."



  return (
    // Storing both elements inside of a fragment ensures that both will be returned.
    <>
      <PokemonList pokemon={pokemon} />
      <Pagination
        goToNextPage={nextPageUrl ? goToNextPage : null}
        goToPrevPage={prevPageUrl ? goToPrevPage : null} />
    </>
  );
}

export default App;
