import { getCastById } from 'api/MovieDbApi';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Img, ActorList, Actor, } from "./Cast.styled";
import getImageUrl from 'helpers/getImageUrl';

function Cast() {
  const { filmId } = useParams();
  const [data, setData] = useState([]);

   useEffect(() => {
    getCastById(filmId).then((data) => {
      setData(data.cast);
    })
   }, [filmId])

  return (
    <ActorList>
      { data && data.map((item, index) => {
        return (
          <Actor key={index}>
            <Img src={getImageUrl(item.profile_path)} alt={item.name} /> 
            <p> {item.name}</p>
            <p>Character: {item.character}</p>
          </Actor>
        )
      })}
    </ActorList>
  );
}

export default Cast;