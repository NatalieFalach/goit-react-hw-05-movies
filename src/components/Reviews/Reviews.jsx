import { getReviewsById } from 'api/MovieDbApi';
import Spinner from 'components/Spinner/Spinner';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Massage } from './Reviews.styled'

function Reviews() {
  const { filmId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    getReviewsById(filmId).then((data) => {
      if (!data.results.length) {
        setError('There is no reviews');
      }
      setData(data.results);
    }).catch((e) => {
      setError('Oops... try again later');
    }).finally(() => {
      setIsLoading(false);
    })
    
  }, [filmId]);
  
  return (
    <>
      {isLoading && <Spinner />}
      {error && <Massage>{error}</Massage>}
      <ul>
        { data && data.map((item) => {
          return (
            <li key={item.id}>
              <b>Author: {item.author}</b>
              <p>{item.content}</p>
            </li>
          )
        })}
      </ul>
    </>
  );
}

export default Reviews;