export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function signInSuccess(token, ong) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, ong },
  };
}

export function signUpRequest(name, email, password, whatsapp, city, uf) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { name, email, password, whatsapp, city, uf },
  };
}

export function signFailure() {
  return { type: '@auth/SIGN_FAILURE' };
}

export function signOut() {
  return { type: '@auth/SIGN_OUT' };
}
