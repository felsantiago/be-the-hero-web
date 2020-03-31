import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;

  h1 {
    margin-top: 80px;
    margin-bottom: 24px;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 20px;
    margin-left: 24px;
    font-weight: 500;
    color: ${({ theme }) =>
      theme.title === 'Dark' ? `${'#dcdce6'}` : `${'#41414d'}`};
  }

  img {
    height: 64px;
  }

  a {
    width: 260px;
    margin-left: auto;
    margin-top: 0;
  }

  button {
    height: 60px;
    width: 60px;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.quarterly};
    background: transparent;
    margin-left: 16px;
    transition: border-color 0.2s;

    &:hover {
      background: ${({ theme }) => theme.colors.secundary};
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
  list-style: none;

  li {
    background: ${({ theme }) => lighten(0.1, theme.colors.secundary)};
    padding: 24px;
    border-radius: 8px;
    position: relative;

    button {
      background: transparent;
      position: absolute;
      right: 24px;
      top: 24px;
      border: 0;

      &:hover {
        opacity: 0.8;
      }
    }

    strong {
      display: block;
      margin-bottom: 16px;
      color: ${({ theme }) => theme.colors.text};
    }

    p + strong {
      margin-top: 32px;
    }

    p {
      color: ${({ theme }) => theme.colors.tertiary};
      line-height: 21px;
      font-size: 16px;
    }
  }
`;
