import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  padding: 96px;
  background: ${({ theme }) => theme.colors.secundary};
  box-shadow: 0 0 100px ${({ theme }) => darken(0.1, theme.colors.secundary)};
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Section = styled.section`
  width: 100%;
  max-width: 380px;

  a {
    color: ${({ theme }) =>
      theme.title === 'Dark' ? `${'#dcdce6'}` : `${'#41414d'}`};
  }

  h1 {
    margin: 60px 0 32px;
    font-size: 32px;
  }

  p {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.tertiary};
    line-height: 32px;
  }
`;

export const FormRegister = styled.form`
  width: 100%;
  max-width: 450px;

  input {
    margin-top: 8px;
  }
`;

export const InputGroup = styled.div`
  display: flex;

  input + input {
    margin-left: 8px;
  }
`;
