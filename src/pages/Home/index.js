import React from 'react';

import { MdSearch } from 'react-icons/md';
import { FaPlus } from 'react-icons/fa';

import NewDoc from '../NewDoc';
import Wrapper from '../../components/Wrapper';

import {
  Container,
  Header,
  SearchBar,
  List,
  Item,
  LoadMore,
  AddNewDoc,
} from './styles';

export default function Home() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <p>Situações do documento</p>
          <SearchBar>
            <input type="text" placeholder="Pesquise por nome" />
            <MdSearch size={30} />
          </SearchBar>
        </Header>
        <List>
          <Item>
            <div>
              <h1>Nome:</h1>
              <p>Andamento</p>
            </div>

            <div>
              <h1>Descrição:</h1>
              <p>Quando o contrato está em andamento e pode ser alterado</p>
            </div>
          </Item>
          <Item>
            <div>
              <h1>Nome:</h1>
              <p>Andamento</p>
            </div>

            <div>
              <h1>Descrição:</h1>
              <p>Quando o contrato está em andamento e pode ser alterado</p>
            </div>
          </Item>
        </List>
        <LoadMore>
          <button type="button">Carregar mais</button>
          <p>(2 - 10)</p>
        </LoadMore>
        <AddNewDoc title="Adicionar novo status" to={NewDoc}>
          <FaPlus size={40} color="#fff" />
        </AddNewDoc>
      </Container>
    </Wrapper>
  );
}
