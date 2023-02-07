import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FilmItem = styled.li`
  margin-bottom: 20px;
  width: 200px;
  text-decoration: none;
  text-align: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: orangered;
  }
`;
export const Poster = styled.img`
  display: block;
  margin-bottom: 15px;
  width: 200px;
  height: 300px;
`;
export const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
`;
