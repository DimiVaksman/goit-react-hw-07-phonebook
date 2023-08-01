import React from 'react';
import PropTypes from 'prop-types';
import { InputFilter, TextFilter } from './FilterContacts.styled';
import { setFilter } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';

export const FilterContacts = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <InputFilter>
      <label htmlFor="">
        {' '}
        <TextFilter>Filter</TextFilter>
        <input type="text" value={filter} id="" onChange={event => dispatch(setFilter(event.target.value.trim()))} />
      </label>
    </InputFilter>
  );
};

FilterContacts.propType = {
  onChange: PropTypes.func.isRequired,
};
