import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch } from 'react-redux';
import { signUpRequest } from '../../store/modules/auth/actions';

import logoImg from '~/assets/logo.svg';

import {
  Container,
  Content,
  Section,
  FormRegister,
  InputGroup,
} from './styles';

export default function Register() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password, whatsapp, city, uf }) {
    dispatch(signUpRequest(name, email, password, whatsapp, city, uf));
  }

  return (
    <Container>
      <Content>
        <Section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastro</h1>
          <p>
            Faça seu Cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para o logon
          </Link>
        </Section>

        <FormRegister>
          <Form onSubmit={handleSubmit}>
            <Input name="name" placeholder="Nome da ONG" />

            <Input name="email" type="email" placeholder="E-mail" />

            <Input name="password" type="password" placeholder="senha" />

            <Input name="whatsapp" placeholder="WhatsApp" />

            <InputGroup>
              <Input name="city" placeholder="Cidade" />

              <Input name="uf" placeholder="UF" style={{ width: 80 }} />
            </InputGroup>

            <button className="button" type="submit">
              Cadastrar
            </button>
          </Form>
        </FormRegister>
      </Content>
    </Container>
  );
}
