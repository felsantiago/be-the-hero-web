import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';
import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', { email, password });

    const { token, ong } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, ong));
    history.push('/profile');
  } catch (err) {
    toast.error('Falha na autenticação, verifique seus dados. 😐');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password, whatsapp, city, uf } = payload;

    yield call(api.post, 'ongs', {
      name,
      email,
      password,
      whatsapp,
      city,
      uf,
    });

    history.push('/');
  } catch (err) {
    if (err.response.status === 400) {
      toast.error(err.response.data.error);
    } else {
      toast.error('Falha no cadastro, verifique seus dados. 😐');
    }
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  // caso o usuário não tenha nada salvo
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  // utilizando a action do redux-persist para pegar o token salvo
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
