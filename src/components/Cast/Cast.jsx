import { getCastById } from 'api/MovieDbApi';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Img, ActorList, Actor, Massage} from "./Cast.styled";
import getImageUrl from 'helpers/getImageUrl';
import Spinner from 'components/Spinner/Spinner';

function Cast() {
  const { filmId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getCastById(filmId).then((data) => {
      if (!data.cast.length) {
        setError('There is no actors')
      }
      setData(data.cast);
    }).catch((e) => {
      setError('Oops... try again later');
    }).finally(() => {
      setIsLoading(false)
    })
  }, [filmId])
  
  if (isLoading) {
    return <Spinner/>
  }

  return (
    <>
      {isLoading && <Spinner />}
      {error && <Massage>{error}</Massage>}
      <ActorList>
        {data && data.map((item) => {
          return (
            <Actor key={item.cast_id}>
              <Img src={getImageUrl(item.profile_path)} alt={item.name} /> 
              <p> {item.name}</p>
              <p>Character: {item.character}</p>
            </Actor>
          )
        })}
      </ActorList>
    </>
  );
}

export default Cast;