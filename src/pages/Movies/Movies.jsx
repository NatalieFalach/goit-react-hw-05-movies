import { getMovieBySearch } from '../../api/MovieDbApi';
import FilmList from 'components/FilmList/FilmList';
import Search from 'components/Search/Search';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

function Movies() {
  const [films, setFilms] = useState([]);
 
  const onSearch = (search) => {    
    getMovieBySearch(search).then((data) => {
      if (!data.results.length) {
        toast.error('Nothing found')
      }
      setFilms(data.results)
    })
  }

  return (
    <>
      <Search onSearch={onSearch} />
      <FilmList films={films} />
      <Toaster position="top-right"/>
    </>
  );
}

export default Movies;