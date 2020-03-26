import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import store from 'store/store';
import TodoContainer from 'containers/TodoContainer';
import GlobalStyle from './style/GlobalStyle';

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/:page" component={TodoContainer} />
          <Route component={TodoContainer} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
