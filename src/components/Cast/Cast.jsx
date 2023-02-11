import { getCastById } from 'api/MovieDbApi';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Img, ActorList, Actor, } from "./Cast.styled";
import getImageUrl from 'helpers/getImageUrl';
import Spinner from 'components/Spinner/Spinner';
import toast, { Toaster } from 'react-hot-toast';

function Cast() {
  const { filmId } = useParams();
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getCastById(filmId).then((data) => {
      setData(data.cast);
    }).catch((e) => {
       toast.error('Ops...try again latter')
    }).finally(() => {
      setIsLoading(false)
    })
  }, [filmId])
  
  if (isLoading) {
    return <Spinner/>
  }

  return (
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
      <Toaster position="top-right"/>
    </ActorList>
  );
}

export default Cast;