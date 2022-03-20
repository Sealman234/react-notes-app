import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdSearch } from 'react-icons/md';
import styled from 'styled-components';

import { noteActions } from '../../store/note-slice';

const SearchBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: rgb(233, 233, 233);
  border-radius: 0.625rem;
  padding: 0 0.625rem;
  margin-right: 1rem;

  input {
    width: 100%;
    background: transparent;
    border: none;
    padding: 10px 0;
    font-size: 16px;

    &:focus {
      outline: none;
    }
  }
`;

const SearchIcon = styled(MdSearch)`
  margin: 8px;
`;

const Search = () => {
  const dispatch = useDispatch();
  const searchInput = useSelector((state) => state.note.searchInput);

  const noteSearchHandler = (event) => {
    dispatch(noteActions.SEARCHING(event.target.value));
  };

  return (
    <SearchBar>
      <SearchIcon size="1.6rem" title="Search" />
      <input
        type="text"
        placeholder="Search..."
        value={searchInput}
        onChange={noteSearchHandler}
      />
    </SearchBar>
  );
};

export default Search;
