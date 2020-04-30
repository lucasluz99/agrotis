import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  margin-top: 20px;
  height: 70vh;
  background: #fff;

  form {
    display: flex;
    flex-wrap: wrap;

    .form-wrapper {
      width: 100%;
      display: flex;
      padding: 20px;
      > div {
        display: flex;
        flex-direction: column;
        width: 70%;

        p {
          color: #999;
          font-size: 22px;
        }
        input {
          border: 0;
          border-bottom: 1px solid #999;
          margin-top: 5px;
          font-size: 22px;
        }
        span {
          text-align: right;
        }
        h2 {
          font-size: 16px;
        }
      }

      > div:first-child {
        width: 30%;
        margin-right: 30px;
      }
    }
  }
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
