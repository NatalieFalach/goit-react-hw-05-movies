import { getMovieBySearch } from '../../api/MovieDbApi';
import FilmList from 'components/FilmList/FilmList';
import Search from 'components/Search/Search';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import Spinner from 'components/Spinner/Spinner';

function Movies() {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search') ?? '';

  useEffect(() => {
    if (!search) {
      return;
    }
    setIsLoading(true);
    getMovieBySearch(search).then((data) => {
      if (!data.results.length) {
        toast.error('Nothing found')
      }
      setFilms(data.results)
    }).catch((error) => {
      console.log(error.message)
    }).finally(() => {
      setIsLoading(false);
    })
  }, [search])

  const onSearch = (search) => {   
    setSearchParams({ search });
  }

  return (
    <>
      <Search onSearch={onSearch} searchValue={search} />
      {isLoading && <Spinner/>}
      <FilmList films={films} />
      <Toaster position="top-right"/>
    </>
  );
}

export default Movies;