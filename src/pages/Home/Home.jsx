import { getTrending } from '../../api/MovieDbApi';
import FilmList from '../../components/FilmList/FilmList';
import { useState } from 'react';
import { Trending } from './Home.styled';
import toast, { Toaster } from 'react-hot-toast';
import { useInView } from 'react-intersection-observer';
import { useMount } from 'react-use';

function Home() {
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(1);
  const { ref } = useInView({
    "rootMargin": "400px 0px",
    onChange: (inView) => {
      if (inView) {
        setPage((prev) => prev + 1)
        getTrending(page).then(({ results }) => {
          setFilms((prev) => [...prev, ...results]);  
        }).catch((e) => {
          toast.error('Oops something went wrong, try again later')
        })
      }
    }
  });

  useMount(() => {
   getTrending(page).then(({ results }) => {
      setFilms((results));
    }).catch((e) => {
      toast.error('Oops something went wrong, try again later')
    }).finally(() => {
    
    })
  })

  return (
    <>
      <Trending>Trending Today</Trending>
      <FilmList films={films} />
      <div ref={ref}></div>
      <Toaster position="top-right"/>
    </>
  );
}

export default Home;