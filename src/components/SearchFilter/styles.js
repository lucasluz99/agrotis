import styled from 'styled-components';

export const Container = styled.div`
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
