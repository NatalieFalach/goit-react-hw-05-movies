import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
`;

export const Wrapper = styled.div`
  display: block;
  margin-left: 30px;
`;

export const Img = styled.img`
  width: 300px;
  height: 400px;
`;

export const Info = styled.p`
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const SubMenu = styled.ul`
  display: flex;
  gap: 30px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  margin-top: 15px;
  &.active button {
    background: orangered;
    color: white;
  }
`;

export const Button = styled.button`
  padding: 10px 0;
  width: 150px;
  background: lightgray;
  outline: none;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    color: white;
    background: orangered;
  }
`;

export const ButtonBack = styled.button`
  padding: 8px 0;
  margin-bottom: 5px;
  width: 100px;
  background: lightgray;
  outline: none;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    color: white;
    background: orangered;
  }
`;

export const ErrorMessage = styled.div`
  margin: 20px auto;
  width: 180px;
  font-weight: 700;
  color: orangered;
`;
