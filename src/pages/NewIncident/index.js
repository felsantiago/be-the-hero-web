import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Form, Input, Textarea } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { Container, Content, Section, FormIncident } from './styles';
import history from '../../services/history';

import api from '../../services/api';

import logoImg from '~/assets/logo.svg';

export default function NewIncident() {
  async function handleNewIncident({ title, description, value }) {
    try {
      await api.post('incidents', {
        title,
        description,
        value,
      });

      history.push('/profile');
    } catch (err) {
      toast.error('Erro ao cadastrar caso, tente novamente.');
    }
  }

  return (
    <Container>
      <Content>
        <Section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </Link>
        </Section>

        <FormIncident>
          <Form onSubmit={handleNewIncident}>
            <Input name="title" placeholder="Título do caso" />
            <Textarea name="description" placeholder="Descrição" />
            <Input name="value" placeholder="Valor em reais" />

            <button className="button" type="submit">
              {/* {loading ? 'Carregando...' : 'Cadastrar'} */}
              Cadastrar
            </button>
          </Form>
        </FormIncident>
      </Content>
    </Container>
  );
}
