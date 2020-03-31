import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { lighten } from 'polished';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    transition: 0.5s;
  }

  body {
    font: 400 14px Roboto, sans-serif;
    background: ${({ theme }) => theme.colors.secundary};
    -webkit-font-smoothing: antialiased;
  }

  a, h1{
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }

  input,
  button,
  textarea {
    font: 400 18px Roboto, sans-serif;
    background: ${({ theme }) => lighten(0.06, theme.colors.secundary)};
  }

  button {
    cursor: pointer;
  }

  form input {
    width: 100%;
    height: 60px;
    color: ${({ theme }) =>
      theme.title === 'Dark' ? `${'#dcdce6'}` : `${'#333'}`};
    border: 1px solid
      ${({ theme }) =>
        theme.title === 'Dark' ? `${'#252526'}` : `${'#dcdce6'}`};
    border-radius: 8px;
    padding: 0 24px;
  }

  form textarea {
    width: 100%;
    resize: vertical;
    min-height: 140px;
    color: ${({ theme }) =>
      theme.title === 'Dark' ? `${'#dcdce6'}` : `${'#333'}`};
    border: 1px solid
      ${({ theme }) =>
        theme.title === 'Dark' ? `${'#252526'}` : `${'#dcdce6'}`};
    border-radius: 8px;
    padding: 16px 24px;
    line-height: 24px;
  }

  .button {
    width: 100%;
    height: 60px;
    background: #e02041;
    border: 0;
    border-radius: 8px;
    color: #fff;
    font-weight: 700;
    margin-top: 16px;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    line-height: 60px;
    transition: filter 0.2s;
  }

  .button:hover {
    filter: brightness(90%);
  }

  .back-link {
    display: flex;
    align-items: center;
    margin-top: 40px;
    color: #41414d;
    font-size: 18px;
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.2s;
  }

  .back-link svg {
    margin-right: 8px;
  }

  .back-link:hover {
    opacity: 0.8;
  }
`;
