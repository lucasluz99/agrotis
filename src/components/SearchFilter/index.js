import React, { useState, memo } from 'react';

import Icons from './icons';
import { Container } from './styles';

function SearchFilter({
  filter,
  icon,
  placeholder = '',
  iconColor = '',
  setIsFilter,
}) {
  function toFilter(value) {
    setIsFilter(value !== '');
    filter(value);
  }

  const Icon = Icons[icon];
  return (
    <Container>
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => toFilter(e.target.value)}
      />
      <Icon size={30} color={iconColor} />
    </Container>
  );
}

export default SearchFilter;
