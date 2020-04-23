import React, { useState } from 'react';

import { MdSearch } from 'react-icons/md';
import { FaPlus } from 'react-icons/fa';

import NewDoc from '../NewDoc';

import SearchFilter from '../../components/SearchFilter';

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
  const [filter, setFilter] = useState('');
  const [docs, setDocs] = useState([
    {
      name: 'Andamento',
      description: 'Quando o contrata está em andamento e pode ser alterado',
    },
  ]);
  const [filterDocs, setFilterDocs] = useState([]);
  return (
    <Wrapper>
      <Container>
        <Header>
          <p>Situações do documento</p>
          <SearchFilter
            filter={filter}
            icon="search"
            placeholder="Pesquise por texto"
            iconColor="#222"
          />
        </Header>
        <List>
          {filter === ''
            ? docs.map((doc, i) => (
                <Item key={i}>
                  <div>
                    <h1>Nome:</h1>
                    <p>{doc.name}</p>
                  </div>

                  <div>
                    <h1>Descrição:</h1>
                    <p>{doc.description}</p>
                  </div>
                </Item>
              ))
            : filterDocs.map((doc, i) => (
                <Item key={i}>
                  <div>
                    <h1>Nome:</h1>
                    <p>{doc.name}</p>
                  </div>

                  <div>
                    <h1>Descrição:</h1>
                    <p>{doc.description}</p>
                  </div>
                </Item>
              ))}
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
