import React, { useState, memo } from 'react';
import { useDispatch } from 'react-redux';

import { filterDocs } from '../../store/modules/docs/actions';
import Icons from './icons';
import { Container } from './styles';

function SearchFilter({ icon, placeholder = '', iconColor = '' }) {
  const Icon = Icons[icon];

  const dispatch = useDispatch();

  return (
    <Container>
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => dispatch(filterDocs(e.target.value))}
      />
      <Icon size={30} color={iconColor} />
    </Container>
  );
}

export default SearchFilter;
