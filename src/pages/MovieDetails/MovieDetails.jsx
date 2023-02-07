import { getFilmById } from "../../api/MovieDbApi";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Container, Wrapper, Img, Info, StyledLink, Button, SubMenu ,ButtonBack} from './MovieDetails.styled';
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import getImageUrl from "helpers/getImageUrl";
import { useMemo } from "react";

const MovieDetails = () => {
  const { filmId } = useParams();
  const [data, setData] = useState(null);
  const location = useLocation();

  const backLinkHref = useMemo(() => {
    return location.state?.from ?? "/";
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filmId])  

  useEffect(() => {
    getFilmById(filmId).then((data) => {
     setData(data);
    })
  }, [filmId])

  const getGenres = (genres) => {
    return genres.map((item) => item.name).join(', ');
  }

  return (
    <>
      <StyledLink to={backLinkHref}><ButtonBack>Back</ButtonBack></StyledLink>
      {data && (
        <Container>
          <Img src={getImageUrl(data.poster_path)} alt={data.title} />
          <Wrapper>
            <h2>{data.title} ({new Date(data.release_date).getFullYear()})</h2>
            <Info>User Score: {Math.round(data.vote_average * 10)}%</Info>
            <h3>Overview</h3>
            <Info>{ data.overview}</Info>
            <h4>Genres</h4>
            <Info>{getGenres(data.genres)}</Info>
            <SubMenu>
              <li><StyledLink to="cast"><Button>Cast</Button></StyledLink></li>
              <li><StyledLink to="reviews"><Button>Reviews</Button></StyledLink></li>
            </SubMenu>
          </Wrapper>
        </Container>
      )}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  )
};

export default MovieDetails;


