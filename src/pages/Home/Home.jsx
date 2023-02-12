import { getTrending } from '../../api/MovieDbApi';
import FilmList from '../../components/FilmList/FilmList';
import { useState } from 'react';
import { Trending } from './Home.styled';
import toast, { Toaster } from 'react-hot-toast';
import { useInView } from 'react-intersection-observer';
import Spinner from 'components/Spinner/Spinner';

function Home() {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const { ref } = useInView({
    "rootMargin": "0px 0px",
    onChange: (inView) => {
      if (inView && hasMore) {
        setIsLoading(true); 
        getTrending(page).then(({ results, total_pages }) => {
          if (total_pages === page) {
            setHasMore(false);
            return;
          }
          setFilms((prev) => [...prev, ...results]);
          setPage((prev) => prev + 1);
        })
        .catch((e) => {
          toast.error('Oops, try again later')
        }).finally(() => {
          setIsLoading(false);
        })
      }
    }
  });

  return (
    <>
      <Trending>Trending Today</Trending>
      {isLoading && <Spinner/>}
      <FilmList films={films} />
      <div style={{height: '1px'}} ref={ref}>
        {isLoading && films.length > 0 && <Spinner/>}
      </div>
      <Toaster position="top-right"/>
    </>
  );
}

export default Home;