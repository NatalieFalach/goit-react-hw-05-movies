import { useState } from "react";
import { useMount } from 'react-use';
import PropTypes from 'prop-types';
import {SearchForm, SearchFormButton, Input} from './Search.styled';
import { useSearchParams } from "react-router-dom";

function Search({onSearch}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState(() => {
    return searchParams.get('search') ? searchParams.get('search') : ''
  });

  useMount(() => {
    if (value) {
      onSearch(value);
    }
  })

  const onChange = (e) => {
    setValue(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (value) {
      setSearchParams({search: value});
      onSearch(value);      
      setValue('');
    }
  }

  return (
    <div>
      <SearchForm onSubmit={onSubmit}>
        <Input type="text"
          value={value}
          onChange={onChange}
        />
        <SearchFormButton type="submit"></SearchFormButton>
      </SearchForm>
    </div>
  );
}

export default Search;

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
  search: PropTypes.string
};