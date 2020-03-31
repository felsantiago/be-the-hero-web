import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { Form, Input } from '@rocketseat/unform';

import { Container, Section, FormSignIn } from './styles';

import logoImg from '~/assets/logo.svg';
import heroesImg from '~/assets/heroes.png';

import { signInRequest } from '~/store/modules/auth/actions';

export default function Logon() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <Section>
        <img src={logoImg} alt="Be The Hero" />

        <FormSignIn>
          <Form onSubmit={handleSubmit}>
            <h1>Faça seu logon</h1>

            <Input name="email" type="email" placeholder="E-mail" />
            <Input name="password" type="password" placeholder="Senha" />

            <button className="button" type="submit">
              {loading ? 'Carregando...' : 'Entrar'}
            </button>

            <Link className="back-link" to="/register">
              <FiLogIn size={16} color="#E02041" />
              Não tenho cadastro
            </Link>
          </Form>
        </FormSignIn>
      </Section>

      <img src={heroesImg} alt="Heroes" />
    </Container>
  );
}
