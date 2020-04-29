import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  margin-top: 20px;
  height: 70vh;
  background: #fff;
`;

export const Header = styled.header`
  display: flex;
  padding: 10px 20px;
  width: 100%;
  background-color: #145e43;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 22px;
    color: #fff;
  }

  div {
    display: flex;
    align-items: center;
    svg {
      margin-right: 5px;
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-between;
  a,
  button {
    padding: 10px 15px;
    transition: background 200ms linear;
    &:hover {
      background: ${darken(0.05, '#145e43')};
    }
  }
  a {
    font-size: 22px;
    text-decoration: none;
    color: #fff;
  }
  button {
    font-size: 22px;
    background: none;
    border: 0;
    color: #fff;
  }
`;
