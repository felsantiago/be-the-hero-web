import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Logon from '~/pages/Logon';
import Register from '~/pages/Register';
import Profile from '~/pages/Profile';
import NewIncident from '~/pages/NewIncident';
import NotFound from '../pages/404';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Logon} />
      <Route path="/register" component={Register} />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/incidents/new" component={NewIncident} isPrivate />

      <Route path="/" component={() => <NotFound />} />
    </Switch>
  );
}
