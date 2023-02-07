import { getReviewsById } from 'api/MovieDbApi';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Massage } from './Reviews.styled'


function Reviews() {
  const { filmId } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    getReviewsById(filmId).then((data) => {
      setData(data.results);
    })
    
  }, [filmId]);
  
  return (
    <>
       { data.length === 0 && <Massage>There is no reviews</Massage>}
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