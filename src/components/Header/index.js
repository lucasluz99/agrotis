import React from 'react';

import Agrotis from '../../assets/images/agrotis.png';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <img src={Agrotis} alt="Logotipo da Agrotis" />
    </Container>
  );
}
