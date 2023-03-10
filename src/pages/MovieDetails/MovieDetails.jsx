import { getFilmById } from "../../api/MovieDbApi";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Container, Wrapper, Img, Info, StyledLink, Button, SubMenu ,ButtonBack, ErrorMessage} from './MovieDetails.styled';
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import getImageUrl from "helpers/getImageUrl";
import Spinner from "components/Spinner/Spinner";

const MovieDetails = () => {
  const { filmId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  useEffect(() => {
    setIsLoading(true);
    setError('');
    getFilmById(filmId).then((data) => {
      if (!data) {
        setError('Nothing found');
      }
      setData(data);
    }).catch((error) => {
      setError('Ops...try again latter');
    }).finally(() => {
      setIsLoading(false);
    })
  }, [filmId])

  const getGenres = (genres) => {
    return genres.map((item) => item.name).join(', ');
  }

  return (
    <>
      <StyledLink to={backLinkHref}><ButtonBack>Back</ButtonBack></StyledLink>
      {isLoading && <Spinner />}
      {error && <ErrorMessage>{ error }</ErrorMessage>}
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
              <li><StyledLink to="cast" state={{from: backLinkHref}}><Button>Cast</Button></StyledLink></li>
              <li><StyledLink to="reviews" state={{from: backLinkHref}}><Button>Reviews</Button></StyledLink></li>
            </SubMenu>
          </Wrapper>
        </Container>
      )}
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  )
};

export default MovieDetails;


