import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MdSearch } from 'react-icons/md';
import { searchActions } from '../../store/search';

import classes from './Search.module.css';

const Search = () => {
  const dispatch = useDispatch();
  const searchInput = useSelector((state) => state.search.searchInput);

  const noteSearchHandler = (event) => {
    dispatch(searchActions.typing(event.target.value));
  };

  return (
    <div className={classes.search}>
      <MdSearch size="1.6rem" className={classes.searchIcon} title="Search" />
      <input
        type="text"
        placeholder="type to search..."
        value={searchInput}
        onChange={noteSearchHandler}
      />
    </div>
  );
};

export default Search;
