import React from 'react';

import { IoIosArrowBack as BackIcon } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Wrapper from '../../components/Wrapper';
import { addDoc } from '../../store/modules/docs/actions';
import { Container, Header, Actions } from './styles';

export default function NewDoc() {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Container>
        <Header>
          <div>
            <Link to="/">
              <BackIcon size={30} color="#fff" />
            </Link>
            <p>Situação</p>
          </div>
          <Actions>
            <Link to="/">Voltar</Link>
            <button type="button" onClick={() => dispatch(addDoc())}>
              Salvar
            </button>
          </Actions>
        </Header>
      </Container>
    </Wrapper>
  );
}
