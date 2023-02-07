import styled from 'styled-components';
import searchIcon from '../../assets/search.svg';

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

export const SearchFormButton = styled.button`
  margin-left: -30px;
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 0;
  background: none;
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
  }
`;
export const Input = styled.input`
  display: inline-block;
  font-size: 20px;
  width: 300px;
  padding-left: 10px;
  padding-right: 35px;
  border-radius: 5px;
  outline: none;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
