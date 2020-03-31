import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

import { signOut } from '../../store/modules/auth/actions';
import api from '~/services/api';
import logoImg from '~/assets/logo.svg';

import { Container, Header, Ul } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.ong.profile);
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    api.get('profile').then((res) => {
      setIncidents(res.data);
    });
  }, []);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`);

      setIncidents(incidents.filter((incident) => incident.id !== id));
    } catch (err) {
      toast.error('Erro ao deletar caso, tente novamente.');
    }
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Bem vinda, {profile.name}</span>

        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>
        <button onClick={handleSignOut} type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </Header>

      <h1>Casos cadastrados</h1>

      <Ul>
        {incidents.map((incident) => (
          <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{incident.description}</p>

            <strong>VALOR:</strong>
            <p>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(incident.value)}
            </p>

            <button
              onClick={() => handleDeleteIncident(incident.id)}
              type="button"
            >
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </Ul>
    </Container>
  );
}
