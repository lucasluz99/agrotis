import React, { useState } from 'react';

import { MdSearch } from 'react-icons/md';
import { FaPlus } from 'react-icons/fa';

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
  const [docs, setDocs] = useState([
    {
      name: 'Andamento',
      description: 'Quando o contrato está em andamento e pode ser alterado',
    },
    {
      name: 'Finalizado',
      description: 'Quando o contrato foi atendido e não pode ser modificado',
    },
  ]);
  const [isFilter, setIsFilter] = useState(false);

  const [filteredDocs, setFilteredDocs] = useState([]);

  function filterDocs(value) {
    setFilteredDocs(
      docs.filter((doc) => doc.name.toLowerCase().includes(value.toLowerCase()))
    );
  }

  return (
    <Wrapper>
      <Container>
        <Header>
          <p>Situações do documento</p>
          <SearchFilter
            filter={filterDocs}
            setIsFilter={setIsFilter}
            icon="search"
            placeholder="Pesquise por nome"
            iconColor="#222"
          />
        </Header>
        <List>
          {!isFilter
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
            : filteredDocs.map((doc, i) => (
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
        <AddNewDoc title="Adicionar novo status" to="/new-document">
          <FaPlus size={40} color="#fff" />
        </AddNewDoc>
      </Container>
    </Wrapper>
  );
}
