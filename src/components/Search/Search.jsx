import { useState } from "react";
import PropTypes from 'prop-types';
import { SearchForm, SearchFormButton, Input } from './Search.styled';
import toast, { Toaster } from 'react-hot-toast';

function Search({onSearch, searchValue}) {
  const [value, setValue] = useState(() => {
    return searchValue ?? '';
  });

  const onChange = (e) => {
    setValue(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) {
      toast.error('Empty search query')
      return;
    }
    onSearch(value);      
    setValue('');
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
      <Toaster position="top-right"/>
    </div>
    
  );
}

export default Search;

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
  searchValue: PropTypes.string
};