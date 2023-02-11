import { getTrending } from '../../api/MovieDbApi';
import FilmList from '../../components/FilmList/FilmList';
import { useState } from 'react';
import { Trending } from './Home.styled';
import toast, { Toaster } from 'react-hot-toast';
import { useInView } from 'react-intersection-observer';
import Spinner from 'components/Spinner/Spinner';
import { useEffect } from 'react';

function Home() {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const { ref } = useInView({
    "rootMargin": "400px 0px",
    onChange: (inView) => {
      if (inView) {
        console.log('View is true increment page, ', page)
        setPage((prev) => prev + 1)
        // getTrending(page).then(({ results }) => {
        //   setFilms((prev) => [...prev, ...results]);  
        // }).catch((e) => {
        //   toast.error('Oops, try again later')
        // })
      }
    }
  });

  useEffect(() => {
    setIsLoading(true); 
    getTrending(page).then(({ results }) => {
      setFilms((prev) => [...prev, ...results]);
    })
    .catch((e) => {
      toast.error('Oops, try again later')
    }).finally(() => {
      setIsLoading(false);
    })
  }, [page])

  return (
    <>
      <Trending>Trending Today</Trending>
      {isLoading && <Spinner/>}
      <FilmList films={films} />
      <div ref={ref}></div>
      <Toaster position="top-right"/>
    </>
  );
}

export default Home;