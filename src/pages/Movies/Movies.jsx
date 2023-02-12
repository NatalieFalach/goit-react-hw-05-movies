import { getMovieBySearch } from '../../api/MovieDbApi';
import FilmList from 'components/FilmList/FilmList';
import Search from 'components/Search/Search';
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Spinner from 'components/Spinner/Spinner';
import { useInView } from 'react-intersection-observer';
import { ErrorMessage } from './Movies.styled';

function Movies() {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState('');
  const search = searchParams.get('search') ?? '';

  const { ref } = useInView({
    "rootMargin": "0px 0px",
    onChange: (inView) => {      
      if (inView && search && hasMore && !error) {
        setIsLoading(true);
        getMovieBySearch(search, page).then((data) => {
          if (data.total_pages === page) {
            setHasMore(false);
            return;
          }
          setFilms((prev) => [...prev, ...data.results])
          setPage((prev) => prev + 1);
        }).catch((error) => {
          setError('Ops...try again latter')
        }).finally(() => {
          setIsLoading(false);
        })
      }
    }
  });

  const onSearch = (search) => {
    setError('');
    setSearchParams({ search });
    setIsLoading(true);
    setPage(1);
    getMovieBySearch(search).then((data) => {
      if (!data.results.length) {
        setError('Nothing found');
      }
      setFilms(data.results)
      setPage((prev) => prev + 1);
    }).catch((error) => {
      setError('Ops...try again latter');
    }).finally(() => {
      setIsLoading(false);
    })
  }

  return (
    <>
      <Search onSearch={onSearch} searchValue={search} />
      {isLoading && <Spinner />}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <FilmList films={films} />
      <div style={{height: '1px'}} ref={ref}>
        {isLoading && films.length > 0 && <Spinner/>}
      </div>
    </>
  );
}

export default Movies;