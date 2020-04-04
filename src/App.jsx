import React from 'react';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { Provider } from 'react-redux';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import store from 'store/store';
import TodoContainer from 'containers/todoContainer/TodoContainer';
import GlobalStyle from './style/GlobalStyle';
import { Loading, Toast } from './components';

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/page/1" />
          </Route>
          <Route exact path="/page/:page" component={TodoContainer} />
          <Route path="*">
            <Redirect to="/page/1" />
          </Route>
        </Switch>
      </Router>
      <Toast />
      <Loading />
    </Provider>
  );
};

export default App;
