import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import ong from './ong/sagas';

export default function* rootSaga() {
  return yield all([auth, ong]);
}
