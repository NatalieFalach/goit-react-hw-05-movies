import { FilmItem, StyledLink, Poster, Container } from './FilmList.styled';
import PropTypes from 'prop-types';
import getImageUrl from 'helpers/getImageUrl';
import { useLocation } from 'react-router-dom';
const FilmList = ({films}) => {
  const location = useLocation();
  
  return (
    <Container>
      {films.map((film, index) => {
        return (
          <FilmItem key={film.id}>
            <StyledLink to={`/movies/${film.id}`} state={{ from: location }}>
              <Poster src={getImageUrl(film.poster_path)} alt={film.title} /> 
              {film.title || film.name}
            </StyledLink>
          </FilmItem  >
        )
      })}
    </Container>
  )
}

export default FilmList;

FilmList.propTypes = {
  films:PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string
  })).isRequired,
}