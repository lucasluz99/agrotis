import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { FaPlus } from 'react-icons/fa';

import SearchFilter from '../../components/SearchFilter';

import Wrapper from '../../components/Wrapper';

import { Container, Header, List, Item, LoadMore, AddNewDoc } from './styles';

export default function Home() {
  const [docsAmount, setDocsAmount] = useState(2);

  const totalLength = useSelector(
    (state) =>
      state.docs.docs.filter((doc) =>
        doc.name.toLowerCase().includes(state.docs.filter.toLowerCase())
      ).length
  );
  const docs = useSelector(
    (state) =>
      state.docs.docs
        .filter((doc) =>
          doc.name.toLowerCase().includes(state.docs.filter.toLowerCase())
        )
        .slice(0, docsAmount),
    docsAmount
  );

  return (
    <Wrapper>
      <Container>
        <Header>
          <p>Situações do documento</p>
          <SearchFilter
            icon="search"
            placeholder="Pesquise por nome"
            iconColor="#222"
          />
        </Header>
        <List>
          {docs.map((doc, i) => (
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
        {totalLength !== docsAmount && (
          <LoadMore>
            <button onClick={() => setDocsAmount(docsAmount + 2)} type="button">
              Carregar mais
            </button>
            <p>{`${docs.length} - ${totalLength}`}</p>
          </LoadMore>
        )}

        <AddNewDoc
          onClick={() => {}}
          title="Adicionar novo status"
          to="/new-document"
        >
          <FaPlus size={40} color="#fff" />
        </AddNewDoc>
      </Container>
    </Wrapper>
  );
}
