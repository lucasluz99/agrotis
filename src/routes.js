import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import NewDoc from './pages/NewDoc';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="new-document" component={NewDoc}/>
    </Switch>
  );
}
