import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  margin-top: 20px;
  position: relative;
  height: 80vh;
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
`;

export const SearchBar = styled.div`
  position: relative;

  input {
    border: 0;
    padding-left: 40px;
    color: #222;
    font-size: 16px;
    height: 40px;
    width: 400px;
  }

  svg {
    position: absolute;
    top: 100%;
    right: 100%;
    transform: translateX(110%) translateY(-110%);
  }
`;

export const List = styled.ul`
  padding: 20px;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #818387;
  border-radius: 4px;
  margin: 20px 0;
  padding: 20px;
  div {
    display: flex;
    align-items: center;
    max-width: 600px;
    font-size: 15px;

    h1 {
      margin-right: 5px;
      font-size: 15px;
      color: #818387;
    }
    p {
      color: #222;
    }
  }
`;

export const LoadMore = styled.div`
  text-align: center;
  margin-bottom: 50px;
  button {
    border: 0;
    color: #145e43;
    text-decoration: underline;
    margin-bottom: 5px;
  }
  p {
    color: #222;
    font-size: 15px;
  }
`;

export const AddNewDoc = styled(Link)`
  position: absolute;
  top: 100%;
  transform: translateY(-50%);
  left: 92%;
  display: block;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  background-color: #b45f06;
  display: flex;
  justify-content: center;
  align-items: center;
`;
