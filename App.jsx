import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import MainPage from './MainPage.jsx';
import AdminPage from './AdminPage.jsx';

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/admin" component={AdminPage} />
        </Switch>
      </HashRouter>
    );
  }
}

// TODO: Add PropTypes

export default App;
