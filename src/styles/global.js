import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }


  body {
    background #eee;
  }
  body,input,button {
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
  }



  button {
    cursor: pointer;
  }
`;
