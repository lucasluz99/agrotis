import React, { useState, memo } from 'react';

import Icons from './icons';
import { Container } from './styles';

function SearchFilter({
  data,
  filter,
  icon,
  placeholder = '',
  iconColor = '',
}) {
  const [value, setValue] = useState('');

  const Icon = Icons[icon];
  return (
    <Container>
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
      />
      <Icon size={30} color={iconColor} />
    </Container>
  );
}

export default memo(SearchFilter);
